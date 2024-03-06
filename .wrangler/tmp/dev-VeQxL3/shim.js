// .wrangler/tmp/bundle-YC5iF1/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// build/worker/shim.mjs
import z from "./1d35c3350c139e6fa3b5e1244566fe548a7dabac-index.wasm";
import on from "./1d35c3350c139e6fa3b5e1244566fe548a7dabac-index.wasm";
var U = Object.defineProperty;
var W = (e, t) => {
  for (var n in t)
    U(e, n, { get: t[n], enumerable: true });
};
var l = {};
W(l, { IntoUnderlyingByteSource: () => q, IntoUnderlyingSink: () => S, IntoUnderlyingSource: () => v, MinifyConfig: () => F, PipeOptions: () => L, PolishConfig: () => et, QueuingStrategy: () => C, R2Range: () => I, ReadableStreamGetReaderOptions: () => R, RequestRedirect: () => nt, __wbg_buffer_610b70c8fd30da2d: () => ze, __wbg_buffer_cf65c07de34b9a08: () => ae, __wbg_byobRequest_a3c74c3694777d1b: () => Re, __wbg_byteLength_1fef7842ca4200fa: () => De, __wbg_byteOffset_ede786cfcf88d3dd: () => Ve, __wbg_bytesliteral_efe7d360639bf32b: () => Ne, __wbg_call_9495de66fdbe016b: () => Lt, __wbg_call_95d1ea488d03e4e8: () => se, __wbg_call_96878afb7a8201ca: () => Qt, __wbg_call_99043a1e2a9e5916: () => ne, __wbg_cf_a70afe2b6e717440: () => Vt, __wbg_close_045ed342139beb7d: () => Ue, __wbg_close_a41954830b65c455: () => He, __wbg_cron_1ae5d12539c662a2: () => Et, __wbg_crypto_70a96de3b6b73dac: () => me, __wbg_done_1ebec03bbd919843: () => $t, __wbg_enqueue_3a8a8e67e44d2567: () => Je, __wbg_entries_4e1315b774245952: () => Gt, __wbg_getRandomValues_3774744e221a22ad: () => qe, __wbg_getTime_7c59072d1651a3cf: () => _e, __wbg_get_27fe3dac1c4d0224: () => Bt, __wbg_get_baf4855f9a986186: () => ce, __wbg_getwithrefkey_5e6d9547403deab8: () => Ct, __wbg_globalThis_87cbb8506fecf3a9: () => xe, __wbg_global_c85a9259e621f3db: () => ye, __wbg_headers_ab5251d2727ac41e: () => zt, __wbg_instanceof_ArrayBuffer_a69f02ee4c4f5065: () => ve, __wbg_instanceof_Error_749a7378f4439ee0: () => St, __wbg_instanceof_Uint8Array_01cebe79ca606cca: () => Se, __wbg_isArray_39d28997bf6b96b4: () => dt, __wbg_isSafeInteger_8c4789029e885159: () => gt, __wbg_iterator_55f114446221aa5a: () => wt, __wbg_length_27a2afe8ab42b09f: () => fe, __wbg_length_e498fbc24f9c1d4f: () => Rt, __wbg_log_7bb108d119bafbc1: () => Pe, __wbg_method_d1ee174c753ca2be: () => Ut, __wbg_msCrypto_adbc770ec9eca9c7: () => Me, __wbg_new0_25059e40b1c02766: () => oe, __wbg_new_15d3966e9981a196: () => We, __wbg_new_537b7341ce90bb31: () => de, __wbg_new_9d3a9ce4282a18a8: () => re, __wbg_new_b525de17f44a8943: () => mt, __wbg_new_f1c3a9c2533a55b8: () => Ht, __wbg_new_f841cc6f2098f4b5: () => At, __wbg_new_f9876326328f45ed: () => kt, __wbg_newnoargs_2b8b6bd7753c76ba: () => he, __wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5: () => ge, __wbg_newwithlength_b56c882b57805732: () => Pt, __wbg_newwithoptbuffersourceandinit_4d2fa6d435ff2a63: () => Kt, __wbg_newwithoptreadablestreamandinit_a0b4dc209bd176be: () => Xt, __wbg_newwithoptstrandinit_1a4621d99c54e7c3: () => Jt, __wbg_next_88560ec06a094dea: () => Nt, __wbg_next_b7d530c04fd8b217: () => ue, __wbg_node_6a9d28205ed5b0d8: () => ke, __wbg_process_dd1577445152112e: () => je, __wbg_randomFillSync_e950366c42764a07: () => Oe, __wbg_require_f05d779769764e82: () => Te, __wbg_resolve_fd40f858d9db1a04: () => Ce, __wbg_respond_f4778bef04e912a6: () => Be, __wbg_scheduledTime_e2424cd1bab56234: () => qt, __wbg_self_e7c1f827057f6584: () => le, __wbg_set_17224bc548dd1d7b: () => jt, __wbg_set_17499e8aa4003ebd: () => pe, __wbg_set_388c4c6422704173: () => Mt, __wbg_set_6aa458a4ebdb65cb: () => Xe, __wbg_set_841ac57cff3d672b: () => Ot, __wbg_set_a5d34c36a1a4ebd1: () => Ke, __wbg_stringify_029a979dfb73aa17: () => ee, __wbg_subarray_7526649b91a252a6: () => Ee, __wbg_text_49ed0c30fe893e32: () => te, __wbg_then_ec5db6d509eb475f: () => Ie, __wbg_then_f753623316e2873a: () => Le, __wbg_toString_cec163b212643722: () => vt, __wbg_url_bd2775644ef804ec: () => Wt, __wbg_value_6ac8da5cc5b3efda: () => Dt, __wbg_versions_58036bec3add9e6f: () => Ae, __wbg_view_d1a31268af734e5d: () => $e, __wbg_window_a09ec664e14b1b81: () => we, __wbindgen_bigint_from_i64: () => it, __wbindgen_bigint_from_u64: () => ft, __wbindgen_bigint_get_as_i64: () => ct, __wbindgen_boolean_get: () => ot, __wbindgen_cb_drop: () => Zt, __wbindgen_closure_wrapper996: () => Ye, __wbindgen_debug_string: () => Yt, __wbindgen_error_new: () => bt, __wbindgen_in: () => xt, __wbindgen_is_bigint: () => _t, __wbindgen_is_function: () => ie, __wbindgen_is_object: () => lt, __wbindgen_is_string: () => Tt, __wbindgen_is_undefined: () => It, __wbindgen_jsval_eq: () => st, __wbindgen_jsval_loose_eq: () => rt, __wbindgen_memory: () => be, __wbindgen_number_get: () => at, __wbindgen_number_new: () => yt, __wbindgen_object_clone_ref: () => Ft, __wbindgen_object_drop_ref: () => ut, __wbindgen_string_get: () => pt, __wbindgen_string_new: () => ht, __wbindgen_throw: () => Fe, fetch: () => B, getMemory: () => H, scheduled: () => N });
function $() {
  return "bytes";
}
var V = new WebAssembly.Instance(z, { "./index_bg.js": l });
var c = V.exports;
function H() {
  return c.memory;
}
var d = new Array(128).fill(void 0);
d.push(void 0, null, true, false);
function r(e) {
  return d[e];
}
function p(e) {
  return e == null;
}
var j = null;
function J() {
  return (j === null || j.byteLength === 0) && (j = new BigInt64Array(c.memory.buffer)), j;
}
var A = null;
function f() {
  return (A === null || A.byteLength === 0) && (A = new Int32Array(c.memory.buffer)), A;
}
var y = d.length;
function _(e) {
  y === d.length && d.push(d.length + 1);
  let t = y;
  return y = d[t], d[t] = e, t;
}
function P(e) {
  e < 132 || (d[e] = y, y = e);
}
function a(e) {
  let t = r(e);
  return P(e), t;
}
var K = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
var D = new K("utf-8", { ignoreBOM: true, fatal: true });
D.decode();
var k = null;
function T() {
  return (k === null || k.byteLength === 0) && (k = new Uint8Array(c.memory.buffer)), k;
}
function w(e, t) {
  return D.decode(T().subarray(e, e + t));
}
var M = null;
function X() {
  return (M === null || M.byteLength === 0) && (M = new Float64Array(c.memory.buffer)), M;
}
var x = 0;
var Y = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
var O = new Y("utf-8");
var Z = typeof O.encodeInto == "function" ? function(e, t) {
  return O.encodeInto(e, t);
} : function(e, t) {
  let n = O.encode(e);
  return t.set(n), { read: e.length, written: n.length };
};
function h(e, t, n) {
  if (n === void 0) {
    let b = O.encode(e), m = t(b.length);
    return T().subarray(m, m + b.length).set(b), x = b.length, m;
  }
  let o = e.length, i = t(o), g = T(), u = 0;
  for (; u < o; u++) {
    let b = e.charCodeAt(u);
    if (b > 127)
      break;
    g[i + u] = b;
  }
  if (u !== o) {
    u !== 0 && (e = e.slice(u)), i = n(i, o, o = u + e.length * 3);
    let b = T().subarray(i + u, i + o);
    u += Z(e, b).written;
  }
  return x = u, i;
}
function E(e) {
  let t = typeof e;
  if (t == "number" || t == "boolean" || e == null)
    return `${e}`;
  if (t == "string")
    return `"${e}"`;
  if (t == "symbol") {
    let i = e.description;
    return i == null ? "Symbol" : `Symbol(${i})`;
  }
  if (t == "function") {
    let i = e.name;
    return typeof i == "string" && i.length > 0 ? `Function(${i})` : "Function";
  }
  if (Array.isArray(e)) {
    let i = e.length, g = "[";
    i > 0 && (g += E(e[0]));
    for (let u = 1; u < i; u++)
      g += ", " + E(e[u]);
    return g += "]", g;
  }
  let n = /\[object ([^\]]+)\]/.exec(toString.call(e)), o;
  if (n.length > 1)
    o = n[1];
  else
    return toString.call(e);
  if (o == "Object")
    try {
      return "Object(" + JSON.stringify(e) + ")";
    } catch {
      return "Object";
    }
  return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : o;
}
function G(e, t, n, o) {
  let i = { a: e, b: t, cnt: 1, dtor: n }, g = (...u) => {
    i.cnt++;
    let b = i.a;
    i.a = 0;
    try {
      return o(b, i.b, ...u);
    } finally {
      --i.cnt === 0 ? c.__wbindgen_export_2.get(i.dtor)(b, i.b) : i.a = b;
    }
  };
  return g.original = i, g;
}
function Q(e, t, n) {
  c.__wbindgen_export_3(e, t, _(n));
}
function B(e, t, n) {
  let o = c.fetch(_(e), _(t), _(n));
  return a(o);
}
function N(e, t, n) {
  let o = c.scheduled(_(e), _(t), _(n));
  return a(o);
}
function s(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    c.__wbindgen_export_4(_(n));
  }
}
function tt(e, t, n, o) {
  c.__wbindgen_export_5(e, t, _(n), _(o));
}
var et = Object.freeze({ Off: 0, 0: "Off", Lossy: 1, 1: "Lossy", Lossless: 2, 2: "Lossless" });
var nt = Object.freeze({ Error: 0, 0: "Error", Follow: 1, 1: "Follow", Manual: 2, 2: "Manual" });
var q = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    c.__wbg_intounderlyingbytesource_free(t);
  }
  get type() {
    let t = c.intounderlyingbytesource_type(this.ptr);
    return a(t);
  }
  get autoAllocateChunkSize() {
    return c.intounderlyingbytesource_autoAllocateChunkSize(this.ptr) >>> 0;
  }
  start(t) {
    c.intounderlyingbytesource_start(this.ptr, _(t));
  }
  pull(t) {
    let n = c.intounderlyingbytesource_pull(this.ptr, _(t));
    return a(n);
  }
  cancel() {
    let t = this.__destroy_into_raw();
    c.intounderlyingbytesource_cancel(t);
  }
};
var S = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    c.__wbg_intounderlyingsink_free(t);
  }
  write(t) {
    let n = c.intounderlyingsink_write(this.ptr, _(t));
    return a(n);
  }
  close() {
    let t = this.__destroy_into_raw(), n = c.intounderlyingsink_close(t);
    return a(n);
  }
  abort(t) {
    let n = this.__destroy_into_raw(), o = c.intounderlyingsink_abort(n, _(t));
    return a(o);
  }
};
var v = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    c.__wbg_intounderlyingsource_free(t);
  }
  pull(t) {
    let n = c.intounderlyingsource_pull(this.ptr, _(t));
    return a(n);
  }
  cancel() {
    let t = this.__destroy_into_raw();
    c.intounderlyingsource_cancel(t);
  }
};
var F = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    c.__wbg_minifyconfig_free(t);
  }
  get js() {
    return c.__wbg_get_minifyconfig_js(this.ptr) !== 0;
  }
  set js(t) {
    c.__wbg_set_minifyconfig_js(this.ptr, t);
  }
  get html() {
    return c.__wbg_get_minifyconfig_html(this.ptr) !== 0;
  }
  set html(t) {
    c.__wbg_set_minifyconfig_html(this.ptr, t);
  }
  get css() {
    return c.__wbg_get_minifyconfig_css(this.ptr) !== 0;
  }
  set css(t) {
    c.__wbg_set_minifyconfig_css(this.ptr, t);
  }
};
var L = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    c.__wbg_pipeoptions_free(t);
  }
  get preventClose() {
    return c.pipeoptions_preventClose(this.ptr) !== 0;
  }
  get preventCancel() {
    return c.pipeoptions_preventCancel(this.ptr) !== 0;
  }
  get preventAbort() {
    return c.pipeoptions_preventAbort(this.ptr) !== 0;
  }
  get signal() {
    let t = c.pipeoptions_signal(this.ptr);
    return a(t);
  }
};
var C = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    c.__wbg_queuingstrategy_free(t);
  }
  get highWaterMark() {
    return c.queuingstrategy_highWaterMark(this.ptr);
  }
};
var I = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    c.__wbg_r2range_free(t);
  }
  get offset() {
    try {
      let o = c.__wbindgen_add_to_stack_pointer(-16);
      c.__wbg_get_r2range_offset(o, this.ptr);
      var t = f()[o / 4 + 0], n = f()[o / 4 + 1];
      return t === 0 ? void 0 : n >>> 0;
    } finally {
      c.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set offset(t) {
    c.__wbg_set_r2range_offset(this.ptr, !p(t), p(t) ? 0 : t);
  }
  get length() {
    try {
      let o = c.__wbindgen_add_to_stack_pointer(-16);
      c.__wbg_get_r2range_length(o, this.ptr);
      var t = f()[o / 4 + 0], n = f()[o / 4 + 1];
      return t === 0 ? void 0 : n >>> 0;
    } finally {
      c.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set length(t) {
    c.__wbg_set_r2range_length(this.ptr, !p(t), p(t) ? 0 : t);
  }
  get suffix() {
    try {
      let o = c.__wbindgen_add_to_stack_pointer(-16);
      c.__wbg_get_r2range_suffix(o, this.ptr);
      var t = f()[o / 4 + 0], n = f()[o / 4 + 1];
      return t === 0 ? void 0 : n >>> 0;
    } finally {
      c.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set suffix(t) {
    c.__wbg_set_r2range_suffix(this.ptr, !p(t), p(t) ? 0 : t);
  }
};
var R = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    c.__wbg_readablestreamgetreaderoptions_free(t);
  }
  get mode() {
    let t = c.readablestreamgetreaderoptions_mode(this.ptr);
    return a(t);
  }
};
function rt(e, t) {
  return r(e) == r(t);
}
function ot(e) {
  let t = r(e);
  return typeof t == "boolean" ? t ? 1 : 0 : 2;
}
function _t(e) {
  return typeof r(e) == "bigint";
}
function ct(e, t) {
  let n = r(t), o = typeof n == "bigint" ? n : void 0;
  J()[e / 8 + 1] = p(o) ? BigInt(0) : o, f()[e / 4 + 0] = !p(o);
}
function it(e) {
  return _(e);
}
function st(e, t) {
  return r(e) === r(t);
}
function ut(e) {
  a(e);
}
function ft(e) {
  let t = BigInt.asUintN(64, e);
  return _(t);
}
function bt(e, t) {
  let n = new Error(w(e, t));
  return _(n);
}
function at(e, t) {
  let n = r(t), o = typeof n == "number" ? n : void 0;
  X()[e / 8 + 1] = p(o) ? 0 : o, f()[e / 4 + 0] = !p(o);
}
function gt(e) {
  return Number.isSafeInteger(r(e));
}
function pt(e, t) {
  let n = r(t), o = typeof n == "string" ? n : void 0;
  var i = p(o) ? 0 : h(o, c.__wbindgen_export_0, c.__wbindgen_export_1), g = x;
  f()[e / 4 + 1] = g, f()[e / 4 + 0] = i;
}
function dt(e) {
  return Array.isArray(r(e));
}
function lt(e) {
  let t = r(e);
  return typeof t == "object" && t !== null;
}
function wt() {
  return _(Symbol.iterator);
}
function xt(e, t) {
  return r(e) in r(t);
}
function yt(e) {
  return _(e);
}
function ht(e, t) {
  let n = w(e, t);
  return _(n);
}
function mt() {
  let e = new Array();
  return _(e);
}
function jt(e, t, n) {
  r(e)[t >>> 0] = a(n);
}
function At() {
  return _(/* @__PURE__ */ new Map());
}
function kt() {
  let e = new Object();
  return _(e);
}
function Mt(e, t, n) {
  let o = r(e).set(r(t), r(n));
  return _(o);
}
function Tt(e) {
  return typeof r(e) == "string";
}
function Ot(e, t, n) {
  r(e)[a(t)] = a(n);
}
function Et(e, t) {
  let n = r(t).cron, o = h(n, c.__wbindgen_export_0, c.__wbindgen_export_1), i = x;
  f()[e / 4 + 1] = i, f()[e / 4 + 0] = o;
}
function qt(e) {
  return r(e).scheduledTime;
}
function St(e) {
  let t;
  try {
    t = r(e) instanceof Error;
  } catch {
    t = false;
  }
  return t;
}
function vt(e) {
  let t = r(e).toString();
  return _(t);
}
function Ft(e) {
  let t = r(e);
  return _(t);
}
function Lt() {
  return s(function(e, t, n) {
    let o = r(e).call(r(t), r(n));
    return _(o);
  }, arguments);
}
function Ct(e, t) {
  let n = r(e)[r(t)];
  return _(n);
}
function It(e) {
  return r(e) === void 0;
}
function Rt(e) {
  return r(e).length;
}
function Bt(e, t) {
  let n = r(e)[t >>> 0];
  return _(n);
}
function Nt() {
  return s(function(e) {
    let t = r(e).next();
    return _(t);
  }, arguments);
}
function $t(e) {
  return r(e).done;
}
function Dt(e) {
  let t = r(e).value;
  return _(t);
}
function Ut(e, t) {
  let n = r(t).method, o = h(n, c.__wbindgen_export_0, c.__wbindgen_export_1), i = x;
  f()[e / 4 + 1] = i, f()[e / 4 + 0] = o;
}
function Wt(e, t) {
  let n = r(t).url, o = h(n, c.__wbindgen_export_0, c.__wbindgen_export_1), i = x;
  f()[e / 4 + 1] = i, f()[e / 4 + 0] = o;
}
function zt(e) {
  let t = r(e).headers;
  return _(t);
}
function Vt(e) {
  let t = r(e).cf;
  return p(t) ? 0 : _(t);
}
function Ht() {
  return s(function() {
    let e = new Headers();
    return _(e);
  }, arguments);
}
function Jt() {
  return s(function(e, t, n) {
    let o = new Response(e === 0 ? void 0 : w(e, t), r(n));
    return _(o);
  }, arguments);
}
function Pt(e) {
  let t = new Uint8Array(e >>> 0);
  return _(t);
}
function Kt() {
  return s(function(e, t) {
    let n = new Response(r(e), r(t));
    return _(n);
  }, arguments);
}
function Xt() {
  return s(function(e, t) {
    let n = new Response(r(e), r(t));
    return _(n);
  }, arguments);
}
function Yt(e, t) {
  let n = E(r(t)), o = h(n, c.__wbindgen_export_0, c.__wbindgen_export_1), i = x;
  f()[e / 4 + 1] = i, f()[e / 4 + 0] = o;
}
function Zt(e) {
  let t = a(e).original;
  return t.cnt-- == 1 ? (t.a = 0, true) : false;
}
function Gt(e) {
  let t = Object.entries(r(e));
  return _(t);
}
function Qt() {
  return s(function(e, t, n, o) {
    let i = r(e).call(r(t), r(n), r(o));
    return _(i);
  }, arguments);
}
function te() {
  return s(function(e) {
    let t = r(e).text();
    return _(t);
  }, arguments);
}
function ee() {
  return s(function(e) {
    let t = JSON.stringify(r(e));
    return _(t);
  }, arguments);
}
function ne() {
  return s(function(e, t, n, o, i) {
    let g = r(e).call(r(t), r(n), r(o), r(i));
    return _(g);
  }, arguments);
}
function re(e, t) {
  try {
    var n = { a: e, b: t }, o = (g, u) => {
      let b = n.a;
      n.a = 0;
      try {
        return tt(b, n.b, g, u);
      } finally {
        n.a = b;
      }
    };
    let i = new Promise(o);
    return _(i);
  } finally {
    n.a = n.b = 0;
  }
}
function oe() {
  let e = /* @__PURE__ */ new Date();
  return _(e);
}
function _e(e) {
  return r(e).getTime();
}
function ce() {
  return s(function(e, t) {
    let n = Reflect.get(r(e), r(t));
    return _(n);
  }, arguments);
}
function ie(e) {
  return typeof r(e) == "function";
}
function se() {
  return s(function(e, t) {
    let n = r(e).call(r(t));
    return _(n);
  }, arguments);
}
function ue(e) {
  let t = r(e).next;
  return _(t);
}
function fe(e) {
  return r(e).length;
}
function be() {
  let e = c.memory;
  return _(e);
}
function ae(e) {
  let t = r(e).buffer;
  return _(t);
}
function ge(e, t, n) {
  let o = new Uint8Array(r(e), t >>> 0, n >>> 0);
  return _(o);
}
function pe(e, t, n) {
  r(e).set(r(t), n >>> 0);
}
function de(e) {
  let t = new Uint8Array(r(e));
  return _(t);
}
function le() {
  return s(function() {
    let e = self.self;
    return _(e);
  }, arguments);
}
function we() {
  return s(function() {
    let e = window.window;
    return _(e);
  }, arguments);
}
function xe() {
  return s(function() {
    let e = globalThis.globalThis;
    return _(e);
  }, arguments);
}
function ye() {
  return s(function() {
    let e = global.global;
    return _(e);
  }, arguments);
}
function he(e, t) {
  let n = new Function(w(e, t));
  return _(n);
}
function me(e) {
  let t = r(e).crypto;
  return _(t);
}
function je(e) {
  let t = r(e).process;
  return _(t);
}
function Ae(e) {
  let t = r(e).versions;
  return _(t);
}
function ke(e) {
  let t = r(e).node;
  return _(t);
}
function Me(e) {
  let t = r(e).msCrypto;
  return _(t);
}
function Te() {
  return s(function() {
    let e = module.require;
    return _(e);
  }, arguments);
}
function Oe() {
  return s(function(e, t) {
    r(e).randomFillSync(a(t));
  }, arguments);
}
function Ee(e, t, n) {
  let o = r(e).subarray(t >>> 0, n >>> 0);
  return _(o);
}
function qe() {
  return s(function(e, t) {
    r(e).getRandomValues(r(t));
  }, arguments);
}
function Se(e) {
  let t;
  try {
    t = r(e) instanceof Uint8Array;
  } catch {
    t = false;
  }
  return t;
}
function ve(e) {
  let t;
  try {
    t = r(e) instanceof ArrayBuffer;
  } catch {
    t = false;
  }
  return t;
}
function Fe(e, t) {
  throw new Error(w(e, t));
}
function Le(e, t, n) {
  let o = r(e).then(r(t), r(n));
  return _(o);
}
function Ce(e) {
  let t = Promise.resolve(r(e));
  return _(t);
}
function Ie(e, t) {
  let n = r(e).then(r(t));
  return _(n);
}
function Re(e) {
  let t = r(e).byobRequest;
  return p(t) ? 0 : _(t);
}
function Be(e, t) {
  r(e).respond(t >>> 0);
}
function Ne() {
  let e = $();
  return _(e);
}
function $e(e) {
  let t = r(e).view;
  return p(t) ? 0 : _(t);
}
function De(e) {
  return r(e).byteLength;
}
function Ue(e) {
  r(e).close();
}
function We(e, t) {
  let n = new Error(w(e, t));
  return _(n);
}
function ze(e) {
  let t = r(e).buffer;
  return _(t);
}
function Ve(e) {
  return r(e).byteOffset;
}
function He(e) {
  r(e).close();
}
function Je(e, t) {
  r(e).enqueue(r(t));
}
function Pe(e) {
  console.log(r(e));
}
function Ke() {
  return s(function(e, t, n, o, i) {
    r(e).set(w(t, n), w(o, i));
  }, arguments);
}
function Xe() {
  return s(function(e, t, n) {
    return Reflect.set(r(e), r(t), r(n));
  }, arguments);
}
function Ye(e, t, n) {
  let o = G(e, t, 73, Q);
  return _(o);
}
var _n = { fetch: B, scheduled: N, queue: void 0 };

// ../../../../nix/store/pkiq44z594vz4kd6kiqv3xr2p08jlgvh-wrangler-3.28.3/lib/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;
var wrap = void 0;

// .wrangler/tmp/bundle-YC5iF1/middleware-insertion-facade.js
var envWrappers = [wrap].filter(Boolean);
var facade = {
  ..._n,
  envWrappers,
  middleware: [
    middleware_miniflare3_json_error_default,
    ..._n.middleware ? _n.middleware : []
  ].filter(Boolean)
};
var middleware_insertion_facade_default = facade;

// ../../../../nix/store/pkiq44z594vz4kd6kiqv3xr2p08jlgvh-wrangler-3.28.3/lib/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// .wrangler/tmp/bundle-YC5iF1/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
var __facade_modules_fetch__ = function(request, env, ctx) {
  if (middleware_insertion_facade_default.fetch === void 0)
    throw new Error("Handler does not export a fetch() function.");
  return middleware_insertion_facade_default.fetch(request, env, ctx);
};
function getMaskedEnv(rawEnv) {
  let env = rawEnv;
  if (middleware_insertion_facade_default.envWrappers && middleware_insertion_facade_default.envWrappers.length > 0) {
    for (const wrapFn of middleware_insertion_facade_default.envWrappers) {
      env = wrapFn(env);
    }
  }
  return env;
}
var registeredMiddleware = false;
var facade2 = {
  ...middleware_insertion_facade_default.tail && {
    tail: maskHandlerEnv(middleware_insertion_facade_default.tail)
  },
  ...middleware_insertion_facade_default.trace && {
    trace: maskHandlerEnv(middleware_insertion_facade_default.trace)
  },
  ...middleware_insertion_facade_default.scheduled && {
    scheduled: maskHandlerEnv(middleware_insertion_facade_default.scheduled)
  },
  ...middleware_insertion_facade_default.queue && {
    queue: maskHandlerEnv(middleware_insertion_facade_default.queue)
  },
  ...middleware_insertion_facade_default.test && {
    test: maskHandlerEnv(middleware_insertion_facade_default.test)
  },
  ...middleware_insertion_facade_default.email && {
    email: maskHandlerEnv(middleware_insertion_facade_default.email)
  },
  fetch(request, rawEnv, ctx) {
    const env = getMaskedEnv(rawEnv);
    if (middleware_insertion_facade_default.middleware && middleware_insertion_facade_default.middleware.length > 0) {
      if (!registeredMiddleware) {
        registeredMiddleware = true;
        for (const middleware of middleware_insertion_facade_default.middleware) {
          __facade_register__(middleware);
        }
      }
      const __facade_modules_dispatch__ = function(type, init) {
        if (type === "scheduled" && middleware_insertion_facade_default.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return middleware_insertion_facade_default.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(
        request,
        env,
        ctx,
        __facade_modules_dispatch__,
        __facade_modules_fetch__
      );
    } else {
      return __facade_modules_fetch__(request, env, ctx);
    }
  }
};
function maskHandlerEnv(handler) {
  return (data, env, ctx) => handler(data, getMaskedEnv(env), ctx);
}
var middleware_loader_entry_default = facade2;
export {
  q as IntoUnderlyingByteSource,
  S as IntoUnderlyingSink,
  v as IntoUnderlyingSource,
  F as MinifyConfig,
  L as PipeOptions,
  et as PolishConfig,
  C as QueuingStrategy,
  I as R2Range,
  R as ReadableStreamGetReaderOptions,
  nt as RequestRedirect,
  ze as __wbg_buffer_610b70c8fd30da2d,
  ae as __wbg_buffer_cf65c07de34b9a08,
  Re as __wbg_byobRequest_a3c74c3694777d1b,
  De as __wbg_byteLength_1fef7842ca4200fa,
  Ve as __wbg_byteOffset_ede786cfcf88d3dd,
  Ne as __wbg_bytesliteral_efe7d360639bf32b,
  Lt as __wbg_call_9495de66fdbe016b,
  se as __wbg_call_95d1ea488d03e4e8,
  Qt as __wbg_call_96878afb7a8201ca,
  ne as __wbg_call_99043a1e2a9e5916,
  Vt as __wbg_cf_a70afe2b6e717440,
  Ue as __wbg_close_045ed342139beb7d,
  He as __wbg_close_a41954830b65c455,
  Et as __wbg_cron_1ae5d12539c662a2,
  me as __wbg_crypto_70a96de3b6b73dac,
  $t as __wbg_done_1ebec03bbd919843,
  Je as __wbg_enqueue_3a8a8e67e44d2567,
  Gt as __wbg_entries_4e1315b774245952,
  qe as __wbg_getRandomValues_3774744e221a22ad,
  _e as __wbg_getTime_7c59072d1651a3cf,
  Bt as __wbg_get_27fe3dac1c4d0224,
  ce as __wbg_get_baf4855f9a986186,
  Ct as __wbg_getwithrefkey_5e6d9547403deab8,
  xe as __wbg_globalThis_87cbb8506fecf3a9,
  ye as __wbg_global_c85a9259e621f3db,
  zt as __wbg_headers_ab5251d2727ac41e,
  ve as __wbg_instanceof_ArrayBuffer_a69f02ee4c4f5065,
  St as __wbg_instanceof_Error_749a7378f4439ee0,
  Se as __wbg_instanceof_Uint8Array_01cebe79ca606cca,
  dt as __wbg_isArray_39d28997bf6b96b4,
  gt as __wbg_isSafeInteger_8c4789029e885159,
  wt as __wbg_iterator_55f114446221aa5a,
  fe as __wbg_length_27a2afe8ab42b09f,
  Rt as __wbg_length_e498fbc24f9c1d4f,
  Pe as __wbg_log_7bb108d119bafbc1,
  Ut as __wbg_method_d1ee174c753ca2be,
  Me as __wbg_msCrypto_adbc770ec9eca9c7,
  oe as __wbg_new0_25059e40b1c02766,
  We as __wbg_new_15d3966e9981a196,
  de as __wbg_new_537b7341ce90bb31,
  re as __wbg_new_9d3a9ce4282a18a8,
  mt as __wbg_new_b525de17f44a8943,
  Ht as __wbg_new_f1c3a9c2533a55b8,
  At as __wbg_new_f841cc6f2098f4b5,
  kt as __wbg_new_f9876326328f45ed,
  he as __wbg_newnoargs_2b8b6bd7753c76ba,
  ge as __wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5,
  Pt as __wbg_newwithlength_b56c882b57805732,
  Kt as __wbg_newwithoptbuffersourceandinit_4d2fa6d435ff2a63,
  Xt as __wbg_newwithoptreadablestreamandinit_a0b4dc209bd176be,
  Jt as __wbg_newwithoptstrandinit_1a4621d99c54e7c3,
  Nt as __wbg_next_88560ec06a094dea,
  ue as __wbg_next_b7d530c04fd8b217,
  ke as __wbg_node_6a9d28205ed5b0d8,
  je as __wbg_process_dd1577445152112e,
  Oe as __wbg_randomFillSync_e950366c42764a07,
  Te as __wbg_require_f05d779769764e82,
  Ce as __wbg_resolve_fd40f858d9db1a04,
  Be as __wbg_respond_f4778bef04e912a6,
  qt as __wbg_scheduledTime_e2424cd1bab56234,
  le as __wbg_self_e7c1f827057f6584,
  jt as __wbg_set_17224bc548dd1d7b,
  pe as __wbg_set_17499e8aa4003ebd,
  Mt as __wbg_set_388c4c6422704173,
  Xe as __wbg_set_6aa458a4ebdb65cb,
  Ot as __wbg_set_841ac57cff3d672b,
  Ke as __wbg_set_a5d34c36a1a4ebd1,
  ee as __wbg_stringify_029a979dfb73aa17,
  Ee as __wbg_subarray_7526649b91a252a6,
  te as __wbg_text_49ed0c30fe893e32,
  Ie as __wbg_then_ec5db6d509eb475f,
  Le as __wbg_then_f753623316e2873a,
  vt as __wbg_toString_cec163b212643722,
  Wt as __wbg_url_bd2775644ef804ec,
  Dt as __wbg_value_6ac8da5cc5b3efda,
  Ae as __wbg_versions_58036bec3add9e6f,
  $e as __wbg_view_d1a31268af734e5d,
  we as __wbg_window_a09ec664e14b1b81,
  it as __wbindgen_bigint_from_i64,
  ft as __wbindgen_bigint_from_u64,
  ct as __wbindgen_bigint_get_as_i64,
  ot as __wbindgen_boolean_get,
  Zt as __wbindgen_cb_drop,
  Ye as __wbindgen_closure_wrapper996,
  Yt as __wbindgen_debug_string,
  bt as __wbindgen_error_new,
  xt as __wbindgen_in,
  _t as __wbindgen_is_bigint,
  ie as __wbindgen_is_function,
  lt as __wbindgen_is_object,
  Tt as __wbindgen_is_string,
  It as __wbindgen_is_undefined,
  st as __wbindgen_jsval_eq,
  rt as __wbindgen_jsval_loose_eq,
  be as __wbindgen_memory,
  at as __wbindgen_number_get,
  yt as __wbindgen_number_new,
  Ft as __wbindgen_object_clone_ref,
  ut as __wbindgen_object_drop_ref,
  pt as __wbindgen_string_get,
  ht as __wbindgen_string_new,
  Fe as __wbindgen_throw,
  middleware_loader_entry_default as default,
  B as fetch,
  H as getMemory,
  N as scheduled,
  on as wasmModule
};
//# sourceMappingURL=shim.js.map
