#!/usr/bin/env node
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);

// node_modules/consola/dist/chunks/prompt.mjs
var exports_prompt = {};
__export(exports_prompt, {
  prompt: () => prompt,
  kCancel: () => kCancel
});
import g, { stdin, stdout } from "node:process";
import f from "node:readline";
import { WriteStream } from "node:tty";
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function requireSrc() {
  if (hasRequiredSrc)
    return src;
  hasRequiredSrc = 1;
  const ESC = "\x1B";
  const CSI = `${ESC}[`;
  const beep = "\x07";
  const cursor = {
    to(x, y) {
      if (!y)
        return `${CSI}${x + 1}G`;
      return `${CSI}${y + 1};${x + 1}H`;
    },
    move(x, y) {
      let ret = "";
      if (x < 0)
        ret += `${CSI}${-x}D`;
      else if (x > 0)
        ret += `${CSI}${x}C`;
      if (y < 0)
        ret += `${CSI}${-y}A`;
      else if (y > 0)
        ret += `${CSI}${y}B`;
      return ret;
    },
    up: (count = 1) => `${CSI}${count}A`,
    down: (count = 1) => `${CSI}${count}B`,
    forward: (count = 1) => `${CSI}${count}C`,
    backward: (count = 1) => `${CSI}${count}D`,
    nextLine: (count = 1) => `${CSI}E`.repeat(count),
    prevLine: (count = 1) => `${CSI}F`.repeat(count),
    left: `${CSI}G`,
    hide: `${CSI}?25l`,
    show: `${CSI}?25h`,
    save: `${ESC}7`,
    restore: `${ESC}8`
  };
  const scroll = {
    up: (count = 1) => `${CSI}S`.repeat(count),
    down: (count = 1) => `${CSI}T`.repeat(count)
  };
  const erase = {
    screen: `${CSI}2J`,
    up: (count = 1) => `${CSI}1J`.repeat(count),
    down: (count = 1) => `${CSI}J`.repeat(count),
    line: `${CSI}2K`,
    lineEnd: `${CSI}K`,
    lineStart: `${CSI}1K`,
    lines(count) {
      let clear = "";
      for (let i = 0;i < count; i++)
        clear += this.line + (i < count - 1 ? cursor.up() : "");
      if (count)
        clear += cursor.left;
      return clear;
    }
  };
  src = { cursor, scroll, erase, beep };
  return src;
}
function requirePicocolors() {
  if (hasRequiredPicocolors)
    return picocolors.exports;
  hasRequiredPicocolors = 1;
  let p = process || {}, argv2 = p.argv || [], env2 = p.env || {};
  let isColorSupported2 = !(!!env2.NO_COLOR || argv2.includes("--no-color")) && (!!env2.FORCE_COLOR || argv2.includes("--color") || p.platform === "win32" || (p.stdout || {}).isTTY && env2.TERM !== "dumb" || !!env2.CI);
  let formatter = (open, close, replace = open) => (input) => {
    let string = "" + input, index = string.indexOf(close, open.length);
    return ~index ? open + replaceClose2(string, close, replace, index) + close : open + string + close;
  };
  let replaceClose2 = (string, close, replace, index) => {
    let result = "", cursor = 0;
    do {
      result += string.substring(cursor, index) + replace;
      cursor = index + close.length;
      index = string.indexOf(close, cursor);
    } while (~index);
    return result + string.substring(cursor);
  };
  let createColors2 = (enabled = isColorSupported2) => {
    let f2 = enabled ? formatter : () => String;
    return {
      isColorSupported: enabled,
      reset: f2("\x1B[0m", "\x1B[0m"),
      bold: f2("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"),
      dim: f2("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"),
      italic: f2("\x1B[3m", "\x1B[23m"),
      underline: f2("\x1B[4m", "\x1B[24m"),
      inverse: f2("\x1B[7m", "\x1B[27m"),
      hidden: f2("\x1B[8m", "\x1B[28m"),
      strikethrough: f2("\x1B[9m", "\x1B[29m"),
      black: f2("\x1B[30m", "\x1B[39m"),
      red: f2("\x1B[31m", "\x1B[39m"),
      green: f2("\x1B[32m", "\x1B[39m"),
      yellow: f2("\x1B[33m", "\x1B[39m"),
      blue: f2("\x1B[34m", "\x1B[39m"),
      magenta: f2("\x1B[35m", "\x1B[39m"),
      cyan: f2("\x1B[36m", "\x1B[39m"),
      white: f2("\x1B[37m", "\x1B[39m"),
      gray: f2("\x1B[90m", "\x1B[39m"),
      bgBlack: f2("\x1B[40m", "\x1B[49m"),
      bgRed: f2("\x1B[41m", "\x1B[49m"),
      bgGreen: f2("\x1B[42m", "\x1B[49m"),
      bgYellow: f2("\x1B[43m", "\x1B[49m"),
      bgBlue: f2("\x1B[44m", "\x1B[49m"),
      bgMagenta: f2("\x1B[45m", "\x1B[49m"),
      bgCyan: f2("\x1B[46m", "\x1B[49m"),
      bgWhite: f2("\x1B[47m", "\x1B[49m"),
      blackBright: f2("\x1B[90m", "\x1B[39m"),
      redBright: f2("\x1B[91m", "\x1B[39m"),
      greenBright: f2("\x1B[92m", "\x1B[39m"),
      yellowBright: f2("\x1B[93m", "\x1B[39m"),
      blueBright: f2("\x1B[94m", "\x1B[39m"),
      magentaBright: f2("\x1B[95m", "\x1B[39m"),
      cyanBright: f2("\x1B[96m", "\x1B[39m"),
      whiteBright: f2("\x1B[97m", "\x1B[39m"),
      bgBlackBright: f2("\x1B[100m", "\x1B[49m"),
      bgRedBright: f2("\x1B[101m", "\x1B[49m"),
      bgGreenBright: f2("\x1B[102m", "\x1B[49m"),
      bgYellowBright: f2("\x1B[103m", "\x1B[49m"),
      bgBlueBright: f2("\x1B[104m", "\x1B[49m"),
      bgMagentaBright: f2("\x1B[105m", "\x1B[49m"),
      bgCyanBright: f2("\x1B[106m", "\x1B[49m"),
      bgWhiteBright: f2("\x1B[107m", "\x1B[49m")
    };
  };
  picocolors.exports = createColors2();
  picocolors.exports.createColors = createColors2;
  return picocolors.exports;
}
function J({ onlyFirst: t = false } = {}) {
  const F = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");
  return new RegExp(F, t ? undefined : "g");
}
function T$1(t) {
  if (typeof t != "string")
    throw new TypeError(`Expected a \`string\`, got \`${typeof t}\``);
  return t.replace(Q, "");
}
function O(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function A$1(t, u = {}) {
  if (typeof t != "string" || t.length === 0 || (u = { ambiguousIsNarrow: true, ...u }, t = T$1(t), t.length === 0))
    return 0;
  t = t.replace(FD(), "  ");
  const F = u.ambiguousIsNarrow ? 1 : 2;
  let e2 = 0;
  for (const s of t) {
    const i = s.codePointAt(0);
    if (i <= 31 || i >= 127 && i <= 159 || i >= 768 && i <= 879)
      continue;
    switch (DD.eastAsianWidth(s)) {
      case "F":
      case "W":
        e2 += 2;
        break;
      case "A":
        e2 += F;
        break;
      default:
        e2 += 1;
    }
  }
  return e2;
}
function sD() {
  const t = new Map;
  for (const [u, F] of Object.entries(r)) {
    for (const [e2, s] of Object.entries(F))
      r[e2] = { open: `\x1B[${s[0]}m`, close: `\x1B[${s[1]}m` }, F[e2] = r[e2], t.set(s[0], s[1]);
    Object.defineProperty(r, u, { value: F, enumerable: false });
  }
  return Object.defineProperty(r, "codes", { value: t, enumerable: false }), r.color.close = "\x1B[39m", r.bgColor.close = "\x1B[49m", r.color.ansi = L$1(), r.color.ansi256 = N(), r.color.ansi16m = I(), r.bgColor.ansi = L$1(m), r.bgColor.ansi256 = N(m), r.bgColor.ansi16m = I(m), Object.defineProperties(r, { rgbToAnsi256: { value: (u, F, e2) => u === F && F === e2 ? u < 8 ? 16 : u > 248 ? 231 : Math.round((u - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(u / 255 * 5) + 6 * Math.round(F / 255 * 5) + Math.round(e2 / 255 * 5), enumerable: false }, hexToRgb: { value: (u) => {
    const F = /[a-f\d]{6}|[a-f\d]{3}/i.exec(u.toString(16));
    if (!F)
      return [0, 0, 0];
    let [e2] = F;
    e2.length === 3 && (e2 = [...e2].map((i) => i + i).join(""));
    const s = Number.parseInt(e2, 16);
    return [s >> 16 & 255, s >> 8 & 255, s & 255];
  }, enumerable: false }, hexToAnsi256: { value: (u) => r.rgbToAnsi256(...r.hexToRgb(u)), enumerable: false }, ansi256ToAnsi: { value: (u) => {
    if (u < 8)
      return 30 + u;
    if (u < 16)
      return 90 + (u - 8);
    let F, e2, s;
    if (u >= 232)
      F = ((u - 232) * 10 + 8) / 255, e2 = F, s = F;
    else {
      u -= 16;
      const C = u % 36;
      F = Math.floor(u / 36) / 5, e2 = Math.floor(C / 6) / 5, s = C % 6 / 5;
    }
    const i = Math.max(F, e2, s) * 2;
    if (i === 0)
      return 30;
    let D = 30 + (Math.round(s) << 2 | Math.round(e2) << 1 | Math.round(F));
    return i === 2 && (D += 60), D;
  }, enumerable: false }, rgbToAnsi: { value: (u, F, e2) => r.ansi256ToAnsi(r.rgbToAnsi256(u, F, e2)), enumerable: false }, hexToAnsi: { value: (u) => r.ansi256ToAnsi(r.hexToAnsi256(u)), enumerable: false } }), r;
}
function G(t, u, F) {
  return String(t).normalize().replace(/\r\n/g, `
`).split(`
`).map((e2) => oD(e2, u, F)).join(`
`);
}
function k$1(t, u) {
  if (typeof t == "string")
    return c.aliases.get(t) === u;
  for (const F of t)
    if (F !== undefined && k$1(F, u))
      return true;
  return false;
}
function lD(t, u) {
  if (t === u)
    return;
  const F = t.split(`
`), e2 = u.split(`
`), s = [];
  for (let i = 0;i < Math.max(F.length, e2.length); i++)
    F[i] !== e2[i] && s.push(i);
  return s;
}
function d$1(t, u) {
  const F = t;
  F.isTTY && F.setRawMode(u);
}

class x {
  constructor(u, F = true) {
    h(this, "input"), h(this, "output"), h(this, "_abortSignal"), h(this, "rl"), h(this, "opts"), h(this, "_render"), h(this, "_track", false), h(this, "_prevFrame", ""), h(this, "_subscribers", new Map), h(this, "_cursor", 0), h(this, "state", "initial"), h(this, "error", ""), h(this, "value");
    const { input: e2 = stdin, output: s = stdout, render: i, signal: D, ...C } = u;
    this.opts = C, this.onKeypress = this.onKeypress.bind(this), this.close = this.close.bind(this), this.render = this.render.bind(this), this._render = i.bind(this), this._track = F, this._abortSignal = D, this.input = e2, this.output = s;
  }
  unsubscribe() {
    this._subscribers.clear();
  }
  setSubscriber(u, F) {
    const e2 = this._subscribers.get(u) ?? [];
    e2.push(F), this._subscribers.set(u, e2);
  }
  on(u, F) {
    this.setSubscriber(u, { cb: F });
  }
  once(u, F) {
    this.setSubscriber(u, { cb: F, once: true });
  }
  emit(u, ...F) {
    const e2 = this._subscribers.get(u) ?? [], s = [];
    for (const i of e2)
      i.cb(...F), i.once && s.push(() => e2.splice(e2.indexOf(i), 1));
    for (const i of s)
      i();
  }
  prompt() {
    return new Promise((u, F) => {
      if (this._abortSignal) {
        if (this._abortSignal.aborted)
          return this.state = "cancel", this.close(), u(S);
        this._abortSignal.addEventListener("abort", () => {
          this.state = "cancel", this.close();
        }, { once: true });
      }
      const e2 = new WriteStream(0);
      e2._write = (s, i, D) => {
        this._track && (this.value = this.rl?.line.replace(/\t/g, ""), this._cursor = this.rl?.cursor ?? 0, this.emit("value", this.value)), D();
      }, this.input.pipe(e2), this.rl = f.createInterface({ input: this.input, output: e2, tabSize: 2, prompt: "", escapeCodeTimeout: 50 }), f.emitKeypressEvents(this.input, this.rl), this.rl.prompt(), this.opts.initialValue !== undefined && this._track && this.rl.write(this.opts.initialValue), this.input.on("keypress", this.onKeypress), d$1(this.input, true), this.output.on("resize", this.render), this.render(), this.once("submit", () => {
        this.output.write(srcExports.cursor.show), this.output.off("resize", this.render), d$1(this.input, false), u(this.value);
      }), this.once("cancel", () => {
        this.output.write(srcExports.cursor.show), this.output.off("resize", this.render), d$1(this.input, false), u(S);
      });
    });
  }
  onKeypress(u, F) {
    if (this.state === "error" && (this.state = "active"), F?.name && (!this._track && c.aliases.has(F.name) && this.emit("cursor", c.aliases.get(F.name)), c.actions.has(F.name) && this.emit("cursor", F.name)), u && (u.toLowerCase() === "y" || u.toLowerCase() === "n") && this.emit("confirm", u.toLowerCase() === "y"), u === "\t" && this.opts.placeholder && (this.value || (this.rl?.write(this.opts.placeholder), this.emit("value", this.opts.placeholder))), u && this.emit("key", u.toLowerCase()), F?.name === "return") {
      if (this.opts.validate) {
        const e2 = this.opts.validate(this.value);
        e2 && (this.error = e2 instanceof Error ? e2.message : e2, this.state = "error", this.rl?.write(this.value));
      }
      this.state !== "error" && (this.state = "submit");
    }
    k$1([u, F?.name, F?.sequence], "cancel") && (this.state = "cancel"), (this.state === "submit" || this.state === "cancel") && this.emit("finalize"), this.render(), (this.state === "submit" || this.state === "cancel") && this.close();
  }
  close() {
    this.input.unpipe(), this.input.removeListener("keypress", this.onKeypress), this.output.write(`
`), d$1(this.input, false), this.rl?.close(), this.rl = undefined, this.emit(`${this.state}`, this.value), this.unsubscribe();
  }
  restoreCursor() {
    const u = G(this._prevFrame, process.stdout.columns, { hard: true }).split(`
`).length - 1;
    this.output.write(srcExports.cursor.move(-999, u * -1));
  }
  render() {
    const u = G(this._render(this) ?? "", process.stdout.columns, { hard: true });
    if (u !== this._prevFrame) {
      if (this.state === "initial")
        this.output.write(srcExports.cursor.hide);
      else {
        const F = lD(this._prevFrame, u);
        if (this.restoreCursor(), F && F?.length === 1) {
          const e2 = F[0];
          this.output.write(srcExports.cursor.move(0, e2)), this.output.write(srcExports.erase.lines(1));
          const s = u.split(`
`);
          this.output.write(s[e2]), this._prevFrame = u, this.output.write(srcExports.cursor.move(0, s.length - e2 - 1));
          return;
        }
        if (F && F?.length > 1) {
          const e2 = F[0];
          this.output.write(srcExports.cursor.move(0, e2)), this.output.write(srcExports.erase.down());
          const s = u.split(`
`).slice(e2);
          this.output.write(s.join(`
`)), this._prevFrame = u;
          return;
        }
        this.output.write(srcExports.erase.down());
      }
      this.output.write(u), this.state === "initial" && (this.state = "active"), this._prevFrame = u;
    }
  }
}
function ce() {
  return g.platform !== "win32" ? g.env.TERM !== "linux" : !!g.env.CI || !!g.env.WT_SESSION || !!g.env.TERMINUS_SUBLIME || g.env.ConEmuTask === "{cmd::Cmder}" || g.env.TERM_PROGRAM === "Terminus-Sublime" || g.env.TERM_PROGRAM === "vscode" || g.env.TERM === "xterm-256color" || g.env.TERM === "alacritty" || g.env.TERMINAL_EMULATOR === "JetBrains-JediTerm";
}
async function prompt(message, opts = {}) {
  const handleCancel = (value) => {
    if (typeof value !== "symbol" || value.toString() !== "Symbol(clack:cancel)") {
      return value;
    }
    switch (opts.cancel) {
      case "reject": {
        const error = new Error("Prompt cancelled.");
        error.name = "ConsolaPromptCancelledError";
        if (Error.captureStackTrace) {
          Error.captureStackTrace(error, prompt);
        }
        throw error;
      }
      case "undefined": {
        return;
      }
      case "null": {
        return null;
      }
      case "symbol": {
        return kCancel;
      }
      default:
      case "default": {
        return opts.default ?? opts.initial;
      }
    }
  };
  if (!opts.type || opts.type === "text") {
    return await he({
      message,
      defaultValue: opts.default,
      placeholder: opts.placeholder,
      initialValue: opts.initial
    }).then(handleCancel);
  }
  if (opts.type === "confirm") {
    return await ye({
      message,
      initialValue: opts.initial
    }).then(handleCancel);
  }
  if (opts.type === "select") {
    return await ve({
      message,
      options: opts.options.map((o2) => typeof o2 === "string" ? { value: o2, label: o2 } : o2),
      initialValue: opts.initial
    }).then(handleCancel);
  }
  if (opts.type === "multiselect") {
    return await fe({
      message,
      options: opts.options.map((o2) => typeof o2 === "string" ? { value: o2, label: o2 } : o2),
      required: opts.required,
      initialValues: opts.initial
    }).then(handleCancel);
  }
  throw new Error(`Unknown prompt type: ${opts.type}`);
}
var src, hasRequiredSrc, srcExports, picocolors, hasRequiredPicocolors, picocolorsExports, e, Q, P$1, X, DD, uD = function() {
  return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
}, FD, m = 10, L$1 = (t = 0) => (u) => `\x1B[${u + t}m`, N = (t = 0) => (u) => `\x1B[${38 + t};5;${u}m`, I = (t = 0) => (u, F, e2) => `\x1B[${38 + t};2;${u};${F};${e2}m`, r, tD, eD, iD, v, CD = 39, w$1 = "\x07", W$1 = "[", rD = "]", R = "m", y, V$1 = (t) => `${v.values().next().value}${W$1}${t}${R}`, z = (t) => `${v.values().next().value}${y}${t}${w$1}`, ED = (t) => t.split(" ").map((u) => A$1(u)), _ = (t, u, F) => {
  const e2 = [...u];
  let s = false, i = false, D = A$1(T$1(t[t.length - 1]));
  for (const [C, o] of e2.entries()) {
    const E = A$1(o);
    if (D + E <= F ? t[t.length - 1] += o : (t.push(o), D = 0), v.has(o) && (s = true, i = e2.slice(C + 1).join("").startsWith(y)), s) {
      i ? o === w$1 && (s = false, i = false) : o === R && (s = false);
      continue;
    }
    D += E, D === F && C < e2.length - 1 && (t.push(""), D = 0);
  }
  !D && t[t.length - 1].length > 0 && t.length > 1 && (t[t.length - 2] += t.pop());
}, nD = (t) => {
  const u = t.split(" ");
  let F = u.length;
  for (;F > 0 && !(A$1(u[F - 1]) > 0); )
    F--;
  return F === u.length ? t : u.slice(0, F).join(" ") + u.slice(F).join("");
}, oD = (t, u, F = {}) => {
  if (F.trim !== false && t.trim() === "")
    return "";
  let e2 = "", s, i;
  const D = ED(t);
  let C = [""];
  for (const [E, a] of t.split(" ").entries()) {
    F.trim !== false && (C[C.length - 1] = C[C.length - 1].trimStart());
    let n = A$1(C[C.length - 1]);
    if (E !== 0 && (n >= u && (F.wordWrap === false || F.trim === false) && (C.push(""), n = 0), (n > 0 || F.trim === false) && (C[C.length - 1] += " ", n++)), F.hard && D[E] > u) {
      const B = u - n, p = 1 + Math.floor((D[E] - B - 1) / u);
      Math.floor((D[E] - 1) / u) < p && C.push(""), _(C, a, u);
      continue;
    }
    if (n + D[E] > u && n > 0 && D[E] > 0) {
      if (F.wordWrap === false && n < u) {
        _(C, a, u);
        continue;
      }
      C.push("");
    }
    if (n + D[E] > u && F.wordWrap === false) {
      _(C, a, u);
      continue;
    }
    C[C.length - 1] += a;
  }
  F.trim !== false && (C = C.map((E) => nD(E)));
  const o = [...C.join(`
`)];
  for (const [E, a] of o.entries()) {
    if (e2 += a, v.has(a)) {
      const { groups: B } = new RegExp(`(?:\\${W$1}(?<code>\\d+)m|\\${y}(?<uri>.*)${w$1})`).exec(o.slice(E).join("")) || { groups: {} };
      if (B.code !== undefined) {
        const p = Number.parseFloat(B.code);
        s = p === CD ? undefined : p;
      } else
        B.uri !== undefined && (i = B.uri.length === 0 ? undefined : B.uri);
    }
    const n = iD.codes.get(Number(s));
    o[E + 1] === `
` ? (i && (e2 += z("")), s && n && (e2 += V$1(n))) : a === `
` && (s && n && (e2 += V$1(s)), i && (e2 += z(i)));
  }
  return e2;
}, aD, c, S, AD, pD = (t, u, F) => (u in t) ? AD(t, u, { enumerable: true, configurable: true, writable: true, value: F }) : t[u] = F, h = (t, u, F) => (pD(t, typeof u != "symbol" ? u + "" : u, F), F), fD, bD, mD = (t, u, F) => (u in t) ? bD(t, u, { enumerable: true, configurable: true, writable: true, value: F }) : t[u] = F, Y = (t, u, F) => (mD(t, typeof u != "symbol" ? u + "" : u, F), F), wD, SD, $D = (t, u, F) => (u in t) ? SD(t, u, { enumerable: true, configurable: true, writable: true, value: F }) : t[u] = F, q = (t, u, F) => ($D(t, typeof u != "symbol" ? u + "" : u, F), F), jD, PD, V, u = (t, n) => V ? t : n, le, L, W, C, o, d, k, P, A, T, F, w = (t) => {
  switch (t) {
    case "initial":
    case "active":
      return e.cyan(le);
    case "cancel":
      return e.red(L);
    case "error":
      return e.yellow(W);
    case "submit":
      return e.green(C);
  }
}, B = (t) => {
  const { cursor: n, options: s, style: r2 } = t, i = t.maxItems ?? Number.POSITIVE_INFINITY, a = Math.max(process.stdout.rows - 4, 0), c2 = Math.min(a, Math.max(i, 5));
  let l = 0;
  n >= l + c2 - 3 ? l = Math.max(Math.min(n - c2 + 3, s.length - c2), 0) : n < l + 2 && (l = Math.max(n - 2, 0));
  const $ = c2 < s.length && l > 0, p = c2 < s.length && l + c2 < s.length;
  return s.slice(l, l + c2).map((M, v2, x2) => {
    const j = v2 === 0 && $, E = v2 === x2.length - 1 && p;
    return j || E ? e.dim("...") : r2(M, v2 + l === n);
  });
}, he = (t) => new PD({ validate: t.validate, placeholder: t.placeholder, defaultValue: t.defaultValue, initialValue: t.initialValue, render() {
  const n = `${e.gray(o)}
${w(this.state)} ${t.message}
`, s = t.placeholder ? e.inverse(t.placeholder[0]) + e.dim(t.placeholder.slice(1)) : e.inverse(e.hidden("_")), r2 = this.value ? this.valueWithCursor : s;
  switch (this.state) {
    case "error":
      return `${n.trim()}
${e.yellow(o)} ${r2}
${e.yellow(d)} ${e.yellow(this.error)}
`;
    case "submit":
      return `${n}${e.gray(o)} ${e.dim(this.value || t.placeholder)}`;
    case "cancel":
      return `${n}${e.gray(o)} ${e.strikethrough(e.dim(this.value ?? ""))}${this.value?.trim() ? `
${e.gray(o)}` : ""}`;
    default:
      return `${n}${e.cyan(o)} ${r2}
${e.cyan(d)}
`;
  }
} }).prompt(), ye = (t) => {
  const n = t.active ?? "Yes", s = t.inactive ?? "No";
  return new fD({ active: n, inactive: s, initialValue: t.initialValue ?? true, render() {
    const r2 = `${e.gray(o)}
${w(this.state)} ${t.message}
`, i = this.value ? n : s;
    switch (this.state) {
      case "submit":
        return `${r2}${e.gray(o)} ${e.dim(i)}`;
      case "cancel":
        return `${r2}${e.gray(o)} ${e.strikethrough(e.dim(i))}
${e.gray(o)}`;
      default:
        return `${r2}${e.cyan(o)} ${this.value ? `${e.green(k)} ${n}` : `${e.dim(P)} ${e.dim(n)}`} ${e.dim("/")} ${this.value ? `${e.dim(P)} ${e.dim(s)}` : `${e.green(k)} ${s}`}
${e.cyan(d)}
`;
    }
  } }).prompt();
}, ve = (t) => {
  const n = (s, r2) => {
    const i = s.label ?? String(s.value);
    switch (r2) {
      case "selected":
        return `${e.dim(i)}`;
      case "active":
        return `${e.green(k)} ${i} ${s.hint ? e.dim(`(${s.hint})`) : ""}`;
      case "cancelled":
        return `${e.strikethrough(e.dim(i))}`;
      default:
        return `${e.dim(P)} ${e.dim(i)}`;
    }
  };
  return new jD({ options: t.options, initialValue: t.initialValue, render() {
    const s = `${e.gray(o)}
${w(this.state)} ${t.message}
`;
    switch (this.state) {
      case "submit":
        return `${s}${e.gray(o)} ${n(this.options[this.cursor], "selected")}`;
      case "cancel":
        return `${s}${e.gray(o)} ${n(this.options[this.cursor], "cancelled")}
${e.gray(o)}`;
      default:
        return `${s}${e.cyan(o)} ${B({ cursor: this.cursor, options: this.options, maxItems: t.maxItems, style: (r2, i) => n(r2, i ? "active" : "inactive") }).join(`
${e.cyan(o)}  `)}
${e.cyan(d)}
`;
    }
  } }).prompt();
}, fe = (t) => {
  const n = (s, r2) => {
    const i = s.label ?? String(s.value);
    return r2 === "active" ? `${e.cyan(A)} ${i} ${s.hint ? e.dim(`(${s.hint})`) : ""}` : r2 === "selected" ? `${e.green(T)} ${e.dim(i)}` : r2 === "cancelled" ? `${e.strikethrough(e.dim(i))}` : r2 === "active-selected" ? `${e.green(T)} ${i} ${s.hint ? e.dim(`(${s.hint})`) : ""}` : r2 === "submitted" ? `${e.dim(i)}` : `${e.dim(F)} ${e.dim(i)}`;
  };
  return new wD({ options: t.options, initialValues: t.initialValues, required: t.required ?? true, cursorAt: t.cursorAt, validate(s) {
    if (this.required && s.length === 0)
      return `Please select at least one option.
${e.reset(e.dim(`Press ${e.gray(e.bgWhite(e.inverse(" space ")))} to select, ${e.gray(e.bgWhite(e.inverse(" enter ")))} to submit`))}`;
  }, render() {
    const s = `${e.gray(o)}
${w(this.state)} ${t.message}
`, r2 = (i, a) => {
      const c2 = this.value.includes(i.value);
      return a && c2 ? n(i, "active-selected") : c2 ? n(i, "selected") : n(i, a ? "active" : "inactive");
    };
    switch (this.state) {
      case "submit":
        return `${s}${e.gray(o)} ${this.options.filter(({ value: i }) => this.value.includes(i)).map((i) => n(i, "submitted")).join(e.dim(", ")) || e.dim("none")}`;
      case "cancel": {
        const i = this.options.filter(({ value: a }) => this.value.includes(a)).map((a) => n(a, "cancelled")).join(e.dim(", "));
        return `${s}${e.gray(o)} ${i.trim() ? `${i}
${e.gray(o)}` : ""}`;
      }
      case "error": {
        const i = this.error.split(`
`).map((a, c2) => c2 === 0 ? `${e.yellow(d)} ${e.yellow(a)}` : `   ${a}`).join(`
`);
        return `${s + e.yellow(o)} ${B({ options: this.options, cursor: this.cursor, maxItems: t.maxItems, style: r2 }).join(`
${e.yellow(o)}  `)}
${i}
`;
      }
      default:
        return `${s}${e.cyan(o)} ${B({ options: this.options, cursor: this.cursor, maxItems: t.maxItems, style: r2 }).join(`
${e.cyan(o)}  `)}
${e.cyan(d)}
`;
    }
  } }).prompt();
}, kCancel;
var init_prompt = __esm(() => {
  srcExports = requireSrc();
  picocolors = { exports: {} };
  picocolorsExports = /* @__PURE__ */ requirePicocolors();
  e = /* @__PURE__ */ getDefaultExportFromCjs(picocolorsExports);
  Q = J();
  P$1 = { exports: {} };
  (function(t) {
    var u = {};
    t.exports = u, u.eastAsianWidth = function(e2) {
      var s = e2.charCodeAt(0), i = e2.length == 2 ? e2.charCodeAt(1) : 0, D = s;
      return 55296 <= s && s <= 56319 && 56320 <= i && i <= 57343 && (s &= 1023, i &= 1023, D = s << 10 | i, D += 65536), D == 12288 || 65281 <= D && D <= 65376 || 65504 <= D && D <= 65510 ? "F" : D == 8361 || 65377 <= D && D <= 65470 || 65474 <= D && D <= 65479 || 65482 <= D && D <= 65487 || 65490 <= D && D <= 65495 || 65498 <= D && D <= 65500 || 65512 <= D && D <= 65518 ? "H" : 4352 <= D && D <= 4447 || 4515 <= D && D <= 4519 || 4602 <= D && D <= 4607 || 9001 <= D && D <= 9002 || 11904 <= D && D <= 11929 || 11931 <= D && D <= 12019 || 12032 <= D && D <= 12245 || 12272 <= D && D <= 12283 || 12289 <= D && D <= 12350 || 12353 <= D && D <= 12438 || 12441 <= D && D <= 12543 || 12549 <= D && D <= 12589 || 12593 <= D && D <= 12686 || 12688 <= D && D <= 12730 || 12736 <= D && D <= 12771 || 12784 <= D && D <= 12830 || 12832 <= D && D <= 12871 || 12880 <= D && D <= 13054 || 13056 <= D && D <= 19903 || 19968 <= D && D <= 42124 || 42128 <= D && D <= 42182 || 43360 <= D && D <= 43388 || 44032 <= D && D <= 55203 || 55216 <= D && D <= 55238 || 55243 <= D && D <= 55291 || 63744 <= D && D <= 64255 || 65040 <= D && D <= 65049 || 65072 <= D && D <= 65106 || 65108 <= D && D <= 65126 || 65128 <= D && D <= 65131 || 110592 <= D && D <= 110593 || 127488 <= D && D <= 127490 || 127504 <= D && D <= 127546 || 127552 <= D && D <= 127560 || 127568 <= D && D <= 127569 || 131072 <= D && D <= 194367 || 177984 <= D && D <= 196605 || 196608 <= D && D <= 262141 ? "W" : 32 <= D && D <= 126 || 162 <= D && D <= 163 || 165 <= D && D <= 166 || D == 172 || D == 175 || 10214 <= D && D <= 10221 || 10629 <= D && D <= 10630 ? "Na" : D == 161 || D == 164 || 167 <= D && D <= 168 || D == 170 || 173 <= D && D <= 174 || 176 <= D && D <= 180 || 182 <= D && D <= 186 || 188 <= D && D <= 191 || D == 198 || D == 208 || 215 <= D && D <= 216 || 222 <= D && D <= 225 || D == 230 || 232 <= D && D <= 234 || 236 <= D && D <= 237 || D == 240 || 242 <= D && D <= 243 || 247 <= D && D <= 250 || D == 252 || D == 254 || D == 257 || D == 273 || D == 275 || D == 283 || 294 <= D && D <= 295 || D == 299 || 305 <= D && D <= 307 || D == 312 || 319 <= D && D <= 322 || D == 324 || 328 <= D && D <= 331 || D == 333 || 338 <= D && D <= 339 || 358 <= D && D <= 359 || D == 363 || D == 462 || D == 464 || D == 466 || D == 468 || D == 470 || D == 472 || D == 474 || D == 476 || D == 593 || D == 609 || D == 708 || D == 711 || 713 <= D && D <= 715 || D == 717 || D == 720 || 728 <= D && D <= 731 || D == 733 || D == 735 || 768 <= D && D <= 879 || 913 <= D && D <= 929 || 931 <= D && D <= 937 || 945 <= D && D <= 961 || 963 <= D && D <= 969 || D == 1025 || 1040 <= D && D <= 1103 || D == 1105 || D == 8208 || 8211 <= D && D <= 8214 || 8216 <= D && D <= 8217 || 8220 <= D && D <= 8221 || 8224 <= D && D <= 8226 || 8228 <= D && D <= 8231 || D == 8240 || 8242 <= D && D <= 8243 || D == 8245 || D == 8251 || D == 8254 || D == 8308 || D == 8319 || 8321 <= D && D <= 8324 || D == 8364 || D == 8451 || D == 8453 || D == 8457 || D == 8467 || D == 8470 || 8481 <= D && D <= 8482 || D == 8486 || D == 8491 || 8531 <= D && D <= 8532 || 8539 <= D && D <= 8542 || 8544 <= D && D <= 8555 || 8560 <= D && D <= 8569 || D == 8585 || 8592 <= D && D <= 8601 || 8632 <= D && D <= 8633 || D == 8658 || D == 8660 || D == 8679 || D == 8704 || 8706 <= D && D <= 8707 || 8711 <= D && D <= 8712 || D == 8715 || D == 8719 || D == 8721 || D == 8725 || D == 8730 || 8733 <= D && D <= 8736 || D == 8739 || D == 8741 || 8743 <= D && D <= 8748 || D == 8750 || 8756 <= D && D <= 8759 || 8764 <= D && D <= 8765 || D == 8776 || D == 8780 || D == 8786 || 8800 <= D && D <= 8801 || 8804 <= D && D <= 8807 || 8810 <= D && D <= 8811 || 8814 <= D && D <= 8815 || 8834 <= D && D <= 8835 || 8838 <= D && D <= 8839 || D == 8853 || D == 8857 || D == 8869 || D == 8895 || D == 8978 || 9312 <= D && D <= 9449 || 9451 <= D && D <= 9547 || 9552 <= D && D <= 9587 || 9600 <= D && D <= 9615 || 9618 <= D && D <= 9621 || 9632 <= D && D <= 9633 || 9635 <= D && D <= 9641 || 9650 <= D && D <= 9651 || 9654 <= D && D <= 9655 || 9660 <= D && D <= 9661 || 9664 <= D && D <= 9665 || 9670 <= D && D <= 9672 || D == 9675 || 9678 <= D && D <= 9681 || 9698 <= D && D <= 9701 || D == 9711 || 9733 <= D && D <= 9734 || D == 9737 || 9742 <= D && D <= 9743 || 9748 <= D && D <= 9749 || D == 9756 || D == 9758 || D == 9792 || D == 9794 || 9824 <= D && D <= 9825 || 9827 <= D && D <= 9829 || 9831 <= D && D <= 9834 || 9836 <= D && D <= 9837 || D == 9839 || 9886 <= D && D <= 9887 || 9918 <= D && D <= 9919 || 9924 <= D && D <= 9933 || 9935 <= D && D <= 9953 || D == 9955 || 9960 <= D && D <= 9983 || D == 10045 || D == 10071 || 10102 <= D && D <= 10111 || 11093 <= D && D <= 11097 || 12872 <= D && D <= 12879 || 57344 <= D && D <= 63743 || 65024 <= D && D <= 65039 || D == 65533 || 127232 <= D && D <= 127242 || 127248 <= D && D <= 127277 || 127280 <= D && D <= 127337 || 127344 <= D && D <= 127386 || 917760 <= D && D <= 917999 || 983040 <= D && D <= 1048573 || 1048576 <= D && D <= 1114109 ? "A" : "N";
    }, u.characterLength = function(e2) {
      var s = this.eastAsianWidth(e2);
      return s == "F" || s == "W" || s == "A" ? 2 : 1;
    };
    function F(e2) {
      return e2.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
    }
    u.length = function(e2) {
      for (var s = F(e2), i = 0, D = 0;D < s.length; D++)
        i = i + this.characterLength(s[D]);
      return i;
    }, u.slice = function(e2, s, i) {
      textLen = u.length(e2), s = s || 0, i = i || 1, s < 0 && (s = textLen + s), i < 0 && (i = textLen + i);
      for (var D = "", C = 0, o = F(e2), E = 0;E < o.length; E++) {
        var a = o[E], n = u.length(a);
        if (C >= s - (n == 2 ? 1 : 0))
          if (C + n <= i)
            D += a;
          else
            break;
        C += n;
      }
      return D;
    };
  })(P$1);
  X = P$1.exports;
  DD = O(X);
  FD = O(uD);
  r = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], overline: [53, 55], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], blackBright: [90, 39], gray: [90, 39], grey: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgGray: [100, 49], bgGrey: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };
  Object.keys(r.modifier);
  tD = Object.keys(r.color);
  eD = Object.keys(r.bgColor);
  [...tD, ...eD];
  iD = sD();
  v = new Set(["\x1B", ""]);
  y = `${rD}8;;`;
  aD = ["up", "down", "left", "right", "space", "enter", "cancel"];
  c = { actions: new Set(aD), aliases: new Map([["k", "up"], ["j", "down"], ["h", "left"], ["l", "right"], ["\x03", "cancel"], ["escape", "cancel"]]) };
  globalThis.process.platform.startsWith("win");
  S = Symbol("clack:cancel");
  AD = Object.defineProperty;
  fD = class fD extends x {
    get cursor() {
      return this.value ? 0 : 1;
    }
    get _value() {
      return this.cursor === 0;
    }
    constructor(u) {
      super(u, false), this.value = !!u.initialValue, this.on("value", () => {
        this.value = this._value;
      }), this.on("confirm", (F) => {
        this.output.write(srcExports.cursor.move(0, -1)), this.value = F, this.state = "submit", this.close();
      }), this.on("cursor", () => {
        this.value = !this.value;
      });
    }
  };
  bD = Object.defineProperty;
  wD = class extends x {
    constructor(u) {
      super(u, false), Y(this, "options"), Y(this, "cursor", 0), this.options = u.options, this.value = [...u.initialValues ?? []], this.cursor = Math.max(this.options.findIndex(({ value: F }) => F === u.cursorAt), 0), this.on("key", (F) => {
        F === "a" && this.toggleAll();
      }), this.on("cursor", (F) => {
        switch (F) {
          case "left":
          case "up":
            this.cursor = this.cursor === 0 ? this.options.length - 1 : this.cursor - 1;
            break;
          case "down":
          case "right":
            this.cursor = this.cursor === this.options.length - 1 ? 0 : this.cursor + 1;
            break;
          case "space":
            this.toggleValue();
            break;
        }
      });
    }
    get _value() {
      return this.options[this.cursor].value;
    }
    toggleAll() {
      const u = this.value.length === this.options.length;
      this.value = u ? [] : this.options.map((F) => F.value);
    }
    toggleValue() {
      const u = this.value.includes(this._value);
      this.value = u ? this.value.filter((F) => F !== this._value) : [...this.value, this._value];
    }
  };
  SD = Object.defineProperty;
  jD = class jD extends x {
    constructor(u) {
      super(u, false), q(this, "options"), q(this, "cursor", 0), this.options = u.options, this.cursor = this.options.findIndex(({ value: F }) => F === u.initialValue), this.cursor === -1 && (this.cursor = 0), this.changeValue(), this.on("cursor", (F) => {
        switch (F) {
          case "left":
          case "up":
            this.cursor = this.cursor === 0 ? this.options.length - 1 : this.cursor - 1;
            break;
          case "down":
          case "right":
            this.cursor = this.cursor === this.options.length - 1 ? 0 : this.cursor + 1;
            break;
        }
        this.changeValue();
      });
    }
    get _value() {
      return this.options[this.cursor];
    }
    changeValue() {
      this.value = this._value.value;
    }
  };
  PD = class PD extends x {
    get valueWithCursor() {
      if (this.state === "submit")
        return this.value;
      if (this.cursor >= this.value.length)
        return `${this.value}█`;
      const u = this.value.slice(0, this.cursor), [F, ...e$1] = this.value.slice(this.cursor);
      return `${u}${e.inverse(F)}${e$1.join("")}`;
    }
    get cursor() {
      return this._cursor;
    }
    constructor(u) {
      super(u), this.on("finalize", () => {
        this.value || (this.value = u.defaultValue);
      });
    }
  };
  V = ce();
  le = u("❯", ">");
  L = u("■", "x");
  W = u("▲", "x");
  C = u("✔", "√");
  o = u("");
  d = u("");
  k = u("●", ">");
  P = u("○", " ");
  A = u("◻", "[•]");
  T = u("◼", "[+]");
  F = u("◻", "[ ]");
  `${e.gray(o)}  `;
  kCancel = Symbol.for("cancel");
});

// node_modules/consola/dist/core.mjs
var LogLevels = {
  silent: Number.NEGATIVE_INFINITY,
  fatal: 0,
  error: 0,
  warn: 1,
  log: 2,
  info: 3,
  success: 3,
  fail: 3,
  ready: 3,
  start: 3,
  box: 3,
  debug: 4,
  trace: 5,
  verbose: Number.POSITIVE_INFINITY
};
var LogTypes = {
  silent: {
    level: -1
  },
  fatal: {
    level: LogLevels.fatal
  },
  error: {
    level: LogLevels.error
  },
  warn: {
    level: LogLevels.warn
  },
  log: {
    level: LogLevels.log
  },
  info: {
    level: LogLevels.info
  },
  success: {
    level: LogLevels.success
  },
  fail: {
    level: LogLevels.fail
  },
  ready: {
    level: LogLevels.info
  },
  start: {
    level: LogLevels.info
  },
  box: {
    level: LogLevels.info
  },
  debug: {
    level: LogLevels.debug
  },
  trace: {
    level: LogLevels.trace
  },
  verbose: {
    level: LogLevels.verbose
  }
};
function isPlainObject$1(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}
function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject$1(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === undefined) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject$1(value) && isPlainObject$1(object[key])) {
      object[key] = _defu(value, object[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => arguments_.reduce((p, c) => _defu(p, c, "", merger), {});
}
var defu = createDefu();
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
function isLogObj(arg) {
  if (!isPlainObject(arg)) {
    return false;
  }
  if (!arg.message && !arg.args) {
    return false;
  }
  if (arg.stack) {
    return false;
  }
  return true;
}
var paused = false;
var queue = [];

class Consola {
  options;
  _lastLog;
  _mockFn;
  constructor(options = {}) {
    const types = options.types || LogTypes;
    this.options = defu({
      ...options,
      defaults: { ...options.defaults },
      level: _normalizeLogLevel(options.level, types),
      reporters: [...options.reporters || []]
    }, {
      types: LogTypes,
      throttle: 1000,
      throttleMin: 5,
      formatOptions: {
        date: true,
        colors: false,
        compact: true
      }
    });
    for (const type in types) {
      const defaults = {
        type,
        ...this.options.defaults,
        ...types[type]
      };
      this[type] = this._wrapLogFn(defaults);
      this[type].raw = this._wrapLogFn(defaults, true);
    }
    if (this.options.mockFn) {
      this.mockTypes();
    }
    this._lastLog = {};
  }
  get level() {
    return this.options.level;
  }
  set level(level) {
    this.options.level = _normalizeLogLevel(level, this.options.types, this.options.level);
  }
  prompt(message, opts) {
    if (!this.options.prompt) {
      throw new Error("prompt is not supported!");
    }
    return this.options.prompt(message, opts);
  }
  create(options) {
    const instance = new Consola({
      ...this.options,
      ...options
    });
    if (this._mockFn) {
      instance.mockTypes(this._mockFn);
    }
    return instance;
  }
  withDefaults(defaults) {
    return this.create({
      ...this.options,
      defaults: {
        ...this.options.defaults,
        ...defaults
      }
    });
  }
  withTag(tag) {
    return this.withDefaults({
      tag: this.options.defaults.tag ? this.options.defaults.tag + ":" + tag : tag
    });
  }
  addReporter(reporter) {
    this.options.reporters.push(reporter);
    return this;
  }
  removeReporter(reporter) {
    if (reporter) {
      const i = this.options.reporters.indexOf(reporter);
      if (i !== -1) {
        return this.options.reporters.splice(i, 1);
      }
    } else {
      this.options.reporters.splice(0);
    }
    return this;
  }
  setReporters(reporters) {
    this.options.reporters = Array.isArray(reporters) ? reporters : [reporters];
    return this;
  }
  wrapAll() {
    this.wrapConsole();
    this.wrapStd();
  }
  restoreAll() {
    this.restoreConsole();
    this.restoreStd();
  }
  wrapConsole() {
    for (const type in this.options.types) {
      if (!console["__" + type]) {
        console["__" + type] = console[type];
      }
      console[type] = this[type].raw;
    }
  }
  restoreConsole() {
    for (const type in this.options.types) {
      if (console["__" + type]) {
        console[type] = console["__" + type];
        delete console["__" + type];
      }
    }
  }
  wrapStd() {
    this._wrapStream(this.options.stdout, "log");
    this._wrapStream(this.options.stderr, "log");
  }
  _wrapStream(stream, type) {
    if (!stream) {
      return;
    }
    if (!stream.__write) {
      stream.__write = stream.write;
    }
    stream.write = (data) => {
      this[type].raw(String(data).trim());
    };
  }
  restoreStd() {
    this._restoreStream(this.options.stdout);
    this._restoreStream(this.options.stderr);
  }
  _restoreStream(stream) {
    if (!stream) {
      return;
    }
    if (stream.__write) {
      stream.write = stream.__write;
      delete stream.__write;
    }
  }
  pauseLogs() {
    paused = true;
  }
  resumeLogs() {
    paused = false;
    const _queue = queue.splice(0);
    for (const item of _queue) {
      item[0]._logFn(item[1], item[2]);
    }
  }
  mockTypes(mockFn) {
    const _mockFn = mockFn || this.options.mockFn;
    this._mockFn = _mockFn;
    if (typeof _mockFn !== "function") {
      return;
    }
    for (const type in this.options.types) {
      this[type] = _mockFn(type, this.options.types[type]) || this[type];
      this[type].raw = this[type];
    }
  }
  _wrapLogFn(defaults, isRaw) {
    return (...args) => {
      if (paused) {
        queue.push([this, defaults, args, isRaw]);
        return;
      }
      return this._logFn(defaults, args, isRaw);
    };
  }
  _logFn(defaults, args, isRaw) {
    if ((defaults.level || 0) > this.level) {
      return false;
    }
    const logObj = {
      date: /* @__PURE__ */ new Date,
      args: [],
      ...defaults,
      level: _normalizeLogLevel(defaults.level, this.options.types)
    };
    if (!isRaw && args.length === 1 && isLogObj(args[0])) {
      Object.assign(logObj, args[0]);
    } else {
      logObj.args = [...args];
    }
    if (logObj.message) {
      logObj.args.unshift(logObj.message);
      delete logObj.message;
    }
    if (logObj.additional) {
      if (!Array.isArray(logObj.additional)) {
        logObj.additional = logObj.additional.split(`
`);
      }
      logObj.args.push(`
` + logObj.additional.join(`
`));
      delete logObj.additional;
    }
    logObj.type = typeof logObj.type === "string" ? logObj.type.toLowerCase() : "log";
    logObj.tag = typeof logObj.tag === "string" ? logObj.tag : "";
    const resolveLog = (newLog = false) => {
      const repeated = (this._lastLog.count || 0) - this.options.throttleMin;
      if (this._lastLog.object && repeated > 0) {
        const args2 = [...this._lastLog.object.args];
        if (repeated > 1) {
          args2.push(`(repeated ${repeated} times)`);
        }
        this._log({ ...this._lastLog.object, args: args2 });
        this._lastLog.count = 1;
      }
      if (newLog) {
        this._lastLog.object = logObj;
        this._log(logObj);
      }
    };
    clearTimeout(this._lastLog.timeout);
    const diffTime = this._lastLog.time && logObj.date ? logObj.date.getTime() - this._lastLog.time.getTime() : 0;
    this._lastLog.time = logObj.date;
    if (diffTime < this.options.throttle) {
      try {
        const serializedLog = JSON.stringify([
          logObj.type,
          logObj.tag,
          logObj.args
        ]);
        const isSameLog = this._lastLog.serialized === serializedLog;
        this._lastLog.serialized = serializedLog;
        if (isSameLog) {
          this._lastLog.count = (this._lastLog.count || 0) + 1;
          if (this._lastLog.count > this.options.throttleMin) {
            this._lastLog.timeout = setTimeout(resolveLog, this.options.throttle);
            return;
          }
        }
      } catch {}
    }
    resolveLog(true);
  }
  _log(logObj) {
    for (const reporter of this.options.reporters) {
      reporter.log(logObj, {
        options: this.options
      });
    }
  }
}
function _normalizeLogLevel(input, types = {}, defaultLevel = 3) {
  if (input === undefined) {
    return defaultLevel;
  }
  if (typeof input === "number") {
    return input;
  }
  if (types[input] && types[input].level !== undefined) {
    return types[input].level;
  }
  return defaultLevel;
}
Consola.prototype.add = Consola.prototype.addReporter;
Consola.prototype.remove = Consola.prototype.removeReporter;
Consola.prototype.clear = Consola.prototype.removeReporter;
Consola.prototype.withScope = Consola.prototype.withTag;
Consola.prototype.mock = Consola.prototype.mockTypes;
Consola.prototype.pause = Consola.prototype.pauseLogs;
Consola.prototype.resume = Consola.prototype.resumeLogs;
function createConsola(options = {}) {
  return new Consola(options);
}
// node_modules/consola/dist/shared/consola.DRwqZj3T.mjs
import { formatWithOptions } from "node:util";
import { sep } from "node:path";
function parseStack(stack, message) {
  const cwd = process.cwd() + sep;
  const lines = stack.split(`
`).splice(message.split(`
`).length).map((l) => l.trim().replace("file://", "").replace(cwd, ""));
  return lines;
}
function writeStream(data, stream) {
  const write = stream.__write || stream.write;
  return write.call(stream, data);
}
var bracket = (x) => x ? `[${x}]` : "";

class BasicReporter {
  formatStack(stack, message, opts) {
    const indent = "  ".repeat((opts?.errorLevel || 0) + 1);
    return indent + parseStack(stack, message).join(`
${indent}`);
  }
  formatError(err, opts) {
    const message = err.message ?? formatWithOptions(opts, err);
    const stack = err.stack ? this.formatStack(err.stack, message, opts) : "";
    const level = opts?.errorLevel || 0;
    const causedPrefix = level > 0 ? `${"  ".repeat(level)}[cause]: ` : "";
    const causedError = err.cause ? `

` + this.formatError(err.cause, { ...opts, errorLevel: level + 1 }) : "";
    return causedPrefix + message + `
` + stack + causedError;
  }
  formatArgs(args, opts) {
    const _args = args.map((arg) => {
      if (arg && typeof arg.stack === "string") {
        return this.formatError(arg, opts);
      }
      return arg;
    });
    return formatWithOptions(opts, ..._args);
  }
  formatDate(date, opts) {
    return opts.date ? date.toLocaleTimeString() : "";
  }
  filterAndJoin(arr) {
    return arr.filter(Boolean).join(" ");
  }
  formatLogObj(logObj, opts) {
    const message = this.formatArgs(logObj.args, opts);
    if (logObj.type === "box") {
      return `
` + [
        bracket(logObj.tag),
        logObj.title && logObj.title,
        ...message.split(`
`)
      ].filter(Boolean).map((l) => " > " + l).join(`
`) + `
`;
    }
    return this.filterAndJoin([
      bracket(logObj.type),
      bracket(logObj.tag),
      message
    ]);
  }
  log(logObj, ctx) {
    const line = this.formatLogObj(logObj, {
      columns: ctx.options.stdout.columns || 0,
      ...ctx.options.formatOptions
    });
    return writeStream(line + `
`, logObj.level < 2 ? ctx.options.stderr || process.stderr : ctx.options.stdout || process.stdout);
  }
}

// node_modules/consola/dist/index.mjs
import g$1 from "node:process";

// node_modules/consola/dist/shared/consola.DXBYu-KD.mjs
import * as tty from "node:tty";
var {
  env = {},
  argv = [],
  platform = ""
} = typeof process === "undefined" ? {} : process;
var isDisabled = "NO_COLOR" in env || argv.includes("--no-color");
var isForced = "FORCE_COLOR" in env || argv.includes("--color");
var isWindows = platform === "win32";
var isDumbTerminal = env.TERM === "dumb";
var isCompatibleTerminal = tty && tty.isatty && tty.isatty(1) && env.TERM && !isDumbTerminal;
var isCI = "CI" in env && (("GITHUB_ACTIONS" in env) || ("GITLAB_CI" in env) || ("CIRCLECI" in env));
var isColorSupported = !isDisabled && (isForced || isWindows && !isDumbTerminal || isCompatibleTerminal || isCI);
function replaceClose(index, string, close, replace, head = string.slice(0, Math.max(0, index)) + replace, tail = string.slice(Math.max(0, index + close.length)), next = tail.indexOf(close)) {
  return head + (next < 0 ? tail : replaceClose(next, tail, close, replace));
}
function clearBleed(index, string, open, close, replace) {
  return index < 0 ? open + string + close : open + replaceClose(index, string, close, replace) + close;
}
function filterEmpty(open, close, replace = open, at = open.length + 1) {
  return (string) => string || !(string === "" || string === undefined) ? clearBleed(("" + string).indexOf(close, at), string, open, close, replace) : "";
}
function init(open, close, replace) {
  return filterEmpty(`\x1B[${open}m`, `\x1B[${close}m`, replace);
}
var colorDefs = {
  reset: init(0, 0),
  bold: init(1, 22, "\x1B[22m\x1B[1m"),
  dim: init(2, 22, "\x1B[22m\x1B[2m"),
  italic: init(3, 23),
  underline: init(4, 24),
  inverse: init(7, 27),
  hidden: init(8, 28),
  strikethrough: init(9, 29),
  black: init(30, 39),
  red: init(31, 39),
  green: init(32, 39),
  yellow: init(33, 39),
  blue: init(34, 39),
  magenta: init(35, 39),
  cyan: init(36, 39),
  white: init(37, 39),
  gray: init(90, 39),
  bgBlack: init(40, 49),
  bgRed: init(41, 49),
  bgGreen: init(42, 49),
  bgYellow: init(43, 49),
  bgBlue: init(44, 49),
  bgMagenta: init(45, 49),
  bgCyan: init(46, 49),
  bgWhite: init(47, 49),
  blackBright: init(90, 39),
  redBright: init(91, 39),
  greenBright: init(92, 39),
  yellowBright: init(93, 39),
  blueBright: init(94, 39),
  magentaBright: init(95, 39),
  cyanBright: init(96, 39),
  whiteBright: init(97, 39),
  bgBlackBright: init(100, 49),
  bgRedBright: init(101, 49),
  bgGreenBright: init(102, 49),
  bgYellowBright: init(103, 49),
  bgBlueBright: init(104, 49),
  bgMagentaBright: init(105, 49),
  bgCyanBright: init(106, 49),
  bgWhiteBright: init(107, 49)
};
function createColors(useColor = isColorSupported) {
  return useColor ? colorDefs : Object.fromEntries(Object.keys(colorDefs).map((key) => [key, String]));
}
var colors = createColors();
function getColor(color, fallback = "reset") {
  return colors[color] || colors[fallback];
}
var ansiRegex = [
  String.raw`[\u001B\u009B][[\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\d\/#&.:=?%@~_]+)*|[a-zA-Z\d]+(?:;[-a-zA-Z\d\/#&.:=?%@~_]*)*)?\u0007)`,
  String.raw`(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-nq-uy=><~]))`
].join("|");
function stripAnsi(text) {
  return text.replace(new RegExp(ansiRegex, "g"), "");
}
var boxStylePresets = {
  solid: {
    tl: "┌",
    tr: "┐",
    bl: "└",
    br: "┘",
    h: "─",
    v: "│"
  },
  double: {
    tl: "╔",
    tr: "╗",
    bl: "╚",
    br: "╝",
    h: "═",
    v: "║"
  },
  doubleSingle: {
    tl: "╓",
    tr: "╖",
    bl: "╙",
    br: "╜",
    h: "─",
    v: "║"
  },
  doubleSingleRounded: {
    tl: "╭",
    tr: "╮",
    bl: "╰",
    br: "╯",
    h: "─",
    v: "║"
  },
  singleThick: {
    tl: "┏",
    tr: "┓",
    bl: "┗",
    br: "┛",
    h: "━",
    v: "┃"
  },
  singleDouble: {
    tl: "╒",
    tr: "╕",
    bl: "╘",
    br: "╛",
    h: "═",
    v: "│"
  },
  singleDoubleRounded: {
    tl: "╭",
    tr: "╮",
    bl: "╰",
    br: "╯",
    h: "═",
    v: "│"
  },
  rounded: {
    tl: "╭",
    tr: "╮",
    bl: "╰",
    br: "╯",
    h: "─",
    v: "│"
  }
};
var defaultStyle = {
  borderColor: "white",
  borderStyle: "rounded",
  valign: "center",
  padding: 2,
  marginLeft: 1,
  marginTop: 1,
  marginBottom: 1
};
function box(text, _opts = {}) {
  const opts = {
    ..._opts,
    style: {
      ...defaultStyle,
      ..._opts.style
    }
  };
  const textLines = text.split(`
`);
  const boxLines = [];
  const _color = getColor(opts.style.borderColor);
  const borderStyle = {
    ...typeof opts.style.borderStyle === "string" ? boxStylePresets[opts.style.borderStyle] || boxStylePresets.solid : opts.style.borderStyle
  };
  if (_color) {
    for (const key in borderStyle) {
      borderStyle[key] = _color(borderStyle[key]);
    }
  }
  const paddingOffset = opts.style.padding % 2 === 0 ? opts.style.padding : opts.style.padding + 1;
  const height = textLines.length + paddingOffset;
  const width = Math.max(...textLines.map((line) => stripAnsi(line).length), opts.title ? stripAnsi(opts.title).length : 0) + paddingOffset;
  const widthOffset = width + paddingOffset;
  const leftSpace = opts.style.marginLeft > 0 ? " ".repeat(opts.style.marginLeft) : "";
  if (opts.style.marginTop > 0) {
    boxLines.push("".repeat(opts.style.marginTop));
  }
  if (opts.title) {
    const title = _color ? _color(opts.title) : opts.title;
    const left = borderStyle.h.repeat(Math.floor((width - stripAnsi(opts.title).length) / 2));
    const right = borderStyle.h.repeat(width - stripAnsi(opts.title).length - stripAnsi(left).length + paddingOffset);
    boxLines.push(`${leftSpace}${borderStyle.tl}${left}${title}${right}${borderStyle.tr}`);
  } else {
    boxLines.push(`${leftSpace}${borderStyle.tl}${borderStyle.h.repeat(widthOffset)}${borderStyle.tr}`);
  }
  const valignOffset = opts.style.valign === "center" ? Math.floor((height - textLines.length) / 2) : opts.style.valign === "top" ? height - textLines.length - paddingOffset : height - textLines.length;
  for (let i = 0;i < height; i++) {
    if (i < valignOffset || i >= valignOffset + textLines.length) {
      boxLines.push(`${leftSpace}${borderStyle.v}${" ".repeat(widthOffset)}${borderStyle.v}`);
    } else {
      const line = textLines[i - valignOffset];
      const left = " ".repeat(paddingOffset);
      const right = " ".repeat(width - stripAnsi(line).length);
      boxLines.push(`${leftSpace}${borderStyle.v}${left}${line}${right}${borderStyle.v}`);
    }
  }
  boxLines.push(`${leftSpace}${borderStyle.bl}${borderStyle.h.repeat(widthOffset)}${borderStyle.br}`);
  if (opts.style.marginBottom > 0) {
    boxLines.push("".repeat(opts.style.marginBottom));
  }
  return boxLines.join(`
`);
}

// node_modules/consola/dist/index.mjs
var r2 = Object.create(null);
var i = (e2) => globalThis.process?.env || import.meta.env || globalThis.Deno?.env.toObject() || globalThis.__env__ || (e2 ? r2 : globalThis);
var o2 = new Proxy(r2, { get(e2, s) {
  return i()[s] ?? r2[s];
}, has(e2, s) {
  const E = i();
  return s in E || s in r2;
}, set(e2, s, E) {
  const B2 = i(true);
  return B2[s] = E, true;
}, deleteProperty(e2, s) {
  if (!s)
    return false;
  const E = i(true);
  return delete E[s], true;
}, ownKeys() {
  const e2 = i(true);
  return Object.keys(e2);
} });
var t = typeof process < "u" && process.env && "development" || "";
var f2 = [["APPVEYOR"], ["AWS_AMPLIFY", "AWS_APP_ID", { ci: true }], ["AZURE_PIPELINES", "SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"], ["AZURE_STATIC", "INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"], ["APPCIRCLE", "AC_APPCIRCLE"], ["BAMBOO", "bamboo_planKey"], ["BITBUCKET", "BITBUCKET_COMMIT"], ["BITRISE", "BITRISE_IO"], ["BUDDY", "BUDDY_WORKSPACE_ID"], ["BUILDKITE"], ["CIRCLE", "CIRCLECI"], ["CIRRUS", "CIRRUS_CI"], ["CLOUDFLARE_PAGES", "CF_PAGES", { ci: true }], ["CODEBUILD", "CODEBUILD_BUILD_ARN"], ["CODEFRESH", "CF_BUILD_ID"], ["DRONE"], ["DRONE", "DRONE_BUILD_EVENT"], ["DSARI"], ["GITHUB_ACTIONS"], ["GITLAB", "GITLAB_CI"], ["GITLAB", "CI_MERGE_REQUEST_ID"], ["GOCD", "GO_PIPELINE_LABEL"], ["LAYERCI"], ["HUDSON", "HUDSON_URL"], ["JENKINS", "JENKINS_URL"], ["MAGNUM"], ["NETLIFY"], ["NETLIFY", "NETLIFY_LOCAL", { ci: false }], ["NEVERCODE"], ["RENDER"], ["SAIL", "SAILCI"], ["SEMAPHORE"], ["SCREWDRIVER"], ["SHIPPABLE"], ["SOLANO", "TDDIUM"], ["STRIDER"], ["TEAMCITY", "TEAMCITY_VERSION"], ["TRAVIS"], ["VERCEL", "NOW_BUILDER"], ["VERCEL", "VERCEL", { ci: false }], ["VERCEL", "VERCEL_ENV", { ci: false }], ["APPCENTER", "APPCENTER_BUILD_ID"], ["CODESANDBOX", "CODESANDBOX_SSE", { ci: false }], ["CODESANDBOX", "CODESANDBOX_HOST", { ci: false }], ["STACKBLITZ"], ["STORMKIT"], ["CLEAVR"], ["ZEABUR"], ["CODESPHERE", "CODESPHERE_APP_ID", { ci: true }], ["RAILWAY", "RAILWAY_PROJECT_ID"], ["RAILWAY", "RAILWAY_SERVICE_ID"], ["DENO-DEPLOY", "DENO_DEPLOYMENT_ID"], ["FIREBASE_APP_HOSTING", "FIREBASE_APP_HOSTING", { ci: true }]];
function b() {
  if (globalThis.process?.env)
    for (const e2 of f2) {
      const s = e2[1] || e2[0];
      if (globalThis.process?.env[s])
        return { name: e2[0].toLowerCase(), ...e2[2] };
    }
  return globalThis.process?.env?.SHELL === "/bin/jsh" && globalThis.process?.versions?.webcontainer ? { name: "stackblitz", ci: false } : { name: "", ci: false };
}
var l = b();
l.name;
function n(e2) {
  return e2 ? e2 !== "false" : false;
}
var I2 = globalThis.process?.platform || "";
var T2 = n(o2.CI) || l.ci !== false;
var a = n(globalThis.process?.stdout && globalThis.process?.stdout.isTTY);
var g2 = n(o2.DEBUG);
var R2 = t === "test" || n(o2.TEST);
n(o2.MINIMAL);
var A2 = /^win/i.test(I2);
!n(o2.NO_COLOR) && (n(o2.FORCE_COLOR) || (a || A2) && o2.TERM);
var C2 = (globalThis.process?.versions?.node || "").replace(/^v/, "") || null;
Number(C2?.split(".")[0]);
var y2 = globalThis.process || Object.create(null);
var _2 = { versions: {} };
new Proxy(y2, { get(e2, s) {
  if (s === "env")
    return o2;
  if (s in e2)
    return e2[s];
  if (s in _2)
    return _2[s];
} });
var c2 = globalThis.process?.release?.name === "node";
var O2 = !!globalThis.Bun || !!globalThis.process?.versions?.bun;
var D = !!globalThis.Deno;
var L2 = !!globalThis.fastly;
var S2 = !!globalThis.Netlify;
var u2 = !!globalThis.EdgeRuntime;
var N2 = globalThis.navigator?.userAgent === "Cloudflare-Workers";
var F2 = [[S2, "netlify"], [u2, "edge-light"], [N2, "workerd"], [L2, "fastly"], [D, "deno"], [O2, "bun"], [c2, "node"]];
function G2() {
  const e2 = F2.find((s) => s[0]);
  if (e2)
    return { name: e2[1] };
}
var P2 = G2();
P2?.name;
function ansiRegex2({ onlyFirst = false } = {}) {
  const ST = "(?:\\u0007|\\u001B\\u005C|\\u009C)";
  const pattern = [
    `[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?${ST})`,
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"
  ].join("|");
  return new RegExp(pattern, onlyFirst ? undefined : "g");
}
var regex = ansiRegex2();
function stripAnsi2(string) {
  if (typeof string !== "string") {
    throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``);
  }
  return string.replace(regex, "");
}
function isAmbiguous(x2) {
  return x2 === 161 || x2 === 164 || x2 === 167 || x2 === 168 || x2 === 170 || x2 === 173 || x2 === 174 || x2 >= 176 && x2 <= 180 || x2 >= 182 && x2 <= 186 || x2 >= 188 && x2 <= 191 || x2 === 198 || x2 === 208 || x2 === 215 || x2 === 216 || x2 >= 222 && x2 <= 225 || x2 === 230 || x2 >= 232 && x2 <= 234 || x2 === 236 || x2 === 237 || x2 === 240 || x2 === 242 || x2 === 243 || x2 >= 247 && x2 <= 250 || x2 === 252 || x2 === 254 || x2 === 257 || x2 === 273 || x2 === 275 || x2 === 283 || x2 === 294 || x2 === 295 || x2 === 299 || x2 >= 305 && x2 <= 307 || x2 === 312 || x2 >= 319 && x2 <= 322 || x2 === 324 || x2 >= 328 && x2 <= 331 || x2 === 333 || x2 === 338 || x2 === 339 || x2 === 358 || x2 === 359 || x2 === 363 || x2 === 462 || x2 === 464 || x2 === 466 || x2 === 468 || x2 === 470 || x2 === 472 || x2 === 474 || x2 === 476 || x2 === 593 || x2 === 609 || x2 === 708 || x2 === 711 || x2 >= 713 && x2 <= 715 || x2 === 717 || x2 === 720 || x2 >= 728 && x2 <= 731 || x2 === 733 || x2 === 735 || x2 >= 768 && x2 <= 879 || x2 >= 913 && x2 <= 929 || x2 >= 931 && x2 <= 937 || x2 >= 945 && x2 <= 961 || x2 >= 963 && x2 <= 969 || x2 === 1025 || x2 >= 1040 && x2 <= 1103 || x2 === 1105 || x2 === 8208 || x2 >= 8211 && x2 <= 8214 || x2 === 8216 || x2 === 8217 || x2 === 8220 || x2 === 8221 || x2 >= 8224 && x2 <= 8226 || x2 >= 8228 && x2 <= 8231 || x2 === 8240 || x2 === 8242 || x2 === 8243 || x2 === 8245 || x2 === 8251 || x2 === 8254 || x2 === 8308 || x2 === 8319 || x2 >= 8321 && x2 <= 8324 || x2 === 8364 || x2 === 8451 || x2 === 8453 || x2 === 8457 || x2 === 8467 || x2 === 8470 || x2 === 8481 || x2 === 8482 || x2 === 8486 || x2 === 8491 || x2 === 8531 || x2 === 8532 || x2 >= 8539 && x2 <= 8542 || x2 >= 8544 && x2 <= 8555 || x2 >= 8560 && x2 <= 8569 || x2 === 8585 || x2 >= 8592 && x2 <= 8601 || x2 === 8632 || x2 === 8633 || x2 === 8658 || x2 === 8660 || x2 === 8679 || x2 === 8704 || x2 === 8706 || x2 === 8707 || x2 === 8711 || x2 === 8712 || x2 === 8715 || x2 === 8719 || x2 === 8721 || x2 === 8725 || x2 === 8730 || x2 >= 8733 && x2 <= 8736 || x2 === 8739 || x2 === 8741 || x2 >= 8743 && x2 <= 8748 || x2 === 8750 || x2 >= 8756 && x2 <= 8759 || x2 === 8764 || x2 === 8765 || x2 === 8776 || x2 === 8780 || x2 === 8786 || x2 === 8800 || x2 === 8801 || x2 >= 8804 && x2 <= 8807 || x2 === 8810 || x2 === 8811 || x2 === 8814 || x2 === 8815 || x2 === 8834 || x2 === 8835 || x2 === 8838 || x2 === 8839 || x2 === 8853 || x2 === 8857 || x2 === 8869 || x2 === 8895 || x2 === 8978 || x2 >= 9312 && x2 <= 9449 || x2 >= 9451 && x2 <= 9547 || x2 >= 9552 && x2 <= 9587 || x2 >= 9600 && x2 <= 9615 || x2 >= 9618 && x2 <= 9621 || x2 === 9632 || x2 === 9633 || x2 >= 9635 && x2 <= 9641 || x2 === 9650 || x2 === 9651 || x2 === 9654 || x2 === 9655 || x2 === 9660 || x2 === 9661 || x2 === 9664 || x2 === 9665 || x2 >= 9670 && x2 <= 9672 || x2 === 9675 || x2 >= 9678 && x2 <= 9681 || x2 >= 9698 && x2 <= 9701 || x2 === 9711 || x2 === 9733 || x2 === 9734 || x2 === 9737 || x2 === 9742 || x2 === 9743 || x2 === 9756 || x2 === 9758 || x2 === 9792 || x2 === 9794 || x2 === 9824 || x2 === 9825 || x2 >= 9827 && x2 <= 9829 || x2 >= 9831 && x2 <= 9834 || x2 === 9836 || x2 === 9837 || x2 === 9839 || x2 === 9886 || x2 === 9887 || x2 === 9919 || x2 >= 9926 && x2 <= 9933 || x2 >= 9935 && x2 <= 9939 || x2 >= 9941 && x2 <= 9953 || x2 === 9955 || x2 === 9960 || x2 === 9961 || x2 >= 9963 && x2 <= 9969 || x2 === 9972 || x2 >= 9974 && x2 <= 9977 || x2 === 9979 || x2 === 9980 || x2 === 9982 || x2 === 9983 || x2 === 10045 || x2 >= 10102 && x2 <= 10111 || x2 >= 11094 && x2 <= 11097 || x2 >= 12872 && x2 <= 12879 || x2 >= 57344 && x2 <= 63743 || x2 >= 65024 && x2 <= 65039 || x2 === 65533 || x2 >= 127232 && x2 <= 127242 || x2 >= 127248 && x2 <= 127277 || x2 >= 127280 && x2 <= 127337 || x2 >= 127344 && x2 <= 127373 || x2 === 127375 || x2 === 127376 || x2 >= 127387 && x2 <= 127404 || x2 >= 917760 && x2 <= 917999 || x2 >= 983040 && x2 <= 1048573 || x2 >= 1048576 && x2 <= 1114109;
}
function isFullWidth(x2) {
  return x2 === 12288 || x2 >= 65281 && x2 <= 65376 || x2 >= 65504 && x2 <= 65510;
}
function isWide(x2) {
  return x2 >= 4352 && x2 <= 4447 || x2 === 8986 || x2 === 8987 || x2 === 9001 || x2 === 9002 || x2 >= 9193 && x2 <= 9196 || x2 === 9200 || x2 === 9203 || x2 === 9725 || x2 === 9726 || x2 === 9748 || x2 === 9749 || x2 >= 9776 && x2 <= 9783 || x2 >= 9800 && x2 <= 9811 || x2 === 9855 || x2 >= 9866 && x2 <= 9871 || x2 === 9875 || x2 === 9889 || x2 === 9898 || x2 === 9899 || x2 === 9917 || x2 === 9918 || x2 === 9924 || x2 === 9925 || x2 === 9934 || x2 === 9940 || x2 === 9962 || x2 === 9970 || x2 === 9971 || x2 === 9973 || x2 === 9978 || x2 === 9981 || x2 === 9989 || x2 === 9994 || x2 === 9995 || x2 === 10024 || x2 === 10060 || x2 === 10062 || x2 >= 10067 && x2 <= 10069 || x2 === 10071 || x2 >= 10133 && x2 <= 10135 || x2 === 10160 || x2 === 10175 || x2 === 11035 || x2 === 11036 || x2 === 11088 || x2 === 11093 || x2 >= 11904 && x2 <= 11929 || x2 >= 11931 && x2 <= 12019 || x2 >= 12032 && x2 <= 12245 || x2 >= 12272 && x2 <= 12287 || x2 >= 12289 && x2 <= 12350 || x2 >= 12353 && x2 <= 12438 || x2 >= 12441 && x2 <= 12543 || x2 >= 12549 && x2 <= 12591 || x2 >= 12593 && x2 <= 12686 || x2 >= 12688 && x2 <= 12773 || x2 >= 12783 && x2 <= 12830 || x2 >= 12832 && x2 <= 12871 || x2 >= 12880 && x2 <= 42124 || x2 >= 42128 && x2 <= 42182 || x2 >= 43360 && x2 <= 43388 || x2 >= 44032 && x2 <= 55203 || x2 >= 63744 && x2 <= 64255 || x2 >= 65040 && x2 <= 65049 || x2 >= 65072 && x2 <= 65106 || x2 >= 65108 && x2 <= 65126 || x2 >= 65128 && x2 <= 65131 || x2 >= 94176 && x2 <= 94180 || x2 === 94192 || x2 === 94193 || x2 >= 94208 && x2 <= 100343 || x2 >= 100352 && x2 <= 101589 || x2 >= 101631 && x2 <= 101640 || x2 >= 110576 && x2 <= 110579 || x2 >= 110581 && x2 <= 110587 || x2 === 110589 || x2 === 110590 || x2 >= 110592 && x2 <= 110882 || x2 === 110898 || x2 >= 110928 && x2 <= 110930 || x2 === 110933 || x2 >= 110948 && x2 <= 110951 || x2 >= 110960 && x2 <= 111355 || x2 >= 119552 && x2 <= 119638 || x2 >= 119648 && x2 <= 119670 || x2 === 126980 || x2 === 127183 || x2 === 127374 || x2 >= 127377 && x2 <= 127386 || x2 >= 127488 && x2 <= 127490 || x2 >= 127504 && x2 <= 127547 || x2 >= 127552 && x2 <= 127560 || x2 === 127568 || x2 === 127569 || x2 >= 127584 && x2 <= 127589 || x2 >= 127744 && x2 <= 127776 || x2 >= 127789 && x2 <= 127797 || x2 >= 127799 && x2 <= 127868 || x2 >= 127870 && x2 <= 127891 || x2 >= 127904 && x2 <= 127946 || x2 >= 127951 && x2 <= 127955 || x2 >= 127968 && x2 <= 127984 || x2 === 127988 || x2 >= 127992 && x2 <= 128062 || x2 === 128064 || x2 >= 128066 && x2 <= 128252 || x2 >= 128255 && x2 <= 128317 || x2 >= 128331 && x2 <= 128334 || x2 >= 128336 && x2 <= 128359 || x2 === 128378 || x2 === 128405 || x2 === 128406 || x2 === 128420 || x2 >= 128507 && x2 <= 128591 || x2 >= 128640 && x2 <= 128709 || x2 === 128716 || x2 >= 128720 && x2 <= 128722 || x2 >= 128725 && x2 <= 128727 || x2 >= 128732 && x2 <= 128735 || x2 === 128747 || x2 === 128748 || x2 >= 128756 && x2 <= 128764 || x2 >= 128992 && x2 <= 129003 || x2 === 129008 || x2 >= 129292 && x2 <= 129338 || x2 >= 129340 && x2 <= 129349 || x2 >= 129351 && x2 <= 129535 || x2 >= 129648 && x2 <= 129660 || x2 >= 129664 && x2 <= 129673 || x2 >= 129679 && x2 <= 129734 || x2 >= 129742 && x2 <= 129756 || x2 >= 129759 && x2 <= 129769 || x2 >= 129776 && x2 <= 129784 || x2 >= 131072 && x2 <= 196605 || x2 >= 196608 && x2 <= 262141;
}
function validate(codePoint) {
  if (!Number.isSafeInteger(codePoint)) {
    throw new TypeError(`Expected a code point, got \`${typeof codePoint}\`.`);
  }
}
function eastAsianWidth(codePoint, { ambiguousAsWide = false } = {}) {
  validate(codePoint);
  if (isFullWidth(codePoint) || isWide(codePoint) || ambiguousAsWide && isAmbiguous(codePoint)) {
    return 2;
  }
  return 1;
}
var emojiRegex = () => {
  return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
};
var segmenter = globalThis.Intl?.Segmenter ? new Intl.Segmenter : { segment: (str) => str.split("") };
var defaultIgnorableCodePointRegex = /^\p{Default_Ignorable_Code_Point}$/u;
function stringWidth$1(string, options = {}) {
  if (typeof string !== "string" || string.length === 0) {
    return 0;
  }
  const {
    ambiguousIsNarrow = true,
    countAnsiEscapeCodes = false
  } = options;
  if (!countAnsiEscapeCodes) {
    string = stripAnsi2(string);
  }
  if (string.length === 0) {
    return 0;
  }
  let width = 0;
  const eastAsianWidthOptions = { ambiguousAsWide: !ambiguousIsNarrow };
  for (const { segment: character } of segmenter.segment(string)) {
    const codePoint = character.codePointAt(0);
    if (codePoint <= 31 || codePoint >= 127 && codePoint <= 159) {
      continue;
    }
    if (codePoint >= 8203 && codePoint <= 8207 || codePoint === 65279) {
      continue;
    }
    if (codePoint >= 768 && codePoint <= 879 || codePoint >= 6832 && codePoint <= 6911 || codePoint >= 7616 && codePoint <= 7679 || codePoint >= 8400 && codePoint <= 8447 || codePoint >= 65056 && codePoint <= 65071) {
      continue;
    }
    if (codePoint >= 55296 && codePoint <= 57343) {
      continue;
    }
    if (codePoint >= 65024 && codePoint <= 65039) {
      continue;
    }
    if (defaultIgnorableCodePointRegex.test(character)) {
      continue;
    }
    if (emojiRegex().test(character)) {
      width += 2;
      continue;
    }
    width += eastAsianWidth(codePoint, eastAsianWidthOptions);
  }
  return width;
}
function isUnicodeSupported() {
  const { env: env2 } = g$1;
  const { TERM, TERM_PROGRAM } = env2;
  if (g$1.platform !== "win32") {
    return TERM !== "linux";
  }
  return Boolean(env2.WT_SESSION) || Boolean(env2.TERMINUS_SUBLIME) || env2.ConEmuTask === "{cmd::Cmder}" || TERM_PROGRAM === "Terminus-Sublime" || TERM_PROGRAM === "vscode" || TERM === "xterm-256color" || TERM === "alacritty" || TERM === "rxvt-unicode" || TERM === "rxvt-unicode-256color" || env2.TERMINAL_EMULATOR === "JetBrains-JediTerm";
}
var TYPE_COLOR_MAP = {
  info: "cyan",
  fail: "red",
  success: "green",
  ready: "green",
  start: "magenta"
};
var LEVEL_COLOR_MAP = {
  0: "red",
  1: "yellow"
};
var unicode = isUnicodeSupported();
var s = (c3, fallback) => unicode ? c3 : fallback;
var TYPE_ICONS = {
  error: s("✖", "×"),
  fatal: s("✖", "×"),
  ready: s("✔", "√"),
  warn: s("⚠", "‼"),
  info: s("ℹ", "i"),
  success: s("✔", "√"),
  debug: s("⚙", "D"),
  trace: s("→", "→"),
  fail: s("✖", "×"),
  start: s("◐", "o"),
  log: ""
};
function stringWidth(str) {
  const hasICU = typeof Intl === "object";
  if (!hasICU || !Intl.Segmenter) {
    return stripAnsi(str).length;
  }
  return stringWidth$1(str);
}

class FancyReporter extends BasicReporter {
  formatStack(stack, message, opts) {
    const indent = "  ".repeat((opts?.errorLevel || 0) + 1);
    return `
${indent}` + parseStack(stack, message).map((line) => "  " + line.replace(/^at +/, (m2) => colors.gray(m2)).replace(/\((.+)\)/, (_3, m2) => `(${colors.cyan(m2)})`)).join(`
${indent}`);
  }
  formatType(logObj, isBadge, opts) {
    const typeColor = TYPE_COLOR_MAP[logObj.type] || LEVEL_COLOR_MAP[logObj.level] || "gray";
    if (isBadge) {
      return getBgColor(typeColor)(colors.black(` ${logObj.type.toUpperCase()} `));
    }
    const _type = typeof TYPE_ICONS[logObj.type] === "string" ? TYPE_ICONS[logObj.type] : logObj.icon || logObj.type;
    return _type ? getColor2(typeColor)(_type) : "";
  }
  formatLogObj(logObj, opts) {
    const [message, ...additional] = this.formatArgs(logObj.args, opts).split(`
`);
    if (logObj.type === "box") {
      return box(characterFormat(message + (additional.length > 0 ? `
` + additional.join(`
`) : "")), {
        title: logObj.title ? characterFormat(logObj.title) : undefined,
        style: logObj.style
      });
    }
    const date = this.formatDate(logObj.date, opts);
    const coloredDate = date && colors.gray(date);
    const isBadge = logObj.badge ?? logObj.level < 2;
    const type = this.formatType(logObj, isBadge, opts);
    const tag = logObj.tag ? colors.gray(logObj.tag) : "";
    let line;
    const left = this.filterAndJoin([type, characterFormat(message)]);
    const right = this.filterAndJoin(opts.columns ? [tag, coloredDate] : [tag]);
    const space = (opts.columns || 0) - stringWidth(left) - stringWidth(right) - 2;
    line = space > 0 && (opts.columns || 0) >= 80 ? left + " ".repeat(space) + right : (right ? `${colors.gray(`[${right}]`)} ` : "") + left;
    line += characterFormat(additional.length > 0 ? `
` + additional.join(`
`) : "");
    if (logObj.type === "trace") {
      const _err = new Error("Trace: " + logObj.message);
      line += this.formatStack(_err.stack || "", _err.message);
    }
    return isBadge ? `
` + line + `
` : line;
  }
}
function characterFormat(str) {
  return str.replace(/`([^`]+)`/gm, (_3, m2) => colors.cyan(m2)).replace(/\s+_([^_]+)_\s+/gm, (_3, m2) => ` ${colors.underline(m2)} `);
}
function getColor2(color = "white") {
  return colors[color] || colors.white;
}
function getBgColor(color = "bgWhite") {
  return colors[`bg${color[0].toUpperCase()}${color.slice(1)}`] || colors.bgWhite;
}
function createConsola2(options = {}) {
  let level = _getDefaultLogLevel();
  if (process.env.CONSOLA_LEVEL) {
    level = Number.parseInt(process.env.CONSOLA_LEVEL) ?? level;
  }
  const consola2 = createConsola({
    level,
    defaults: { level },
    stdout: process.stdout,
    stderr: process.stderr,
    prompt: (...args) => Promise.resolve().then(() => (init_prompt(), exports_prompt)).then((m2) => m2.prompt(...args)),
    reporters: options.reporters || [
      options.fancy ?? !(T2 || R2) ? new FancyReporter : new BasicReporter
    ],
    ...options
  });
  return consola2;
}
function _getDefaultLogLevel() {
  if (g2) {
    return LogLevels.debug;
  }
  if (R2) {
    return LogLevels.warn;
  }
  return LogLevels.info;
}
var consola = createConsola2();
// node_modules/citty/dist/index.mjs
function toArray(val) {
  if (Array.isArray(val)) {
    return val;
  }
  return val === undefined ? [] : [val];
}
function formatLineColumns(lines, linePrefix = "") {
  const maxLengh = [];
  for (const line of lines) {
    for (const [i2, element] of line.entries()) {
      maxLengh[i2] = Math.max(maxLengh[i2] || 0, element.length);
    }
  }
  return lines.map((l2) => l2.map((c3, i2) => linePrefix + c3[i2 === 0 ? "padStart" : "padEnd"](maxLengh[i2])).join("  ")).join(`
`);
}
function resolveValue(input) {
  return typeof input === "function" ? input() : input;
}

class CLIError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
    this.name = "CLIError";
  }
}
var NUMBER_CHAR_RE = /\d/;
var STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = separators ?? STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = undefined;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function upperFirst(str) {
  return str ? str[0].toUpperCase() + str.slice(1) : "";
}
function lowerFirst(str) {
  return str ? str[0].toLowerCase() + str.slice(1) : "";
}
function pascalCase(str, opts) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => upperFirst(opts?.normalize ? p.toLowerCase() : p)).join("") : "";
}
function camelCase(str, opts) {
  return lowerFirst(pascalCase(str || "", opts));
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner ?? "-") : "";
}
function toArr(any) {
  return any == undefined ? [] : Array.isArray(any) ? any : [any];
}
function toVal(out, key, val, opts) {
  let x2;
  const old = out[key];
  const nxt = ~opts.string.indexOf(key) ? val == undefined || val === true ? "" : String(val) : typeof val === "boolean" ? val : ~opts.boolean.indexOf(key) ? val === "false" ? false : val === "true" || (out._.push((x2 = +val, x2 * 0 === 0) ? x2 : val), !!val) : (x2 = +val, x2 * 0 === 0) ? x2 : val;
  out[key] = old == undefined ? nxt : Array.isArray(old) ? old.concat(nxt) : [old, nxt];
}
function parseRawArgs(args = [], opts = {}) {
  let k2;
  let arr;
  let arg;
  let name;
  let val;
  const out = { _: [] };
  let i2 = 0;
  let j = 0;
  let idx = 0;
  const len = args.length;
  const alibi = opts.alias !== undefined;
  const strict = opts.unknown !== undefined;
  const defaults = opts.default !== undefined;
  opts.alias = opts.alias || {};
  opts.string = toArr(opts.string);
  opts.boolean = toArr(opts.boolean);
  if (alibi) {
    for (k2 in opts.alias) {
      arr = opts.alias[k2] = toArr(opts.alias[k2]);
      for (i2 = 0;i2 < arr.length; i2++) {
        (opts.alias[arr[i2]] = arr.concat(k2)).splice(i2, 1);
      }
    }
  }
  for (i2 = opts.boolean.length;i2-- > 0; ) {
    arr = opts.alias[opts.boolean[i2]] || [];
    for (j = arr.length;j-- > 0; ) {
      opts.boolean.push(arr[j]);
    }
  }
  for (i2 = opts.string.length;i2-- > 0; ) {
    arr = opts.alias[opts.string[i2]] || [];
    for (j = arr.length;j-- > 0; ) {
      opts.string.push(arr[j]);
    }
  }
  if (defaults) {
    for (k2 in opts.default) {
      name = typeof opts.default[k2];
      arr = opts.alias[k2] = opts.alias[k2] || [];
      if (opts[name] !== undefined) {
        opts[name].push(k2);
        for (i2 = 0;i2 < arr.length; i2++) {
          opts[name].push(arr[i2]);
        }
      }
    }
  }
  const keys = strict ? Object.keys(opts.alias) : [];
  for (i2 = 0;i2 < len; i2++) {
    arg = args[i2];
    if (arg === "--") {
      out._ = out._.concat(args.slice(++i2));
      break;
    }
    for (j = 0;j < arg.length; j++) {
      if (arg.charCodeAt(j) !== 45) {
        break;
      }
    }
    if (j === 0) {
      out._.push(arg);
    } else if (arg.substring(j, j + 3) === "no-") {
      name = arg.slice(Math.max(0, j + 3));
      if (strict && !~keys.indexOf(name)) {
        return opts.unknown(arg);
      }
      out[name] = false;
    } else {
      for (idx = j + 1;idx < arg.length; idx++) {
        if (arg.charCodeAt(idx) === 61) {
          break;
        }
      }
      name = arg.substring(j, idx);
      val = arg.slice(Math.max(0, ++idx)) || i2 + 1 === len || ("" + args[i2 + 1]).charCodeAt(0) === 45 || args[++i2];
      arr = j === 2 ? [name] : name;
      for (idx = 0;idx < arr.length; idx++) {
        name = arr[idx];
        if (strict && !~keys.indexOf(name)) {
          return opts.unknown("-".repeat(j) + name);
        }
        toVal(out, name, idx + 1 < arr.length || val, opts);
      }
    }
  }
  if (defaults) {
    for (k2 in opts.default) {
      if (out[k2] === undefined) {
        out[k2] = opts.default[k2];
      }
    }
  }
  if (alibi) {
    for (k2 in out) {
      arr = opts.alias[k2] || [];
      while (arr.length > 0) {
        out[arr.shift()] = out[k2];
      }
    }
  }
  return out;
}
function parseArgs(rawArgs, argsDef) {
  const parseOptions = {
    boolean: [],
    string: [],
    mixed: [],
    alias: {},
    default: {}
  };
  const args = resolveArgs(argsDef);
  for (const arg of args) {
    if (arg.type === "positional") {
      continue;
    }
    if (arg.type === "string") {
      parseOptions.string.push(arg.name);
    } else if (arg.type === "boolean") {
      parseOptions.boolean.push(arg.name);
    }
    if (arg.default !== undefined) {
      parseOptions.default[arg.name] = arg.default;
    }
    if (arg.alias) {
      parseOptions.alias[arg.name] = arg.alias;
    }
  }
  const parsed = parseRawArgs(rawArgs, parseOptions);
  const [...positionalArguments] = parsed._;
  const parsedArgsProxy = new Proxy(parsed, {
    get(target, prop) {
      return target[prop] ?? target[camelCase(prop)] ?? target[kebabCase(prop)];
    }
  });
  for (const [, arg] of args.entries()) {
    if (arg.type === "positional") {
      const nextPositionalArgument = positionalArguments.shift();
      if (nextPositionalArgument !== undefined) {
        parsedArgsProxy[arg.name] = nextPositionalArgument;
      } else if (arg.default === undefined && arg.required !== false) {
        throw new CLIError(`Missing required positional argument: ${arg.name.toUpperCase()}`, "EARG");
      } else {
        parsedArgsProxy[arg.name] = arg.default;
      }
    } else if (arg.required && parsedArgsProxy[arg.name] === undefined) {
      throw new CLIError(`Missing required argument: --${arg.name}`, "EARG");
    }
  }
  return parsedArgsProxy;
}
function resolveArgs(argsDef) {
  const args = [];
  for (const [name, argDef] of Object.entries(argsDef || {})) {
    args.push({
      ...argDef,
      name,
      alias: toArray(argDef.alias)
    });
  }
  return args;
}
function defineCommand(def) {
  return def;
}
async function runCommand(cmd, opts) {
  const cmdArgs = await resolveValue(cmd.args || {});
  const parsedArgs = parseArgs(opts.rawArgs, cmdArgs);
  const context = {
    rawArgs: opts.rawArgs,
    args: parsedArgs,
    data: opts.data,
    cmd
  };
  if (typeof cmd.setup === "function") {
    await cmd.setup(context);
  }
  let result;
  try {
    const subCommands = await resolveValue(cmd.subCommands);
    if (subCommands && Object.keys(subCommands).length > 0) {
      const subCommandArgIndex = opts.rawArgs.findIndex((arg) => !arg.startsWith("-"));
      const subCommandName = opts.rawArgs[subCommandArgIndex];
      if (subCommandName) {
        if (!subCommands[subCommandName]) {
          throw new CLIError(`Unknown command \`${subCommandName}\``, "E_UNKNOWN_COMMAND");
        }
        const subCommand = await resolveValue(subCommands[subCommandName]);
        if (subCommand) {
          await runCommand(subCommand, {
            rawArgs: opts.rawArgs.slice(subCommandArgIndex + 1)
          });
        }
      } else if (!cmd.run) {
        throw new CLIError(`No command specified.`, "E_NO_COMMAND");
      }
    }
    if (typeof cmd.run === "function") {
      result = await cmd.run(context);
    }
  } finally {
    if (typeof cmd.cleanup === "function") {
      await cmd.cleanup(context);
    }
  }
  return { result };
}
async function resolveSubCommand(cmd, rawArgs, parent) {
  const subCommands = await resolveValue(cmd.subCommands);
  if (subCommands && Object.keys(subCommands).length > 0) {
    const subCommandArgIndex = rawArgs.findIndex((arg) => !arg.startsWith("-"));
    const subCommandName = rawArgs[subCommandArgIndex];
    const subCommand = await resolveValue(subCommands[subCommandName]);
    if (subCommand) {
      return resolveSubCommand(subCommand, rawArgs.slice(subCommandArgIndex + 1), cmd);
    }
  }
  return [cmd, parent];
}
async function showUsage(cmd, parent) {
  try {
    consola.log(await renderUsage(cmd, parent) + `
`);
  } catch (error) {
    consola.error(error);
  }
}
async function renderUsage(cmd, parent) {
  const cmdMeta = await resolveValue(cmd.meta || {});
  const cmdArgs = resolveArgs(await resolveValue(cmd.args || {}));
  const parentMeta = await resolveValue(parent?.meta || {});
  const commandName = `${parentMeta.name ? `${parentMeta.name} ` : ""}` + (cmdMeta.name || process.argv[1]);
  const argLines = [];
  const posLines = [];
  const commandsLines = [];
  const usageLine = [];
  for (const arg of cmdArgs) {
    if (arg.type === "positional") {
      const name = arg.name.toUpperCase();
      const isRequired = arg.required !== false && arg.default === undefined;
      const defaultHint = arg.default ? `="${arg.default}"` : "";
      posLines.push([
        "`" + name + defaultHint + "`",
        arg.description || "",
        arg.valueHint ? `<${arg.valueHint}>` : ""
      ]);
      usageLine.push(isRequired ? `<${name}>` : `[${name}]`);
    } else {
      const isRequired = arg.required === true && arg.default === undefined;
      const argStr = (arg.type === "boolean" && arg.default === true ? [
        ...(arg.alias || []).map((a2) => `--no-${a2}`),
        `--no-${arg.name}`
      ].join(", ") : [...(arg.alias || []).map((a2) => `-${a2}`), `--${arg.name}`].join(", ")) + (arg.type === "string" && (arg.valueHint || arg.default) ? `=${arg.valueHint ? `<${arg.valueHint}>` : `"${arg.default || ""}"`}` : "");
      argLines.push([
        "`" + argStr + (isRequired ? " (required)" : "") + "`",
        arg.description || ""
      ]);
      if (isRequired) {
        usageLine.push(argStr);
      }
    }
  }
  if (cmd.subCommands) {
    const commandNames = [];
    const subCommands = await resolveValue(cmd.subCommands);
    for (const [name, sub] of Object.entries(subCommands)) {
      const subCmd = await resolveValue(sub);
      const meta = await resolveValue(subCmd?.meta);
      commandsLines.push([`\`${name}\``, meta?.description || ""]);
      commandNames.push(name);
    }
    usageLine.push(commandNames.join("|"));
  }
  const usageLines = [];
  const version = cmdMeta.version || parentMeta.version;
  usageLines.push(colors.gray(`${cmdMeta.description} (${commandName + (version ? ` v${version}` : "")})`), "");
  const hasOptions = argLines.length > 0 || posLines.length > 0;
  usageLines.push(`${colors.underline(colors.bold("USAGE"))} \`${commandName}${hasOptions ? " [OPTIONS]" : ""} ${usageLine.join(" ")}\``, "");
  if (posLines.length > 0) {
    usageLines.push(colors.underline(colors.bold("ARGUMENTS")), "");
    usageLines.push(formatLineColumns(posLines, "  "));
    usageLines.push("");
  }
  if (argLines.length > 0) {
    usageLines.push(colors.underline(colors.bold("OPTIONS")), "");
    usageLines.push(formatLineColumns(argLines, "  "));
    usageLines.push("");
  }
  if (commandsLines.length > 0) {
    usageLines.push(colors.underline(colors.bold("COMMANDS")), "");
    usageLines.push(formatLineColumns(commandsLines, "  "));
    usageLines.push("", `Use \`${commandName} <command> --help\` for more information about a command.`);
  }
  return usageLines.filter((l2) => typeof l2 === "string").join(`
`);
}
async function runMain(cmd, opts = {}) {
  const rawArgs = opts.rawArgs || process.argv.slice(2);
  const showUsage$1 = opts.showUsage || showUsage;
  try {
    if (rawArgs.includes("--help") || rawArgs.includes("-h")) {
      await showUsage$1(...await resolveSubCommand(cmd, rawArgs));
      process.exit(0);
    } else if (rawArgs.length === 1 && rawArgs[0] === "--version") {
      const meta = typeof cmd.meta === "function" ? await cmd.meta() : await cmd.meta;
      if (!meta?.version) {
        throw new CLIError("No version specified", "E_NO_VERSION");
      }
      consola.log(meta.version);
    } else {
      await runCommand(cmd, { rawArgs });
    }
  } catch (error) {
    const isCLIError = error instanceof CLIError;
    if (!isCLIError) {
      consola.error(error, `
`);
    }
    if (isCLIError) {
      await showUsage$1(...await resolveSubCommand(cmd, rawArgs));
    }
    consola.error(error.message);
    process.exit(1);
  }
}

// src/input.ts
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

// src/inline-css.ts
import { JSDOM } from "jsdom";
async function fetchCSS(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`Warning: failed to fetch stylesheet ${url}: ${res.status}`);
      return null;
    }
    return res.text();
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.warn(`Warning: failed to fetch stylesheet ${url}: ${msg}`);
    return null;
  }
}
async function resolveImports(css, baseURL) {
  const importPattern = /@import\s+(?:url\(\s*['"]?([^'")\s]+)['"]?\s*\)|['"]([^'"]+)['""])\s*([^;]*);/g;
  const replacements = [];
  for (const m2 of css.matchAll(importPattern)) {
    const importURL = m2[1] || m2[2];
    if (!importURL)
      continue;
    let resolved;
    try {
      resolved = new URL(importURL, baseURL).href;
    } catch {
      continue;
    }
    const imported = await fetchCSS(resolved);
    if (imported !== null) {
      const mediaQuery = m2[3]?.trim();
      const wrapped = mediaQuery ? `@media ${mediaQuery} {
${imported}
}` : imported;
      replacements.push({ match: m2[0], replacement: wrapped });
    }
  }
  let result = css;
  for (const { match, replacement } of replacements) {
    result = result.replace(match, replacement);
  }
  return result;
}
async function inlineCSS(html, baseURL) {
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  const links = doc.querySelectorAll('link[rel="stylesheet"][href]');
  if (links.length === 0) {
    dom.window.close();
    return html;
  }
  const tasks = Array.from(links).map(async (link) => {
    const href = link.getAttribute("href");
    if (href.startsWith("data:"))
      return;
    let resolved;
    try {
      resolved = new URL(href, baseURL).href;
    } catch {
      return;
    }
    const css = await fetchCSS(resolved);
    if (css === null)
      return;
    const inlined = await resolveImports(css, resolved);
    const style = doc.createElement("style");
    style.textContent = inlined;
    const media = link.getAttribute("media");
    if (media)
      style.setAttribute("media", media);
    link.replaceWith(style);
  });
  await Promise.all(tasks);
  const result = dom.serialize();
  dom.window.close();
  return result;
}

// src/input.ts
async function resolveInput(source) {
  if (source) {
    if (/^https?:\/\//i.test(source)) {
      let res;
      try {
        res = await fetch(source);
      } catch (err) {
        const cause = err instanceof Error && err.cause instanceof Error ? err.cause.message : err instanceof Error ? err.message : String(err);
        throw new Error(`Failed to fetch ${source}: ${cause}`);
      }
      if (!res.ok) {
        throw new Error(`Failed to fetch ${source}: ${res.status} ${res.statusText}`);
      }
      const html2 = await res.text();
      return inlineCSS(html2, source);
    }
    const html = await readFile(source, "utf-8");
    const baseURL = pathToFileURL(resolve(source)).href;
    return inlineCSS(html, baseURL);
  }
  if (!process.stdin.isTTY) {
    const chunks = [];
    for await (const chunk of process.stdin) {
      chunks.push(chunk);
    }
    return Buffer.concat(chunks).toString("utf-8");
  }
  throw new Error("No input provided. Pass an HTML file, URL, or pipe HTML via stdin.");
}

// src/audit.ts
import { JSDOM as JSDOM2, VirtualConsole } from "jsdom";

// node_modules/@accesslint/core/dist/index.js
var W2 = [
  "a[href]",
  "button:not([disabled])",
  'input:not([disabled]):not([type="hidden"])',
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])',
  "details > summary:first-of-type",
  "iframe",
  "object",
  "embed",
  "area[href]"
].join(", ");
var K = /* @__PURE__ */ new WeakMap;
function rt() {
  K = /* @__PURE__ */ new WeakMap;
}
function $e(e2) {
  var i2;
  const a2 = e2.tagName.toLowerCase(), t2 = (i2 = e2.getAttribute("type")) == null ? undefined : i2.toLowerCase();
  switch (a2) {
    case "a":
      return e2.hasAttribute("href") ? "link" : null;
    case "area":
      return e2.hasAttribute("href") ? "link" : null;
    case "article":
      return "article";
    case "aside":
      return "complementary";
    case "button":
      return "button";
    case "datalist":
      return "listbox";
    case "details":
      return "group";
    case "dialog":
      return "dialog";
    case "fieldset":
      return "group";
    case "figure":
      return "figure";
    case "footer":
      return e2.closest("article, aside, main, nav, section") ? null : "contentinfo";
    case "form":
      return "form";
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return "heading";
    case "header":
      return e2.closest("article, aside, main, nav, section") ? null : "banner";
    case "hr":
      return "separator";
    case "img":
      return e2.getAttribute("alt") === "" ? "presentation" : "img";
    case "input":
      switch (t2) {
        case "button":
        case "image":
        case "reset":
        case "submit":
          return "button";
        case "checkbox":
          return "checkbox";
        case "email":
        case "tel":
        case "text":
        case "url":
        case null:
        case undefined:
          return "textbox";
        case "number":
          return "spinbutton";
        case "radio":
          return "radio";
        case "range":
          return "slider";
        case "search":
          return "searchbox";
        default:
          return "textbox";
      }
    case "li":
      return e2.closest("ul, ol, menu") ? "listitem" : null;
    case "main":
      return "main";
    case "math":
      return "math";
    case "menu":
      return "list";
    case "meter":
      return "meter";
    case "nav":
      return "navigation";
    case "ol":
    case "ul":
      return "list";
    case "optgroup":
      return "group";
    case "option":
      return "option";
    case "output":
      return "status";
    case "progress":
      return "progressbar";
    case "section":
      return e2.hasAttribute("aria-label") || e2.hasAttribute("aria-labelledby") ? "region" : null;
    case "select":
      return e2.hasAttribute("multiple") || e2.size > 1 ? "listbox" : "combobox";
    case "summary":
      return "button";
    case "table":
      return "table";
    case "tbody":
    case "tfoot":
    case "thead":
      return "rowgroup";
    case "td":
      return "cell";
    case "textarea":
      return "textbox";
    case "th":
      return "columnheader";
    case "tr":
      return "row";
    default:
      return null;
  }
}
function j(e2) {
  var n2;
  const a2 = K.get(e2);
  if (a2 !== undefined)
    return a2;
  const i2 = ((n2 = e2.getAttribute("role")) == null ? undefined : n2.trim().toLowerCase()) || null || $e(e2);
  return K.set(e2, i2), i2;
}
var Q2 = /* @__PURE__ */ new WeakMap;
function st() {
  Q2 = /* @__PURE__ */ new WeakMap;
}
function x2(e2) {
  const a2 = Q2.get(e2);
  if (a2 !== undefined)
    return a2;
  const t2 = lt(e2);
  return Q2.set(e2, t2), t2;
}
function lt(e2) {
  var o3, r3, s2, l2, d2;
  const a2 = e2.getAttribute("aria-labelledby");
  if (a2) {
    const c3 = a2.split(/\s+/).map((u3) => {
      const b2 = e2.ownerDocument.getElementById(u3);
      return b2 ? k2(b2).trim() : "";
    }).filter(Boolean);
    if (c3.length)
      return c3.join(" ");
  }
  const t2 = (o3 = e2.getAttribute("aria-label")) == null ? undefined : o3.trim();
  if (t2)
    return t2;
  if (e2 instanceof HTMLInputElement || e2 instanceof HTMLTextAreaElement || e2 instanceof HTMLSelectElement) {
    if (e2.id) {
      const b2 = e2.ownerDocument.querySelector(`label[for="${CSS.escape(e2.id)}"]`), g3 = b2 ? k2(b2).trim() : "";
      if (g3)
        return g3;
    }
    const c3 = e2.closest("label"), u3 = c3 ? k2(c3).trim() : "";
    if (u3)
      return u3;
  }
  const i2 = (r3 = e2.getAttribute("title")) == null ? undefined : r3.trim();
  if (i2)
    return i2;
  if (e2 instanceof HTMLInputElement || e2 instanceof HTMLTextAreaElement) {
    const c3 = (s2 = e2.getAttribute("placeholder")) == null ? undefined : s2.trim();
    if (c3)
      return c3;
  }
  const n2 = e2.tagName.toLowerCase();
  if (n2 === "fieldset") {
    const c3 = e2.querySelector(":scope > legend");
    if (c3) {
      const u3 = k2(c3).trim();
      if (u3)
        return u3;
    }
  }
  if (n2 === "table") {
    const c3 = e2.querySelector(":scope > caption");
    if (c3) {
      const u3 = k2(c3).trim();
      if (u3)
        return u3;
    }
  }
  if (!(e2 instanceof HTMLInputElement)) {
    const c3 = k2(e2).trim();
    if (c3)
      return c3;
  }
  return e2 instanceof HTMLImageElement || e2 instanceof HTMLAreaElement ? ((l2 = e2.alt) == null ? undefined : l2.trim()) ?? "" : e2 instanceof HTMLInputElement && e2.type === "image" ? ((d2 = e2.alt) == null ? undefined : d2.trim()) ?? "" : "";
}
var ct = /* @__PURE__ */ new Set([
  "alert",
  "alertdialog",
  "application",
  "article",
  "banner",
  "blockquote",
  "button",
  "caption",
  "cell",
  "checkbox",
  "code",
  "columnheader",
  "combobox",
  "complementary",
  "contentinfo",
  "definition",
  "deletion",
  "dialog",
  "directory",
  "document",
  "emphasis",
  "feed",
  "figure",
  "form",
  "generic",
  "grid",
  "gridcell",
  "group",
  "heading",
  "img",
  "insertion",
  "link",
  "list",
  "listbox",
  "listitem",
  "log",
  "main",
  "marquee",
  "math",
  "menu",
  "menubar",
  "menuitem",
  "menuitemcheckbox",
  "menuitemradio",
  "meter",
  "navigation",
  "none",
  "note",
  "option",
  "paragraph",
  "presentation",
  "progressbar",
  "radio",
  "radiogroup",
  "region",
  "row",
  "rowgroup",
  "rowheader",
  "scrollbar",
  "search",
  "searchbox",
  "separator",
  "slider",
  "spinbutton",
  "status",
  "strong",
  "subscript",
  "superscript",
  "switch",
  "tab",
  "table",
  "tablist",
  "tabpanel",
  "term",
  "textbox",
  "time",
  "timer",
  "toolbar",
  "tooltip",
  "tree",
  "treegrid",
  "treeitem"
]);
function dt(e2) {
  const a2 = e2.trim().toLowerCase().replace(/[\u201C\u201D\u2018\u2019\u00AB\u00BB]/g, "");
  return ct.has(a2);
}
var ut = /* @__PURE__ */ new Set([
  "aria-atomic",
  "aria-braillelabel",
  "aria-brailleroledescription",
  "aria-busy",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-dropeffect",
  "aria-errormessage",
  "aria-flowto",
  "aria-grabbed",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-live",
  "aria-owns",
  "aria-relevant",
  "aria-roledescription"
]);
function I3(e2) {
  let a2 = e2;
  for (;a2; ) {
    if (He(a2))
      return true;
    a2 = a2.parentElement;
  }
  return false;
}
var Z = /* @__PURE__ */ new WeakMap;
function mt() {
  Z = /* @__PURE__ */ new WeakMap;
}
function h2(e2) {
  const a2 = Z.get(e2);
  if (a2 !== undefined)
    return a2;
  let t2;
  return e2.getAttribute("aria-hidden") === "true" || e2 instanceof HTMLElement && (e2.hidden || e2.style.display === "none") ? t2 = true : e2.parentElement ? t2 = h2(e2.parentElement) : t2 = false, Z.set(e2, t2), t2;
}
function He(e2) {
  if (e2.getAttribute("aria-hidden") === "true" || e2 instanceof HTMLElement && e2.hidden)
    return true;
  if (typeof getComputedStyle == "function") {
    const a2 = getComputedStyle(e2);
    if (a2.display === "none" || a2.visibility === "hidden")
      return true;
  } else if (e2 instanceof HTMLElement && e2.style.display === "none")
    return true;
  return false;
}
function k2(e2) {
  var t2, i2, n2, o3, r3;
  let a2 = "";
  for (const s2 of e2.childNodes)
    if (s2.nodeType === 3)
      a2 += s2.textContent ?? "";
    else if (s2.nodeType === 1) {
      const l2 = s2;
      if (!He(l2)) {
        const d2 = (t2 = l2.tagName) == null ? undefined : t2.toLowerCase();
        if (d2 === "img" || d2 === "area") {
          const c3 = l2.getAttribute("aria-labelledby");
          if (c3) {
            const u3 = c3.split(/\s+/).map((b2) => {
              var g3, f3;
              return ((f3 = (g3 = l2.ownerDocument.getElementById(b2)) == null ? undefined : g3.textContent) == null ? undefined : f3.trim()) ?? "";
            }).filter(Boolean);
            if (u3.length) {
              a2 += u3.join(" ");
              continue;
            }
          }
          a2 += ((i2 = l2.getAttribute("aria-label")) == null ? undefined : i2.trim()) ?? l2.getAttribute("alt") ?? ((n2 = l2.getAttribute("title")) == null ? undefined : n2.trim()) ?? "";
        } else if (d2 === "svg") {
          const c3 = (o3 = l2.getAttribute("aria-label")) == null ? undefined : o3.trim();
          if (c3)
            a2 += c3;
          else {
            const u3 = l2.querySelector("title");
            u3 && (a2 += u3.textContent ?? "");
          }
        } else
          (r3 = l2.getAttribute("aria-label")) != null && r3.trim() ? a2 += l2.getAttribute("aria-label").trim() : a2 += k2(l2);
      }
    }
  return a2;
}
function ee(e2) {
  let a2 = "";
  for (const t2 of e2.childNodes)
    if (t2.nodeType === 3)
      a2 += t2.textContent ?? "";
    else if (t2.nodeType === 1) {
      const i2 = t2, n2 = i2.tagName.toLowerCase();
      if (n2 === "style" || n2 === "script" || n2 === "svg" || i2.getAttribute("aria-hidden") === "true" || i2 instanceof HTMLElement && i2.style.display === "none")
        continue;
      const o3 = i2.getAttribute("role");
      if (o3 === "img" || o3 === "presentation" || o3 === "none")
        continue;
      a2 += ee(i2);
    }
  return a2;
}
function Pe(e2) {
  let a2 = e2;
  for (;a2; ) {
    if (a2 instanceof HTMLElement && a2.style.visibility === "hidden")
      return true;
    a2 = a2.parentElement;
  }
  return false;
}
function De(e2) {
  var n2, o3;
  const a2 = e2.getAttribute("aria-labelledby");
  if (a2) {
    const r3 = a2.split(/\s+/).map((s2) => {
      var l2, d2;
      return ((d2 = (l2 = e2.ownerDocument.getElementById(s2)) == null ? undefined : l2.textContent) == null ? undefined : d2.trim()) ?? "";
    }).filter(Boolean);
    if (r3.length)
      return r3.join(" ");
  }
  const t2 = (n2 = e2.getAttribute("aria-label")) == null ? undefined : n2.trim();
  if (t2)
    return t2;
  const i2 = (o3 = e2.getAttribute("title")) == null ? undefined : o3.trim();
  return i2 || "";
}
function se(e2) {
  return e2.getRootNode() instanceof ShadowRoot;
}
var te = /* @__PURE__ */ new WeakMap;
function pt() {
  te = /* @__PURE__ */ new WeakMap;
}
function bt(e2) {
  return e2.replace(/\\/g, "\\\\").replace(/"/g, "\\\"");
}
var ht = [
  "data-testid",
  "data-test-id",
  "data-cy",
  "data-id",
  "name",
  "href",
  "for",
  "aria-label"
];
function gt(e2) {
  const a2 = e2.tagName.toLowerCase();
  for (const i2 of ht) {
    const n2 = e2.getAttribute(i2);
    if (n2 != null && n2.length > 0 && n2.length < 100)
      return `${a2}[${i2}="${bt(n2)}"]`;
  }
  const t2 = e2.parentElement;
  if (t2) {
    let i2 = 0, n2 = 0;
    for (let o3 = 0;o3 < t2.children.length; o3++)
      t2.children[o3].tagName === e2.tagName && (i2++, t2.children[o3] === e2 && (n2 = i2));
    if (i2 > 1)
      return `${a2}:nth-of-type(${n2})`;
  }
  return a2;
}
function Y2(e2) {
  if (e2.id)
    return `#${CSS.escape(e2.id)}`;
  const a2 = e2.getRootNode(), t2 = a2 instanceof ShadowRoot ? null : a2.documentElement;
  if (e2 === t2)
    return e2.tagName.toLowerCase();
  const i2 = [];
  let n2 = e2;
  for (;n2 && n2 !== t2; ) {
    if (n2 !== e2 && n2.id) {
      i2.unshift(`#${CSS.escape(n2.id)}`);
      break;
    }
    if (i2.unshift(gt(n2)), i2.length >= 2) {
      const o3 = i2.join(" > ");
      try {
        const r3 = a2.querySelectorAll(o3);
        if (r3.length === 1 && r3[0] === e2)
          return o3;
      } catch {}
    }
    n2 = n2.parentElement;
  }
  return i2.join(" > ");
}
function p(e2) {
  var o3;
  const a2 = te.get(e2);
  if (a2 !== undefined)
    return a2;
  const t2 = [];
  let i2 = e2;
  for (;i2; ) {
    const r3 = i2.getRootNode();
    if (r3 instanceof ShadowRoot)
      t2.unshift({ selector: Y2(i2), delimiter: " >>> " }), i2 = r3.host;
    else {
      const s2 = (o3 = r3.defaultView) == null ? undefined : o3.frameElement;
      if (s2)
        t2.unshift({ selector: Y2(i2), delimiter: " >>>iframe> " }), i2 = s2;
      else {
        t2.unshift({ selector: Y2(i2), delimiter: "" });
        break;
      }
    }
  }
  const n2 = t2.map((r3, s2) => (s2 === 0 ? "" : r3.delimiter) + r3.selector).join("");
  return te.set(e2, n2), n2;
}
function m2(e2) {
  const a2 = e2.outerHTML;
  return a2.length > 200 ? a2.slice(0, 200) + "..." : a2;
}
var ft = /* @__PURE__ */ new Set([
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-braillelabel",
  "aria-brailleroledescription",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colindextext",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-description",
  "aria-details",
  "aria-disabled",
  "aria-dropeffect",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-grabbed",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowindextext",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext"
]);
var he2 = /* @__PURE__ */ new Set([
  "aria-atomic",
  "aria-busy",
  "aria-disabled",
  "aria-grabbed",
  "aria-hidden",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-readonly",
  "aria-required"
]);
var ge = /* @__PURE__ */ new Set(["aria-checked", "aria-pressed"]);
var vt = /* @__PURE__ */ new Set([
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-level",
  "aria-posinset",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-setsize"
]);
var yt = /* @__PURE__ */ new Set([
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow"
]);
var X2 = {
  "aria-autocomplete": /* @__PURE__ */ new Set(["inline", "list", "both", "none"]),
  "aria-expanded": /* @__PURE__ */ new Set(["true", "false", "undefined"]),
  "aria-current": /* @__PURE__ */ new Set(["page", "step", "location", "date", "time", "true", "false"]),
  "aria-dropeffect": /* @__PURE__ */ new Set(["copy", "execute", "link", "move", "none", "popup"]),
  "aria-haspopup": /* @__PURE__ */ new Set(["true", "false", "menu", "listbox", "tree", "grid", "dialog"]),
  "aria-invalid": /* @__PURE__ */ new Set(["grammar", "false", "spelling", "true"]),
  "aria-live": /* @__PURE__ */ new Set(["assertive", "off", "polite"]),
  "aria-orientation": /* @__PURE__ */ new Set(["horizontal", "vertical", "undefined"]),
  "aria-relevant": /* @__PURE__ */ new Set(["additions", "all", "removals", "text"]),
  "aria-sort": /* @__PURE__ */ new Set(["ascending", "descending", "none", "other"])
};
var fe2 = /* @__PURE__ */ new Set([
  "caption",
  "code",
  "deletion",
  "emphasis",
  "generic",
  "insertion",
  "mark",
  "none",
  "paragraph",
  "presentation",
  "strong",
  "subscript",
  "superscript",
  "suggestion",
  "term",
  "time"
]);
var wt = {
  abbr: true,
  bdi: true,
  bdo: true,
  br: true,
  cite: true,
  code: true,
  data: true,
  del: true,
  dfn: true,
  em: true,
  ins: true,
  kbd: true,
  mark: true,
  q: true,
  rp: true,
  rt: true,
  ruby: true,
  s: true,
  samp: true,
  small: true,
  strong: true,
  sub: true,
  sup: true,
  time: true,
  u: true,
  var: true,
  wbr: true
};
var xt = {
  alert: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"]),
  article: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"]),
  banner: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"]),
  blockquote: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"]),
  caption: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"]),
  code: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"]),
  complementary: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"]),
  contentinfo: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"]),
  definition: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"]),
  deletion: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"]),
  emphasis: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"]),
  generic: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid", "aria-label", "aria-labelledby", "aria-roledescription"]),
  img: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"]),
  insertion: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"]),
  main: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"]),
  mark: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"]),
  math: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"]),
  navigation: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"]),
  none: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  note: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"]),
  paragraph: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"]),
  presentation: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  region: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"]),
  search: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"]),
  status: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"]),
  strong: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"]),
  subscript: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"]),
  superscript: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"]),
  term: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"]),
  time: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"]),
  tooltip: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"])
};
var D2 = null;
var F3 = null;
function At() {
  D2 = null, F3 = null;
}
function le2(e2) {
  var n2;
  if (F3 && (D2 == null ? undefined : D2.deref()) === e2)
    return F3;
  const a2 = [], t2 = [], i2 = [];
  for (const o3 of e2.querySelectorAll("*")) {
    let r3 = false;
    for (const c3 of o3.attributes)
      if (c3.name.startsWith("aria-")) {
        r3 = true;
        break;
      }
    if (!r3)
      continue;
    let s2, l2;
    const d2 = () => (s2 === undefined && (s2 = p(o3), l2 = m2(o3)), { selector: s2, html: l2 });
    for (const c3 of o3.attributes)
      if (c3.name.startsWith("aria-") && !ft.has(c3.name)) {
        const u3 = d2();
        a2.push({
          ruleId: "aria/aria-valid-attr",
          selector: u3.selector,
          html: u3.html,
          impact: "critical",
          message: `Invalid ARIA attribute "${c3.name}".`,
          fix: { type: "remove-attribute", attribute: c3.name }
        });
        break;
      }
    for (const c3 of o3.attributes) {
      if (!c3.name.startsWith("aria-"))
        continue;
      const u3 = c3.value.trim();
      if (!(u3 === "" && !he2.has(c3.name) && !ge.has(c3.name))) {
        if (he2.has(c3.name)) {
          if (u3 !== "true" && u3 !== "false") {
            const b2 = d2();
            t2.push({
              ruleId: "aria/aria-valid-attr-value",
              selector: b2.selector,
              html: b2.html,
              impact: "critical",
              message: `${c3.name} must be "true" or "false", got "${u3}".`,
              fix: { type: "set-attribute", attribute: c3.name, value: "false" }
            });
          }
        } else if (ge.has(c3.name)) {
          if (u3 !== "true" && u3 !== "false" && u3 !== "mixed") {
            const b2 = d2();
            t2.push({
              ruleId: "aria/aria-valid-attr-value",
              selector: b2.selector,
              html: b2.html,
              impact: "critical",
              message: `${c3.name} must be "true", "false", or "mixed", got "${u3}".`,
              fix: { type: "set-attribute", attribute: c3.name, value: "false" }
            });
          }
        } else if (vt.has(c3.name)) {
          if (u3 === "" || !/^-?\d+$/.test(u3)) {
            const b2 = d2();
            t2.push({
              ruleId: "aria/aria-valid-attr-value",
              selector: b2.selector,
              html: b2.html,
              impact: "critical",
              message: `${c3.name} must be an integer, got "${u3}".`,
              fix: { type: "suggest", suggestion: `Set ${c3.name} to a valid integer value` }
            });
          }
        } else if (yt.has(c3.name)) {
          if (u3 === "" || isNaN(Number(u3))) {
            const b2 = d2();
            t2.push({
              ruleId: "aria/aria-valid-attr-value",
              selector: b2.selector,
              html: b2.html,
              impact: "critical",
              message: `${c3.name} must be a number, got "${u3}".`,
              fix: { type: "suggest", suggestion: `Set ${c3.name} to a valid number value` }
            });
          }
        } else if (X2[c3.name]) {
          const b2 = u3.split(/\s+/);
          for (const g3 of b2)
            if (!X2[c3.name].has(g3)) {
              const f3 = d2();
              t2.push({
                ruleId: "aria/aria-valid-attr-value",
                selector: f3.selector,
                html: f3.html,
                impact: "critical",
                message: `Invalid value "${u3}" for ${c3.name}.`,
                fix: { type: "suggest", suggestion: `Set ${c3.name} to one of: ${[...X2[c3.name]].join(", ")}` }
              });
              break;
            }
        }
      }
    }
    if (!h2(o3)) {
      const c3 = (n2 = o3.getAttribute("role")) == null ? undefined : n2.trim().toLowerCase(), u3 = o3.tagName.toLowerCase();
      if (!c3 && wt[u3]) {
        const b2 = o3.hasAttribute("aria-label"), g3 = o3.hasAttribute("aria-labelledby");
        if (b2 || g3) {
          const f3 = d2(), v2 = b2 ? "aria-label" : "aria-labelledby";
          i2.push({
            ruleId: "aria/aria-prohibited-attr",
            selector: f3.selector,
            html: f3.html,
            impact: "serious",
            message: `aria-label and aria-labelledby are prohibited on <${u3}> elements.`,
            fix: { type: "remove-attribute", attribute: v2 }
          });
        }
      } else if (c3) {
        if (fe2.has(c3)) {
          const g3 = o3.hasAttribute("aria-label"), f3 = o3.hasAttribute("aria-labelledby");
          if (g3 || f3) {
            const v2 = d2(), y3 = g3 ? "aria-label" : "aria-labelledby";
            i2.push({
              ruleId: "aria/aria-prohibited-attr",
              selector: v2.selector,
              html: v2.html,
              impact: "serious",
              message: `aria-label and aria-labelledby are prohibited on role "${c3}".`,
              fix: { type: "remove-attribute", attribute: y3 }
            });
          }
        }
        const b2 = xt[c3];
        if (b2) {
          for (const g3 of o3.attributes)
            if (g3.name.startsWith("aria-") && b2.has(g3.name)) {
              if ((g3.name === "aria-label" || g3.name === "aria-labelledby") && fe2.has(c3))
                continue;
              const f3 = d2();
              i2.push({
                ruleId: "aria/aria-prohibited-attr",
                selector: f3.selector,
                html: f3.html,
                impact: "serious",
                message: `Attribute "${g3.name}" is prohibited on role "${c3}".`,
                fix: { type: "remove-attribute", attribute: g3.name }
              });
            }
        }
      }
    }
  }
  return D2 = new WeakRef(e2), F3 = { validAttr: a2, validAttrValue: t2, prohibitedAttr: i2 }, F3;
}
var ae = /* @__PURE__ */ new WeakMap;
var ie = /* @__PURE__ */ new WeakMap;
var ne = /* @__PURE__ */ new WeakMap;
function kt() {
  ae = /* @__PURE__ */ new WeakMap, ie = /* @__PURE__ */ new WeakMap, ne = /* @__PURE__ */ new WeakMap;
}
function w2(e2) {
  let a2 = ae.get(e2);
  return a2 || (a2 = getComputedStyle(e2), ae.set(e2, a2), a2);
}
function q2(e2, a2, t2) {
  const [i2, n2, o3] = [e2, a2, t2].map((r3) => {
    const s2 = r3 / 255;
    return s2 <= 0.04045 ? s2 / 12.92 : Math.pow((s2 + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * i2 + 0.7152 * n2 + 0.0722 * o3;
}
function $(e2, a2) {
  const t2 = Math.max(e2, a2), i2 = Math.min(e2, a2);
  return (t2 + 0.05) / (i2 + 0.05);
}
var ve2 = {
  black: [0, 0, 0],
  white: [255, 255, 255],
  red: [255, 0, 0],
  green: [0, 128, 0],
  blue: [0, 0, 255],
  yellow: [255, 255, 0],
  orange: [255, 165, 0],
  purple: [128, 0, 128],
  gray: [128, 128, 128],
  grey: [128, 128, 128],
  silver: [192, 192, 192],
  maroon: [128, 0, 0],
  navy: [0, 0, 128],
  teal: [0, 128, 128],
  aqua: [0, 255, 255],
  fuchsia: [255, 0, 255],
  lime: [0, 255, 0],
  olive: [128, 128, 0]
};
function C3(e2) {
  const a2 = e2.trim().toLowerCase();
  if (ve2[a2])
    return ve2[a2];
  const t2 = a2.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/);
  if (t2)
    return [parseInt(t2[1] + t2[1], 16), parseInt(t2[2] + t2[2], 16), parseInt(t2[3] + t2[3], 16)];
  const i2 = a2.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/);
  if (i2)
    return [parseInt(i2[1], 16), parseInt(i2[2], 16), parseInt(i2[3], 16)];
  const n2 = e2.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*[\d.]+)?\s*\)/);
  if (n2)
    return [parseInt(n2[1]), parseInt(n2[2]), parseInt(n2[3])];
  const o3 = e2.match(/rgba?\(\s*(\d+)\s+(\d+)\s+(\d+)\s*(?:\/\s*[\d.]+%?)?\s*\)/);
  return o3 ? [parseInt(o3[1]), parseInt(o3[2]), parseInt(o3[3])] : null;
}
function U(e2) {
  const a2 = e2.match(/rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*([\d.]+)\s*\)/);
  if (a2)
    return parseFloat(a2[1]);
  const t2 = e2.match(/rgba?\([^)]+\/\s*([\d.]+%?)\s*\)/);
  if (t2) {
    const i2 = t2[1];
    return i2.endsWith("%") ? parseFloat(i2) / 100 : parseFloat(i2);
  }
  return 1;
}
function R3(e2, a2, t2) {
  return [
    Math.round(e2[0] * t2 + a2[0] * (1 - t2)),
    Math.round(e2[1] * t2 + a2[1] * (1 - t2)),
    Math.round(e2[2] * t2 + a2[2] * (1 - t2))
  ];
}
function ye2(e2) {
  const a2 = ie.get(e2);
  if (a2 !== undefined)
    return a2;
  const t2 = St(e2);
  return ie.set(e2, t2), t2;
}
function J2(e2, a2) {
  let t2 = a2;
  for (let i2 = e2.length - 1;i2 >= 0; i2--)
    t2 = R3(e2[i2].color, t2, e2[i2].alpha);
  return t2;
}
function St(e2) {
  const a2 = [];
  let t2 = e2;
  for (;t2; ) {
    const n2 = w2(t2), o3 = n2.backgroundImage;
    if (o3 && o3 !== "none" && o3 !== "initial") {
      const d2 = n2.backgroundColor;
      if (d2 && d2 !== "transparent" && d2 !== "rgba(0, 0, 0, 0)" && d2 !== "rgba(0 0 0 / 0)") {
        const c3 = C3(d2);
        if (c3)
          return a2.length > 0 ? J2(a2, c3) : c3;
      }
      return null;
    }
    const r3 = n2.backgroundColor;
    if (r3 === "transparent" || r3 === "rgba(0, 0, 0, 0)" || r3 === "rgba(0 0 0 / 0)") {
      t2 = t2.parentElement;
      continue;
    }
    const s2 = U(r3);
    if (s2 < 0.01) {
      t2 = t2.parentElement;
      continue;
    }
    const l2 = C3(r3);
    if (!l2) {
      t2 = t2.parentElement;
      continue;
    }
    if (s2 >= 1)
      return a2.length > 0 ? J2(a2, l2) : l2;
    a2.push({ color: l2, alpha: s2 }), t2 = t2.parentElement;
  }
  const i2 = [255, 255, 255];
  return a2.length > 0 ? J2(a2, i2) : i2;
}
function Fe(e2) {
  const a2 = [];
  let t2 = 0, i2 = 0;
  for (let n2 = 0;n2 < e2.length; n2++)
    e2[n2] === "(" ? t2++ : e2[n2] === ")" ? t2-- : e2[n2] === "," && t2 === 0 && (a2.push(e2.slice(i2, n2).trim()), i2 = n2 + 1);
  return a2.push(e2.slice(i2).trim()), a2;
}
function It(e2, a2 = [255, 255, 255]) {
  const t2 = [], i2 = e2.search(/(?:linear|radial|conic)-gradient\(/);
  if (i2 === -1)
    return t2;
  const n2 = e2.indexOf("(", i2);
  if (n2 === -1)
    return t2;
  let o3 = 1, r3 = n2 + 1;
  for (;r3 < e2.length && o3 > 0; r3++)
    e2[r3] === "(" ? o3++ : e2[r3] === ")" && o3--;
  const s2 = e2.slice(n2 + 1, r3 - 1), l2 = Fe(s2);
  for (const d2 of l2) {
    const c3 = d2.trim();
    if (/^(to\s|[\d.]+deg|[\d.]+turn|[\d.]+rad)/i.test(c3))
      continue;
    if (c3 === "transparent" || c3.startsWith("transparent ")) {
      t2.push(a2);
      continue;
    }
    const u3 = c3.replace(/\s+[\d.]+(%|em|px|rem|vh|vw).*$/i, "").trim(), b2 = C3(u3);
    b2 && t2.push(b2);
  }
  return t2;
}
var qt = /* @__PURE__ */ new Set(["IMG", "PICTURE", "VIDEO", "SVG"]);
function Et(e2) {
  const a2 = ne.get(e2);
  if (a2 !== undefined)
    return a2;
  const t2 = Rt(e2);
  return ne.set(e2, t2), t2;
}
function Lt(e2) {
  return qt.has(e2.tagName) ? true : !!e2.querySelector("img, picture, video, svg");
}
function Rt(e2) {
  let a2 = e2, t2 = false;
  for (;a2; ) {
    const i2 = w2(a2).position;
    if ((i2 === "absolute" || i2 === "fixed") && (t2 = true), a2 !== e2 && i2 !== "static") {
      for (const n2 of a2.children) {
        if (n2 === e2 || n2.contains(e2))
          continue;
        if (Lt(n2)) {
          if (t2)
            return true;
          const r3 = w2(n2).position;
          if (r3 === "absolute" || r3 === "fixed")
            return true;
        }
        const o3 = w2(n2);
        if (o3.position === "absolute" || o3.position === "fixed") {
          const r3 = o3.backgroundImage;
          if (r3 && r3 !== "none" && r3 !== "initial")
            return true;
        }
      }
      if (t2)
        break;
    }
    a2 = a2.parentElement;
  }
  return false;
}
function Ct(e2) {
  const a2 = parseFloat(e2);
  return e2.endsWith("pt") ? a2 * (4 / 3) : a2;
}
function we(e2) {
  const a2 = w2(e2), t2 = Ct(a2.fontSize), i2 = parseInt(a2.fontWeight) || (a2.fontWeight === "bold" ? 700 : 400);
  return t2 >= 23.5 || t2 >= 18.5 && i2 >= 700;
}
function Tt(e2) {
  const a2 = Fe(e2), t2 = [];
  for (const i2 of a2) {
    const n2 = i2.trim();
    if (!n2)
      continue;
    const o3 = n2.match(/rgba?\([^)]+\)/), r3 = o3 ? C3(o3[0]) : null;
    if (!r3)
      return null;
    const s2 = n2.replace(/rgba?\([^)]+\)/, "").match(/[\d.]+px/g), l2 = s2 && s2.length >= 3 ? parseFloat(s2[2]) : 0;
    t2.push({ color: r3, blur: l2 });
  }
  return t2.length > 0 ? t2 : null;
}
function xe(e2) {
  return e2 === "transparent" || e2 === "rgba(0, 0, 0, 0)" || e2 === "rgba(0 0 0 / 0)";
}
function _3([e2, a2, t2]) {
  return "#" + [e2, a2, t2].map((i2) => i2.toString(16).padStart(2, "0")).join("");
}
function Nt(e2, a2, t2) {
  const i2 = q2(e2[0], e2[1], e2[2]), n2 = q2(a2[0], a2[1], a2[2]);
  let o3 = $(i2, n2);
  for (const r3 of t2) {
    const s2 = q2(r3.color[0], r3.color[1], r3.color[2]);
    o3 = Math.max(o3, $(i2, s2), $(s2, n2));
  }
  return o3;
}
function Mt(e2) {
  let a2 = 1, t2 = e2;
  for (;t2; ) {
    const i2 = w2(t2), n2 = parseFloat(i2.opacity);
    isNaN(n2) || (a2 *= n2), t2 = t2.parentElement;
  }
  return a2;
}
function $t(e2) {
  let a2 = e2;
  for (;a2; ) {
    for (const n2 of ["::before", "::after"])
      try {
        const o3 = getComputedStyle(a2, n2), r3 = o3.content;
        if (!r3 || r3 === "none" || r3 === "normal" || r3 === '""')
          continue;
        const s2 = o3.backgroundColor;
        if (s2 && !xe(s2) && U(s2) >= 0.1)
          return true;
        const l2 = o3.backgroundImage;
        if (l2 && l2 !== "none" && l2 !== "initial")
          return true;
        const d2 = o3.position;
        if (d2 === "absolute" || d2 === "fixed") {
          const c3 = parseFloat(o3.width), u3 = parseFloat(o3.height);
          if (c3 > 1 && u3 > 1)
            return true;
        }
      } catch {}
    const i2 = w2(a2).backgroundColor;
    if (i2 && !xe(i2) && U(i2) >= 1)
      break;
    a2 = a2.parentElement;
  }
  return false;
}
var G3 = /* @__PURE__ */ new Map;
function Ht(e2, a2) {
  const t2 = G3.get(a2);
  return t2 ? e2.map((i2) => {
    const n2 = t2[i2.id];
    return n2 ? {
      ...i2,
      description: n2.description,
      guidance: n2.guidance !== undefined ? n2.guidance : i2.guidance
    } : i2;
  }) : e2;
}
var oe = /* @__PURE__ */ new Map;
function Pt(e2) {
  return e2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Dt(e2) {
  const a2 = e2.split(/\{(\d+)\}/);
  let t2 = "^";
  for (let i2 = 0;i2 < a2.length; i2++)
    i2 % 2 === 0 ? t2 += Pt(a2[i2]) : t2 += "(.+?)";
  return t2 += "$", new RegExp(t2);
}
function Ft(e2, a2) {
  let t2 = oe.get(e2);
  if (t2 || (t2 = /* @__PURE__ */ new Map, oe.set(e2, t2)), t2.has(a2))
    return t2.get(a2);
  const i2 = G3.get(e2);
  if (!i2)
    return;
  const n2 = i2[a2];
  if (!(n2 != null && n2.messages))
    return t2.set(a2, []), [];
  const o3 = [];
  for (const [r3, s2] of Object.entries(n2.messages))
    o3.push({
      regex: Dt(r3),
      translated: s2
    });
  return t2.set(a2, o3), o3;
}
function zt(e2, a2, t2) {
  const i2 = Ft(t2, e2);
  if (!i2)
    return a2;
  for (const { regex: n2, translated: o3 } of i2) {
    const r3 = a2.match(n2);
    if (r3)
      return o3.replace(/\{(\d+)\}/g, (s2, l2) => {
        const d2 = parseInt(l2, 10);
        return d2 + 1 < r3.length ? r3[d2 + 1] : `{${l2}}`;
      });
  }
  return a2;
}
function ze(e2, a2) {
  return G3.has(a2) ? e2.map((t2) => {
    const i2 = zt(t2.ruleId, t2.message, a2);
    return i2 === t2.message ? t2 : { ...t2, message: i2 };
  }) : e2;
}
function Ae(e2) {
  var o3, r3;
  const a2 = [], t2 = e2.closest("a");
  if (t2) {
    const s2 = t2.getAttribute("href");
    s2 && a2.push(`Link href: ${s2}`);
  }
  const i2 = e2.closest("figure");
  if (i2) {
    const s2 = i2.querySelector("figcaption");
    (o3 = s2 == null ? undefined : s2.textContent) != null && o3.trim() && a2.push(`Figcaption: ${s2.textContent.trim().slice(0, 100)}`);
  }
  const n2 = e2.parentElement;
  if (n2 && n2 !== t2) {
    const s2 = e2 instanceof HTMLImageElement && e2.alt || "", l2 = (r3 = n2.textContent) == null ? undefined : r3.replace(s2, "").trim().slice(0, 100);
    l2 && a2.push(`Adjacent text: ${l2}`);
  }
  return a2.length > 0 ? a2.join(`
`) : undefined;
}
var Wt = {
  id: "text-alternatives/img-alt",
  category: "text-alternatives",
  actRuleIds: ["23a2a8"],
  wcag: ["1.1.1"],
  level: "A",
  fixability: "contextual",
  browserHint: "Screenshot the image to describe its visual content for alt text.",
  description: `Images must have alternate text. Add an alt attribute to <img> elements. Decorative images may use an empty alt attribute (alt=""), role='none', or role='presentation'.`,
  guidance: "Every image needs an alt attribute. For informative images, describe the content or function concisely. For decorative images (backgrounds, spacers, purely visual flourishes), use alt='' to hide them from screen readers. Never omit alt entirely—screen readers may read the filename instead. When an image is inside a link or button that already has text, use alt='' if the image is decorative in that context, or write alt text that complements (not duplicates) the existing text.",
  run(e2) {
    const a2 = [];
    for (const t2 of e2.querySelectorAll("img")) {
      if (h2(t2) || Pe(t2))
        continue;
      const i2 = t2.getAttribute("role");
      if (i2 === "presentation" || i2 === "none") {
        const o3 = t2.getAttribute("tabindex");
        if (!o3 || o3 === "-1")
          continue;
      }
      const n2 = t2.getAttribute("alt");
      if (n2 !== null && n2.trim() === "" && n2 !== "") {
        a2.push({
          ruleId: "text-alternatives/img-alt",
          selector: p(t2),
          html: m2(t2),
          impact: "critical",
          message: 'Image has whitespace-only alt text. Use alt="" for decorative images or provide descriptive text.',
          context: Ae(t2),
          fix: { type: "set-attribute", attribute: "alt", value: "" }
        });
        continue;
      }
      !t2.hasAttribute("alt") && !x2(t2) && a2.push({
        ruleId: "text-alternatives/img-alt",
        selector: p(t2),
        html: m2(t2),
        impact: "critical",
        message: "Image element missing alt attribute.",
        context: Ae(t2),
        fix: { type: "add-attribute", attribute: "alt", value: "" }
      });
    }
    return a2;
  }
};
function jt(e2) {
  var i2;
  const a2 = De(e2);
  if (a2)
    return a2;
  const t2 = e2.querySelector("title");
  return (i2 = t2 == null ? undefined : t2.textContent) != null && i2.trim() ? t2.textContent.trim() : "";
}
var Ut = {
  id: "text-alternatives/svg-img-alt",
  category: "text-alternatives",
  actRuleIds: ["7d6734"],
  wcag: ["1.1.1"],
  level: "A",
  fixability: "contextual",
  browserHint: "Screenshot the SVG to understand its content, then add a title element or aria-label.",
  description: "SVG elements with an img, graphics-document, or graphics-symbol role must have an accessible name via a <title> element, aria-label, or aria-labelledby.",
  guidance: "Inline SVGs with role='img' need accessible names. Add a <title> element as the first child of the SVG (screen readers will announce it), or use aria-label on the SVG element. For complex SVGs, use aria-labelledby referencing both a <title> and <desc> element. Decorative SVGs should use aria-hidden='true' instead.",
  run(e2) {
    const a2 = [], t2 = 'svg[role="img"], [role="graphics-document"], [role="graphics-symbol"]';
    for (const i2 of e2.querySelectorAll(t2)) {
      if (h2(i2))
        continue;
      if (!jt(i2)) {
        const o3 = i2.getAttribute("role");
        a2.push({
          ruleId: "text-alternatives/svg-img-alt",
          selector: p(i2),
          html: m2(i2),
          impact: "serious",
          message: `${i2.tagName.toLowerCase()} with role='${o3}' has no accessible name.`,
          fix: { type: "add-attribute", attribute: "aria-label", value: "" }
        });
      }
    }
    return a2;
  }
};
var Ot = {
  id: "text-alternatives/input-image-alt",
  category: "text-alternatives",
  actRuleIds: ["59796f"],
  wcag: ["1.1.1", "4.1.2"],
  level: "A",
  fixability: "contextual",
  browserHint: "Screenshot the image button to see its icon, then set alt to describe the action (e.g., 'Search', 'Submit').",
  description: 'Image inputs (<input type="image">) must have alternate text describing the button action.',
  guidance: "Image buttons (<input type='image'>) act as submit buttons with a custom image. Add alt text via alt, aria-label, or aria-labelledby that describes the action (e.g. alt='Search' or alt='Submit order'), not the image itself. Without it, screen readers announce only 'image' or the filename, giving no clue what the button does.",
  run(e2) {
    const a2 = [];
    for (const t2 of e2.querySelectorAll('input[type="image"]'))
      h2(t2) || x2(t2) || a2.push({
        ruleId: "text-alternatives/input-image-alt",
        selector: p(t2),
        html: m2(t2),
        impact: "critical",
        message: "Image input missing alt text.",
        fix: { type: "add-attribute", attribute: "alt", value: "" }
      });
    return a2;
  }
};
var Vt = {
  id: "text-alternatives/image-redundant-alt",
  category: "text-alternatives",
  wcag: ["1.1.1"],
  level: "A",
  tags: ["best-practice"],
  fixability: "contextual",
  description: "Image alt text should not duplicate adjacent link or button text. When alt text repeats surrounding text, screen reader users hear the same information twice.",
  guidance: "When an image is inside a link or button that also has text, make the alt text complementary rather than identical. If the image is purely decorative in that context, use alt='' to avoid repetition.",
  run(e2) {
    var t2;
    const a2 = [];
    for (const i2 of e2.querySelectorAll("img[alt]")) {
      const n2 = i2.getAttribute("alt").trim().toLowerCase();
      if (!n2)
        continue;
      const o3 = i2.closest("a, button");
      if (o3) {
        const r3 = ((t2 = o3.textContent) == null ? undefined : t2.trim().toLowerCase()) || "";
        if (r3 && r3 === n2) {
          const s2 = o3.tagName.toLowerCase(), l2 = o3.getAttribute("href");
          a2.push({
            ruleId: "text-alternatives/image-redundant-alt",
            selector: p(i2),
            html: m2(i2),
            impact: "minor",
            message: `Alt text "${i2.getAttribute("alt")}" duplicates surrounding ${s2} text.`,
            context: `Duplicated text: "${i2.getAttribute("alt")}", parent element: <${s2}>${l2 ? ` href="${l2}"` : ""}`,
            fix: { type: "suggest", suggestion: 'Set alt="" if the image is decorative in this context, or provide complementary alt text that adds information the visible text does not convey' }
          });
        }
      }
    }
    return a2;
  }
};
var Bt = /^(image|picture|photo|graphic|icon|img)(\s+of\b|\s*[:\u2013\u2014-]|\s*$)/i;
var _t = {
  id: "text-alternatives/image-alt-words",
  category: "text-alternatives",
  wcag: ["1.1.1"],
  level: "A",
  tags: ["best-practice"],
  fixability: "contextual",
  browserHint: "Screenshot the image to verify the alt text accurately describes it without filler words like 'image of'.",
  description: "Image alt text should not start with words like 'image of', 'photo of', or 'picture of' — screen readers already announce the element type.",
  guidance: "Screen readers already announce 'image' or 'graphic' before reading alt text, so phrases like 'image of', 'photo of', or 'picture of' are redundant. Remove these words and describe what the image shows. For example, change 'image of a dog' to 'golden retriever playing fetch'.",
  run(e2) {
    const a2 = [];
    for (const t2 of e2.querySelectorAll("img[alt]")) {
      const i2 = t2.getAttribute("alt").trim();
      if (!i2)
        continue;
      const n2 = i2.match(Bt);
      if (n2) {
        const o3 = n2[1].toLowerCase();
        a2.push({
          ruleId: "text-alternatives/image-alt-words",
          selector: p(t2),
          html: m2(t2),
          impact: "minor",
          message: `Alt text "${i2}" starts with redundant prefix "${o3}".`,
          context: `Current alt: "${i2}", redundant prefix: "${o3}"`,
          fix: { type: "suggest", suggestion: "Remove the redundant prefix from the alt text; screen readers already announce the element as an image" }
        });
      }
    }
    return a2;
  }
};
var Gt = {
  id: "text-alternatives/area-alt",
  category: "text-alternatives",
  wcag: ["1.1.1", "4.1.2"],
  level: "A",
  fixability: "contextual",
  description: "Image map <area> elements must have alternative text.",
  guidance: "Each clickable region in an image map needs alternative text so screen reader users know what the region represents. Add an alt attribute to every <area> element describing its purpose. For complex image maps, consider using alternative approaches like SVG with embedded links, or a list of text links.",
  run(e2) {
    const a2 = [];
    for (const t2 of e2.querySelectorAll("area[href]")) {
      if (h2(t2))
        continue;
      x2(t2) || a2.push({
        ruleId: "text-alternatives/area-alt",
        selector: p(t2),
        html: m2(t2),
        impact: "critical",
        message: "Image map <area> element is missing alternative text.",
        fix: { type: "add-attribute", attribute: "alt", value: "" }
      });
    }
    return a2;
  }
};
var Yt = {
  id: "text-alternatives/object-alt",
  category: "text-alternatives",
  actRuleIds: ["8fc3b6"],
  wcag: ["1.1.1"],
  level: "A",
  fixability: "contextual",
  browserHint: "Screenshot the embedded object to see its content, then add aria-label or title describing it.",
  description: "<object> elements must have alternative text.",
  guidance: "Object elements embed external content that may not be accessible to all users. Provide alternative text via aria-label, aria-labelledby, or a title attribute. The fallback content inside <object> is only shown when the object fails to load and does not serve as an accessible name.",
  run(e2) {
    var t2;
    const a2 = [];
    for (const i2 of e2.querySelectorAll("object")) {
      if (h2(i2) || Pe(i2) || i2.getAttribute("role") === "presentation" || i2.getAttribute("role") === "none" || De(i2))
        continue;
      const n2 = i2.getAttribute("data") || "";
      if (!((i2.getAttribute("type") || "").startsWith("image/") || /\.(png|jpg|jpeg|gif|svg|webp|bmp|ico)$/i.test(n2))) {
        const s2 = i2.querySelector("img[alt]");
        if (s2 && ((t2 = s2.getAttribute("alt")) != null && t2.trim()))
          continue;
      }
      a2.push({
        ruleId: "text-alternatives/object-alt",
        selector: p(i2),
        html: m2(i2),
        impact: "serious",
        message: "<object> element is missing alternative text. Add aria-label, aria-labelledby, or a title attribute.",
        fix: { type: "add-attribute", attribute: "aria-label", value: "" }
      });
    }
    return a2;
  }
};
var Xt = {
  id: "text-alternatives/role-img-alt",
  category: "text-alternatives",
  actRuleIds: ["23a2a8"],
  wcag: ["1.1.1"],
  level: "A",
  fixability: "contextual",
  browserHint: "Screenshot the element to see its visual appearance, then provide an aria-label describing what it represents.",
  description: "Elements with role='img' must have an accessible name.",
  guidance: "When you assign role='img' to an element (like a div containing icon fonts or CSS backgrounds), you must provide an accessible name via aria-label or aria-labelledby. Without this, screen reader users have no way to understand what the image represents. If the image is decorative, use role='presentation' or role='none' instead.",
  run(e2) {
    const a2 = [];
    for (const t2 of e2.querySelectorAll('[role="img"]')) {
      if (h2(t2) || t2.tagName.toLowerCase() === "svg" || t2.tagName.toLowerCase() === "img")
        continue;
      x2(t2) || a2.push({
        ruleId: "text-alternatives/role-img-alt",
        selector: p(t2),
        html: m2(t2),
        impact: "serious",
        message: "Element with role='img' has no accessible name. Add aria-label or aria-labelledby.",
        fix: { type: "add-attribute", attribute: "aria-label", value: "" }
      });
    }
    return a2;
  }
};
var Jt = {
  id: "time-based-media/video-captions",
  category: "time-based-media",
  actRuleIds: ["eac66b"],
  wcag: ["1.2.2"],
  level: "A",
  fixability: "contextual",
  browserHint: "Screenshot the video element to see its poster or content for context when writing captions.",
  description: "Video elements must have captions via <track kind='captions'> or <track kind='subtitles'>.",
  guidance: "Captions provide text alternatives for audio content in videos, benefiting deaf users and those who cannot hear audio. Add a <track> element with kind='captions' pointing to a WebVTT caption file. Captions should include both dialogue and important sound effects.",
  run(e2) {
    const a2 = [];
    for (const t2 of e2.querySelectorAll("video")) {
      if (h2(t2) || I3(t2) || t2.hasAttribute("muted") || t2.hasAttribute("autoplay"))
        continue;
      t2.querySelector('track[kind="captions"], track[kind="subtitles"]') || a2.push({
        ruleId: "time-based-media/video-captions",
        selector: p(t2),
        html: m2(t2),
        impact: "critical",
        message: "Video element has no captions track."
      });
    }
    return a2;
  }
};
var Kt = {
  id: "time-based-media/audio-transcript",
  category: "time-based-media",
  actRuleIds: ["e7aa44"],
  wcag: ["1.2.1"],
  level: "A",
  fixability: "contextual",
  browserHint: "Inspect the page around the audio element for existing transcript links or associated text content.",
  description: "Audio elements should have a text alternative or transcript.",
  guidance: "Audio-only content like podcasts or recordings needs a text alternative for deaf users. Provide a transcript either on the same page or linked nearby. The transcript should include all spoken content and descriptions of relevant sounds.",
  run(e2) {
    const a2 = [];
    for (const t2 of e2.querySelectorAll("audio")) {
      if (h2(t2) || I3(t2) || t2.querySelector('track[kind="captions"], track[kind="descriptions"]') || t2.hasAttribute("aria-describedby"))
        continue;
      const n2 = t2.parentElement;
      n2 && n2.querySelector('a[href*="transcript"], a[href*="text"]') || a2.push({
        ruleId: "time-based-media/audio-transcript",
        selector: p(t2),
        html: m2(t2),
        impact: "critical",
        message: "Audio element has no transcript or text alternative. Add a transcript or track element."
      });
    }
    return a2;
  }
};
var Qt = /* @__PURE__ */ new Set([
  "off",
  "on",
  "name",
  "honorific-prefix",
  "given-name",
  "additional-name",
  "family-name",
  "honorific-suffix",
  "nickname",
  "email",
  "username",
  "new-password",
  "current-password",
  "one-time-code",
  "organization-title",
  "organization",
  "street-address",
  "address-line1",
  "address-line2",
  "address-line3",
  "address-level4",
  "address-level3",
  "address-level2",
  "address-level1",
  "country",
  "country-name",
  "postal-code",
  "cc-name",
  "cc-given-name",
  "cc-additional-name",
  "cc-family-name",
  "cc-number",
  "cc-exp",
  "cc-exp-month",
  "cc-exp-year",
  "cc-csc",
  "cc-type",
  "transaction-currency",
  "transaction-amount",
  "language",
  "bday",
  "bday-day",
  "bday-month",
  "bday-year",
  "sex",
  "tel",
  "tel-country-code",
  "tel-national",
  "tel-area-code",
  "tel-local",
  "tel-extension",
  "impp",
  "url",
  "photo"
]);
var Zt = /* @__PURE__ */ new Set([
  "tel",
  "tel-country-code",
  "tel-national",
  "tel-area-code",
  "tel-local",
  "tel-extension",
  "email",
  "impp"
]);
var ea = /* @__PURE__ */ new Set(["home", "work", "mobile", "fax", "pager"]);
var ta = /* @__PURE__ */ new Set(["shipping", "billing"]);
var aa = /* @__PURE__ */ new Set(["webauthn"]);
function ia(e2) {
  const a2 = e2.toLowerCase().split(/\s+/).filter(Boolean);
  if (a2.length === 0)
    return true;
  let t2 = 0;
  a2[t2].startsWith("section-") && t2++, t2 < a2.length && ta.has(a2[t2]) && t2++;
  let i2 = false;
  if (t2 < a2.length && ea.has(a2[t2]) && (i2 = true, t2++), t2 >= a2.length)
    return false;
  const n2 = a2[t2];
  return !Qt.has(n2) || i2 && !Zt.has(n2) ? false : (t2++, t2 < a2.length && aa.has(a2[t2]) && t2++, t2 === a2.length);
}
var na = {
  id: "adaptable/autocomplete-valid",
  category: "adaptable",
  actRuleIds: ["73f2c2"],
  wcag: ["1.3.5"],
  level: "AA",
  fixability: "contextual",
  description: "Autocomplete attribute must use valid values from the HTML specification.",
  guidance: "The autocomplete attribute helps users fill forms by identifying input purposes. Use standard values like 'name', 'email', 'tel', 'street-address', 'postal-code', 'cc-number'. This benefits users with cognitive disabilities, motor impairments, and anyone using password managers or autofill. Check the HTML specification for the complete list of valid tokens.",
  run(e2) {
    const a2 = [];
    for (const t2 of e2.querySelectorAll("[autocomplete]")) {
      if (h2(t2) || I3(t2) || t2.disabled || t2.getAttribute("aria-disabled") === "true")
        continue;
      const i2 = t2.getAttribute("autocomplete").trim();
      i2 && (ia(i2) || a2.push({
        ruleId: "adaptable/autocomplete-valid",
        selector: p(t2),
        html: m2(t2),
        impact: "serious",
        message: `Invalid autocomplete value "${i2}".`
      }));
    }
    return a2;
  }
};
function L3(e2, a2, t2) {
  let i2 = e2;
  if (i2.includes("{{tag}}") && (i2 = i2.replace(/\{\{tag\}\}/g, a2.tagName.toLowerCase())), i2.includes("{{value}}")) {
    let n2 = "";
    "attribute" in t2 && t2.attribute && (n2 = a2.getAttribute(t2.attribute) ?? ""), i2 = i2.replace(/\{\{value\}\}/g, n2);
  }
  return i2;
}
function N3(e2) {
  const a2 = e2.skipAriaHidden !== false;
  return {
    id: e2.id,
    category: e2.id.split("/")[0],
    actRuleIds: e2.actRuleIds,
    wcag: e2.wcag,
    level: e2.level,
    tags: e2.tags,
    fixability: e2.fixability,
    browserHint: e2.browserHint,
    description: e2.description,
    guidance: e2.guidance,
    run(t2) {
      var n2, o3;
      const i2 = [];
      switch (e2.check.type) {
        case "selector-exists": {
          for (const r3 of t2.querySelectorAll(e2.selector))
            a2 && h2(r3) || i2.push({
              ruleId: e2.id,
              selector: p(r3),
              html: m2(r3),
              impact: e2.impact,
              message: L3(e2.message, r3, e2.check),
              ...e2.fix ? { fix: e2.fix } : {},
              element: r3
            });
          break;
        }
        case "attribute-value": {
          const { attribute: r3, operator: s2, value: l2 } = e2.check;
          for (const d2 of t2.querySelectorAll(e2.selector)) {
            if (a2 && h2(d2))
              continue;
            const c3 = d2.getAttribute(r3);
            c3 !== null && ra(c3, s2, l2) && i2.push({
              ruleId: e2.id,
              selector: p(d2),
              html: m2(d2),
              impact: e2.impact,
              message: L3(e2.message, d2, e2.check),
              ...e2.fix ? { fix: e2.fix } : {},
              element: d2
            });
          }
          break;
        }
        case "attribute-missing": {
          const { attribute: r3 } = e2.check;
          for (const s2 of t2.querySelectorAll(e2.selector))
            a2 && h2(s2) || s2.hasAttribute(r3) || i2.push({
              ruleId: e2.id,
              selector: p(s2),
              html: m2(s2),
              impact: e2.impact,
              message: L3(e2.message, s2, e2.check),
              ...e2.fix ? { fix: e2.fix } : {},
              element: s2
            });
          break;
        }
        case "attribute-regex": {
          const { attribute: r3, pattern: s2, flags: l2, shouldMatch: d2 } = e2.check;
          let c3;
          try {
            c3 = new RegExp(s2, l2);
          } catch {
            break;
          }
          for (const u3 of t2.querySelectorAll(e2.selector)) {
            if (a2 && h2(u3))
              continue;
            const b2 = u3.getAttribute(r3);
            if (b2 === null)
              continue;
            const g3 = c3.test(b2);
            d2 && !g3 ? i2.push({
              ruleId: e2.id,
              selector: p(u3),
              html: m2(u3),
              impact: e2.impact,
              message: L3(e2.message, u3, e2.check),
              ...e2.fix ? { fix: e2.fix } : {},
              element: u3
            }) : !d2 && g3 && i2.push({
              ruleId: e2.id,
              selector: p(u3),
              html: m2(u3),
              impact: e2.impact,
              message: L3(e2.message, u3, e2.check),
              ...e2.fix ? { fix: e2.fix } : {},
              element: u3
            });
          }
          break;
        }
        case "child-required": {
          const { childSelector: r3 } = e2.check;
          for (const s2 of t2.querySelectorAll(e2.selector))
            a2 && h2(s2) || s2.querySelector(r3) || i2.push({
              ruleId: e2.id,
              selector: p(s2),
              html: m2(s2),
              impact: e2.impact,
              message: L3(e2.message, s2, e2.check),
              ...e2.fix ? { fix: e2.fix } : {},
              element: s2
            });
          break;
        }
        case "child-invalid": {
          const r3 = new Set(e2.check.allowedChildren.map((l2) => l2.toLowerCase())), s2 = e2.check.allowedChildRoles ? new Set(e2.check.allowedChildRoles.map((l2) => l2.toLowerCase())) : null;
          for (const l2 of t2.querySelectorAll(e2.selector)) {
            if (a2 && h2(l2))
              continue;
            const d2 = (n2 = l2.getAttribute("role")) == null ? undefined : n2.trim().toLowerCase();
            if (d2 === "presentation" || d2 === "none")
              continue;
            let c3 = false;
            const u3 = e2.check.allowedChildren.filter((b2) => b2 !== "script" && b2 !== "template");
            for (const b2 of l2.childNodes)
              if (b2.nodeType === 3 && b2.textContent && b2.textContent.trim()) {
                const g3 = u3.map((f3) => `<${f3}>`).join(" or ");
                i2.push({
                  ruleId: e2.id,
                  selector: p(l2),
                  html: m2(l2),
                  impact: e2.impact,
                  message: `<${l2.tagName.toLowerCase()}> contains direct text content. Wrap in ${g3}.`,
                  ...e2.fix ? { fix: e2.fix } : {},
                  element: l2
                }), c3 = true;
                break;
              }
            if (!c3)
              for (const b2 of l2.children) {
                if (r3.has(b2.tagName.toLowerCase()))
                  continue;
                const g3 = (o3 = b2.getAttribute("role")) == null ? undefined : o3.trim().toLowerCase();
                if (!(g3 && (s2 != null && s2.has(g3))) && !(g3 === "presentation" || g3 === "none")) {
                  i2.push({
                    ruleId: e2.id,
                    selector: p(b2),
                    html: m2(b2),
                    impact: e2.impact,
                    message: L3(e2.message, b2, e2.check),
                    ...e2.fix ? { fix: e2.fix } : {},
                    element: b2
                  });
                  break;
                }
              }
          }
          break;
        }
      }
      return i2;
    }
  };
}
function ra(e2, a2, t2) {
  switch (a2) {
    case ">":
      return parseFloat(e2) > t2;
    case "<":
      return parseFloat(e2) < t2;
    case "=":
      return e2 === String(t2);
    case "!=":
      return e2 !== String(t2);
    case "in":
      return Array.isArray(t2) && t2.includes(e2);
    case "not-in":
      return Array.isArray(t2) && !t2.includes(e2);
    default:
      return false;
  }
}
var sa = {
  id: "adaptable/list-children",
  selector: "ul, ol",
  check: { type: "child-invalid", allowedChildren: ["li", "script", "template", "style"], allowedChildRoles: ["listitem"] },
  impact: "serious",
  message: "List contains non-<li> child <{{tag}}>.",
  description: "<ul> and <ol> must only contain <li>, <script>, <template>, or <style> as direct children.",
  wcag: ["1.3.1"],
  level: "A",
  fixability: "contextual",
  guidance: "Screen readers announce list structure ('list with 5 items') based on proper markup. Placing non-<li> elements directly inside <ul> or <ol> breaks this structure. Wrap content in <li> elements, or if you need wrapper divs for styling, apply styles to <li> elements directly and remove the wrapper (e.g., change <ul><div>item</div></ul> to <ul><li>item</li></ul>)."
};
var la = N3(sa);
var ca = {
  id: "adaptable/listitem-parent",
  category: "adaptable",
  wcag: ["1.3.1"],
  level: "A",
  fixability: "contextual",
  description: "<li> elements must be contained in a <ul>, <ol>, or <menu>.",
  guidance: "List items (<li>) only have semantic meaning inside a list container (<ul>, <ol>, or <menu>). Without a list parent, screen readers will not announce 'list with N items' or allow users to skip between items using list navigation shortcuts. Wrap <li> elements in the appropriate list container — <ul> for unordered lists, <ol> for ordered/numbered lists.",
  run(e2) {
    var t2;
    const a2 = [];
    for (const i2 of e2.querySelectorAll("li")) {
      if (h2(i2))
        continue;
      const n2 = i2.parentElement;
      if (!n2)
        continue;
      const o3 = n2.tagName.toLowerCase();
      o3 === "ul" || o3 === "ol" || o3 === "menu" || ((t2 = n2.getAttribute("role")) == null ? undefined : t2.trim().toLowerCase()) === "list" || a2.push({
        ruleId: "adaptable/listitem-parent",
        selector: p(i2),
        html: m2(i2),
        impact: "serious",
        message: "<li> is not contained in a <ul>, <ol>, or <menu>."
      });
    }
    return a2;
  }
};
var da = {
  id: "adaptable/dl-children",
  category: "adaptable",
  wcag: ["1.3.1"],
  level: "A",
  fixability: "contextual",
  description: "<dt> and <dd> elements must be contained in a <dl>.",
  guidance: "Definition terms (<dt>) and definitions (<dd>) only have semantic meaning inside a definition list (<dl>). Outside of <dl>, they're treated as generic text. Wrap related <dt> and <dd> pairs in a <dl> element to convey the term/definition relationship to assistive technologies.",
  run(e2) {
    var t2;
    const a2 = [];
    for (const i2 of e2.querySelectorAll("dt, dd")) {
      const n2 = i2.parentElement, o3 = n2 == null ? undefined : n2.tagName.toLowerCase();
      (!n2 || o3 !== "dl" && !(o3 === "div" && ((t2 = n2.parentElement) == null ? undefined : t2.tagName.toLowerCase()) === "dl")) && a2.push({
        ruleId: "adaptable/dl-children",
        selector: p(i2),
        html: m2(i2),
        impact: "serious",
        message: `<${i2.tagName.toLowerCase()}> is not contained in a <dl>.`
      });
    }
    return a2;
  }
};
var ua = {
  id: "adaptable/definition-list",
  selector: "dl",
  check: { type: "child-invalid", allowedChildren: ["dt", "dd", "div", "script", "template", "style"] },
  impact: "serious",
  message: "<dl> contains invalid child <{{tag}}>.",
  description: "<dl> elements must only contain <dt>, <dd>, <div>, <script>, <template>, or <style>.",
  wcag: ["1.3.1"],
  level: "A",
  fixability: "contextual",
  guidance: "Definition lists have strict content requirements. Only <dt> (terms), <dd> (definitions), and <div> (for grouping dt/dd pairs) are valid children. Other elements break the list structure for screen readers. Move invalid elements outside the <dl>, or if they represent a term change to <dt>, if a definition change to <dd>. Styling wrappers should be replaced with <div> elements containing <dt>/<dd> pairs."
};
var ma = N3(ua);
function We(e2, a2) {
  switch (a2.toLowerCase()) {
    case "deg":
      return e2;
    case "rad":
      return e2 * 180 / Math.PI;
    case "turn":
      return e2 * 360;
    case "grad":
      return e2 * 0.9;
    default:
      return NaN;
  }
}
function B2(e2) {
  return isNaN(e2) ? false : (e2 = (e2 % 360 + 360) % 360, e2 >= 85 && e2 <= 95 || e2 >= 265 && e2 <= 275);
}
function pa(e2) {
  const a2 = e2.match(/rotate[Z]?\(\s*(-?[\d.]+)(deg|rad|turn|grad)\s*\)/i);
  if (a2) {
    const n2 = We(parseFloat(a2[1]), a2[2]);
    if (B2(n2))
      return true;
  }
  const t2 = e2.match(/matrix\(\s*(-?[\d.e]+)\s*,\s*(-?[\d.e]+)\s*,\s*(-?[\d.e]+)\s*,\s*(-?[\d.e]+)/i);
  if (t2) {
    const n2 = parseFloat(t2[1]), o3 = parseFloat(t2[2]), r3 = Math.atan2(o3, n2) * (180 / Math.PI);
    if (B2(r3))
      return true;
  }
  const i2 = e2.match(/matrix3d\(\s*(-?[\d.e]+)\s*,\s*(-?[\d.e]+)\s*,\s*(-?[\d.e]+)\s*,\s*(-?[\d.e]+)\s*,\s*(-?[\d.e]+)\s*,\s*(-?[\d.e]+)/i);
  if (i2) {
    const n2 = parseFloat(i2[1]), o3 = parseFloat(i2[2]), r3 = Math.atan2(o3, n2) * (180 / Math.PI);
    if (B2(r3))
      return true;
  }
  return false;
}
function ba(e2) {
  const a2 = e2.match(/(-?[\d.]+)(deg|rad|turn|grad)/i);
  if (!a2)
    return false;
  const t2 = We(parseFloat(a2[1]), a2[2]);
  return B2(t2);
}
var ha = {
  id: "adaptable/orientation-lock",
  category: "adaptable",
  actRuleIds: ["b33eff"],
  wcag: ["1.3.4"],
  level: "AA",
  tags: ["page-level"],
  fixability: "contextual",
  description: "Page orientation must not be restricted using CSS transforms.",
  guidance: "Users with motor disabilities may mount their device in a fixed orientation. Using CSS transforms with @media (orientation: portrait/landscape) to rotate content 90° effectively locks the page to one orientation. Remove the orientation-dependent transform and use responsive design instead.",
  run(e2) {
    const a2 = [];
    for (const t2 of e2.querySelectorAll("style")) {
      const i2 = t2.textContent || "", n2 = /@media[^{]*\b(orientation)\s*:\s*(portrait|landscape)\b[^{]*\{([^}]*\{[^}]*\}[^}]*)\}/gi;
      let o3;
      for (;o3 = n2.exec(i2); ) {
        const r3 = o3[3];
        let s2 = false;
        const l2 = r3.match(/transform\s*:\s*([^;]+)/i);
        if (l2 && pa(l2[1]) && (s2 = true), !s2) {
          const d2 = r3.match(/(?:^|[{;\s])rotate\s*:\s*([^;]+)/i);
          d2 && ba(d2[1]) && (s2 = true);
        }
        s2 && a2.push({
          ruleId: "adaptable/orientation-lock",
          selector: p(t2),
          html: m2(t2),
          impact: "serious",
          message: `CSS locks page orientation via @media (orientation: ${o3[2]}) with a 90° transform.`
        });
      }
    }
    return a2;
  }
};
var ke = {
  combobox: [["listbox", "tree", "grid", "dialog", "textbox"]],
  feed: [["article"]],
  grid: [["row", "rowgroup"]],
  list: [["listitem", "group"]],
  listbox: [["option", "group"]],
  menu: [["menuitem", "menuitemcheckbox", "menuitemradio", "group", "menu", "separator"]],
  menubar: [["menuitem", "menuitemcheckbox", "menuitemradio", "group", "menu", "separator"]],
  radiogroup: [["radio"]],
  row: [["cell", "columnheader", "gridcell", "rowheader"]],
  rowgroup: [["row"]],
  table: [["row", "rowgroup"]],
  tablist: [["tab"]],
  tree: [["treeitem", "group"]],
  treegrid: [["row", "rowgroup"]]
};
var ga = /* @__PURE__ */ new Set([
  "doc-bibliography",
  "doc-endnotes",
  "grid",
  "group",
  "list",
  "listbox",
  "rowgroup",
  "table",
  "tablist",
  "tree",
  "treegrid"
]);
function fa(e2, a2) {
  var r3;
  const t2 = ((r3 = e2.getAttribute("aria-owns")) == null ? undefined : r3.split(/\s+/)) || [], i2 = e2.ownerDocument, n2 = /* @__PURE__ */ new Set;
  let o3 = false;
  for (const s2 of e2.querySelectorAll("*")) {
    if (h2(s2))
      continue;
    o3 = true;
    const l2 = j(s2);
    l2 && n2.add(l2);
  }
  for (const s2 of t2) {
    const l2 = i2.getElementById(s2);
    if (l2 && !h2(l2)) {
      o3 = true;
      const d2 = j(l2);
      d2 && n2.add(d2);
    }
  }
  if (!o3)
    return "empty";
  for (const s2 of a2)
    if (!s2.some((l2) => n2.has(l2)))
      return "fail";
  return "pass";
}
var va = {
  id: "adaptable/aria-required-children",
  category: "adaptable",
  actRuleIds: ["bc4a75"],
  wcag: ["1.3.1"],
  level: "A",
  fixability: "contextual",
  description: "Certain ARIA roles require specific child roles to be present.",
  guidance: "Some ARIA roles represent containers that must contain specific child roles for proper semantics. For example, a list must contain listitems, a menu must contain menuitems. Add the required child elements with appropriate roles, or use native HTML elements that provide these semantics implicitly (e.g., <ul> with <li>).",
  run(e2) {
    var t2;
    const a2 = [];
    for (const i2 of e2.querySelectorAll("[role]")) {
      if (h2(i2))
        continue;
      const n2 = (t2 = i2.getAttribute("role")) == null ? undefined : t2.trim().toLowerCase();
      if (!n2 || !(n2 in ke) || i2.getAttribute("aria-busy") === "true")
        continue;
      if (n2 === "combobox") {
        if (i2.getAttribute("aria-expanded") !== "true")
          continue;
        const l2 = i2.tagName.toLowerCase();
        if (l2 === "input" || l2 === "textarea")
          continue;
      }
      const o3 = ke[n2], r3 = fa(i2, o3);
      if (r3 === "pass" || r3 === "empty" && ga.has(n2))
        continue;
      const s2 = o3.map((l2) => l2.join(" or ")).join(", ");
      a2.push({
        ruleId: "adaptable/aria-required-children",
        selector: p(i2),
        html: m2(i2),
        impact: "critical",
        message: `Role "${n2}" requires children with role: ${s2}.`
      });
    }
    return a2;
  }
};
var Se = {
  caption: ["figure", "table", "grid", "treegrid"],
  cell: ["row"],
  columnheader: ["row"],
  gridcell: ["row"],
  listitem: ["list", "group"],
  menuitem: ["menu", "menubar", "group"],
  menuitemcheckbox: ["menu", "menubar", "group"],
  menuitemradio: ["menu", "menubar", "group"],
  option: ["listbox", "group"],
  row: ["table", "grid", "treegrid", "rowgroup"],
  rowgroup: ["table", "grid", "treegrid"],
  rowheader: ["row"],
  tab: ["tablist"],
  treeitem: ["tree", "group"]
};
var ya = {
  id: "adaptable/aria-required-parent",
  category: "adaptable",
  actRuleIds: ["ff89c9"],
  wcag: ["1.3.1"],
  level: "A",
  fixability: "contextual",
  description: "Certain ARIA roles must be contained within specific parent roles.",
  guidance: "Some ARIA roles represent items that must exist within specific container roles. For example, a listitem must be within a list, a tab must be within a tablist. Wrap the element in the appropriate parent, or use native HTML elements that provide this structure (e.g., <li> inside <ul>).",
  run(e2) {
    var t2;
    const a2 = [];
    for (const i2 of e2.querySelectorAll("[role]")) {
      if (h2(i2))
        continue;
      const n2 = (t2 = i2.getAttribute("role")) == null ? undefined : t2.trim().toLowerCase();
      if (!n2 || !(n2 in Se))
        continue;
      const o3 = Se[n2];
      let r3 = i2.parentElement, s2 = false;
      for (;r3 && r3 !== e2.documentElement; ) {
        const l2 = j(r3);
        if (l2 && o3.includes(l2)) {
          s2 = true;
          break;
        }
        r3 = r3.parentElement;
      }
      s2 || a2.push({
        ruleId: "adaptable/aria-required-parent",
        selector: p(i2),
        html: m2(i2),
        impact: "critical",
        message: `Role "${n2}" must be contained within: ${o3.join(", ")}.`
      });
    }
    return a2;
  }
};
var wa = {
  id: "adaptable/td-headers-attr",
  category: "adaptable",
  actRuleIds: ["a25f45"],
  wcag: ["1.3.1"],
  level: "A",
  fixability: "contextual",
  description: "All cells in a table using headers attribute must reference valid header IDs.",
  guidance: "The headers attribute on table cells must reference IDs of header cells (th or td) within the same table. This creates explicit associations for screen readers. Verify all referenced IDs exist and spell them correctly. For simple tables, consider using scope on th elements instead.",
  run(e2) {
    const a2 = [];
    for (const t2 of e2.querySelectorAll("td[headers]")) {
      if (h2(t2))
        continue;
      const i2 = t2.closest("table");
      if (!i2)
        continue;
      const n2 = t2.getAttribute("id"), o3 = t2.getAttribute("headers").split(/\s+/);
      for (const r3 of o3) {
        if (r3 === n2) {
          a2.push({
            ruleId: "adaptable/td-headers-attr",
            selector: p(t2),
            html: m2(t2),
            impact: "serious",
            message: `Headers attribute references the cell itself ("${r3}").`
          });
          break;
        }
        if (!i2.querySelector(`th#${CSS.escape(r3)}, td#${CSS.escape(r3)}`)) {
          a2.push({
            ruleId: "adaptable/td-headers-attr",
            selector: p(t2),
            html: m2(t2),
            impact: "serious",
            message: `Headers attribute references non-existent ID "${r3}".`
          });
          break;
        }
      }
    }
    return a2;
  }
};
var xa = {
  id: "adaptable/th-has-data-cells",
  category: "adaptable",
  actRuleIds: ["d0f69e"],
  wcag: ["1.3.1"],
  level: "A",
  fixability: "contextual",
  description: "Table headers should be associated with data cells.",
  guidance: "Screen readers use <th> elements to announce column or row headers when navigating table cells — for example, reading 'Name: John' when moving to a cell. A table with <th> but no <td> elements means headers describe nothing, and screen readers cannot associate data with headers. Either add <td> data cells, or if this is not tabular data, use non-table markup instead.",
  run(e2) {
    const a2 = [];
    for (const t2 of e2.querySelectorAll("table")) {
      if (h2(t2) || t2.getAttribute("role") === "presentation" || t2.getAttribute("role") === "none")
        continue;
      const i2 = t2.querySelectorAll("th"), n2 = t2.querySelectorAll("td");
      i2.length > 0 && n2.length === 0 && a2.push({
        ruleId: "adaptable/th-has-data-cells",
        selector: p(t2),
        html: m2(t2),
        impact: "serious",
        message: "Table has header cells but no data cells."
      });
    }
    return a2;
  }
};
function Aa(e2) {
  var i2;
  const a2 = e2.getAttribute("role");
  if (a2 === "presentation" || a2 === "none")
    return false;
  if (a2 === "table" || a2 === "grid" || a2 === "treegrid" || e2.querySelector("caption") || e2.getAttribute("summary") || e2.querySelector("thead, tfoot, colgroup") || e2.querySelector("th[scope]") || e2.querySelector("td[headers]"))
    return true;
  const t2 = e2.querySelectorAll("th");
  if (t2.length === 0)
    return false;
  for (const n2 of t2)
    if ((i2 = n2.textContent) != null && i2.trim())
      return true;
  return false;
}
function Ie(e2) {
  let a2 = 0, t2 = e2.previousElementSibling;
  for (;t2; )
    a2 += parseInt(t2.getAttribute("colspan") || "1", 10), t2 = t2.previousElementSibling;
  return a2;
}
var ka = {
  id: "adaptable/td-has-header",
  category: "adaptable",
  wcag: ["1.3.1"],
  level: "A",
  fixability: "contextual",
  browserHint: "Screenshot the table to understand its visual layout, then add scope or headers attributes to associate data cells with headers.",
  description: "Data cells in tables larger than 3x3 should have associated headers.",
  guidance: "In complex tables, screen reader users need header associations to understand data cells. Use th elements with scope attribute, or the headers attribute on td elements. For simple tables (≤3x3), this is less critical as context is usually clear.",
  run(e2) {
    var t2;
    const a2 = [];
    for (const i2 of e2.querySelectorAll("table")) {
      if (h2(i2) || !Aa(i2))
        continue;
      const n2 = i2.querySelectorAll("tr"), o3 = n2.length;
      let r3 = 0;
      for (const d2 of n2) {
        const c3 = d2.querySelectorAll("td, th");
        let u3 = 0;
        for (const b2 of c3)
          u3 += parseInt(b2.getAttribute("colspan") || "1", 10);
        r3 = Math.max(r3, u3);
      }
      if (o3 <= 3 && r3 <= 3)
        continue;
      const s2 = i2.querySelector("th[scope]") !== null, l2 = i2.querySelector("td[headers]") !== null;
      for (const d2 of i2.querySelectorAll("td")) {
        if (h2(d2) || !((t2 = d2.textContent) != null && t2.trim()) && !d2.querySelector("img, svg, input, select, textarea") || d2.hasAttribute("aria-label") || d2.hasAttribute("aria-labelledby") || d2.hasAttribute("headers"))
          continue;
        const c3 = d2.closest("tr");
        if (!c3)
          continue;
        const u3 = c3.querySelector("th") !== null, b2 = Ie(d2);
        let g3 = false;
        const f3 = i2.querySelector("thead"), v2 = (f3 == null ? undefined : f3.querySelector("tr")) ?? i2.querySelector("tbody > tr, tr");
        if (v2)
          for (const y3 of v2.querySelectorAll("th, td")) {
            const A3 = Ie(y3), S3 = parseInt(y3.getAttribute("colspan") || "1", 10);
            if (y3.tagName.toLowerCase() === "th" && b2 >= A3 && b2 < A3 + S3) {
              g3 = true;
              break;
            }
          }
        if (!u3 && !g3 && !s2 && !l2) {
          a2.push({
            ruleId: "adaptable/td-has-header",
            selector: p(d2),
            html: m2(d2),
            impact: "serious",
            message: "Data cell has no associated header. Add th elements with scope, or headers attribute."
          });
          break;
        }
      }
    }
    return a2;
  }
};
var Sa = {
  id: "adaptable/scope-attr-valid",
  category: "adaptable",
  wcag: ["1.3.1"],
  level: "A",
  fixability: "mechanical",
  description: "The scope attribute on table headers must have a valid value.",
  guidance: "The scope attribute tells screen readers which cells a header applies to. Valid values are: row, col, rowgroup, colgroup. Using invalid values breaks the association between headers and cells.",
  run(e2) {
    var i2;
    const a2 = [], t2 = /* @__PURE__ */ new Set(["row", "col", "rowgroup", "colgroup"]);
    for (const n2 of e2.querySelectorAll("th[scope]")) {
      if (h2(n2))
        continue;
      const o3 = (i2 = n2.getAttribute("scope")) == null ? undefined : i2.toLowerCase();
      o3 && !t2.has(o3) && a2.push({
        ruleId: "adaptable/scope-attr-valid",
        selector: p(n2),
        html: m2(n2),
        impact: "moderate",
        message: `Invalid scope value "${o3}". Use row, col, rowgroup, or colgroup.`
      });
    }
    return a2;
  }
};
var Ia = {
  id: "adaptable/empty-table-header",
  category: "adaptable",
  wcag: ["1.3.1"],
  level: "A",
  tags: ["best-practice"],
  fixability: "contextual",
  browserHint: "Screenshot the table to see which header cells are visually empty, then add text content or aria-label.",
  description: "Table header cells should have visible text.",
  guidance: "Empty table headers provide no information to screen reader users. Either add descriptive text to the header, or if the header is intentionally empty (like a corner cell), consider using a td element instead or adding a visually hidden label.",
  run(e2) {
    const a2 = [];
    for (const t2 of e2.querySelectorAll("th")) {
      if (h2(t2))
        continue;
      const i2 = t2.closest("table");
      (i2 == null ? undefined : i2.getAttribute("role")) === "presentation" || (i2 == null ? undefined : i2.getAttribute("role")) === "none" || x2(t2) || a2.push({
        ruleId: "adaptable/empty-table-header",
        selector: p(t2),
        html: m2(t2),
        impact: "minor",
        message: "Table header cell is empty. Add text or use aria-label."
      });
    }
    return a2;
  }
};
var qa = {
  id: "distinguishable/meta-viewport",
  category: "distinguishable",
  actRuleIds: ["b4f0c3"],
  wcag: ["1.4.4"],
  level: "AA",
  tags: ["page-level"],
  fixability: "mechanical",
  browserHint: "After fixing the viewport meta tag, resize the viewport to 320px wide and screenshot to verify content remains readable and usable.",
  description: "Viewport meta tag must not disable user scaling.",
  guidance: "Users with low vision need to zoom content up to 200% or more. Setting user-scalable=no or maximum-scale=1 prevents zooming and fails WCAG. Remove these restrictions. If your layout breaks at high zoom, fix the responsive design rather than preventing zoom.",
  run(e2) {
    const a2 = [], t2 = e2.querySelector('meta[name="viewport"]');
    if (!t2)
      return [];
    const i2 = t2.getAttribute("content") || "", n2 = i2.toLowerCase(), o3 = n2.match(/user-scalable\s*=\s*([^\s,;]+)/i);
    if (o3) {
      const s2 = o3[1], l2 = parseFloat(s2);
      (s2 === "no" || !isNaN(l2) && l2 > -1 && l2 < 1) && a2.push({
        ruleId: "distinguishable/meta-viewport",
        selector: p(t2),
        html: m2(t2),
        impact: "critical",
        message: `Viewport disables user scaling (user-scalable=${s2}). Remove this restriction.`,
        context: `content: "${i2}"`,
        fix: { type: "suggest", suggestion: "Remove user-scalable=no from the viewport meta content attribute" }
      });
    }
    const r3 = n2.match(/maximum-scale\s*=\s*([\d.]+|yes)/i);
    if (r3) {
      const s2 = r3[1], l2 = s2.toLowerCase() === "yes" ? 1 : parseFloat(s2);
      l2 < 2 && a2.push({
        ruleId: "distinguishable/meta-viewport",
        selector: p(t2),
        html: m2(t2),
        impact: "critical",
        message: `Viewport maximum-scale=${l2} restricts zooming. Set to at least 2 or remove.`,
        context: `content: "${i2}"`,
        fix: { type: "suggest", suggestion: "Remove maximum-scale or set it to at least 2 in the viewport meta content attribute" }
      });
    }
    return a2;
  }
};
function ce2(e2) {
  return e2.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function je(e2, a2) {
  const t2 = e2.getAttribute("style");
  if (!t2)
    return null;
  const i2 = new RegExp(`${ce2(a2)}\\s*:\\s*([^;!]+)\\s*!\\s*important`, "gi");
  let n2 = null, o3;
  for (;o3 = i2.exec(t2); )
    n2 = o3;
  if (!n2)
    return null;
  const r3 = n2[1].trim();
  if (/^(inherit|unset|revert)$/i.test(r3))
    return null;
  if (/^(normal|initial)$/i.test(r3))
    return { em: 0, px: null };
  const s2 = r3.match(/^(-?[\d.]+)\s*em$/i);
  if (s2)
    return { em: parseFloat(s2[1]), px: null };
  const l2 = r3.match(/^(-?[\d.]+)$/);
  if (l2)
    return { em: parseFloat(l2[1]), px: null };
  const d2 = r3.match(/^(-?[\d.]+)\s*%$/);
  if (d2)
    return { em: parseFloat(d2[1]) / 100, px: null };
  const c3 = r3.match(/^(-?[\d.]+)\s*(px|pt|cm|mm|in)$/i);
  if (c3) {
    const u3 = parseFloat(c3[1]), b2 = c3[2].toLowerCase();
    let g3;
    switch (b2) {
      case "px":
        g3 = u3;
        break;
      case "pt":
        g3 = u3 * (4 / 3);
        break;
      case "cm":
        g3 = u3 * (96 / 2.54);
        break;
      case "mm":
        g3 = u3 * (96 / 25.4);
        break;
      case "in":
        g3 = u3 * 96;
        break;
      default:
        return null;
    }
    return { em: null, px: g3 };
  }
  return null;
}
function Ue(e2, a2, t2, i2) {
  function n2(o3) {
    var r3;
    if (o3 !== e2) {
      const s2 = o3.getAttribute("style") || "";
      if (new RegExp(`${ce2(a2)}\\s*:\\s*[^;!]+\\s*!\\s*important`, "i").test(s2))
        return false;
    }
    for (const s2 of o3.childNodes)
      if (s2.nodeType === 3 && ((r3 = s2.textContent) != null && r3.trim())) {
        const l2 = parseFloat(w2(o3).fontSize);
        if (l2 > 0 && t2 / l2 < i2)
          return true;
        break;
      }
    for (const s2 of o3.children)
      if (n2(s2))
        return true;
    return false;
  }
  return n2(e2);
}
function Ea(e2) {
  var a2;
  for (const t2 of e2.childNodes)
    if (t2.nodeType === 3 && ((a2 = t2.textContent) != null && a2.trim()))
      return true;
  return false;
}
function Oe(e2) {
  return !e2.closest("svg") && !e2.closest("math");
}
function Ve(e2) {
  const a2 = e2.getAttribute("style");
  if (!a2)
    return false;
  if (/position\s*:\s*(absolute|fixed)/i.test(a2)) {
    const t2 = a2.match(/top\s*:\s*(-[\d.]+)(em|px|%)/i);
    if (t2 && parseFloat(t2[1]) < -100)
      return true;
    const i2 = a2.match(/left\s*:\s*(-[\d.]+)(em|px|%)/i);
    if (i2 && parseFloat(i2[1]) < -100)
      return true;
  }
  return false;
}
function de(e2, a2) {
  if (Ea(e2))
    return true;
  for (const t2 of e2.children) {
    const i2 = t2.getAttribute("style") || "";
    if (!new RegExp(`${ce2(a2)}\\s*:\\s*[^;!]+\\s*!\\s*important`, "i").test(i2) && de(t2, a2))
      return true;
  }
  return false;
}
function Be(e2, a2, t2, i2) {
  const n2 = [];
  for (const o3 of e2.querySelectorAll("[style]")) {
    if (h2(o3) || !Oe(o3) || Ve(o3) || !de(o3, t2))
      continue;
    const r3 = je(o3, t2);
    if (!r3)
      continue;
    let s2 = false;
    if (r3.em !== null ? s2 = r3.em < i2 : r3.px !== null && (s2 = Ue(o3, t2, r3.px, i2)), s2) {
      const l2 = r3.em !== null ? `${r3.em}${t2 === "line-height" ? "" : "em"}` : `${r3.px}px`;
      n2.push({
        ruleId: a2,
        selector: p(o3),
        html: m2(o3),
        impact: "serious",
        message: `${t2} ${l2} with !important is below the ${i2}${t2 === "line-height" ? "" : "em"} minimum.`
      });
    }
  }
  return n2;
}
function La(e2) {
  let a2 = e2, t2 = false;
  for (;a2; ) {
    const i2 = w2(a2);
    parseFloat(i2.width) > 500 && (t2 = true), (i2.whiteSpace === "nowrap" || i2.whiteSpace === "pre") && (t2 = true);
    const { overflowX: o3, overflowY: r3 } = i2;
    if ((o3 === "scroll" || o3 === "auto") && r3 !== "scroll" && r3 !== "auto")
      return t2;
    a2 = a2.parentElement;
  }
  return false;
}
var Ra = {
  id: "distinguishable/letter-spacing",
  category: "distinguishable",
  actRuleIds: ["24afc2"],
  wcag: ["1.4.12"],
  level: "AA",
  fixability: "mechanical",
  description: "Letter spacing set with !important in style attributes must be at least 0.12em.",
  guidance: "WCAG 1.4.12 requires users to be able to override text spacing. Using !important on letter-spacing with a value below 0.12em prevents this. Either increase the value to at least 0.12em or remove !important.",
  run(e2) {
    return Be(e2, "distinguishable/letter-spacing", "letter-spacing", 0.12);
  }
};
var Ca = {
  id: "distinguishable/line-height",
  category: "distinguishable",
  actRuleIds: ["78fd32"],
  wcag: ["1.4.12"],
  level: "AA",
  fixability: "mechanical",
  description: "Line height set with !important in style attributes must be at least 1.5.",
  guidance: "WCAG 1.4.12 requires users to be able to override text spacing. Using !important on line-height with a value below 1.5 prevents this. Either increase the value to at least 1.5 or remove !important.",
  run(e2) {
    const a2 = [];
    for (const t2 of e2.querySelectorAll("[style]")) {
      if (h2(t2) || !Oe(t2) || Ve(t2) || !de(t2, "line-height") || La(t2))
        continue;
      if (t2 instanceof HTMLElement && t2.scrollHeight > 0) {
        const o3 = parseFloat(w2(t2).lineHeight);
        if (o3 > 0 && t2.scrollHeight <= o3 * 1.5)
          continue;
      }
      const i2 = je(t2, "line-height");
      if (!i2)
        continue;
      let n2 = false;
      if (i2.em !== null ? n2 = i2.em < 1.5 : i2.px !== null && (n2 = Ue(t2, "line-height", i2.px, 1.5)), n2) {
        const o3 = i2.em !== null ? `${i2.em}` : `${i2.px}px`;
        a2.push({
          ruleId: "distinguishable/line-height",
          selector: p(t2),
          html: m2(t2),
          impact: "serious",
          message: `Line height ${o3} with !important is below the 1.5 minimum.`
        });
      }
    }
    return a2;
  }
};
var Ta = {
  id: "distinguishable/word-spacing",
  category: "distinguishable",
  actRuleIds: ["9e45ec"],
  wcag: ["1.4.12"],
  level: "AA",
  fixability: "mechanical",
  description: "Word spacing set with !important in style attributes must be at least 0.16em.",
  guidance: "WCAG 1.4.12 requires users to be able to override text spacing. Using !important on word-spacing with a value below 0.16em prevents this. Either increase the value to at least 0.16em or remove !important.",
  run(e2) {
    return Be(e2, "distinguishable/word-spacing", "word-spacing", 0.16);
  }
};
var Na = /* @__PURE__ */ new Set([
  "block",
  "flex",
  "grid",
  "table",
  "table-cell",
  "list-item",
  "flow-root"
]);
var Ma = /* @__PURE__ */ new Set([
  "inline",
  "inline-block",
  "inline-flex",
  "inline-grid"
]);
function $a(e2) {
  let a2 = e2.parentElement;
  for (;a2 && !Na.has(w2(a2).display); )
    a2 = a2.parentElement;
  if (!a2)
    return null;
  const t2 = a2.ownerDocument.createTreeWalker(a2, NodeFilter.SHOW_TEXT);
  let i2 = "", n2 = null, o3;
  for (;o3 = t2.nextNode(); ) {
    if (!o3.data.trim())
      continue;
    let s2 = o3.parentElement, l2 = false;
    for (;s2 && s2 !== a2; ) {
      if (s2.tagName === "A") {
        l2 = true;
        break;
      }
      s2 = s2.parentElement;
    }
    l2 || (i2 += o3.data, !n2 && o3.parentElement && (n2 = C3(w2(o3.parentElement).color)));
  }
  const r3 = i2.match(new RegExp("\\p{L}{3,}", "gu"));
  return !n2 || !r3 || r3.length < 2 ? null : { block: a2, textColor: n2 };
}
function qe(e2, a2) {
  const t2 = e2.textDecorationLine || e2.textDecoration || "";
  return (t2.includes("underline") || t2.includes("line-through")) && t2 !== a2;
}
function V2(e2) {
  return e2 === "bold" ? 700 : e2 === "normal" ? 400 : parseInt(e2) || 400;
}
function Ha(e2) {
  const a2 = e2.ownerDocument.createTreeWalker(e2, NodeFilter.SHOW_TEXT);
  let t2;
  for (;t2 = a2.nextNode(); )
    if (t2.data.trim())
      return false;
  return true;
}
var Pa = {
  id: "distinguishable/link-in-text-block",
  category: "distinguishable",
  wcag: ["1.4.1"],
  level: "A",
  fixability: "visual",
  browserHint: "Screenshot the text block to see how the link blends with surrounding text, then verify your fix (e.g., underline or border) makes the link visually distinct.",
  description: "Links within text blocks must be distinguishable by more than color alone.",
  guidance: "Users who cannot perceive color differences need other visual cues to identify links. Links in text should have underlines or other non-color indicators. If using color alone, ensure 3:1 contrast with surrounding text AND provide additional indication on focus/hover.",
  run(e2) {
    const a2 = [];
    for (const t2 of e2.querySelectorAll("a[href]")) {
      if (h2(t2) || !k2(t2).trim() || Ha(t2) || t2.closest('nav, header, footer, aside, [role="navigation"], [role="banner"], [role="contentinfo"], [role="complementary"]'))
        continue;
      const i2 = w2(t2);
      if (!Ma.has(i2.display || "inline"))
        continue;
      const n2 = $a(t2);
      if (!n2)
        continue;
      const o3 = w2(n2.block), r3 = o3.textDecorationLine || o3.textDecoration || "";
      if (qe(i2, r3) || (parseFloat(i2.borderBottomWidth) || 0) > 0 && i2.borderBottomStyle !== "none" && i2.borderBottomStyle !== "hidden" || Math.abs(V2(i2.fontWeight) - V2(o3.fontWeight)) >= 300 || i2.fontStyle !== o3.fontStyle)
        continue;
      const l2 = parseFloat(i2.fontSize) || 16, d2 = parseFloat(o3.fontSize) || 16;
      if (d2 > 0 && l2 / d2 >= 1.2)
        continue;
      let c3 = false;
      for (const y3 of t2.querySelectorAll("*")) {
        const A3 = w2(y3);
        if (qe(A3, r3) || Math.abs(V2(A3.fontWeight) - V2(o3.fontWeight)) >= 300) {
          c3 = true;
          break;
        }
      }
      if (c3)
        continue;
      const u3 = C3(i2.color);
      if (!u3)
        continue;
      const b2 = q2(...u3), g3 = q2(...n2.textColor), f3 = $(b2, g3);
      if (f3 < 1.1 || f3 >= 3)
        continue;
      const v2 = (y3) => "#" + y3.map((A3) => A3.toString(16).padStart(2, "0")).join("");
      a2.push({
        ruleId: "distinguishable/link-in-text-block",
        selector: p(t2),
        html: m2(t2),
        impact: "serious",
        message: "Link in text block is not visually distinguishable from surrounding text. Add a non-color visual indicator such as an underline or border.",
        context: `link color: ${v2(u3)} rgb(${u3.join(", ")}), surrounding text: ${v2(n2.textColor)} rgb(${n2.textColor.join(", ")}), ratio: ${f3.toFixed(2)}:1`,
        fix: { type: "suggest", suggestion: "Add text-decoration: underline to the link, or add a visible border-bottom. If relying on color contrast alone, ensure at least 3:1 ratio between the link color and surrounding text color." }
      });
    }
    return a2;
  }
};
var Da = /* @__PURE__ */ new Set([
  "SCRIPT",
  "STYLE",
  "NOSCRIPT",
  "TEMPLATE",
  "IFRAME",
  "OBJECT",
  "EMBED",
  "SVG",
  "CANVAS",
  "VIDEO",
  "AUDIO",
  "IMG",
  "BR",
  "HR"
]);
function Fa(e2) {
  const a2 = e2.clip;
  if (a2 && a2.startsWith("rect(")) {
    const i2 = a2.match(/[\d.]+/g);
    if (!i2 || i2.every((n2) => parseFloat(n2) === 0))
      return true;
  }
  const t2 = e2.clipPath;
  if (t2 === "inset(50%)" || t2 === "inset(100%)")
    return true;
  if (e2.overflow === "hidden" && e2.position === "absolute") {
    const i2 = parseFloat(e2.width), n2 = parseFloat(e2.height);
    if (i2 <= 1 && n2 <= 1)
      return true;
  }
  return false;
}
function za(e2) {
  if (h2(e2))
    return true;
  let a2 = e2;
  for (;a2; ) {
    const t2 = w2(a2);
    if (t2.display === "none" || t2.visibility === "hidden" || Fa(t2))
      return true;
    a2 = a2.parentElement;
  }
  return false;
}
function Wa(e2) {
  return e2 instanceof HTMLInputElement || e2 instanceof HTMLTextAreaElement || e2 instanceof HTMLSelectElement || e2 instanceof HTMLButtonElement ? e2.disabled : !!(e2.closest("fieldset[disabled]") || e2.getAttribute("aria-disabled") === "true");
}
function ja(e2, a2) {
  if (e2.tagName !== "LABEL")
    return false;
  const t2 = e2, i2 = t2.htmlFor;
  if (i2) {
    const r3 = a2.getElementById(i2);
    if (r3 && (r3.disabled || r3.getAttribute("aria-disabled") === "true"))
      return true;
  }
  const n2 = t2.querySelector("input, select, textarea, button");
  if (n2 && (n2.disabled || n2.getAttribute("aria-disabled") === "true"))
    return true;
  const o3 = t2.id;
  return !!(o3 && a2.querySelector(`[aria-labelledby~="${o3}"][aria-disabled="true"]`));
}
function Ua(e2) {
  return e2.closest("select") !== null;
}
function Oa(e2) {
  const a2 = e2.replace(/\s/g, "");
  return a2 ? !new RegExp("\\p{L}", "u").test(a2) : true;
}
function Va(e2) {
  return e2.closest('[aria-disabled="true"]') !== null;
}
var Ba = {
  grayscale: 0,
  blur: 0,
  "hue-rotate": 0,
  invert: 0,
  sepia: 0,
  brightness: 1,
  contrast: 1,
  saturate: 1,
  opacity: 1
};
function _a(e2) {
  const a2 = parseFloat(e2);
  return isNaN(a2) ? NaN : e2.trim().endsWith("%") ? a2 / 100 : a2;
}
var Ee = /([a-z-]+)\(([^)]*)\)/g;
function Le(e2) {
  let a2, t2 = false;
  for (Ee.lastIndex = 0;a2 = Ee.exec(e2); ) {
    t2 = true;
    const i2 = Ba[a2[1]];
    if (i2 === undefined || _a(a2[2]) !== i2)
      return false;
  }
  return t2;
}
function Ga(e2) {
  let a2 = e2;
  for (;a2; ) {
    const t2 = w2(a2), i2 = t2.filter;
    if (i2 && i2 !== "none" && i2 !== "initial" && !Le(i2))
      return true;
    const n2 = t2.mixBlendMode;
    if (n2 && n2 !== "normal" && n2 !== "initial")
      return true;
    const o3 = t2.backdropFilter;
    if (o3 && o3 !== "none" && o3 !== "initial" && !Le(o3))
      return true;
    a2 = a2.parentElement;
  }
  return false;
}
function Ya(e2) {
  let a2 = e2;
  for (;a2; ) {
    const t2 = w2(a2), i2 = t2.backgroundImage;
    if (i2 && i2 !== "none" && i2 !== "initial")
      return i2.includes("gradient(") ? { bgImage: i2, gradientEl: a2 } : null;
    const n2 = t2.backgroundColor;
    if (!n2 || n2 === "transparent" || n2 === "rgba(0, 0, 0, 0)" || n2 === "rgba(0 0 0 / 0)") {
      a2 = a2.parentElement;
      continue;
    }
    if (U(n2) < 0.01) {
      a2 = a2.parentElement;
      continue;
    }
    return null;
  }
  return null;
}
function Xa(e2, a2, t2, i2, n2, o3, r3, s2, l2) {
  const d2 = It(s2, l2);
  if (d2.length === 0)
    return null;
  let c3 = 0, u3 = d2[0];
  for (const f3 of d2) {
    let v2 = a2;
    t2 < 1 && (v2 = R3(a2, f3, t2)), i2 < 1 && (v2 = R3(v2, f3, i2));
    const y3 = $(q2(v2[0], v2[1], v2[2]), q2(f3[0], f3[1], f3[2]));
    y3 > c3 && (c3 = y3, u3 = f3);
  }
  if (c3 >= n2)
    return null;
  let b2 = a2;
  t2 < 1 && (b2 = R3(a2, u3, t2)), i2 < 1 && (b2 = R3(b2, u3, i2));
  const g3 = Math.round(c3 * 100) / 100;
  return {
    ruleId: o3,
    selector: p(e2),
    html: m2(e2),
    impact: "serious",
    message: `Insufficient${r3 === "AAA" ? " enhanced" : ""} color contrast ratio of ${g3}:1 (required ${n2}:1).`,
    context: `foreground: ${_3(b2)} rgb(${b2.join(", ")}), background: gradient, ratio: ${g3}:1, required: ${n2}:1`,
    fix: { type: "suggest", suggestion: `Change the text color or gradient background so the contrast ratio meets ${n2}:1. The current foreground is ${_3(b2)}.` }
  };
}
function _e(e2, a2, t2) {
  const i2 = [], n2 = e2.body;
  if (!n2)
    return [];
  const o3 = e2.createTreeWalker(n2, NodeFilter.SHOW_TEXT), r3 = /* @__PURE__ */ new Set;
  let s2;
  for (;s2 = o3.nextNode(); ) {
    if (!s2.textContent || !s2.textContent.trim() || Oa(s2.textContent))
      continue;
    const l2 = s2.parentElement;
    if (!l2 || r3.has(l2) || (r3.add(l2), Da.has(l2.tagName)))
      continue;
    const d2 = l2.tagName;
    if (d2 === "BODY" || d2 === "HTML" || Ua(l2) || Wa(l2) || ja(l2, e2) || Va(l2) || za(l2))
      continue;
    const c3 = w2(l2);
    if (parseFloat(c3.opacity) === 0)
      continue;
    const u3 = Mt(l2);
    if (u3 < 0.1)
      continue;
    const b2 = c3.textShadow;
    let g3 = null;
    if (b2 && b2 !== "none" && b2 !== "initial" && (g3 = Tt(b2), !g3) || Ga(l2) || $t(l2))
      continue;
    const f3 = C3(c3.color);
    if (!f3)
      continue;
    const v2 = U(c3.color);
    if (v2 === 0 || Et(l2))
      continue;
    const y3 = t2 === "AAA" ? we(l2) ? 4.5 : 7 : we(l2) ? 3 : 4.5;
    let A3 = ye2(l2);
    if (!A3) {
      if (g3)
        continue;
      const E = Ya(l2);
      if (E) {
        const O3 = E.gradientEl.parentElement ? ye2(E.gradientEl.parentElement) : null, H = Xa(l2, f3, v2, u3, y3, a2, t2, E.bgImage, O3 ?? [255, 255, 255]);
        H && i2.push(H);
      }
      continue;
    }
    let S3 = f3;
    v2 < 1 && (S3 = R3(f3, A3, v2)), u3 < 1 && (S3 = R3(S3, A3, u3));
    const nt = q2(S3[0], S3[1], S3[2]), ot = q2(A3[0], A3[1], A3[2]), be = g3 ? Nt(S3, A3, g3) : $(nt, ot);
    if (be < y3) {
      const E = Math.round(be * 100) / 100, O3 = _3(S3), H = _3(A3);
      i2.push({
        ruleId: a2,
        selector: p(l2),
        html: m2(l2),
        impact: "serious",
        message: `Insufficient${t2 === "AAA" ? " enhanced" : ""} color contrast ratio of ${E}:1 (required ${y3}:1).`,
        context: `foreground: ${O3} rgb(${S3.join(", ")}), background: ${H} rgb(${A3.join(", ")}), ratio: ${E}:1, required: ${y3}:1`,
        fix: { type: "suggest", suggestion: `Change the text color or background color so the contrast ratio meets ${y3}:1. Current foreground is ${O3}, background is ${H}.` }
      });
    }
  }
  return i2;
}
var Ja = {
  id: "distinguishable/color-contrast",
  category: "distinguishable",
  actRuleIds: ["afw4f7"],
  wcag: ["1.4.3"],
  level: "AA",
  fixability: "visual",
  description: "Text elements must have sufficient color contrast against the background.",
  browserHint: "Violation context includes computed colors and ratio. After changing colors, use JavaScript to read getComputedStyle() on the element and recalculate the contrast ratio. Screenshot the element to verify the fix looks correct in context.",
  guidance: "WCAG SC 1.4.3 requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text (>=24px or >=18.66px bold). Increase the contrast by darkening the text or lightening the background, or vice versa.",
  run(e2) {
    return _e(e2, "distinguishable/color-contrast", "AA");
  }
};
var Ka = {
  id: "distinguishable/color-contrast-enhanced",
  category: "distinguishable",
  actRuleIds: ["09o5cg"],
  wcag: ["1.4.6"],
  level: "AAA",
  fixability: "visual",
  description: "Text elements must have enhanced color contrast against the background (WCAG AAA).",
  browserHint: "Violation context includes computed colors and ratio. After changing colors, use JavaScript to read getComputedStyle() on the element and recalculate the contrast ratio. Screenshot the element to verify the fix looks correct in context.",
  guidance: "WCAG SC 1.4.6 (AAA) requires a contrast ratio of at least 7:1 for normal text and 4.5:1 for large text (>=24px or >=18.66px bold). Higher contrast benefits users with low vision, aging eyes, or poor screen conditions. Increase the contrast by darkening the text or lightening the background, or vice versa.",
  run(e2) {
    return _e(e2, "distinguishable/color-contrast-enhanced", "AAA");
  }
};
var Qa = {
  id: "keyboard-accessible/server-image-map",
  selector: "img[ismap], input[type='image'][ismap]",
  check: { type: "selector-exists" },
  impact: "minor",
  message: "Server-side image map detected. Use client-side image map with <map> and <area> elements instead.",
  description: "Server-side image maps must not be used.",
  wcag: ["2.1.1"],
  level: "A",
  fixability: "contextual",
  guidance: "Server-side image maps (using ismap attribute) send click coordinates to the server, which is inaccessible to keyboard users and screen readers who can't precisely click specific regions. Replace with client-side image maps (<map> with <area> elements) that provide keyboard access and accessible names, or use linked images/buttons instead.",
  fix: { type: "remove-attribute", attribute: "ismap" }
};
var Za = N3(Qa);
var ei = {
  id: "keyboard-accessible/tabindex",
  selector: "[tabindex]",
  check: { type: "attribute-value", attribute: "tabindex", operator: ">", value: 0 },
  impact: "serious",
  message: 'Element has tabindex="{{value}}" which disrupts tab order.',
  description: "Elements should not have tabindex greater than 0, which disrupts natural tab order.",
  wcag: [],
  level: "A",
  tags: ["best-practice"],
  fixability: "mechanical",
  guidance: "Positive tabindex values force elements to the front of the tab order regardless of DOM position, creating unpredictable navigation for keyboard users. Use tabindex='0' to add elements to the natural tab order, or tabindex='-1' to make elements programmatically focusable but not in tab order. Rely on DOM order for tab sequence.",
  fix: { type: "set-attribute", attribute: "tabindex", value: "0" }
};
var ti = N3(ei);
var ai = /* @__PURE__ */ new Set([
  "div",
  "span",
  "p",
  "section",
  "article",
  "header",
  "footer",
  "main",
  "nav",
  "aside",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "ul",
  "ol",
  "li",
  "dl",
  "dt",
  "dd",
  "table",
  "tr",
  "td",
  "th"
]);
var ii = {
  id: "keyboard-accessible/focus-order",
  category: "keyboard-accessible",
  wcag: [],
  tags: ["best-practice"],
  level: "A",
  fixability: "contextual",
  description: "Non-interactive elements with tabindex='0' must have an interactive ARIA role so assistive technologies can convey their purpose.",
  guidance: "When adding tabindex='0' to non-interactive elements like <div> or <span>, screen readers announce them generically. Add an appropriate role (button, link, tab, etc.) so users understand the element's purpose. Also add keyboard event handlers (Enter/Space for buttons, Enter for links). Consider using native interactive elements instead.",
  run(e2) {
    const a2 = [];
    for (const t2 of e2.querySelectorAll('[tabindex="0"]')) {
      const i2 = t2.tagName.toLowerCase();
      if (!ai.has(i2))
        continue;
      t2.getAttribute("role") || a2.push({
        ruleId: "keyboard-accessible/focus-order",
        selector: p(t2),
        html: m2(t2),
        impact: "moderate",
        message: `Non-interactive <${i2}> with tabindex="0" has no interactive role.`
      });
    }
    return a2;
  }
};
var ni = /* @__PURE__ */ new Set([
  "a",
  "audio",
  "button",
  "img",
  "input",
  "select",
  "textarea",
  "video"
]);
var oi = /* @__PURE__ */ new Set([
  "button",
  "checkbox",
  "combobox",
  "gridcell",
  "link",
  "listbox",
  "menu",
  "menubar",
  "menuitem",
  "menuitemcheckbox",
  "menuitemradio",
  "option",
  "progressbar",
  "radio",
  "scrollbar",
  "searchbox",
  "slider",
  "spinbutton",
  "switch",
  "tab",
  "tabpanel",
  "textbox",
  "treeitem"
]);
var ri = {
  grid: /* @__PURE__ */ new Set(["gridcell", "row", "columnheader", "rowheader"]),
  listbox: /* @__PURE__ */ new Set(["option"]),
  menu: /* @__PURE__ */ new Set(["menuitem", "menuitemcheckbox", "menuitemradio"]),
  menubar: /* @__PURE__ */ new Set(["menuitem", "menuitemcheckbox", "menuitemradio"]),
  radiogroup: /* @__PURE__ */ new Set(["radio"]),
  tablist: /* @__PURE__ */ new Set(["tab"]),
  tree: /* @__PURE__ */ new Set(["treeitem"]),
  treegrid: /* @__PURE__ */ new Set(["gridcell", "row", "columnheader", "rowheader", "treeitem"])
};
function si(e2, a2) {
  var n2, o3, r3;
  const t2 = (n2 = e2.getAttribute("role")) == null ? undefined : n2.toLowerCase(), i2 = (o3 = a2.getAttribute("role")) == null ? undefined : o3.toLowerCase();
  return !t2 || !i2 ? false : ((r3 = ri[t2]) == null ? undefined : r3.has(i2)) ?? false;
}
function li(e2) {
  var n2;
  const a2 = e2.tagName.toLowerCase();
  if (ni.has(a2))
    return a2 === "a" && !e2.hasAttribute("href") ? false : a2 === "audio" || a2 === "video" ? e2.hasAttribute("controls") : !(a2 === "img" && !e2.hasAttribute("usemap") || a2 === "input" && e2.type === "hidden" || e2.disabled);
  const t2 = (n2 = e2.getAttribute("role")) == null ? undefined : n2.toLowerCase();
  if (t2 && oi.has(t2))
    return true;
  const i2 = e2.getAttribute("tabindex");
  return i2 !== null && i2 !== "-1" || e2.getAttribute("contenteditable") === "true";
}
function ci(e2) {
  const a2 = e2.tagName.toLowerCase();
  return !!(a2 === "a" && e2.hasAttribute("href") || a2 === "button" && !e2.disabled);
}
var di = {
  id: "keyboard-accessible/nested-interactive",
  category: "keyboard-accessible",
  wcag: ["4.1.2"],
  level: "A",
  fixability: "contextual",
  description: "Interactive controls must not be nested inside each other.",
  guidance: "Nesting interactive elements (like a button inside a link, or a link inside a button) creates unpredictable behavior and confuses assistive technologies. The browser may remove the inner element from the accessibility tree. Restructure the HTML so interactive elements are siblings, not nested. If you need a clickable card, use CSS and JavaScript rather than nesting.",
  run(e2) {
    const a2 = [], t2 = e2.body ?? e2;
    if (!t2)
      return a2;
    const n2 = (e2.body ? e2 : e2.ownerDocument).createTreeWalker(t2, NodeFilter.SHOW_ELEMENT), o3 = [];
    let r3 = n2.currentNode;
    for (;r3; ) {
      for (;o3.length > 0 && !o3[o3.length - 1].contains(r3); )
        o3.pop();
      if (!h2(r3) && li(r3)) {
        if (o3.length > 0) {
          const s2 = o3[o3.length - 1];
          si(s2, r3) || a2.push({
            ruleId: "keyboard-accessible/nested-interactive",
            selector: p(r3),
            html: m2(r3),
            impact: "serious",
            message: `Interactive element <${r3.tagName.toLowerCase()}> is nested inside <${s2.tagName.toLowerCase()}>.`,
            fix: { type: "suggest", suggestion: "Move the nested interactive element outside its interactive parent so they are siblings instead of nested" }
          });
        }
        ci(r3) && o3.push(r3);
      }
      r3 = n2.nextNode();
    }
    return a2;
  }
};
var ui = {
  id: "keyboard-accessible/scrollable-region",
  category: "keyboard-accessible",
  actRuleIds: ["0ssw9k"],
  wcag: ["2.1.1"],
  level: "A",
  fixability: "contextual",
  browserHint: "Tab to the scrollable region and verify keyboard scrolling works with arrow keys.",
  description: "Scrollable regions must be keyboard accessible.",
  guidance: "Content that scrolls must be accessible to keyboard users. If a region has overflow:scroll or overflow:auto and contains scrollable content, it needs either tabindex='0' to be focusable, or it must contain focusable elements. Without this, keyboard users cannot scroll the content.",
  run(e2) {
    var t2;
    const a2 = [];
    for (const i2 of e2.querySelectorAll("*")) {
      if (h2(i2) || !(i2 instanceof HTMLElement))
        continue;
      const n2 = i2.tagName.toLowerCase();
      if (n2 === "body" || n2 === "html")
        continue;
      const o3 = i2.getAttribute("role");
      if (o3 === "presentation" || o3 === "none" || o3 === "listbox" || o3 === "menu" || o3 === "tree" || o3 === "tabpanel")
        continue;
      const r3 = w2(i2), s2 = r3.overflowX, l2 = r3.overflowY;
      if (!(s2 === "scroll" || s2 === "auto" || l2 === "scroll" || l2 === "auto"))
        continue;
      if (i2.scrollHeight > 0 || i2.clientHeight > 0) {
        const g3 = i2.scrollHeight - i2.clientHeight, f3 = i2.scrollWidth - i2.clientWidth;
        if (g3 <= 0 && f3 <= 0 || g3 < 14 && f3 < 14 || i2.clientWidth < 64 && i2.clientHeight < 64)
          continue;
        const v2 = ((t2 = i2.textContent) == null ? undefined : t2.trim().length) ?? 0, y3 = i2.querySelector("img, svg, video, canvas, picture") !== null;
        if (v2 === 0 && !y3)
          continue;
      } else
        continue;
      const u3 = i2.getAttribute("tabindex");
      u3 !== null && u3 !== "-1" || i2.querySelector(W2) || a2.push({
        ruleId: "keyboard-accessible/scrollable-region",
        selector: p(i2),
        html: m2(i2),
        impact: "serious",
        message: "Scrollable region is not keyboard accessible. Add tabindex='0' or include focusable elements."
      });
    }
    return a2;
  }
};
var mi = {
  id: "keyboard-accessible/accesskeys",
  category: "keyboard-accessible",
  wcag: [],
  level: "A",
  tags: ["best-practice"],
  fixability: "mechanical",
  description: "Accesskey attribute values must be unique.",
  guidance: "When multiple elements share the same accesskey, browser behavior becomes unpredictable - usually only the first element is activated. Ensure each accesskey value is unique within the page. Also consider that accesskeys can conflict with browser and screen reader shortcuts, so use them sparingly.",
  run(e2) {
    var i2;
    const a2 = [], t2 = /* @__PURE__ */ new Map;
    for (const n2 of e2.querySelectorAll("[accesskey]")) {
      if (h2(n2))
        continue;
      const o3 = (i2 = n2.getAttribute("accesskey")) == null ? undefined : i2.trim().toLowerCase();
      if (!o3)
        continue;
      const r3 = t2.get(o3) || [];
      r3.push(n2), t2.set(o3, r3);
    }
    for (const [n2, o3] of t2)
      if (o3.length > 1)
        for (const r3 of o3.slice(1))
          a2.push({
            ruleId: "keyboard-accessible/accesskeys",
            selector: p(r3),
            html: m2(r3),
            impact: "serious",
            message: `Duplicate accesskey "${n2}". Each accesskey must be unique.`
          });
    return a2;
  }
};
var pi = {
  id: "keyboard-accessible/focus-visible",
  category: "keyboard-accessible",
  actRuleIds: ["oj04fd"],
  wcag: ["2.4.7"],
  level: "AA",
  fixability: "visual",
  browserHint: "Tab to the element and screenshot to verify a visible focus indicator appears. Check that the indicator has sufficient contrast against the background.",
  description: "Elements in sequential focus order must have a visible focus indicator.",
  guidance: "Keyboard users need to see which element has focus. Do not remove the default focus outline (outline: none) without providing an alternative visible indicator. Use :focus-visible or :focus styles to ensure focus is always perceivable.",
  run(e2) {
    const a2 = [];
    for (const t2 of e2.querySelectorAll(W2)) {
      if (h2(t2) || !(t2 instanceof HTMLElement))
        continue;
      const i2 = t2.getAttribute("style") || "";
      if (/outline\s*:\s*(none|0)\s*(;|$|!)/i.test(i2)) {
        const o3 = /border\s*:/i.test(i2), r3 = /box-shadow\s*:/i.test(i2);
        !o3 && !r3 && a2.push({
          ruleId: "keyboard-accessible/focus-visible",
          selector: p(t2),
          html: m2(t2),
          impact: "serious",
          message: "Focusable element has outline removed without a visible focus alternative."
        });
      }
    }
    return a2;
  }
};
function Ge(e2) {
  if (!(e2 instanceof HTMLElement))
    return false;
  if (e2.style.display === "none" || e2.style.visibility === "hidden")
    return true;
  const a2 = e2.getAttribute("width"), t2 = e2.getAttribute("height");
  return (a2 === "0" || a2 === "1") && (t2 === "0" || t2 === "1");
}
function Ye(e2) {
  const a2 = e2.match(/^(\d+)/);
  if (!a2)
    return null;
  const t2 = parseInt(a2[1], 10), i2 = /^\d+\s*[;,]\s*url\s*=/i.test(e2) || /^\d+\s*[;,]\s*['"]?\s*https?:/i.test(e2);
  return { seconds: t2, hasValidUrl: i2 };
}
var Xe = 'article, aside, main, nav, section, [role="article"], [role="complementary"], [role="main"], [role="navigation"], [role="region"]';
var Re = 'main, [role="main"], header, [role="banner"], footer, [role="contentinfo"], nav, [role="navigation"], aside, [role="complementary"], section[aria-label], section[aria-labelledby], [role="region"][aria-label], [role="region"][aria-labelledby], form[aria-label], form[aria-labelledby], [role="form"][aria-label], [role="form"][aria-labelledby], [role="search"]';
function Je(e2) {
  return {
    id: e2.id,
    category: e2.id.split("/")[0],
    wcag: [],
    level: "A",
    tags: ["best-practice", "page-level"],
    fixability: "contextual",
    description: e2.description,
    guidance: e2.guidance,
    run(a2) {
      const t2 = [];
      for (const i2 of a2.querySelectorAll(e2.selector))
        i2.closest(Xe) && t2.push({
          ruleId: e2.id,
          selector: p(i2),
          html: m2(i2),
          impact: "moderate",
          message: `${e2.landmarkName} landmark is nested within another landmark.`
        });
      return t2;
    }
  };
}
function ue(e2) {
  return {
    id: e2.id,
    category: e2.id.split("/")[0],
    wcag: [],
    level: "A",
    tags: ["best-practice", "page-level"],
    fixability: "contextual",
    description: e2.description,
    guidance: e2.guidance,
    run(a2) {
      const t2 = [], i2 = a2.querySelectorAll(e2.selector), n2 = e2.filterTopLevel ? Array.from(i2).filter((o3) => !o3.closest(Xe)) : Array.from(i2);
      return n2.length > 1 && n2.slice(1).forEach((o3) => t2.push({
        ruleId: e2.id,
        selector: p(o3),
        html: m2(o3),
        impact: "moderate",
        message: `Page has multiple ${e2.landmarkName} landmarks.`
      })), t2;
    }
  };
}
var bi = {
  id: "enough-time/meta-refresh",
  category: "enough-time",
  actRuleIds: ["bc659a"],
  wcag: ["2.2.1"],
  level: "A",
  tags: ["page-level"],
  fixability: "mechanical",
  description: "Meta refresh must not redirect or refresh automatically.",
  guidance: "Automatic page refreshes or redirects can disorient users, especially those using screen readers or with cognitive disabilities. They may lose their place or not have time to read content. If a redirect is needed, use a server-side redirect (HTTP 301/302) instead. For timed refreshes, provide user controls.",
  run(e2) {
    for (const a2 of e2.querySelectorAll('meta[http-equiv="refresh"]')) {
      const t2 = a2.getAttribute("content") || "", i2 = Ye(t2);
      if (i2) {
        if (i2.hasValidUrl)
          return i2.seconds > 0 && i2.seconds <= 72000 ? [{
            ruleId: "enough-time/meta-refresh",
            selector: p(a2),
            html: m2(a2),
            impact: "critical",
            message: `Page redirects after ${i2.seconds} seconds without warning. Use server-side redirect.`,
            fix: { type: "remove-element" }
          }] : [];
        if (i2.seconds > 0 && i2.seconds <= 72000)
          return [{
            ruleId: "enough-time/meta-refresh",
            selector: p(a2),
            html: m2(a2),
            impact: "critical",
            message: `Page auto-refreshes after ${i2.seconds} seconds. Provide user control over refresh.`,
            fix: { type: "remove-element" }
          }];
      }
    }
    return [];
  }
};
var hi = {
  id: "enough-time/meta-refresh-no-exception",
  category: "enough-time",
  actRuleIds: ["bisz58"],
  wcag: ["2.2.1"],
  level: "A",
  tags: ["page-level"],
  fixability: "mechanical",
  description: "Meta refresh must not be used with a delay (no exceptions).",
  guidance: "Automatic page refreshes and delayed redirects disorient users. Instant redirects (delay=0) are acceptable, but any positive delay is not. Use server-side redirects instead.",
  run(e2) {
    for (const a2 of e2.querySelectorAll('meta[http-equiv="refresh"]')) {
      const t2 = a2.getAttribute("content") || "", i2 = Ye(t2);
      if (i2) {
        if (i2.hasValidUrl)
          return i2.seconds > 0 ? [{
            ruleId: "enough-time/meta-refresh-no-exception",
            selector: p(a2),
            html: m2(a2),
            impact: "critical",
            message: `Page has a ${i2.seconds}-second meta refresh delay. Use a server-side redirect instead.`,
            fix: { type: "remove-element" }
          }] : [];
        if (i2.seconds > 0)
          return [{
            ruleId: "enough-time/meta-refresh-no-exception",
            selector: p(a2),
            html: m2(a2),
            impact: "critical",
            message: `Page has a ${i2.seconds}-second meta refresh delay. Remove the auto-refresh or provide user control.`,
            fix: { type: "remove-element" }
          }];
      }
    }
    return [];
  }
};
var gi = {
  id: "enough-time/blink",
  selector: "blink",
  check: { type: "selector-exists" },
  impact: "serious",
  message: "The <blink> element causes accessibility issues. Remove it entirely.",
  description: "The <blink> element must not be used.",
  wcag: ["2.2.2"],
  level: "A",
  fixability: "mechanical",
  guidance: "Blinking content can cause seizures in users with photosensitive epilepsy and is distracting for users with attention disorders. The <blink> element is deprecated and should never be used. If you need to draw attention to content, use less intrusive methods like color, borders, or icons.",
  fix: { type: "remove-element" }
};
var fi = N3(gi);
var vi = {
  id: "enough-time/marquee",
  selector: "marquee",
  check: { type: "selector-exists" },
  impact: "serious",
  message: "The <marquee> element causes accessibility issues. Replace with static content.",
  description: "The <marquee> element must not be used.",
  wcag: ["2.2.2"],
  level: "A",
  fixability: "mechanical",
  guidance: "Scrolling or moving content is difficult for many users to read, especially those with cognitive or visual disabilities. The <marquee> element is deprecated. Replace scrolling text with static content. If content must scroll, provide pause/stop controls and ensure it stops after 5 seconds.",
  fix: { type: "remove-element" }
};
var yi = N3(vi);
var wi = {
  id: "navigable/document-title",
  category: "navigable",
  actRuleIds: ["2779a5"],
  wcag: ["2.4.2"],
  level: "A",
  tags: ["page-level"],
  fixability: "contextual",
  description: "Documents must have a <title> element to provide users with an overview of content.",
  guidance: "Screen reader users rely on page titles to identify and navigate between tabs/windows. Add a descriptive <title> element in <head> that summarizes the page purpose. Keep titles unique across the site, placing specific content before the site name (e.g., 'Contact Us - Acme Corp').",
  run(e2) {
    var t2, i2, n2;
    const a2 = e2.querySelector("title");
    if (!a2 || !((t2 = a2.textContent) != null && t2.trim())) {
      let o3;
      const r3 = e2.querySelector("h1");
      if ((i2 = r3 == null ? undefined : r3.textContent) != null && i2.trim())
        o3 = `h1: "${r3.textContent.trim().slice(0, 100)}"`;
      else if (e2.body) {
        const s2 = ((n2 = e2.body.textContent) == null ? undefined : n2.trim().replace(/\s+/g, " ")) || "";
        s2 && (o3 = `Page text: "${s2.slice(0, 150)}"`);
      }
      return [{
        ruleId: "navigable/document-title",
        selector: "html",
        html: "<html>",
        impact: "serious",
        message: a2 ? "Document <title> element is empty." : "Document is missing a <title> element.",
        context: o3,
        fix: { type: "add-element", tag: "title", parent: "head", textContent: "" }
      }];
    }
    return [];
  }
};
var xi = {
  id: "navigable/bypass",
  category: "navigable",
  actRuleIds: ["cf77f2"],
  wcag: ["2.4.1"],
  level: "A",
  tags: ["best-practice", "page-level"],
  fixability: "contextual",
  description: "Page must have a mechanism to bypass repeated blocks of content.",
  guidance: 'Keyboard users must be able to skip repetitive content like navigation. Provide a skip link at the top of the page that links to the main content (e.g., <a href="#main">Skip to main content</a>), or use a <main> landmark. Screen readers can jump directly to landmarks, so a properly marked-up <main> element satisfies this requirement.',
  run(e2) {
    if (e2.querySelector('main, [role="main"], nav, [role="navigation"], aside, [role="complementary"], header, [role="banner"], footer, [role="contentinfo"], [role="search"], [role="region"]'))
      return [];
    const t2 = e2.querySelector('a[href^="#"]');
    if (t2) {
      const o3 = t2.getAttribute("href");
      if (o3 && o3.length > 1) {
        const r3 = o3.slice(1);
        if (e2.getElementById(r3))
          return [];
      }
    }
    if (e2.querySelector("h1, h2, h3, [role='heading']"))
      return [];
    const n2 = [];
    return n2.push("no landmarks (<main>, <nav>, <header>, <footer>)"), n2.push("no skip link"), n2.push("no headings"), [{
      ruleId: "navigable/bypass",
      selector: "html",
      html: "<html>",
      impact: "serious",
      message: "Page has no mechanism to bypass repeated content. Add a <main> landmark or skip link.",
      context: `Missing: ${n2.join(", ")}`
    }];
  }
};
var Ai = {
  id: "navigable/page-has-heading-one",
  category: "navigable",
  wcag: [],
  level: "A",
  tags: ["best-practice", "page-level"],
  fixability: "contextual",
  description: "Page should contain a level-one heading.",
  guidance: "A level-one heading (<h1> or role='heading' with aria-level='1') helps users understand the page topic and provides a landmark for screen reader navigation. Each page should have at least one level-one heading that describes the main content, typically matching or similar to the page title.",
  run(e2) {
    var r3, s2, l2;
    const a2 = e2.querySelector("h1");
    if (a2 && x2(a2))
      return [];
    const t2 = e2.querySelectorAll('[role="heading"][aria-level="1"]');
    for (const d2 of t2)
      if (x2(d2))
        return [];
    const i2 = [], n2 = (s2 = (r3 = e2.querySelector("title")) == null ? undefined : r3.textContent) == null ? undefined : s2.trim();
    n2 && i2.push(`Page title: "${n2}"`);
    const o3 = e2.querySelector("main");
    if (o3) {
      const d2 = ((l2 = o3.textContent) == null ? undefined : l2.trim().replace(/\s+/g, " ")) || "";
      d2 && i2.push(`Main content: "${d2.slice(0, 100)}"`);
    }
    return [{
      ruleId: "navigable/page-has-heading-one",
      selector: "html",
      html: "<html>",
      impact: "moderate",
      message: "Page does not contain a level-one heading.",
      context: i2.length > 0 ? i2.join(", ") : undefined
    }];
  }
};
var ki = {
  id: "navigable/heading-order",
  category: "navigable",
  wcag: [],
  level: "A",
  tags: ["best-practice"],
  fixability: "contextual",
  browserHint: "Screenshot the page to see the visual hierarchy, then take an accessibility tree snapshot to map heading levels to visual sections.",
  description: "Heading levels should increase by one; skipping levels (e.g. h2 to h4) makes navigation harder.",
  guidance: "Screen reader users navigate by headings to understand page structure. Skipping levels (h2 to h4) suggests missing content and creates confusion. Start with h1 for the page title, then use h2 for main sections, h3 for subsections, etc. You can go back up (h3 to h2) when starting a new section.",
  run(e2) {
    const a2 = [], t2 = e2.querySelectorAll("h1, h2, h3, h4, h5, h6, [role='heading']");
    let i2 = 0, n2 = null;
    for (const o3 of t2) {
      if (h2(o3))
        continue;
      let r3;
      o3.hasAttribute("aria-level") ? r3 = parseInt(o3.getAttribute("aria-level"), 10) : r3 = parseInt(o3.tagName[1], 10), i2 > 0 && r3 > i2 + 1 && a2.push({
        ruleId: "navigable/heading-order",
        selector: p(o3),
        html: m2(o3),
        impact: "moderate",
        message: `Heading level ${r3} skipped from level ${i2}. Use h${i2 + 1} instead.`,
        context: n2 ? `Previous heading: ${m2(n2)}` : undefined,
        fix: { type: "suggest", suggestion: `Change this heading to an h${i2 + 1} element to maintain proper heading hierarchy` }
      }), i2 = r3, n2 = o3;
    }
    return a2;
  }
};
var Si = {
  id: "navigable/empty-heading",
  category: "navigable",
  actRuleIds: ["ffd0e9"],
  wcag: ["2.4.6"],
  level: "A",
  tags: ["best-practice"],
  fixability: "contextual",
  browserHint: "Screenshot the heading area to verify it's visually empty, then add meaningful text or remove the heading element.",
  description: "Headings must have discernible text.",
  guidance: "Screen reader users navigate pages by headings, so empty headings create confusing navigation points. Ensure all headings contain visible text or accessible names. If a heading is used purely for visual styling, use CSS instead of heading elements.",
  run(e2) {
    var i2;
    const a2 = [], t2 = e2.querySelectorAll('h1, h2, h3, h4, h5, h6, [role="heading"]');
    for (const n2 of t2)
      if (!h2(n2) && !x2(n2)) {
        let o3;
        const r3 = n2.nextElementSibling;
        if (r3) {
          const s2 = ((i2 = r3.textContent) == null ? undefined : i2.trim().replace(/\s+/g, " ")) || "";
          s2 && (o3 = s2.slice(0, 100));
        }
        a2.push({
          ruleId: "navigable/empty-heading",
          selector: p(n2),
          html: m2(n2),
          impact: "minor",
          message: "Heading is empty. Add text content or remove the heading element.",
          context: o3 ? `Following content: "${o3}"` : undefined,
          fix: { type: "add-text-content" }
        });
      }
    return a2;
  }
};
var Ii = {
  id: "navigable/p-as-heading",
  category: "navigable",
  wcag: ["1.3.1"],
  level: "A",
  tags: ["best-practice"],
  fixability: "contextual",
  browserHint: "Screenshot the page to verify the paragraph visually functions as a heading and choose the correct heading level.",
  description: "Paragraphs should not be styled to look like headings.",
  guidance: "When paragraphs are styled with bold, large fonts to look like headings, screen reader users miss the semantic structure. Use proper heading elements (h1-h6) instead of styled paragraphs. If you need specific styling, apply CSS to the heading elements while maintaining proper heading hierarchy.",
  run(e2) {
    var t2, i2;
    const a2 = [];
    for (const n2 of e2.querySelectorAll("p")) {
      if (h2(n2))
        continue;
      const o3 = n2.getAttribute("style") || "", r3 = /font-weight\s*:\s*(bold|[6-9]00)/i.test(o3), s2 = /font-size\s*:\s*(\d+)\s*(px|em|rem)/i.test(o3), l2 = ((t2 = n2.className) == null ? undefined : t2.toLowerCase()) || "", d2 = /\bh[1-6]\b|\bheading\b/.test(l2), c3 = ((i2 = n2.textContent) == null ? undefined : i2.trim()) || "", u3 = c3.length > 0 && c3.length < 50, b2 = !c3.match(/[.!?,;:]$/);
      if ((r3 && s2 || r3 && d2) && u3 && b2) {
        const v2 = n2.nextElementSibling;
        v2 && (v2.tagName === "P" || v2.tagName === "DIV" || v2.tagName === "UL") && a2.push({
          ruleId: "navigable/p-as-heading",
          selector: p(n2),
          html: m2(n2),
          impact: "serious",
          message: "Paragraph appears to be styled as a heading. Use an h1-h6 element instead.",
          fix: { type: "suggest", suggestion: "Replace the <p> element with the appropriate heading level (h1-h6) based on the document outline. Preserve the text content and move any inline styles to a CSS class on the new heading element." }
        });
      }
    }
    return a2;
  }
};
function qi(e2) {
  var n2, o3;
  const a2 = [], t2 = e2.getAttribute("href");
  t2 && a2.push(`href: ${t2}`);
  const i2 = e2.parentElement;
  if (i2) {
    const r3 = i2.closest("h1, h2, h3, h4, h5, h6");
    if ((n2 = r3 == null ? undefined : r3.textContent) != null && n2.trim())
      a2.push(`Nearby heading: ${r3.textContent.trim().slice(0, 80)}`);
    else {
      const s2 = (o3 = i2.textContent) == null ? undefined : o3.trim().slice(0, 100);
      s2 && a2.push(`Parent text: ${s2}`);
    }
  }
  return a2.length > 0 ? a2.join(`
`) : undefined;
}
var Ei = {
  id: "navigable/link-name",
  category: "navigable",
  actRuleIds: ["c487ae"],
  wcag: ["2.4.4", "4.1.2"],
  level: "A",
  fixability: "contextual",
  browserHint: "Screenshot the link in context to understand its destination, then write descriptive link text.",
  description: "Links must have discernible text via content, aria-label, or aria-labelledby.",
  guidance: "Screen reader users need to know where a link goes. Add descriptive text content, aria-label, or use aria-labelledby. For image links, ensure the image has alt text describing the link destination. Avoid generic text like 'click here' or 'read more'—link text should make sense out of context.",
  run(e2) {
    const a2 = [];
    for (const t2 of e2.querySelectorAll('a[href], area[href], [role="link"]')) {
      if (h2(t2) || I3(t2) || t2.getRootNode() instanceof ShadowRoot)
        continue;
      x2(t2) || a2.push({
        ruleId: "navigable/link-name",
        selector: p(t2),
        html: m2(t2),
        impact: "serious",
        message: "Link has no discernible text.",
        context: qi(t2),
        fix: { type: "add-text-content" }
      });
    }
    return a2;
  }
};
var Li = {
  id: "navigable/skip-link",
  category: "navigable",
  wcag: ["2.4.1"],
  level: "A",
  tags: ["best-practice", "page-level"],
  fixability: "mechanical",
  description: "Skip links must point to a valid target on the page.",
  guidance: "Skip links allow keyboard users to bypass repetitive navigation and jump directly to main content. The skip link should be the first focusable element on the page, link to the main content (e.g., href='#main'), and become visible when focused. It can be visually hidden until focused using CSS.",
  run(e2) {
    const a2 = [], t2 = e2.querySelectorAll('a[href^="#"]');
    for (const i2 of t2) {
      const n2 = i2.getAttribute("href");
      if (!n2 || n2 === "#")
        continue;
      const o3 = k2(i2).toLowerCase();
      if (!(o3.includes("skip") || o3.includes("jump") || o3.includes("main content") || o3.includes("navigation")))
        continue;
      const s2 = n2.slice(1);
      e2.getElementById(s2) || a2.push({
        ruleId: "navigable/skip-link",
        selector: p(i2),
        html: m2(i2),
        impact: "moderate",
        message: `Skip link points to "#${s2}" which does not exist on the page.`
      });
    }
    return a2;
  }
};
var Ri = {
  id: "landmarks/landmark-main",
  category: "landmarks",
  wcag: [],
  level: "A",
  tags: ["best-practice", "page-level"],
  fixability: "contextual",
  description: "Page should have exactly one main landmark.",
  guidance: "The main landmark contains the primary content of the page. Screen readers allow users to jump directly to main content. Use a single <main> element (or role='main') to wrap the central content, excluding headers, footers, and navigation.",
  run(e2) {
    const a2 = e2.querySelectorAll('main, [role="main"]');
    return a2.length === 0 ? [{
      ruleId: "landmarks/landmark-main",
      selector: "html",
      html: "<html>",
      impact: "moderate",
      message: "Page has no main landmark."
    }] : a2.length > 1 ? Array.from(a2).slice(1).map((t2) => ({
      ruleId: "landmarks/landmark-main",
      selector: p(t2),
      html: m2(t2),
      impact: "moderate",
      message: "Page has multiple main landmarks."
    })) : [];
  }
};
var Ci = ue({
  id: "landmarks/no-duplicate-banner",
  selector: 'header, [role="banner"]',
  landmarkName: "banner",
  description: "Page should not have more than one banner landmark.",
  guidance: "The banner landmark (typically <header>) identifies site-oriented content like logos and search. Only one top-level banner is allowed per page. If you need multiple headers, nest them inside sectioning elements (article, section, aside) where they become scoped headers rather than page-level banners.",
  filterTopLevel: true
});
var Ti = ue({
  id: "landmarks/no-duplicate-contentinfo",
  selector: 'footer, [role="contentinfo"]',
  landmarkName: "contentinfo",
  description: "Page should not have more than one contentinfo landmark.",
  guidance: "The contentinfo landmark (typically <footer>) contains information about the page like copyright and contact info. Only one top-level contentinfo is allowed per page. Nest additional footers inside sectioning elements to scope them.",
  filterTopLevel: true
});
var Ni = ue({
  id: "landmarks/no-duplicate-main",
  selector: 'main, [role="main"]',
  landmarkName: "main",
  description: "Page should not have more than one main landmark.",
  guidance: "Only one main landmark should exist per page. The main landmark identifies the primary content area. If you have multiple content sections, use <section> with appropriate headings instead of multiple main elements.",
  filterTopLevel: false
});
var Mi = Je({
  id: "landmarks/banner-is-top-level",
  selector: '[role="banner"]',
  landmarkName: "Banner",
  description: "Banner landmark should not be nested within another landmark.",
  guidance: "The banner landmark should be a top-level landmark, not nested inside article, aside, main, nav, or section. If a header is inside these elements, it automatically becomes a generic header rather than a banner. Remove explicit role='banner' from nested headers or restructure the page."
});
var $i = Je({
  id: "landmarks/contentinfo-is-top-level",
  selector: '[role="contentinfo"]',
  landmarkName: "Contentinfo",
  description: "Contentinfo landmark should not be nested within another landmark.",
  guidance: "The contentinfo landmark should be a top-level landmark. A footer inside article, aside, main, nav, or section becomes a scoped footer, not a contentinfo landmark. Remove explicit role='contentinfo' from nested footers or move the footer outside sectioning elements."
});
var Hi = {
  id: "landmarks/main-is-top-level",
  category: "landmarks",
  wcag: [],
  level: "A",
  tags: ["best-practice", "page-level"],
  fixability: "contextual",
  description: "Main landmark should not be nested within another landmark.",
  guidance: "Screen readers provide a shortcut to jump directly to the main landmark. When <main> is nested inside another landmark (article, aside, nav, or section), some screen readers may not list it as a top-level landmark, making it harder to find. Move <main> outside any sectioning elements so it sits at the top level of the document.",
  run(e2) {
    const a2 = [], t2 = e2.querySelectorAll('main, [role="main"]');
    for (const i2 of t2) {
      const n2 = i2.parentElement;
      n2 != null && n2.closest('article, aside, nav, section[aria-label], section[aria-labelledby], [role="article"], [role="complementary"], [role="navigation"], [role="region"]') && a2.push({
        ruleId: "landmarks/main-is-top-level",
        selector: p(i2),
        html: m2(i2),
        impact: "moderate",
        message: "Main landmark is nested within another landmark."
      });
    }
    return a2;
  }
};
var Pi = {
  id: "landmarks/complementary-is-top-level",
  category: "landmarks",
  wcag: [],
  level: "A",
  tags: ["best-practice", "page-level"],
  fixability: "contextual",
  description: "Aside (complementary) landmark should be top-level or directly inside main.",
  guidance: "The complementary landmark (aside) should be top-level or a direct child of main. Nesting aside deep within other landmarks reduces its discoverability for screen reader users navigating by landmarks.",
  run(e2) {
    const a2 = [], t2 = e2.querySelectorAll('aside, [role="complementary"]');
    for (const i2 of t2) {
      const n2 = i2.parentElement;
      n2 && !n2.matches('body, main, [role="main"]') && i2.closest('article, nav, section[aria-label], section[aria-labelledby], [role="article"], [role="navigation"], [role="region"]') && a2.push({
        ruleId: "landmarks/complementary-is-top-level",
        selector: p(i2),
        html: m2(i2),
        impact: "moderate",
        message: "Complementary landmark should be top-level."
      });
    }
    return a2;
  }
};
var Di = {
  id: "landmarks/landmark-unique",
  category: "landmarks",
  wcag: [],
  level: "A",
  tags: ["best-practice", "page-level"],
  fixability: "contextual",
  description: "Landmarks should have unique labels when there are multiple of the same type.",
  guidance: "When a page has multiple landmarks of the same type (e.g., multiple nav elements), each should have a unique accessible name via aria-label or aria-labelledby. This helps screen reader users distinguish between them (e.g., 'Main navigation' vs 'Footer navigation').",
  run(e2) {
    const a2 = [], t2 = [
      { selector: 'nav, [role="navigation"]', type: "navigation" },
      { selector: 'aside, [role="complementary"]', type: "complementary" },
      { selector: 'section[aria-label], section[aria-labelledby], [role="region"]', type: "region" },
      { selector: 'form[aria-label], form[aria-labelledby], [role="form"], [role="search"]', type: "form" }
    ];
    for (const { selector: i2, type: n2 } of t2) {
      const o3 = Array.from(e2.querySelectorAll(i2)).filter((s2) => !h2(s2));
      if (o3.length <= 1)
        continue;
      const r3 = /* @__PURE__ */ new Map;
      for (const s2 of o3) {
        const l2 = x2(s2).toLowerCase() || "", d2 = r3.get(l2) || [];
        d2.push(s2), r3.set(l2, d2);
      }
      for (const [s2, l2] of r3)
        if (l2.length > 1)
          for (const d2 of l2.slice(1))
            a2.push({
              ruleId: "landmarks/landmark-unique",
              selector: p(d2),
              html: m2(d2),
              impact: "moderate",
              message: s2 ? `Multiple ${n2} landmarks have the same label "${s2}".` : `Multiple ${n2} landmarks have no label. Add unique aria-label attributes.`
            });
    }
    return a2;
  }
};
var Fi = {
  id: "landmarks/region",
  category: "landmarks",
  wcag: [],
  level: "A",
  tags: ["best-practice", "page-level"],
  fixability: "contextual",
  description: "All page content should be contained within landmarks.",
  guidance: "Screen reader users navigate pages by landmarks. Content outside landmarks is harder to find and understand. Wrap all visible content in appropriate landmarks: <header>, <nav>, <main>, <aside>, <footer>, or <section> with a label. Skip links may exist outside landmarks.",
  run(e2) {
    var i2;
    const a2 = [], t2 = e2.body;
    if (!t2)
      return [];
    for (const n2 of t2.children) {
      if (h2(n2) || n2 instanceof HTMLScriptElement || n2 instanceof HTMLStyleElement || n2.tagName === "NOSCRIPT" || n2 instanceof HTMLElement && n2.hidden || n2.matches('a[href^="#"]'))
        continue;
      const o3 = n2.matches(Re), r3 = (i2 = n2.textContent) == null ? undefined : i2.trim();
      !o3 && r3 && (n2.querySelector(Re) || a2.push({
        ruleId: "landmarks/region",
        selector: p(n2),
        html: m2(n2),
        impact: "moderate",
        message: "Content is not contained within a landmark region."
      }));
    }
    return a2;
  }
};
var zi = {
  id: "readable/html-has-lang",
  category: "readable",
  actRuleIds: ["b5c3f8"],
  wcag: ["3.1.1"],
  level: "A",
  tags: ["page-level"],
  fixability: "mechanical",
  description: "The <html> element must have a lang attribute.",
  guidance: "Screen readers use the lang attribute to determine which language rules and pronunciation to use. Without it, content may be mispronounced. Set lang to the primary language of the page using a BCP 47 code (e.g., 'en' for English, 'es' for Spanish, 'fr' for French, 'de' for German, 'ja' for Japanese, 'zh' for Chinese, 'pt' for Portuguese, 'ar' for Arabic).",
  run(e2) {
    var t2, i2;
    const a2 = e2.documentElement;
    if (a2.tagName.toLowerCase() !== "html")
      return [];
    if (!e2.doctype && e2.body) {
      const n2 = e2.body.children;
      if (n2.length > 0 && Array.from(n2).every((o3) => o3.tagName.toLowerCase() === "svg" || o3.tagName.toLowerCase() === "math"))
        return [];
    }
    if (!((t2 = a2.getAttribute("lang")) != null && t2.trim())) {
      let n2;
      if (e2.body) {
        const o3 = ((i2 = e2.body.textContent) == null ? undefined : i2.trim().replace(/\s+/g, " ")) || "";
        o3 && (n2 = o3.slice(0, 200));
      }
      return [{
        ruleId: "readable/html-has-lang",
        selector: p(a2),
        html: m2(a2),
        impact: "serious",
        message: "<html> element missing lang attribute.",
        context: n2 ? `Page text sample: "${n2}"` : undefined,
        fix: { type: "add-attribute", attribute: "lang", value: "en" }
      }];
    }
    return [];
  }
};
var Wi = new Set("aa ab ae af ak am an ar as av ay az ba be bg bh bi bm bn bo br bs ca ce ch co cr cs cu cv cy da de dv dz ee el en eo es et eu fa ff fi fj fo fr fy ga gd gl gn gu gv ha he hi ho hr ht hu hy hz ia id ie ig ii ik io is it iu ja jv ka kg ki kj kk kl km kn ko kr ks ku kv kw ky la lb lg li ln lo lt lu lv mg mh mi mk ml mn mr ms mt my na nb nd ne ng nl nn no nr nv ny oc oj om or os pa pi pl ps pt qu rm rn ro ru rw sa sc sd se sg si sk sl sm sn so sq sr ss st su sv sw ta te tg th ti tk tl tn to tr ts tt tw ty ug uk ur uz ve vi vo wa wo xh yi yo za zh zu".split(" "));
var ji = new Set("aar abk afr aka amh ara arg asm ava ave aym aze bak bam bel ben bih bis bod bos bre bul cat ces cha che chu chv cor cos cre cym dan deu div dzo ell eng epo est eus ewe fao fas fij fin fra fry ful gla gle glg glv grn guj hat hau hbs heb her hin hmo hrv hun hye ibo iii iku ile ina ind ipk isl ita jav jpn kal kan kas kat kau kaz khm kik kin kir kom kon kor kua kur lao lat lav lim lin lit ltz lub lug mah mal mar mkd mlg mlt mon mri msa mya nau nav nbl nde ndo nep nld nno nob nor nya oci oji ori orm oss pan pli pol por pus que roh ron run rus sag san sin slk slv sme smo sna snd som sot spa sqi srd srp ssw sun swa swe tah tam tat tel tgk tgl tha tir ton tsn tso tuk tur twi uig ukr urd uzb ven vie vol wln wol xho yid yor zha zho zul".split(" "));
var Ui = /^[a-z]{2,8}(-[a-z0-9]{1,8})*$/i;
function Ke(e2) {
  if (!Ui.test(e2))
    return false;
  const a2 = e2.split("-")[0].toLowerCase();
  return a2.length === 2 ? Wi.has(a2) : a2.length === 3 ? !ji.has(a2) : false;
}
function Ce(e2) {
  var i2;
  const a2 = e2.ownerDocument.createTreeWalker(e2, NodeFilter.SHOW_TEXT);
  let t2;
  for (;t2 = a2.nextNode(); ) {
    if (!t2.data.trim())
      continue;
    const n2 = t2.parentElement;
    if (!n2 || n2 instanceof HTMLElement && (n2.hidden || n2.style.display === "none"))
      continue;
    let o3 = n2, r3 = false;
    for (;o3 && o3 !== e2; ) {
      if (o3.hasAttribute("lang")) {
        r3 = true;
        break;
      }
      o3 = o3.parentElement;
    }
    if (!r3)
      return true;
  }
  for (const n2 of e2.querySelectorAll("img[alt]")) {
    if (!((i2 = n2.getAttribute("alt")) == null ? undefined : i2.trim()))
      continue;
    let r3 = n2.parentElement, s2 = false;
    for (;r3 && r3 !== e2; ) {
      if (r3.hasAttribute("lang")) {
        s2 = true;
        break;
      }
      r3 = r3.parentElement;
    }
    if (!s2)
      return true;
  }
  return false;
}
var Oi = {
  id: "readable/html-lang-valid",
  category: "readable",
  actRuleIds: ["bf051a"],
  wcag: ["3.1.1"],
  level: "A",
  tags: ["page-level"],
  fixability: "mechanical",
  description: "The lang attribute on <html> must have a valid value.",
  guidance: "The lang attribute must use a valid BCP 47 language tag. Use a 2 or 3 letter language code (e.g., 'en', 'fr', 'zh'), optionally followed by a region code (e.g., 'en-US', 'pt-BR'). Invalid tags prevent screen readers from correctly pronouncing content.",
  run(e2) {
    var t2;
    const a2 = (t2 = e2.documentElement.getAttribute("lang")) == null ? undefined : t2.trim();
    return a2 && !Ke(a2) ? [{
      ruleId: "readable/html-lang-valid",
      selector: "html",
      html: m2(e2.documentElement),
      impact: "serious",
      message: `Invalid lang attribute value "${a2}".`,
      fix: { type: "set-attribute", attribute: "lang", value: "en" }
    }] : [];
  }
};
var Vi = {
  id: "readable/valid-lang",
  category: "readable",
  actRuleIds: ["de46e4"],
  wcag: ["3.1.2"],
  level: "AA",
  fixability: "mechanical",
  description: "The lang attribute must have a valid value on all elements.",
  guidance: "When content in a different language appears within a page (e.g., a French quote in an English document), wrap it with a lang attribute to ensure correct pronunciation. The lang value must be a valid BCP 47 tag. Common codes: en, es, fr, de, zh, ja, pt, ar, ru.",
  run(e2) {
    const a2 = [];
    for (const t2 of e2.querySelectorAll("[lang]")) {
      if (h2(t2) || t2 === e2.documentElement)
        continue;
      const i2 = t2.getAttribute("lang"), n2 = i2 == null ? undefined : i2.trim();
      if (i2 && !n2) {
        Ce(t2) && a2.push({
          ruleId: "readable/valid-lang",
          selector: p(t2),
          html: m2(t2),
          impact: "serious",
          message: "Empty lang attribute value."
        });
        continue;
      }
      n2 && Ce(t2) && (Ke(n2) || a2.push({
        ruleId: "readable/valid-lang",
        selector: p(t2),
        html: m2(t2),
        impact: "serious",
        message: `Invalid lang attribute value "${n2}".`
      }));
    }
    return a2;
  }
};
var Bi = {
  id: "readable/html-xml-lang-mismatch",
  category: "readable",
  wcag: ["3.1.1"],
  level: "A",
  tags: ["page-level"],
  fixability: "mechanical",
  description: "The lang and xml:lang attributes on <html> must match.",
  guidance: "In XHTML documents, if both lang and xml:lang are present, they must specify the same base language. Mismatched values confuse assistive technologies. Either remove xml:lang (preferred for HTML5) or ensure both attributes have identical values.",
  run(e2) {
    var n2, o3;
    const a2 = e2.documentElement, t2 = (n2 = a2.getAttribute("lang")) == null ? undefined : n2.trim().toLowerCase(), i2 = (o3 = a2.getAttribute("xml:lang")) == null ? undefined : o3.trim().toLowerCase();
    if (t2 && i2) {
      const r3 = t2.split("-")[0], s2 = i2.split("-")[0];
      if (r3 !== s2)
        return [{
          ruleId: "readable/html-xml-lang-mismatch",
          selector: "html",
          html: m2(a2),
          impact: "moderate",
          message: `lang="${t2}" and xml:lang="${i2}" do not match.`,
          fix: { type: "remove-attribute", attribute: "xml:lang" }
        }];
    }
    return [];
  }
};
var _i = {
  id: "labels-and-names/frame-title",
  category: "labels-and-names",
  actRuleIds: ["cae760"],
  wcag: ["4.1.2"],
  level: "A",
  fixability: "contextual",
  browserHint: "Screenshot the iframe to see what content it displays, then add a title describing its purpose.",
  description: "Frames must have an accessible name.",
  guidance: "Screen readers announce frame titles when users navigate frames. Add a title attribute to <iframe> and <frame> elements that describes the frame's purpose (e.g., <iframe title='Video player'>). Avoid generic titles like 'frame' or 'iframe'. If the frame is decorative, use aria-hidden='true'.",
  run(e2) {
    const a2 = [];
    for (const t2 of e2.querySelectorAll("iframe, frame")) {
      if (h2(t2) || Ge(t2))
        continue;
      if (!x2(t2)) {
        const n2 = t2.getAttribute("src");
        a2.push({
          ruleId: "labels-and-names/frame-title",
          selector: p(t2),
          html: m2(t2),
          impact: "serious",
          message: "Frame is missing an accessible name. Add a title attribute.",
          context: n2 ? `src: "${n2}"` : undefined,
          fix: { type: "add-attribute", attribute: "title", value: "" }
        });
      }
    }
    return a2;
  }
};
var Gi = {
  id: "labels-and-names/frame-title-unique",
  category: "labels-and-names",
  wcag: ["4.1.2"],
  level: "A",
  tags: ["best-practice"],
  fixability: "contextual",
  description: "Frame titles should be unique.",
  guidance: "When multiple frames have identical titles, screen reader users cannot distinguish between them. Give each frame a unique, descriptive title that explains its specific purpose or content.",
  run(e2) {
    var n2;
    const a2 = [], t2 = Array.from(e2.querySelectorAll("iframe[title], frame[title]")), i2 = /* @__PURE__ */ new Map;
    for (const o3 of t2) {
      if (h2(o3) || Ge(o3))
        continue;
      const r3 = (n2 = o3.getAttribute("title")) == null ? undefined : n2.trim().toLowerCase();
      if (r3) {
        const s2 = i2.get(r3) || [];
        s2.push(o3), i2.set(r3, s2);
      }
    }
    for (const [, o3] of i2)
      if (o3.length > 1)
        for (const r3 of o3.slice(1))
          a2.push({
            ruleId: "labels-and-names/frame-title-unique",
            selector: p(r3),
            html: m2(r3),
            impact: "moderate",
            message: "Frame title is not unique. Use a distinct title for each frame."
          });
    return a2;
  }
};
var Qe = 'input:not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"]):not([type="image"]), textarea, select';
function Yi(e2) {
  if (e2.id) {
    const t2 = e2.ownerDocument.querySelector(`label[for="${CSS.escape(e2.id)}"]`);
    if (t2)
      return t2;
  }
  return e2.closest("label");
}
function Xi(e2) {
  if (e2.id) {
    const t2 = e2.ownerDocument.querySelector(`label[for="${CSS.escape(e2.id)}"]`);
    if (t2) {
      const i2 = k2(t2).trim();
      if (i2)
        return i2;
    }
  }
  const a2 = e2.closest("label");
  if (a2) {
    const t2 = k2(a2).trim();
    if (t2)
      return t2;
  }
  return "";
}
var Ji = [
  '[role="checkbox"]',
  '[role="combobox"]',
  '[role="listbox"]',
  '[role="menuitemcheckbox"]',
  '[role="menuitemradio"]',
  '[role="radio"]',
  '[role="searchbox"]',
  '[role="slider"]',
  '[role="spinbutton"]',
  '[role="switch"]',
  '[role="textbox"]'
].join(", ");
var Ki = /* @__PURE__ */ new Set([
  "checkbox",
  "menuitemcheckbox",
  "menuitemradio",
  "radio",
  "switch"
]);
var Qi = /* @__PURE__ */ new Set([
  "combobox",
  "listbox",
  "searchbox",
  "slider",
  "spinbutton",
  "textbox"
]);
function Zi(e2) {
  var r3, s2, l2, d2;
  const a2 = (r3 = e2.getAttribute("role")) == null ? undefined : r3.trim().toLowerCase();
  if (a2 && Ki.has(a2) || (e2 instanceof HTMLInputElement || e2 instanceof HTMLTextAreaElement) && !(a2 && Qi.has(a2)))
    return x2(e2);
  const i2 = e2.getAttribute("aria-labelledby");
  if (i2) {
    const c3 = i2.split(/\s+/).map((u3) => {
      const b2 = e2.ownerDocument.getElementById(u3);
      return b2 ? k2(b2).trim() : "";
    }).filter(Boolean);
    if (c3.length)
      return c3.join(" ");
  }
  const n2 = (s2 = e2.getAttribute("aria-label")) == null ? undefined : s2.trim();
  if (n2)
    return n2;
  if (e2 instanceof HTMLInputElement || e2 instanceof HTMLTextAreaElement || e2 instanceof HTMLSelectElement) {
    const c3 = Xi(e2);
    if (c3)
      return c3;
  }
  const o3 = (l2 = e2.getAttribute("title")) == null ? undefined : l2.trim();
  if (o3)
    return o3;
  if (e2 instanceof HTMLInputElement || e2 instanceof HTMLTextAreaElement) {
    const c3 = (d2 = e2.getAttribute("placeholder")) == null ? undefined : d2.trim();
    if (c3)
      return c3;
  }
  return "";
}
var en = {
  id: "labels-and-names/form-label",
  category: "labels-and-names",
  actRuleIds: ["e086e5"],
  wcag: ["4.1.2"],
  level: "A",
  fixability: "contextual",
  browserHint: "Screenshot the form to see visual label placement relative to the input, then associate them with a label element or aria-labelledby.",
  description: "Form elements must have labels. Use <label>, aria-label, or aria-labelledby.",
  guidance: "Every form input needs an accessible label so users understand what information to enter. Use a <label> element with a for attribute matching the input's id, wrap the input in a <label>, or use aria-label/aria-labelledby for custom components. Placeholders are not sufficient as labels since they disappear when typing. Labels should describe the information requested, not the field type (e.g., 'Email address', 'Search', 'Phone number').",
  run(e2) {
    var i2;
    const a2 = [], t2 = e2.querySelectorAll(`${Qe}, ${Ji}`);
    for (const n2 of t2) {
      if (h2(n2) || I3(n2))
        continue;
      const o3 = (i2 = n2.getAttribute("role")) == null ? undefined : i2.trim().toLowerCase();
      if (o3 === "presentation" || o3 === "none")
        continue;
      if (!Zi(n2)) {
        const s2 = [], l2 = n2.tagName.toLowerCase(), d2 = n2.getAttribute("type");
        d2 && l2 === "input" && s2.push(`type: ${d2}`);
        const c3 = n2.getAttribute("name");
        c3 && s2.push(`name: "${c3}"`);
        const u3 = n2.getAttribute("placeholder");
        u3 && s2.push(`placeholder: "${u3}"`), o3 && s2.push(`role: ${o3}`);
        const b2 = n2.getAttribute("id");
        b2 && s2.push(`id: "${b2}"`), a2.push({
          ruleId: "labels-and-names/form-label",
          selector: p(n2),
          html: m2(n2),
          impact: "critical",
          message: "Form element has no accessible label.",
          context: s2.length > 0 ? s2.join(", ") : undefined,
          fix: { type: "suggest", suggestion: "Add a <label> element associated via the for attribute, or add an aria-label attribute" }
        });
      }
    }
    return a2;
  }
};
var tn = {
  id: "labels-and-names/multiple-labels",
  category: "labels-and-names",
  wcag: ["4.1.2"],
  level: "A",
  tags: ["best-practice"],
  fixability: "contextual",
  description: "Form fields should not have multiple label elements.",
  guidance: "When a form field has multiple <label> elements pointing to it, assistive technologies may announce only one label or behave inconsistently. Use a single <label> and combine any additional text into it, or use aria-describedby for supplementary information.",
  run(e2) {
    const a2 = [], t2 = e2.querySelectorAll('input:not([type="hidden"]), textarea, select');
    for (const i2 of t2) {
      if (h2(i2) || !i2.id)
        continue;
      const n2 = e2.querySelectorAll(`label[for="${CSS.escape(i2.id)}"]`);
      let o3 = 0, r3 = i2.parentElement;
      for (;r3; ) {
        if (r3.tagName.toLowerCase() === "label" && !r3.hasAttribute("for")) {
          o3++;
          break;
        }
        r3 = r3.parentElement;
      }
      const s2 = n2.length + o3;
      s2 > 1 && a2.push({
        ruleId: "labels-and-names/multiple-labels",
        selector: p(i2),
        html: m2(i2),
        impact: "moderate",
        message: `Form field has ${s2} labels. Use a single label element.`,
        fix: { type: "suggest", suggestion: "Consolidate multiple labels into a single <label> element, and use aria-describedby for supplementary text" }
      });
    }
    return a2;
  }
};
var an = {
  id: "labels-and-names/input-button-name",
  category: "labels-and-names",
  wcag: ["4.1.2"],
  level: "A",
  fixability: "contextual",
  browserHint: "Screenshot the button to see its visual purpose, then set value or aria-label to describe the action.",
  description: "Input buttons must have discernible text via value, aria-label, or aria-labelledby.",
  guidance: "Input buttons (<input type='submit'>, type='button', type='reset'>) need accessible names so users know what action the button performs. Add a value attribute with descriptive text (e.g., value='Submit Form'), or use aria-label if the value must differ from the accessible name.",
  run(e2) {
    var t2, i2;
    const a2 = [];
    for (const n2 of e2.querySelectorAll('input[type="submit"], input[type="button"], input[type="reset"]')) {
      if (h2(n2) || I3(n2))
        continue;
      const o3 = (t2 = n2.getAttribute("value")) == null ? undefined : t2.trim(), r3 = (i2 = n2.getAttribute("type")) == null ? undefined : i2.toLowerCase(), s2 = (r3 === "submit" || r3 === "reset") && !n2.hasAttribute("value");
      !o3 && !s2 && !x2(n2) && a2.push({
        ruleId: "labels-and-names/input-button-name",
        selector: p(n2),
        html: m2(n2),
        impact: "critical",
        message: "Input button has no discernible text.",
        fix: { type: "add-attribute", attribute: "value", value: "" }
      });
    }
    return a2;
  }
};
function Te(e2) {
  return e2.toLowerCase().replace(/\s+/g, " ").trim();
}
function Ne(e2, a2) {
  const t2 = Te(e2), i2 = Te(a2);
  if (!t2 || !i2 || t2.includes(i2) || i2.includes(t2))
    return true;
  const n2 = i2.split(/\s+/).map((o3) => o3.replace(/[.,;:!?\u2026]+$/g, "")).filter((o3) => o3.length > 2);
  return n2.length >= 2 && n2.filter((r3) => t2.includes(r3)).length / n2.length > 0.5;
}
var nn = {
  id: "labels-and-names/label-content-mismatch",
  category: "labels-and-names",
  actRuleIds: ["2ee8b8"],
  wcag: ["2.5.3"],
  level: "A",
  tags: ["best-practice"],
  fixability: "contextual",
  browserHint: "Screenshot the control to see its visible label, then ensure aria-label starts with that visible text.",
  description: "Interactive elements with visible text must have accessible names that contain that text.",
  guidance: "For voice control users who activate controls by speaking their visible label, the accessible name must include the visible text. If aria-label is 'Submit form' but the button shows 'Send', voice users saying 'click Send' won't activate it. Ensure aria-label/aria-labelledby contains or matches the visible text.",
  run(e2) {
    const a2 = [];
    for (const t2 of e2.querySelectorAll('button, [role="button"], a[href], input[type="submit"], input[type="button"]')) {
      if (h2(t2))
        continue;
      const i2 = x2(t2);
      if (!i2)
        continue;
      let n2 = "";
      t2 instanceof HTMLInputElement ? n2 = t2.value || "" : n2 = ee(t2);
      const o3 = n2.trim();
      if (!o3 || o3.length <= 2)
        continue;
      const r3 = t2.hasAttribute("aria-label"), s2 = t2.hasAttribute("aria-labelledby");
      !r3 && !s2 || Ne(i2, n2) || a2.push({
        ruleId: "labels-and-names/label-content-mismatch",
        selector: p(t2),
        html: m2(t2),
        impact: "serious",
        message: `Accessible name "${i2}" does not contain visible text "${n2.trim()}".`,
        fix: { type: "suggest", suggestion: "Update aria-label to include the visible text content so voice control users can activate this element by speaking its label" }
      });
    }
    for (const t2 of e2.querySelectorAll("input, select, textarea")) {
      if (h2(t2) || t2 instanceof HTMLInputElement && ["hidden", "submit", "button", "image"].includes(t2.type))
        continue;
      const i2 = x2(t2);
      if (!i2 || !t2.hasAttribute("aria-label"))
        continue;
      const o3 = t2.id;
      let r3 = "";
      if (o3) {
        const s2 = e2.querySelector(`label[for="${CSS.escape(o3)}"]`);
        s2 && (r3 = ee(s2));
      }
      r3.trim() && (Ne(i2, r3) || a2.push({
        ruleId: "labels-and-names/label-content-mismatch",
        selector: p(t2),
        html: m2(t2),
        impact: "serious",
        message: `Accessible name "${i2}" does not contain visible label "${r3.trim()}".`,
        fix: { type: "suggest", suggestion: "Update aria-label to include the visible label text so voice control users can activate this element by speaking its label" }
      }));
    }
    return a2;
  }
};
var on = {
  id: "labels-and-names/label-title-only",
  category: "labels-and-names",
  wcag: ["4.1.2"],
  level: "A",
  tags: ["best-practice"],
  fixability: "contextual",
  description: "Form elements should not use title attribute as the only accessible name.",
  guidance: "The title attribute is unreliable as a label because it only appears on hover/focus (not visible to touch users) and is often ignored by assistive technologies. Use a visible <label> element, aria-label, or aria-labelledby instead. Title can supplement a label but should not replace it.",
  run(e2) {
    var i2, n2, o3;
    const a2 = [], t2 = e2.querySelectorAll(Qe);
    for (const r3 of t2) {
      if (h2(r3))
        continue;
      const s2 = r3.hasAttribute("title") && ((i2 = r3.getAttribute("title")) == null ? undefined : i2.trim()), l2 = r3.hasAttribute("aria-label") && ((n2 = r3.getAttribute("aria-label")) == null ? undefined : n2.trim()), d2 = r3.hasAttribute("aria-labelledby"), c3 = Yi(r3), u3 = !!((o3 = c3 == null ? undefined : c3.textContent) != null && o3.trim());
      s2 && !l2 && !d2 && !u3 && a2.push({
        ruleId: "labels-and-names/label-title-only",
        selector: p(r3),
        html: m2(r3),
        impact: "serious",
        message: "Form element uses title attribute as only label. Use <label>, aria-label, or aria-labelledby instead.",
        fix: { type: "suggest", suggestion: "Add a visible <label> element or aria-label attribute, and optionally keep the title as supplementary text" }
      });
    }
    return a2;
  }
};
var rn = {
  id: "labels-and-names/aria-command-name",
  category: "labels-and-names",
  actRuleIds: ["m6b1q3"],
  wcag: ["4.1.2"],
  level: "A",
  fixability: "contextual",
  description: "ARIA commands must have an accessible name.",
  guidance: "Interactive ARIA command roles (button, link, menuitem) must have accessible names so users know what action they perform. Add visible text content, aria-label, or aria-labelledby to provide a name.",
  run(e2) {
    var t2;
    const a2 = [];
    for (const i2 of e2.querySelectorAll('[role="button"], [role="link"], [role="menuitem"]')) {
      if (h2(i2) || I3(i2) || se(i2))
        continue;
      const n2 = i2.getAttribute("role");
      if ((i2.tagName.toLowerCase() === "button" || i2.tagName.toLowerCase() === "a") && n2 !== "menuitem")
        continue;
      if (!x2(i2)) {
        const r3 = i2.querySelector("img[alt]");
        if ((t2 = r3 == null ? undefined : r3.getAttribute("alt")) != null && t2.trim())
          continue;
        a2.push({
          ruleId: "labels-and-names/aria-command-name",
          selector: p(i2),
          html: m2(i2),
          impact: "serious",
          message: "ARIA command has no accessible name.",
          fix: { type: "add-attribute", attribute: "aria-label", value: "" }
        });
      }
    }
    return a2;
  }
};
function M(e2) {
  return {
    id: e2.id,
    category: e2.id.split("/")[0],
    ...e2.actRuleIds ? { actRuleIds: e2.actRuleIds } : {},
    wcag: ["4.1.2"],
    level: "A",
    ...e2.fixability ? { fixability: e2.fixability } : {},
    description: e2.description,
    guidance: e2.guidance,
    run(a2) {
      var i2;
      const t2 = [];
      for (const n2 of a2.querySelectorAll(e2.selector)) {
        if (h2(n2) || e2.checkComputedHidden && I3(n2) || e2.checkShadowDOM && se(n2))
          continue;
        if (e2.roleSet) {
          const r3 = (i2 = n2.getAttribute("role")) == null ? undefined : i2.trim().toLowerCase();
          if (!r3 || !e2.roleSet.has(r3))
            continue;
        }
        if (e2.skipNative && n2.matches(e2.skipNative))
          continue;
        x2(n2) || t2.push({
          ruleId: e2.id,
          selector: p(n2),
          html: m2(n2),
          impact: "serious",
          message: e2.message,
          ...e2.fix ? { fix: e2.fix } : {}
        });
      }
      return t2;
    }
  };
}
var sn = M({
  id: "labels-and-names/aria-input-field-name",
  selector: '[role="combobox"], [role="listbox"], [role="searchbox"], [role="slider"], [role="spinbutton"], [role="textbox"]',
  message: "ARIA input field has no accessible name.",
  fixability: "contextual",
  description: "ARIA input fields must have an accessible name.",
  guidance: "ARIA input widgets (combobox, listbox, searchbox, slider, spinbutton, textbox) must have accessible names so users understand what data to enter. Add a visible label with aria-labelledby, or use aria-label if a visible label is not possible.",
  fix: { type: "add-attribute", attribute: "aria-label", value: "" },
  checkComputedHidden: true,
  checkShadowDOM: true,
  skipNative: "input, select, textarea"
});
var ln = M({
  id: "labels-and-names/aria-toggle-field-name",
  selector: '[role="checkbox"], [role="switch"], [role="radio"], [role="menuitemcheckbox"], [role="menuitemradio"]',
  message: "ARIA toggle field has no accessible name.",
  fixability: "contextual",
  description: "ARIA toggle fields must have an accessible name.",
  guidance: "ARIA toggle controls (checkbox, switch, radio, menuitemcheckbox, menuitemradio) must have accessible names so users understand what option they're selecting. Add visible text content, aria-label, or use aria-labelledby to reference a visible label.",
  fix: { type: "add-attribute", attribute: "aria-label", value: "" },
  checkComputedHidden: true,
  checkShadowDOM: true,
  skipNative: 'input[type="checkbox"], input[type="radio"]'
});
var cn = M({
  id: "labels-and-names/aria-meter-name",
  fixability: "contextual",
  description: "ARIA meter elements must have an accessible name.",
  guidance: "Meter elements display a value within a known range (like disk usage or password strength). They must have accessible names so screen reader users understand what is being measured. Use aria-label or aria-labelledby to provide context.",
  selector: '[role="meter"], meter',
  message: "Meter has no accessible name.",
  fix: { type: "add-attribute", attribute: "aria-label", value: "" }
});
var dn = M({
  id: "labels-and-names/aria-progressbar-name",
  fixability: "contextual",
  description: "ARIA progressbar elements must have an accessible name.",
  guidance: "Progress indicators must have accessible names so screen reader users understand what process is being tracked. Use aria-label (e.g., 'File upload progress') or aria-labelledby to reference a visible heading or label.",
  selector: '[role="progressbar"], progress',
  message: "Progressbar has no accessible name.",
  fix: { type: "add-attribute", attribute: "aria-label", value: "" }
});
var un = M({
  id: "labels-and-names/aria-dialog-name",
  fixability: "contextual",
  description: "ARIA dialogs must have an accessible name.",
  guidance: "Dialog and alertdialog elements must have accessible names so screen reader users understand the dialog's purpose when it opens. Use aria-label or aria-labelledby pointing to the dialog's heading. Native <dialog> elements should also have an accessible name.",
  selector: '[role="dialog"], [role="alertdialog"], dialog',
  message: "Dialog has no accessible name.",
  fix: { type: "add-attribute", attribute: "aria-label", value: "" }
});
var mn = M({
  id: "labels-and-names/aria-tooltip-name",
  fixability: "contextual",
  description: "ARIA tooltips must have an accessible name.",
  guidance: "Tooltip elements must have accessible names (usually their text content). The tooltip content itself typically serves as the accessible name. Ensure the tooltip contains descriptive text content or has aria-label.",
  selector: '[role="tooltip"]',
  message: "Tooltip has no accessible name.",
  fix: { type: "add-text-content" }
});
var pn = M({
  id: "labels-and-names/aria-treeitem-name",
  fixability: "contextual",
  description: "ARIA treeitem elements must have an accessible name.",
  guidance: "Tree items must have accessible names so screen reader users can understand the tree structure and navigate it effectively. Provide text content, aria-label, or aria-labelledby for each treeitem.",
  selector: '[role="treeitem"]',
  message: "Treeitem has no accessible name.",
  fix: { type: "add-text-content" }
});
function bn(e2) {
  var o3, r3, s2;
  const a2 = [], t2 = e2.className;
  t2 && typeof t2 == "string" && t2.trim() && a2.push(`Classes: ${t2.trim().slice(0, 100)}`);
  const i2 = e2.closest("form");
  if (i2) {
    const l2 = i2.getAttribute("aria-label") || ((r3 = (o3 = i2.querySelector("legend")) == null ? undefined : o3.textContent) == null ? undefined : r3.trim());
    l2 && a2.push(`Form: ${l2.slice(0, 60)}`);
  }
  const n2 = e2.parentElement;
  if (n2) {
    const l2 = n2.closest("h1, h2, h3, h4, h5, h6") || n2.querySelector("h1, h2, h3, h4, h5, h6");
    (s2 = l2 == null ? undefined : l2.textContent) != null && s2.trim() && a2.push(`Nearby heading: ${l2.textContent.trim().slice(0, 60)}`);
  }
  return a2.length > 0 ? a2.join(`
`) : undefined;
}
var hn = {
  id: "labels-and-names/button-name",
  category: "labels-and-names",
  actRuleIds: ["97a4e1"],
  wcag: ["4.1.2"],
  level: "A",
  fixability: "contextual",
  browserHint: "Screenshot the button to identify its icon or visual label, then add a matching aria-label.",
  description: "Buttons must have discernible text.",
  guidance: "Screen reader users need to know what a button does. Add visible text content, aria-label, or aria-labelledby. For icon buttons, use aria-label describing the action (e.g., aria-label='Close'). If the button contains an image, ensure the image has alt text describing the button's action.",
  run(e2) {
    const a2 = [];
    for (const t2 of e2.querySelectorAll('button, [role="button"]')) {
      if (h2(t2) || I3(t2))
        continue;
      const i2 = t2.getAttribute("role");
      if ((i2 === "none" || i2 === "presentation") && !(t2.matches('button:not([disabled]), [tabindex]:not([tabindex="-1"])') || t2.tagName.toLowerCase() === "button" && !t2.disabled) || se(t2))
        continue;
      x2(t2) || a2.push({
        ruleId: "labels-and-names/button-name",
        selector: p(t2),
        html: m2(t2),
        impact: "critical",
        message: "Button has no discernible text.",
        context: bn(t2),
        fix: { type: "add-text-content" }
      });
    }
    return a2;
  }
};
var gn = {
  id: "labels-and-names/summary-name",
  category: "labels-and-names",
  actRuleIds: ["2t702h"],
  wcag: ["4.1.2"],
  level: "A",
  fixability: "contextual",
  description: "<summary> elements must have an accessible name.",
  guidance: "The <summary> element provides the visible label for a <details> disclosure widget. It must have descriptive text content so screen reader users understand what will be revealed when expanded. Add clear, concise text that indicates what content is contained in the details section.",
  run(e2) {
    const a2 = [];
    for (const t2 of e2.querySelectorAll("details > summary:first-of-type")) {
      if (h2(t2))
        continue;
      x2(t2) || a2.push({
        ruleId: "labels-and-names/summary-name",
        selector: p(t2),
        html: m2(t2),
        impact: "serious",
        message: "<summary> element has no accessible name. Add descriptive text.",
        fix: { type: "add-text-content" }
      });
    }
    return a2;
  }
};
var re = ["aria-labelledby", "aria-describedby", "aria-controls", "aria-owns", "aria-flowto"];
function fn(e2) {
  const a2 = /* @__PURE__ */ new Set;
  for (const t2 of e2.querySelectorAll("[aria-labelledby], [aria-describedby], [aria-controls], [aria-owns], [aria-flowto]"))
    for (const i2 of re) {
      const n2 = t2.getAttribute(i2);
      n2 && n2.split(/\s+/).forEach((o3) => {
        o3 && a2.add(o3);
      });
    }
  for (const t2 of e2.querySelectorAll("label[for]")) {
    const i2 = t2.getAttribute("for");
    i2 != null && i2.trim() && a2.add(i2.trim());
  }
  return a2;
}
var vn = {
  id: "labels-and-names/duplicate-id-aria",
  category: "labels-and-names",
  wcag: ["4.1.2"],
  level: "A",
  fixability: "contextual",
  description: "IDs used in ARIA and label associations must be unique to avoid broken references.",
  guidance: "When aria-labelledby, aria-describedby, aria-controls, or label[for] reference a duplicate ID, only the first matching element is used. This breaks the intended relationship and may leave controls unnamed or descriptions missing. Ensure IDs referenced by ARIA attributes and label associations are unique throughout the document.",
  run(e2) {
    const a2 = [], t2 = fn(e2), i2 = /* @__PURE__ */ new Map;
    for (const n2 of e2.querySelectorAll("[id]"))
      t2.has(n2.id) && (n2 instanceof HTMLElement && (n2.style.display === "none" || n2.style.visibility === "hidden" || n2.hidden) || i2.set(n2.id, (i2.get(n2.id) ?? 0) + 1));
    for (const [n2, o3] of i2) {
      if (o3 <= 1)
        continue;
      const r3 = e2.querySelectorAll(`#${CSS.escape(n2)}`), s2 = e2.querySelector(re.map((c3) => `[${c3}~="${CSS.escape(n2)}"]`).join(", ")), l2 = e2.querySelector(`label[for="${CSS.escape(n2)}"]`);
      let d2;
      if (s2) {
        const c3 = re.find((u3) => {
          var b2;
          return (b2 = s2.getAttribute(u3)) == null ? undefined : b2.split(/\s+/).includes(n2);
        });
        c3 && (d2 = c3);
      } else
        l2 && (d2 = "label[for]");
      a2.push({
        ruleId: "labels-and-names/duplicate-id-aria",
        selector: p(r3[1]),
        html: m2(r3[1]),
        impact: "critical",
        message: `Duplicate ID "${n2}" referenced by ${d2 ?? "an accessibility attribute"}.`,
        context: `First element: ${m2(r3[0])}${d2 ? `
Referenced by: ${d2}` : ""}`,
        fix: { type: "suggest", suggestion: "Change the duplicate ID to a unique value so the ARIA or label reference points to the correct element" }
      });
    }
    return a2;
  }
};
var yn = {
  id: "input-assistance/accessible-authentication",
  category: "input-assistance",
  wcag: ["3.3.8"],
  level: "AA",
  fixability: "mechanical",
  description: 'Password inputs must not block password managers. Avoid autocomplete="off" and allow pasting.',
  guidance: 'WCAG 2.2 SC 3.3.8 requires that authentication steps either avoid cognitive function tests or provide a mechanism to assist users. Password managers are a key assistive mechanism. Setting autocomplete="off" on password fields prevents password managers from filling credentials. Blocking paste via onpaste attributes prevents users from pasting stored passwords. Set autocomplete to "current-password" for login forms or "new-password" for registration/change-password forms, and do not block paste on password fields.',
  run(e2) {
    var t2;
    const a2 = [];
    for (const i2 of e2.querySelectorAll('input[type="password"]')) {
      if (h2(i2) || I3(i2) || i2.disabled || i2.getAttribute("aria-disabled") === "true")
        continue;
      if (((t2 = i2.getAttribute("autocomplete")) == null ? undefined : t2.trim().toLowerCase()) === "off") {
        a2.push({
          ruleId: "input-assistance/accessible-authentication",
          selector: p(i2),
          html: m2(i2),
          impact: "critical",
          message: 'Password field has autocomplete="off" which blocks password managers.',
          fix: {
            type: "set-attribute",
            attribute: "autocomplete",
            value: "current-password"
          }
        });
        continue;
      }
      const o3 = i2.getAttribute("onpaste");
      o3 && /return\s+false|preventDefault/.test(o3) && a2.push({
        ruleId: "input-assistance/accessible-authentication",
        selector: p(i2),
        html: m2(i2),
        impact: "critical",
        message: "Password field blocks pasting, preventing password manager use.",
        fix: {
          type: "remove-attribute",
          attribute: "onpaste"
        }
      });
    }
    return a2;
  }
};
var wn = {
  id: "aria/aria-roles",
  category: "aria",
  actRuleIds: ["674b10"],
  wcag: ["4.1.2"],
  level: "A",
  fixability: "contextual",
  description: "ARIA role values must be valid.",
  guidance: "Invalid role values are ignored by assistive technologies, meaning the element will not have the intended semantics. Check the spelling and use only roles defined in the WAI-ARIA specification. Common roles include: button, link, navigation, main, dialog, alert, tab, tabpanel, menu, menuitem.",
  run(e2) {
    const a2 = [];
    for (const t2 of e2.querySelectorAll("[role]")) {
      const o3 = t2.getAttribute("role").replace(/[\u201C\u201D\u2018\u2019\u00AB\u00BB]/g, "").split(/\s+/).filter(Boolean);
      !o3.some((s2) => dt(s2)) && o3.length > 0 && a2.push({
        ruleId: "aria/aria-roles",
        selector: p(t2),
        html: m2(t2),
        impact: "critical",
        message: `Invalid ARIA role "${o3[0]}".`,
        fix: { type: "remove-attribute", attribute: "role" }
      });
    }
    return a2;
  }
};
var xn = {
  id: "aria/aria-valid-attr",
  category: "aria",
  actRuleIds: ["5f99a7"],
  wcag: ["4.1.2"],
  level: "A",
  fixability: "mechanical",
  description: "ARIA attributes must be valid (correctly spelled).",
  guidance: "Misspelled ARIA attributes are ignored by assistive technologies. Check the spelling against the WAI-ARIA specification. Common mistakes: aria-labeledby (should be aria-labelledby), aria-role (should be role), aria-description (valid in ARIA 1.3+).",
  run(e2) {
    return le2(e2).validAttr;
  }
};
var An = {
  id: "aria/aria-valid-attr-value",
  category: "aria",
  actRuleIds: ["6a7281"],
  wcag: ["4.1.2"],
  level: "A",
  fixability: "contextual",
  description: "ARIA attributes must have valid values.",
  guidance: "Each ARIA attribute accepts specific value types. Boolean attributes (aria-hidden, aria-disabled) accept only 'true' or 'false'. Tristate attributes (aria-checked, aria-pressed) also accept 'mixed'. Token attributes (aria-live, aria-autocomplete) accept predefined values. ID reference attributes (aria-labelledby, aria-describedby) must reference existing element IDs.",
  run(e2) {
    return le2(e2).validAttrValue;
  }
};
var kn = {
  checkbox: ["aria-checked"],
  combobox: ["aria-expanded"],
  heading: ["aria-level"],
  menuitemcheckbox: ["aria-checked"],
  menuitemradio: ["aria-checked"],
  meter: ["aria-valuenow"],
  radio: ["aria-checked"],
  scrollbar: ["aria-controls", "aria-valuenow"],
  separator: ["aria-valuenow"],
  slider: ["aria-valuenow"],
  spinbutton: ["aria-valuenow"],
  switch: ["aria-checked"]
};
var Sn = {
  id: "aria/aria-required-attr",
  category: "aria",
  actRuleIds: ["4e8ab6"],
  wcag: ["4.1.2"],
  level: "A",
  fixability: "contextual",
  description: "Elements with ARIA roles must have all required ARIA attributes.",
  guidance: "Some ARIA roles require specific attributes to function correctly. For example, checkbox requires aria-checked, slider requires aria-valuenow, heading requires aria-level. Without these attributes, assistive technologies cannot convey the element's state or value to users. Add the missing required attribute with an appropriate value.",
  run(e2) {
    const a2 = [];
    for (const t2 of e2.querySelectorAll("[role]")) {
      if (h2(t2) || t2 instanceof HTMLElement && t2.style.display === "none")
        continue;
      const i2 = t2.getAttribute("role").trim().toLowerCase(), n2 = kn[i2];
      if (n2 && !(i2 === "checkbox" && t2 instanceof HTMLInputElement && t2.type === "checkbox") && !(i2 === "radio" && t2 instanceof HTMLInputElement && t2.type === "radio") && !(i2 === "option" && t2 instanceof HTMLOptionElement) && !(i2 === "heading" && /^h[1-6]$/i.test(t2.tagName))) {
        if (i2 === "separator") {
          const o3 = t2.getAttribute("tabindex");
          if (!o3 || o3 === "-1")
            continue;
        }
        if (!(t2.tagName.toLowerCase() === "hr" && !t2.hasAttribute("role"))) {
          for (const o3 of n2)
            if (!t2.hasAttribute(o3)) {
              a2.push({
                ruleId: "aria/aria-required-attr",
                selector: p(t2),
                html: m2(t2),
                impact: "critical",
                message: `Role "${i2}" requires attribute "${o3}".`,
                fix: { type: "add-attribute", attribute: o3, value: "" }
              });
              break;
            }
        }
      }
    }
    return a2;
  }
};
var In = {
  alert: /* @__PURE__ */ new Set(["aria-atomic", "aria-busy", "aria-live", "aria-relevant"]),
  alertdialog: /* @__PURE__ */ new Set(["aria-describedby", "aria-modal"]),
  application: /* @__PURE__ */ new Set(["aria-activedescendant", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-haspopup", "aria-invalid"]),
  article: /* @__PURE__ */ new Set(["aria-posinset", "aria-setsize"]),
  banner: /* @__PURE__ */ new Set([]),
  button: /* @__PURE__ */ new Set(["aria-disabled", "aria-expanded", "aria-haspopup", "aria-pressed"]),
  cell: /* @__PURE__ */ new Set(["aria-colindex", "aria-colspan", "aria-rowindex", "aria-rowspan"]),
  checkbox: /* @__PURE__ */ new Set(["aria-checked", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-invalid", "aria-readonly", "aria-required"]),
  columnheader: /* @__PURE__ */ new Set(["aria-colindex", "aria-colspan", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-haspopup", "aria-invalid", "aria-readonly", "aria-required", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-sort"]),
  combobox: /* @__PURE__ */ new Set(["aria-activedescendant", "aria-autocomplete", "aria-controls", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-haspopup", "aria-invalid", "aria-readonly", "aria-required"]),
  complementary: /* @__PURE__ */ new Set([]),
  contentinfo: /* @__PURE__ */ new Set([]),
  definition: /* @__PURE__ */ new Set([]),
  dialog: /* @__PURE__ */ new Set(["aria-describedby", "aria-modal"]),
  directory: /* @__PURE__ */ new Set([]),
  document: /* @__PURE__ */ new Set(["aria-expanded"]),
  feed: /* @__PURE__ */ new Set(["aria-busy"]),
  figure: /* @__PURE__ */ new Set([]),
  form: /* @__PURE__ */ new Set([]),
  grid: /* @__PURE__ */ new Set(["aria-activedescendant", "aria-colcount", "aria-disabled", "aria-multiselectable", "aria-readonly", "aria-rowcount"]),
  gridcell: /* @__PURE__ */ new Set(["aria-colindex", "aria-colspan", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-haspopup", "aria-invalid", "aria-readonly", "aria-required", "aria-rowindex", "aria-rowspan", "aria-selected"]),
  group: /* @__PURE__ */ new Set(["aria-activedescendant", "aria-disabled"]),
  heading: /* @__PURE__ */ new Set(["aria-level"]),
  img: /* @__PURE__ */ new Set([]),
  link: /* @__PURE__ */ new Set(["aria-disabled", "aria-expanded", "aria-haspopup"]),
  list: /* @__PURE__ */ new Set([]),
  listbox: /* @__PURE__ */ new Set(["aria-activedescendant", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-invalid", "aria-multiselectable", "aria-orientation", "aria-readonly", "aria-required"]),
  listitem: /* @__PURE__ */ new Set(["aria-level", "aria-posinset", "aria-setsize"]),
  log: /* @__PURE__ */ new Set(["aria-atomic", "aria-busy", "aria-live", "aria-relevant"]),
  main: /* @__PURE__ */ new Set([]),
  marquee: /* @__PURE__ */ new Set([]),
  math: /* @__PURE__ */ new Set([]),
  menu: /* @__PURE__ */ new Set(["aria-activedescendant", "aria-disabled", "aria-orientation"]),
  menubar: /* @__PURE__ */ new Set(["aria-activedescendant", "aria-disabled", "aria-orientation"]),
  menuitem: /* @__PURE__ */ new Set(["aria-disabled", "aria-expanded", "aria-haspopup", "aria-posinset", "aria-setsize"]),
  menuitemcheckbox: /* @__PURE__ */ new Set(["aria-checked", "aria-disabled", "aria-expanded", "aria-haspopup", "aria-posinset", "aria-setsize"]),
  menuitemradio: /* @__PURE__ */ new Set(["aria-checked", "aria-disabled", "aria-expanded", "aria-haspopup", "aria-posinset", "aria-setsize"]),
  meter: /* @__PURE__ */ new Set(["aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"]),
  navigation: /* @__PURE__ */ new Set([]),
  none: /* @__PURE__ */ new Set([]),
  note: /* @__PURE__ */ new Set([]),
  option: /* @__PURE__ */ new Set(["aria-checked", "aria-disabled", "aria-posinset", "aria-selected", "aria-setsize"]),
  paragraph: /* @__PURE__ */ new Set([]),
  presentation: /* @__PURE__ */ new Set([]),
  progressbar: /* @__PURE__ */ new Set(["aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"]),
  radio: /* @__PURE__ */ new Set(["aria-checked", "aria-disabled", "aria-posinset", "aria-setsize"]),
  radiogroup: /* @__PURE__ */ new Set(["aria-activedescendant", "aria-disabled", "aria-errormessage", "aria-invalid", "aria-orientation", "aria-readonly", "aria-required"]),
  region: /* @__PURE__ */ new Set([]),
  row: /* @__PURE__ */ new Set(["aria-activedescendant", "aria-colindex", "aria-disabled", "aria-expanded", "aria-level", "aria-posinset", "aria-rowindex", "aria-selected", "aria-setsize"]),
  rowgroup: /* @__PURE__ */ new Set([]),
  rowheader: /* @__PURE__ */ new Set(["aria-colindex", "aria-colspan", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-haspopup", "aria-invalid", "aria-readonly", "aria-required", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-sort"]),
  scrollbar: /* @__PURE__ */ new Set(["aria-controls", "aria-disabled", "aria-orientation", "aria-valuemax", "aria-valuemin", "aria-valuenow"]),
  search: /* @__PURE__ */ new Set([]),
  searchbox: /* @__PURE__ */ new Set(["aria-activedescendant", "aria-autocomplete", "aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid", "aria-multiline", "aria-placeholder", "aria-readonly", "aria-required"]),
  separator: /* @__PURE__ */ new Set(["aria-disabled", "aria-orientation", "aria-valuemax", "aria-valuemin", "aria-valuenow"]),
  slider: /* @__PURE__ */ new Set(["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid", "aria-orientation", "aria-readonly", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"]),
  spinbutton: /* @__PURE__ */ new Set(["aria-activedescendant", "aria-disabled", "aria-errormessage", "aria-invalid", "aria-readonly", "aria-required", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"]),
  status: /* @__PURE__ */ new Set(["aria-atomic", "aria-live", "aria-relevant"]),
  switch: /* @__PURE__ */ new Set(["aria-checked", "aria-disabled", "aria-errormessage", "aria-invalid", "aria-readonly", "aria-required"]),
  tab: /* @__PURE__ */ new Set(["aria-disabled", "aria-expanded", "aria-haspopup", "aria-posinset", "aria-selected", "aria-setsize"]),
  table: /* @__PURE__ */ new Set(["aria-colcount", "aria-rowcount"]),
  tablist: /* @__PURE__ */ new Set(["aria-activedescendant", "aria-disabled", "aria-multiselectable", "aria-orientation"]),
  tabpanel: /* @__PURE__ */ new Set([]),
  term: /* @__PURE__ */ new Set([]),
  textbox: /* @__PURE__ */ new Set(["aria-activedescendant", "aria-autocomplete", "aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid", "aria-multiline", "aria-placeholder", "aria-readonly", "aria-required"]),
  timer: /* @__PURE__ */ new Set(["aria-atomic", "aria-live", "aria-relevant"]),
  toolbar: /* @__PURE__ */ new Set(["aria-activedescendant", "aria-disabled", "aria-orientation"]),
  tooltip: /* @__PURE__ */ new Set([]),
  tree: /* @__PURE__ */ new Set(["aria-activedescendant", "aria-disabled", "aria-errormessage", "aria-invalid", "aria-multiselectable", "aria-orientation", "aria-required"]),
  treegrid: /* @__PURE__ */ new Set(["aria-activedescendant", "aria-colcount", "aria-disabled", "aria-errormessage", "aria-invalid", "aria-multiselectable", "aria-orientation", "aria-readonly", "aria-required", "aria-rowcount"]),
  treeitem: /* @__PURE__ */ new Set(["aria-checked", "aria-disabled", "aria-expanded", "aria-haspopup", "aria-level", "aria-posinset", "aria-selected", "aria-setsize"])
};
var qn = {
  id: "aria/aria-allowed-attr",
  category: "aria",
  actRuleIds: ["5c01ea"],
  wcag: ["4.1.2"],
  level: "A",
  fixability: "mechanical",
  description: "ARIA attributes must be allowed for the element's role.",
  guidance: "Each ARIA role supports specific attributes. Using unsupported attributes creates confusion for assistive technologies. Check the ARIA specification for which attributes are valid for each role, or remove the attribute if it's not needed.",
  run(e2) {
    const a2 = [], t2 = new Set(e2.querySelectorAll("[role]")), i2 = e2.createTreeWalker(e2.body || e2.documentElement, 1);
    let n2 = i2.currentNode;
    for (;n2; ) {
      if (n2 instanceof Element) {
        for (const o3 of n2.attributes)
          if (o3.name.startsWith("aria-")) {
            t2.add(n2);
            break;
          }
      }
      n2 = i2.nextNode();
    }
    for (const o3 of t2) {
      if (h2(o3))
        continue;
      const r3 = j(o3);
      if (!r3)
        continue;
      const s2 = In[r3];
      if (s2)
        for (const l2 of o3.attributes) {
          if (!l2.name.startsWith("aria-") || ut.has(l2.name) || s2.has(l2.name))
            continue;
          const d2 = s2.size > 0 ? [...s2].join(", ") : "none (only global ARIA attributes)";
          a2.push({
            ruleId: "aria/aria-allowed-attr",
            selector: p(o3),
            html: m2(o3),
            impact: "critical",
            message: `ARIA attribute "${l2.name}" is not allowed on role "${r3}".`,
            context: `Attribute: ${l2.name}="${l2.value}", role: ${r3}, allowed role-specific attributes: ${d2}`,
            fix: { type: "remove-attribute", attribute: l2.name }
          });
        }
    }
    return a2;
  }
};
var En = /* @__PURE__ */ new Set([
  "base",
  "col",
  "colgroup",
  "head",
  "html",
  "keygen",
  "meta",
  "param",
  "script",
  "source",
  "style",
  "template",
  "title",
  "track"
]);
var P3 = {
  a: /* @__PURE__ */ new Set(["button", "checkbox", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "switch", "tab", "treeitem", "link"]),
  "a[href]": /* @__PURE__ */ new Set(["button", "checkbox", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "switch", "tab", "treeitem"]),
  abbr: "any",
  address: "any",
  article: /* @__PURE__ */ new Set(["application", "document", "feed", "main", "none", "presentation", "region"]),
  aside: /* @__PURE__ */ new Set(["doc-dedication", "doc-example", "doc-footnote", "doc-glossary", "doc-pullquote", "doc-tip", "feed", "none", "note", "presentation", "region", "search"]),
  audio: /* @__PURE__ */ new Set(["application"]),
  b: "any",
  bdi: "any",
  bdo: "any",
  blockquote: "any",
  body: "none",
  br: /* @__PURE__ */ new Set(["none", "presentation"]),
  button: /* @__PURE__ */ new Set(["checkbox", "combobox", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "slider", "switch", "tab"]),
  canvas: "any",
  caption: "none",
  cite: "any",
  code: "any",
  data: "any",
  datalist: /* @__PURE__ */ new Set(["listbox"]),
  dd: "none",
  del: "any",
  details: /* @__PURE__ */ new Set(["group"]),
  dfn: "any",
  dialog: /* @__PURE__ */ new Set(["alertdialog"]),
  div: "any",
  dl: /* @__PURE__ */ new Set(["group", "list", "none", "presentation"]),
  dt: /* @__PURE__ */ new Set(["listitem"]),
  em: "any",
  embed: /* @__PURE__ */ new Set(["application", "document", "img", "none", "presentation"]),
  fieldset: /* @__PURE__ */ new Set(["group", "none", "presentation", "radiogroup"]),
  figcaption: /* @__PURE__ */ new Set(["group", "none", "presentation"]),
  figure: /* @__PURE__ */ new Set(["doc-example", "none", "presentation"]),
  footer: /* @__PURE__ */ new Set(["doc-footnote", "group", "none", "presentation"]),
  form: /* @__PURE__ */ new Set(["none", "presentation", "search"]),
  h1: /* @__PURE__ */ new Set(["doc-subtitle", "none", "presentation", "tab"]),
  h2: /* @__PURE__ */ new Set(["doc-subtitle", "none", "presentation", "tab"]),
  h3: /* @__PURE__ */ new Set(["doc-subtitle", "none", "presentation", "tab"]),
  h4: /* @__PURE__ */ new Set(["doc-subtitle", "none", "presentation", "tab"]),
  h5: /* @__PURE__ */ new Set(["doc-subtitle", "none", "presentation", "tab"]),
  h6: /* @__PURE__ */ new Set(["doc-subtitle", "none", "presentation", "tab"]),
  header: /* @__PURE__ */ new Set(["group", "none", "presentation"]),
  hgroup: "any",
  hr: /* @__PURE__ */ new Set(["doc-pagebreak", "none", "presentation"]),
  i: "any",
  iframe: /* @__PURE__ */ new Set(["application", "document", "img", "none", "presentation"]),
  img: "any",
  "img[alt='']": /* @__PURE__ */ new Set(["none", "presentation"]),
  input: "none",
  "input[type=button]": /* @__PURE__ */ new Set(["checkbox", "combobox", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "slider", "spinbutton", "switch", "tab"]),
  "input[type=checkbox]": /* @__PURE__ */ new Set(["button", "menuitemcheckbox", "option", "switch"]),
  "input[type=image]": /* @__PURE__ */ new Set(["link", "menuitem", "menuitemcheckbox", "menuitemradio", "radio", "switch"]),
  "input[type=radio]": /* @__PURE__ */ new Set(["menuitemradio"]),
  "input[type=search]": /* @__PURE__ */ new Set(["combobox", "searchbox"]),
  "input[type=text]": /* @__PURE__ */ new Set(["combobox", "searchbox", "spinbutton"]),
  ins: "any",
  kbd: "any",
  label: "none",
  legend: "none",
  li: /* @__PURE__ */ new Set(["doc-biblioentry", "doc-endnote", "menuitem", "menuitemcheckbox", "menuitemradio", "none", "option", "presentation", "radio", "separator", "tab", "treeitem"]),
  main: "none",
  map: "none",
  mark: "any",
  menu: /* @__PURE__ */ new Set(["directory", "group", "listbox", "menu", "menubar", "none", "presentation", "radiogroup", "tablist", "toolbar", "tree"]),
  meter: "none",
  nav: /* @__PURE__ */ new Set(["doc-index", "doc-pagelist", "doc-toc", "menu", "menubar", "none", "presentation", "tablist"]),
  noscript: "none",
  object: /* @__PURE__ */ new Set(["application", "document", "img"]),
  ol: /* @__PURE__ */ new Set(["directory", "group", "listbox", "menu", "menubar", "none", "presentation", "radiogroup", "tablist", "toolbar", "tree"]),
  optgroup: /* @__PURE__ */ new Set(["group"]),
  option: "none",
  output: /* @__PURE__ */ new Set(["status"]),
  p: "any",
  picture: "none",
  pre: "any",
  progress: "none",
  q: "any",
  rp: "any",
  rt: "any",
  ruby: "any",
  s: "any",
  samp: "any",
  section: /* @__PURE__ */ new Set(["alert", "alertdialog", "application", "banner", "complementary", "contentinfo", "dialog", "doc-abstract", "doc-acknowledgments", "doc-afterword", "doc-appendix", "doc-bibliography", "doc-chapter", "doc-colophon", "doc-conclusion", "doc-credit", "doc-credits", "doc-dedication", "doc-endnotes", "doc-epigraph", "doc-epilogue", "doc-errata", "doc-example", "doc-foreword", "doc-glossary", "doc-index", "doc-introduction", "doc-notice", "doc-pagelist", "doc-part", "doc-preface", "doc-prologue", "doc-pullquote", "doc-qna", "doc-toc", "document", "feed", "group", "log", "main", "marquee", "navigation", "none", "note", "presentation", "region", "search", "status", "tabpanel"]),
  select: /* @__PURE__ */ new Set(["menu"]),
  small: "any",
  span: "any",
  strong: "any",
  sub: "any",
  summary: "none",
  sup: "any",
  svg: /* @__PURE__ */ new Set(["application", "document", "img", "none", "presentation"]),
  table: "any",
  tbody: "any",
  td: "any",
  tfoot: "any",
  th: "any",
  thead: "any",
  time: "any",
  tr: "any",
  u: "any",
  ul: /* @__PURE__ */ new Set(["directory", "group", "listbox", "menu", "menubar", "none", "presentation", "radiogroup", "tablist", "toolbar", "tree"]),
  var: "any",
  video: /* @__PURE__ */ new Set(["application"]),
  wbr: /* @__PURE__ */ new Set(["none", "presentation"])
};
function Ln(e2) {
  var t2;
  const a2 = e2.tagName.toLowerCase();
  if (En.has(a2))
    return "none";
  if (a2 === "a" && e2.hasAttribute("href"))
    return P3["a[href]"];
  if (a2 === "img" && e2.getAttribute("alt") === "")
    return P3["img[alt='']"];
  if (a2 === "input") {
    const n2 = `input[type=${((t2 = e2.getAttribute("type")) == null ? undefined : t2.toLowerCase()) || "text"}]`;
    return n2 in P3 ? P3[n2] : "none";
  }
  return P3[a2] || "any";
}
var Rn = {
  id: "aria/aria-allowed-role",
  category: "aria",
  wcag: ["4.1.2"],
  level: "A",
  fixability: "contextual",
  description: "ARIA role must be appropriate for the element.",
  guidance: "Not all ARIA roles can be applied to all HTML elements. Many elements have implicit roles (e.g., <header> is implicitly banner, <nav> is navigation, <main> is main). Adding an explicit role that matches the implicit role is redundant. Adding a conflicting role breaks semantics. Either remove the role attribute or use a different element.",
  run(e2) {
    var t2;
    const a2 = [];
    for (const i2 of e2.querySelectorAll("[role]")) {
      if (h2(i2))
        continue;
      const n2 = (t2 = i2.getAttribute("role")) == null ? undefined : t2.trim().toLowerCase();
      if (!n2)
        continue;
      const o3 = $e(i2);
      if (o3 && n2 === o3)
        continue;
      const r3 = Ln(i2);
      r3 === "none" ? a2.push({
        ruleId: "aria/aria-allowed-role",
        selector: p(i2),
        html: m2(i2),
        impact: "minor",
        message: `Element <${i2.tagName.toLowerCase()}> should not have an explicit role.`
      }) : r3 !== "any" && !r3.has(n2) && a2.push({
        ruleId: "aria/aria-allowed-role",
        selector: p(i2),
        html: m2(i2),
        impact: "minor",
        message: `Role "${n2}" is not allowed on element <${i2.tagName.toLowerCase()}>.`
      });
    }
    return a2;
  }
};
var Cn = {
  id: "aria/aria-hidden-body",
  selector: 'body[aria-hidden="true"]',
  check: { type: "selector-exists" },
  impact: "critical",
  message: "aria-hidden='true' on body hides all content from assistive technologies.",
  description: "aria-hidden='true' must not be present on the document body.",
  wcag: ["4.1.2"],
  level: "A",
  tags: ["page-level"],
  fixability: "mechanical",
  guidance: "Setting aria-hidden='true' on the body element hides all page content from assistive technologies, making the page completely inaccessible to screen reader users. Remove aria-hidden from the body element. If you need to hide content temporarily (e.g., behind a modal), use aria-hidden on specific sections instead.",
  skipAriaHidden: false
};
var Tn = N3(Cn);
function Nn(e2) {
  let a2 = e2;
  const t2 = e2.ownerDocument, i2 = t2.defaultView;
  for (;a2 && a2 !== t2.body; ) {
    if (a2.style.display === "none" || a2.style.visibility === "hidden")
      return false;
    if (i2) {
      const n2 = i2.getComputedStyle(a2);
      if (n2.display === "none" || n2.visibility === "hidden")
        return false;
    }
    a2 = a2.parentElement;
  }
  return true;
}
function Mn(e2) {
  const a2 = e2.ownerDocument.defaultView;
  if (!a2)
    return false;
  const t2 = a2.getComputedStyle(e2), i2 = t2.position;
  if (i2 !== "absolute" && i2 !== "fixed")
    return false;
  const n2 = parseFloat(t2.top), o3 = parseFloat(t2.left);
  if (!(!isNaN(n2) && n2 < -500 || !isNaN(o3) && o3 < -500))
    return false;
  const s2 = e2.id;
  if (!s2)
    return false;
  const l2 = s2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), d2 = new RegExp(`getElementById\\s*\\(\\s*['"]${l2}['"]\\s*\\)\\s*\\.\\s*addEventListener\\s*\\(\\s*['"]focus['"]`);
  for (const c3 of e2.ownerDocument.querySelectorAll("script")) {
    const u3 = c3.textContent || "";
    if (d2.test(u3) && /\.focus\s*\(/.test(u3))
      return true;
  }
  return false;
}
var $n = {
  id: "aria/aria-hidden-focus",
  category: "aria",
  actRuleIds: ["6cfa84"],
  wcag: ["4.1.2"],
  level: "A",
  fixability: "contextual",
  description: "Elements with aria-hidden='true' must not contain focusable elements.",
  guidance: "When aria-hidden='true' hides an element from assistive technologies but the element contains focusable children, keyboard users can focus those children but screen reader users won't know they exist. Either remove focusable elements from the hidden region, add tabindex='-1' to them, or remove aria-hidden.",
  run(e2) {
    const a2 = [];
    for (const t2 of e2.querySelectorAll('[aria-hidden="true"]')) {
      if (t2 === e2.body)
        continue;
      const i2 = [...t2.querySelectorAll(W2)];
      t2.matches(W2) && i2.push(t2);
      for (const n2 of i2)
        if (n2 instanceof HTMLElement) {
          const o3 = n2.getAttribute("tabindex");
          if (o3 === "-1" || n2.disabled || n2 instanceof HTMLInputElement && n2.type === "hidden" || !Nn(n2))
            continue;
          const r3 = n2.getAttribute("onfocus") || "";
          if (/\.focus\s*\(/.test(r3) || Mn(n2))
            continue;
          const s2 = n2.tagName.toLowerCase();
          let l2;
          o3 !== null ? l2 = `has tabindex="${o3}"` : s2 === "a" && n2.hasAttribute("href") ? l2 = "is a link with href" : s2 === "button" ? l2 = "is a <button>" : s2 === "input" ? l2 = `is an <input type="${n2.type}">` : s2 === "select" ? l2 = "is a <select>" : s2 === "textarea" ? l2 = "is a <textarea>" : s2 === "iframe" ? l2 = "is an <iframe>" : l2 = `is a natively focusable <${s2}>`;
          const d2 = n2 === t2 ? n2 : n2.closest('[aria-hidden="true"]');
          a2.push({
            ruleId: "aria/aria-hidden-focus",
            selector: p(n2),
            html: m2(n2),
            impact: "serious",
            message: "Focusable element is inside an aria-hidden region.",
            context: `Focusable because: ${l2}. aria-hidden ancestor: ${d2 ? m2(d2) : "unknown"}`,
            fix: { type: "suggest", suggestion: 'Add tabindex="-1" to remove from tab order, or move the element outside the aria-hidden region' }
          });
        }
    }
    return a2;
  }
};
var Hn = {
  id: "aria/aria-prohibited-attr",
  category: "aria",
  actRuleIds: ["kb1m8s"],
  wcag: ["4.1.2"],
  level: "A",
  fixability: "mechanical",
  description: "ARIA attributes must not be prohibited for the element's role.",
  guidance: "Some ARIA roles prohibit certain attributes. For example, roles like 'none', 'presentation', 'generic', and text-level roles (code, emphasis, strong) prohibit aria-label and aria-labelledby because naming is not supported for these roles. Remove the prohibited attributes or change the role.",
  run(e2) {
    return le2(e2).prohibitedAttr;
  }
};
var Pn = [
  "a[href]",
  "button:not([disabled])",
  'input:not([disabled]):not([type="hidden"])',
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(", ");
var Dn = [
  "aria-atomic",
  "aria-busy",
  "aria-controls",
  "aria-describedby",
  "aria-details",
  "aria-dropeffect",
  "aria-flowto",
  "aria-grabbed",
  "aria-haspopup",
  "aria-keyshortcuts",
  "aria-live",
  "aria-owns",
  "aria-relevant"
];
function Me(e2) {
  const a2 = [];
  e2.matches(Pn) && a2.push("element is focusable");
  for (const t2 of Dn)
    if (e2.hasAttribute(t2)) {
      a2.push(`has ${t2}`);
      break;
    }
  return (e2.hasAttribute("aria-label") || e2.hasAttribute("aria-labelledby")) && a2.push("has accessible name"), a2;
}
var Fn = {
  id: "aria/presentation-role-conflict",
  category: "aria",
  actRuleIds: ["46ca7f"],
  wcag: ["4.1.2"],
  level: "A",
  fixability: "contextual",
  description: "Elements with role='presentation' or role='none' must not be focusable or have global ARIA attributes.",
  guidance: "When an element has role='presentation' or role='none', it's marked as decorative and removed from the accessibility tree. However, if the element is focusable or has certain ARIA attributes, the presentation role is ignored and the element remains accessible. This creates confusion. Either remove the presentation role, or remove the focusability/ARIA attributes.",
  run(e2) {
    const a2 = [];
    for (const t2 of e2.querySelectorAll('[role="presentation"], [role="none"]')) {
      if (h2(t2))
        continue;
      const i2 = Me(t2);
      i2.length > 0 && a2.push({
        ruleId: "aria/presentation-role-conflict",
        selector: p(t2),
        html: m2(t2),
        impact: "serious",
        message: `Presentation role conflicts with: ${i2.join(", ")}. The role will be ignored.`,
        fix: { type: "suggest", suggestion: "Remove the presentation/none role, or remove the conflicting focusability and ARIA attributes" }
      });
    }
    for (const t2 of e2.querySelectorAll('img[alt=""]')) {
      if (h2(t2) || t2.hasAttribute("role"))
        continue;
      const i2 = Me(t2);
      i2.length > 0 && a2.push({
        ruleId: "aria/presentation-role-conflict",
        selector: p(t2),
        html: m2(t2),
        impact: "serious",
        message: `Element with implicit presentation role (alt="") conflicts with: ${i2.join(", ")}. The decorative role will be ignored.`,
        fix: { type: "suggest", suggestion: "Remove the conflicting focusability and ARIA attributes, or add descriptive alt text if the image is not decorative" }
      });
    }
    return a2;
  }
};
var zn = /* @__PURE__ */ new Set([
  "button",
  "checkbox",
  "img",
  "link",
  "math",
  "menuitemcheckbox",
  "menuitemradio",
  "meter",
  "option",
  "progressbar",
  "radio",
  "scrollbar",
  "separator",
  "slider",
  "spinbutton",
  "switch",
  "tab"
]);
var Wn = {
  id: "aria/presentational-children-focusable",
  category: "aria",
  actRuleIds: ["307n5z"],
  wcag: ["4.1.2"],
  level: "A",
  fixability: "contextual",
  description: "Elements with a role that makes children presentational must not contain focusable content.",
  guidance: "Roles like button, checkbox, img, tab, and others make their children presentational — hidden from assistive technologies. If those children are focusable, keyboard users can reach elements that screen reader users cannot perceive. Move focusable content outside the parent or remove the focusability.",
  run(e2) {
    const a2 = [];
    for (const t2 of e2.querySelectorAll("*")) {
      if (h2(t2))
        continue;
      const i2 = j(t2);
      if (!(!i2 || !zn.has(i2))) {
        for (const n2 of t2.querySelectorAll(W2))
          if (n2 !== t2 && !n2.disabled && n2.getAttribute("tabindex") !== "-1") {
            a2.push({
              ruleId: "aria/presentational-children-focusable",
              selector: p(n2),
              html: m2(n2),
              impact: "serious",
              message: `Focusable element inside a "${i2}" role whose children are presentational.`
            });
            break;
          }
      }
    }
    return a2;
  }
};
var Ze = [
  Wt,
  Ut,
  Ot,
  Vt,
  _t,
  Gt,
  Yt,
  Xt,
  Jt,
  Kt,
  na,
  la,
  ca,
  da,
  ma,
  ha,
  va,
  ya,
  wa,
  xa,
  ka,
  Sa,
  Ia,
  qa,
  Ra,
  Ca,
  Ta,
  Pa,
  Ja,
  Ka,
  Za,
  ti,
  ii,
  di,
  ui,
  mi,
  pi,
  bi,
  hi,
  fi,
  yi,
  wi,
  xi,
  Ai,
  ki,
  Si,
  Ii,
  Ei,
  Li,
  Ri,
  Ci,
  Ti,
  Ni,
  Mi,
  $i,
  Hi,
  Pi,
  Di,
  Fi,
  zi,
  Oi,
  Vi,
  Bi,
  _i,
  Gi,
  en,
  tn,
  an,
  nn,
  on,
  rn,
  sn,
  ln,
  cn,
  dn,
  un,
  mn,
  pn,
  hn,
  gn,
  vn,
  yn,
  wn,
  xn,
  An,
  Sn,
  qn,
  Rn,
  Tn,
  $n,
  Hn,
  Fn,
  Wn
];
var me = [];
var et = /* @__PURE__ */ new Set;
var tt = false;
var at = false;
var T3;
var z2;
function Bn(e2) {
  e2.additionalRules && (me = e2.additionalRules), e2.disabledRules && (et = new Set(e2.disabledRules)), "includeAAA" in e2 && (tt = !!e2.includeAAA), "componentMode" in e2 && (at = !!e2.componentMode), "locale" in e2 && (T3 = e2.locale || undefined), z2 = undefined;
}
function pe() {
  if (z2)
    return z2;
  const a2 = Ze.filter((t2) => {
    var i2;
    return !(et.has(t2.id) || t2.level === "AAA" && !tt || at && ((i2 = t2.tags) != null && i2.includes("page-level")));
  }).concat(me);
  return T3 ? (z2 = Ht(a2, T3), z2) : a2;
}
function it() {
  mt(), rt(), st(), kt(), At(), pt();
}
function Gn(e2) {
  var n2;
  it();
  const a2 = pe(), t2 = [], i2 = [];
  for (const o3 of a2)
    try {
      t2.push(...o3.run(e2));
    } catch (r3) {
      i2.push({ ruleId: o3.id, error: r3 instanceof Error ? r3.message : String(r3) });
    }
  return {
    url: ((n2 = e2.location) == null ? undefined : n2.href) ?? "",
    timestamp: Date.now(),
    violations: T3 ? ze(t2, T3) : t2,
    ruleCount: a2.length,
    skippedRules: i2
  };
}
var jn = new Map(Ze.map((e2) => [e2.id, e2]));

// src/audit.ts
function isHTMLFragment(html) {
  const prefix = html.slice(0, 1000);
  return !(/<!doctype\s/i.test(prefix) || /<html[\s>]/i.test(prefix));
}
var globalsRegistered = false;
function ensureGlobals(window) {
  if (globalsRegistered)
    return;
  for (const key of Object.getOwnPropertyNames(window)) {
    if (key in globalThis)
      continue;
    const desc = Object.getOwnPropertyDescriptor(window, key);
    if (!desc || typeof desc.value !== "function")
      continue;
    try {
      globalThis[key] = desc.value;
    } catch {}
  }
  globalsRegistered = true;
}
function audit(html, options = {}) {
  const config = {};
  if (options.includeAAA)
    config.includeAAA = true;
  if (options.componentMode)
    config.componentMode = true;
  if (options.disabledRules?.length)
    config.disabledRules = options.disabledRules;
  Bn(config);
  const virtualConsole = new VirtualConsole;
  const dom = new JSDOM2(html, { pretendToBeVisual: true, virtualConsole });
  ensureGlobals(dom.window);
  const result = Gn(dom.window.document);
  result.violations = result.violations.map(({ element, ...rest }) => rest);
  dom.window.close();
  return result;
}

// src/format.ts
var IMPACT_COLORS = {
  critical: "\x1B[31m",
  serious: "\x1B[33m",
  moderate: "\x1B[36m",
  minor: "\x1B[90m"
};
var RESET = "\x1B[0m";
var BOLD = "\x1B[1m";
var DIM = "\x1B[2m";
function formatViolation(v2, i2) {
  const color = IMPACT_COLORS[v2.impact] ?? "";
  const lines = [
    `${BOLD}${color}${v2.impact}${RESET} ${DIM}${v2.ruleId}${RESET}`,
    `  ${v2.message}`
  ];
  if (v2.selector)
    lines.push(`  ${DIM}${v2.selector}${RESET}`);
  if (v2.html)
    lines.push(`  ${DIM}${v2.html}${RESET}`);
  return lines.join(`
`);
}
function formatText(result) {
  const { violations } = result;
  if (violations.length === 0) {
    return "\x1B[32mNo accessibility violations found.\x1B[0m";
  }
  const header = `${BOLD}${violations.length} violation${violations.length === 1 ? "" : "s"} found${RESET}
`;
  const body = violations.map(formatViolation).join(`

`);
  return header + `
` + body;
}
function formatJSON(result) {
  return JSON.stringify(result, null, 2);
}
function format(result, fmt) {
  switch (fmt) {
    case "json":
      return formatJSON(result);
    case "text":
    default:
      return formatText(result);
  }
}

// src/cli.ts
var main = defineCommand({
  meta: {
    name: "accesslint",
    version: "0.1.0",
    description: "Audit HTML for accessibility violations"
  },
  args: {
    source: {
      type: "positional",
      description: "HTML file path or URL to audit (or pipe via stdin)",
      required: false
    },
    format: {
      type: "string",
      alias: "f",
      description: "Output format: text, json",
      default: "text"
    },
    "include-aaa": {
      type: "boolean",
      description: "Include AAA-level rules",
      default: false
    },
    "component-mode": {
      type: "boolean",
      description: "Exclude page-level rules",
      default: false
    },
    disable: {
      type: "string",
      alias: "d",
      description: "Comma-separated rule IDs to disable"
    }
  },
  async run({ args }) {
    try {
      const html = await resolveInput(args.source);
      const disabledRules = args.disable ? args.disable.split(",").map((s2) => s2.trim()) : undefined;
      const componentMode = args["component-mode"] || isHTMLFragment(html);
      const result = audit(html, {
        includeAAA: args["include-aaa"],
        componentMode,
        disabledRules
      });
      console.log(format(result, args.format));
      process.exitCode = result.violations.length > 0 ? 1 : 0;
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`Error: ${message}`);
      process.exitCode = 2;
    }
  }
});
runMain(main);
