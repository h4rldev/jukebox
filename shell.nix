{pkgs ? import <nixpkgs> {}}:
with pkgs;
  mkShell {
    allowUnfree = true;
    name = "jukebox";
    packages = with pkgs; [
      just

      # frontend
      bun
      biome
      rustywind
      watchexec
      actionlint
      h2o
    ];
    shellHook = ''
      export PATH="./node_modules/.bin/:$PATH"
    '';
  }
