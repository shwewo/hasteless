				import worker, * as OTHER_EXPORTS from "/home/cute/dev/hasteless/build/worker/shim.mjs";
				import * as __MIDDLEWARE_0__ from "/nix/store/pkiq44z594vz4kd6kiqv3xr2p08jlgvh-wrangler-3.28.3/lib/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts";
				const envWrappers = [__MIDDLEWARE_0__.wrap].filter(Boolean);
				const facade = {
					...worker,
					envWrappers,
					middleware: [
						__MIDDLEWARE_0__.default,
            ...(worker.middleware ? worker.middleware : []),
					].filter(Boolean)
				}
				export * from "/home/cute/dev/hasteless/build/worker/shim.mjs";

				const maskDurableObjectDefinition = (cls) =>
					class extends cls {
						constructor(state, env) {
							let wrappedEnv = env
							for (const wrapFn of envWrappers) {
								wrappedEnv = wrapFn(wrappedEnv)
							}
							super(state, wrappedEnv);
						}
					};
				

				export default facade;