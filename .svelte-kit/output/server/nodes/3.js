

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/fromDB/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.B7XWV76W.js","_app/immutable/chunks/scheduler.Cnc7RMKr.js","_app/immutable/chunks/index.CWhKXlDH.js","_app/immutable/chunks/public.BNX_h2-e.js"];
export const stylesheets = ["_app/immutable/assets/3.DYApvT8r.css"];
export const fonts = [];
