set shell := ["bash", "-c"]
set quiet := true

default:
    just --list

clean:
    rm -fr dist

dist:
    #!/usr/bin/env bash
    IMG_FILES=("")
    FILENAME=""

    IMG_FILES=$(rg --files ./assets/ -g '*.{png,jpg,jpeg,gif}')

    mkdir -p ./dist/assets

    for IMG_FILE in ${IMG_FILES[@]}; do
        FILENAME=$(basename $IMG_FILE)

        if [[ -f "./dist/assets/${FILENAME%.*}.webp" ]]; then
            continue
        fi
        magick mogrify -format webp -quality 80 -path ./dist/assets/ $IMG_FILE
    done

    bun run build

build: clean dist

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
    just build
    brave ./dist/index.html
