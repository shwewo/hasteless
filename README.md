![logo](./logo.png)


## Serverless hastebin on cloudflare workers
Demo https://hasteless.nyakawaii.workers.dev

Static files are from https://github.com/toptal/haste-server

## Deploying
1. Install Nix package manager https://nixos.org/download#download-nix
2. Enable flakes in ~/.config/nix/nix.conf, you have to add `experimental-features = nix-command flakes` in it
3. Run `nix develop --command $SHELL`
4. Login/register on Cloudflare, go to `Workers & Pages` page, select `KV`, click `Create a namespace`, name it `HASTE_POSTS`
5. Copy `HASTE_POSTS` id, open wrangler.toml file and edit `KV_ID` to your copied id
6. Run `wrangler deploy`, it should build the app and ask for authorization on Cloudflare
7. Wait before it publishes the app
8. Go to `Workers & Pages` again, your hasteless application should be running, you can check its domain via clicking it & selecting `Triggers` and there should be "Routes", which is a domain to your hasteless application 