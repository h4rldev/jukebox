set shell := ["bash", "-c"]
set quiet := true

default:
    just --list

build:
    #!/usr/bin/env bash
    IMG_FILES=("")
    FILENAME=""

    IMG_FILES=$(rg --files ./assets/ -g '*.{png,jpg,jpeg,gif}')

    for IMG_FILE in ${IMG_FILES[@]}; do
        FILENAME=$(basename $IMG_FILE)

        if [[ -f "./assets/${FILENAME%.*}.webp" ]]; then
            continue
        fi
        magick mogrify -format webp -quality 80 -path ./assets/ $IMG_FILE
    done

    bun run build

watch:
    watchexec -e ts,css,html just build

tailwind watch="true":
    #!/usr/bin/env bash

    if [[ {{ watch }} == "true" ]]; then
      tailwindcss -i ./styles/tailwind.css -o ./styles/styles.css --watch
    else
      tailwindcss -i ./styles/tailwind.css -o ./styles/styles.css
    fi

preview:
    #!/usr/bin/env bash
    TEMP=$(mktemp -d)
    echo "$TEMP"

    echo "hosts:
      "dev":
        listen:
          port: 8008
        paths:
          "/":
            file.dir: ./dist
    http2-reprioritize-blocking-assets: ON
    " > $TEMP/h2o.yml

    just build
    helium http://localhost:8008 && h2o -c $TEMP/h2o.yml
