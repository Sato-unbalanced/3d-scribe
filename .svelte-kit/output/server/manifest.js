export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico"]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.BCJCfoFC.js","app":"_app/immutable/entry/app.BBXy75ee.js","imports":["_app/immutable/entry/start.BCJCfoFC.js","_app/immutable/chunks/entry.CUwJxcDf.js","_app/immutable/chunks/scheduler.Cnc7RMKr.js","_app/immutable/chunks/index.CBPrnNmD.js","_app/immutable/entry/app.BBXy75ee.js","_app/immutable/chunks/scheduler.Cnc7RMKr.js","_app/immutable/chunks/index.CWhKXlDH.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/fromDB",
				pattern: /^\/fromDB\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
