{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    rust-overlay.url = "github:oxalica/rust-overlay";
  };

  outputs = { self, nixpkgs, rust-overlay }:
    let
      systems = [ "x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin" ];

      forAllSystems = f: builtins.listToAttrs (map (system: {
        name = system;
        value = f system;
      }) systems);
    in {
      devShells = forAllSystems (system:
        let
          pkgs = import nixpkgs {
            inherit system;
            overlays = [ rust-overlay.overlays.default ];
          };
          toolchain = pkgs.rust-bin.fromRustupToolchainFile ./toolchain.toml;
        in {
          default = pkgs.mkShell {
            name = "hasteless";
            packages = with pkgs; [
              toolchain
              nodejs
              wrangler
            ];
            shellHook = ''
              export PATH="$PWD/.cargo/bin:$PATH"
              export CARGO_TARGET_DIR="./.cargo_target"
              export CARGO_HOME="./.cargo"
            '';
          };
        });
    };
}