#!/usr/bin/env node
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __require = (id) => {
  return import.meta.require(id);
};

// node_modules/color-name/index.js
var require_color_name = __commonJS((exports, module) => {
  module.exports = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  };
});

// node_modules/color-convert/conversions.js
var require_conversions = __commonJS((exports, module) => {
  var comparativeDistance = function(x, y) {
    return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
  };
  var cssKeywords = require_color_name();
  var reverseKeywords = {};
  for (const key of Object.keys(cssKeywords)) {
    reverseKeywords[cssKeywords[key]] = key;
  }
  var convert = {
    rgb: { channels: 3, labels: "rgb" },
    hsl: { channels: 3, labels: "hsl" },
    hsv: { channels: 3, labels: "hsv" },
    hwb: { channels: 3, labels: "hwb" },
    cmyk: { channels: 4, labels: "cmyk" },
    xyz: { channels: 3, labels: "xyz" },
    lab: { channels: 3, labels: "lab" },
    lch: { channels: 3, labels: "lch" },
    hex: { channels: 1, labels: ["hex"] },
    keyword: { channels: 1, labels: ["keyword"] },
    ansi16: { channels: 1, labels: ["ansi16"] },
    ansi256: { channels: 1, labels: ["ansi256"] },
    hcg: { channels: 3, labels: ["h", "c", "g"] },
    apple: { channels: 3, labels: ["r16", "g16", "b16"] },
    gray: { channels: 1, labels: ["gray"] }
  };
  module.exports = convert;
  for (const model of Object.keys(convert)) {
    if (!("channels" in convert[model])) {
      throw new Error("missing channels property: " + model);
    }
    if (!("labels" in convert[model])) {
      throw new Error("missing channel labels property: " + model);
    }
    if (convert[model].labels.length !== convert[model].channels) {
      throw new Error("channel and label counts mismatch: " + model);
    }
    const { channels, labels } = convert[model];
    delete convert[model].channels;
    delete convert[model].labels;
    Object.defineProperty(convert[model], "channels", { value: channels });
    Object.defineProperty(convert[model], "labels", { value: labels });
  }
  convert.rgb.hsl = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const delta = max - min;
    let h;
    let s;
    if (max === min) {
      h = 0;
    } else if (r === max) {
      h = (g - b) / delta;
    } else if (g === max) {
      h = 2 + (b - r) / delta;
    } else if (b === max) {
      h = 4 + (r - g) / delta;
    }
    h = Math.min(h * 60, 360);
    if (h < 0) {
      h += 360;
    }
    const l = (min + max) / 2;
    if (max === min) {
      s = 0;
    } else if (l <= 0.5) {
      s = delta / (max + min);
    } else {
      s = delta / (2 - max - min);
    }
    return [h, s * 100, l * 100];
  };
  convert.rgb.hsv = function(rgb) {
    let rdif;
    let gdif;
    let bdif;
    let h;
    let s;
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const v = Math.max(r, g, b);
    const diff = v - Math.min(r, g, b);
    const diffc = function(c) {
      return (v - c) / 6 / diff + 1 / 2;
    };
    if (diff === 0) {
      h = 0;
      s = 0;
    } else {
      s = diff / v;
      rdif = diffc(r);
      gdif = diffc(g);
      bdif = diffc(b);
      if (r === v) {
        h = bdif - gdif;
      } else if (g === v) {
        h = 1 / 3 + rdif - bdif;
      } else if (b === v) {
        h = 2 / 3 + gdif - rdif;
      }
      if (h < 0) {
        h += 1;
      } else if (h > 1) {
        h -= 1;
      }
    }
    return [
      h * 360,
      s * 100,
      v * 100
    ];
  };
  convert.rgb.hwb = function(rgb) {
    const r = rgb[0];
    const g = rgb[1];
    let b = rgb[2];
    const h = convert.rgb.hsl(rgb)[0];
    const w = 1 / 255 * Math.min(r, Math.min(g, b));
    b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
    return [h, w * 100, b * 100];
  };
  convert.rgb.cmyk = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const k = Math.min(1 - r, 1 - g, 1 - b);
    const c = (1 - r - k) / (1 - k) || 0;
    const m = (1 - g - k) / (1 - k) || 0;
    const y = (1 - b - k) / (1 - k) || 0;
    return [c * 100, m * 100, y * 100, k * 100];
  };
  convert.rgb.keyword = function(rgb) {
    const reversed = reverseKeywords[rgb];
    if (reversed) {
      return reversed;
    }
    let currentClosestDistance = Infinity;
    let currentClosestKeyword;
    for (const keyword of Object.keys(cssKeywords)) {
      const value = cssKeywords[keyword];
      const distance = comparativeDistance(rgb, value);
      if (distance < currentClosestDistance) {
        currentClosestDistance = distance;
        currentClosestKeyword = keyword;
      }
    }
    return currentClosestKeyword;
  };
  convert.keyword.rgb = function(keyword) {
    return cssKeywords[keyword];
  };
  convert.rgb.xyz = function(rgb) {
    let r = rgb[0] / 255;
    let g = rgb[1] / 255;
    let b = rgb[2] / 255;
    r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
    g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
    b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
    const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
    const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
    return [x * 100, y * 100, z * 100];
  };
  convert.rgb.lab = function(rgb) {
    const xyz = convert.rgb.xyz(rgb);
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [l, a, b];
  };
  convert.hsl.rgb = function(hsl) {
    const h = hsl[0] / 360;
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    let t2;
    let t3;
    let val;
    if (s === 0) {
      val = l * 255;
      return [val, val, val];
    }
    if (l < 0.5) {
      t2 = l * (1 + s);
    } else {
      t2 = l + s - l * s;
    }
    const t1 = 2 * l - t2;
    const rgb = [0, 0, 0];
    for (let i = 0;i < 3; i++) {
      t3 = h + 1 / 3 * -(i - 1);
      if (t3 < 0) {
        t3++;
      }
      if (t3 > 1) {
        t3--;
      }
      if (6 * t3 < 1) {
        val = t1 + (t2 - t1) * 6 * t3;
      } else if (2 * t3 < 1) {
        val = t2;
      } else if (3 * t3 < 2) {
        val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
      } else {
        val = t1;
      }
      rgb[i] = val * 255;
    }
    return rgb;
  };
  convert.hsl.hsv = function(hsl) {
    const h = hsl[0];
    let s = hsl[1] / 100;
    let l = hsl[2] / 100;
    let smin = s;
    const lmin = Math.max(l, 0.01);
    l *= 2;
    s *= l <= 1 ? l : 2 - l;
    smin *= lmin <= 1 ? lmin : 2 - lmin;
    const v = (l + s) / 2;
    const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
    return [h, sv * 100, v * 100];
  };
  convert.hsv.rgb = function(hsv) {
    const h = hsv[0] / 60;
    const s = hsv[1] / 100;
    let v = hsv[2] / 100;
    const hi = Math.floor(h) % 6;
    const f = h - Math.floor(h);
    const p = 255 * v * (1 - s);
    const q = 255 * v * (1 - s * f);
    const t = 255 * v * (1 - s * (1 - f));
    v *= 255;
    switch (hi) {
      case 0:
        return [v, t, p];
      case 1:
        return [q, v, p];
      case 2:
        return [p, v, t];
      case 3:
        return [p, q, v];
      case 4:
        return [t, p, v];
      case 5:
        return [v, p, q];
    }
  };
  convert.hsv.hsl = function(hsv) {
    const h = hsv[0];
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const vmin = Math.max(v, 0.01);
    let sl;
    let l;
    l = (2 - s) * v;
    const lmin = (2 - s) * vmin;
    sl = s * vmin;
    sl /= lmin <= 1 ? lmin : 2 - lmin;
    sl = sl || 0;
    l /= 2;
    return [h, sl * 100, l * 100];
  };
  convert.hwb.rgb = function(hwb) {
    const h = hwb[0] / 360;
    let wh = hwb[1] / 100;
    let bl = hwb[2] / 100;
    const ratio = wh + bl;
    let f;
    if (ratio > 1) {
      wh /= ratio;
      bl /= ratio;
    }
    const i = Math.floor(6 * h);
    const v = 1 - bl;
    f = 6 * h - i;
    if ((i & 1) !== 0) {
      f = 1 - f;
    }
    const n = wh + f * (v - wh);
    let r;
    let g;
    let b;
    switch (i) {
      default:
      case 6:
      case 0:
        r = v;
        g = n;
        b = wh;
        break;
      case 1:
        r = n;
        g = v;
        b = wh;
        break;
      case 2:
        r = wh;
        g = v;
        b = n;
        break;
      case 3:
        r = wh;
        g = n;
        b = v;
        break;
      case 4:
        r = n;
        g = wh;
        b = v;
        break;
      case 5:
        r = v;
        g = wh;
        b = n;
        break;
    }
    return [r * 255, g * 255, b * 255];
  };
  convert.cmyk.rgb = function(cmyk) {
    const c = cmyk[0] / 100;
    const m = cmyk[1] / 100;
    const y = cmyk[2] / 100;
    const k = cmyk[3] / 100;
    const r = 1 - Math.min(1, c * (1 - k) + k);
    const g = 1 - Math.min(1, m * (1 - k) + k);
    const b = 1 - Math.min(1, y * (1 - k) + k);
    return [r * 255, g * 255, b * 255];
  };
  convert.xyz.rgb = function(xyz) {
    const x = xyz[0] / 100;
    const y = xyz[1] / 100;
    const z = xyz[2] / 100;
    let r;
    let g;
    let b;
    r = x * 3.2406 + y * -1.5372 + z * -0.4986;
    g = x * -0.9689 + y * 1.8758 + z * 0.0415;
    b = x * 0.0557 + y * -0.204 + z * 1.057;
    r = r > 0.0031308 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
    g = g > 0.0031308 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
    b = b > 0.0031308 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
    r = Math.min(Math.max(0, r), 1);
    g = Math.min(Math.max(0, g), 1);
    b = Math.min(Math.max(0, b), 1);
    return [r * 255, g * 255, b * 255];
  };
  convert.xyz.lab = function(xyz) {
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [l, a, b];
  };
  convert.lab.xyz = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let x;
    let y;
    let z;
    y = (l + 16) / 116;
    x = a / 500 + y;
    z = y - b / 200;
    const y2 = y ** 3;
    const x2 = x ** 3;
    const z2 = z ** 3;
    y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
    x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
    z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
    x *= 95.047;
    y *= 100;
    z *= 108.883;
    return [x, y, z];
  };
  convert.lab.lch = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let h;
    const hr = Math.atan2(b, a);
    h = hr * 360 / 2 / Math.PI;
    if (h < 0) {
      h += 360;
    }
    const c = Math.sqrt(a * a + b * b);
    return [l, c, h];
  };
  convert.lch.lab = function(lch) {
    const l = lch[0];
    const c = lch[1];
    const h = lch[2];
    const hr = h / 360 * 2 * Math.PI;
    const a = c * Math.cos(hr);
    const b = c * Math.sin(hr);
    return [l, a, b];
  };
  convert.rgb.ansi16 = function(args, saturation = null) {
    const [r, g, b] = args;
    let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
    value = Math.round(value / 50);
    if (value === 0) {
      return 30;
    }
    let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
    if (value === 2) {
      ansi += 60;
    }
    return ansi;
  };
  convert.hsv.ansi16 = function(args) {
    return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
  };
  convert.rgb.ansi256 = function(args) {
    const r = args[0];
    const g = args[1];
    const b = args[2];
    if (r === g && g === b) {
      if (r < 8) {
        return 16;
      }
      if (r > 248) {
        return 231;
      }
      return Math.round((r - 8) / 247 * 24) + 232;
    }
    const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
    return ansi;
  };
  convert.ansi16.rgb = function(args) {
    let color = args % 10;
    if (color === 0 || color === 7) {
      if (args > 50) {
        color += 3.5;
      }
      color = color / 10.5 * 255;
      return [color, color, color];
    }
    const mult = (~~(args > 50) + 1) * 0.5;
    const r = (color & 1) * mult * 255;
    const g = (color >> 1 & 1) * mult * 255;
    const b = (color >> 2 & 1) * mult * 255;
    return [r, g, b];
  };
  convert.ansi256.rgb = function(args) {
    if (args >= 232) {
      const c = (args - 232) * 10 + 8;
      return [c, c, c];
    }
    args -= 16;
    let rem;
    const r = Math.floor(args / 36) / 5 * 255;
    const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
    const b = rem % 6 / 5 * 255;
    return [r, g, b];
  };
  convert.rgb.hex = function(args) {
    const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
    const string = integer.toString(16).toUpperCase();
    return "000000".substring(string.length) + string;
  };
  convert.hex.rgb = function(args) {
    const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!match) {
      return [0, 0, 0];
    }
    let colorString = match[0];
    if (match[0].length === 3) {
      colorString = colorString.split("").map((char) => {
        return char + char;
      }).join("");
    }
    const integer = parseInt(colorString, 16);
    const r = integer >> 16 & 255;
    const g = integer >> 8 & 255;
    const b = integer & 255;
    return [r, g, b];
  };
  convert.rgb.hcg = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const max = Math.max(Math.max(r, g), b);
    const min = Math.min(Math.min(r, g), b);
    const chroma = max - min;
    let grayscale;
    let hue;
    if (chroma < 1) {
      grayscale = min / (1 - chroma);
    } else {
      grayscale = 0;
    }
    if (chroma <= 0) {
      hue = 0;
    } else if (max === r) {
      hue = (g - b) / chroma % 6;
    } else if (max === g) {
      hue = 2 + (b - r) / chroma;
    } else {
      hue = 4 + (r - g) / chroma;
    }
    hue /= 6;
    hue %= 1;
    return [hue * 360, chroma * 100, grayscale * 100];
  };
  convert.hsl.hcg = function(hsl) {
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
    let f = 0;
    if (c < 1) {
      f = (l - 0.5 * c) / (1 - c);
    }
    return [hsl[0], c * 100, f * 100];
  };
  convert.hsv.hcg = function(hsv) {
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const c = s * v;
    let f = 0;
    if (c < 1) {
      f = (v - c) / (1 - c);
    }
    return [hsv[0], c * 100, f * 100];
  };
  convert.hcg.rgb = function(hcg) {
    const h = hcg[0] / 360;
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    if (c === 0) {
      return [g * 255, g * 255, g * 255];
    }
    const pure = [0, 0, 0];
    const hi = h % 1 * 6;
    const v = hi % 1;
    const w = 1 - v;
    let mg = 0;
    switch (Math.floor(hi)) {
      case 0:
        pure[0] = 1;
        pure[1] = v;
        pure[2] = 0;
        break;
      case 1:
        pure[0] = w;
        pure[1] = 1;
        pure[2] = 0;
        break;
      case 2:
        pure[0] = 0;
        pure[1] = 1;
        pure[2] = v;
        break;
      case 3:
        pure[0] = 0;
        pure[1] = w;
        pure[2] = 1;
        break;
      case 4:
        pure[0] = v;
        pure[1] = 0;
        pure[2] = 1;
        break;
      default:
        pure[0] = 1;
        pure[1] = 0;
        pure[2] = w;
    }
    mg = (1 - c) * g;
    return [
      (c * pure[0] + mg) * 255,
      (c * pure[1] + mg) * 255,
      (c * pure[2] + mg) * 255
    ];
  };
  convert.hcg.hsv = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1 - c);
    let f = 0;
    if (v > 0) {
      f = c / v;
    }
    return [hcg[0], f * 100, v * 100];
  };
  convert.hcg.hsl = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const l = g * (1 - c) + 0.5 * c;
    let s = 0;
    if (l > 0 && l < 0.5) {
      s = c / (2 * l);
    } else if (l >= 0.5 && l < 1) {
      s = c / (2 * (1 - l));
    }
    return [hcg[0], s * 100, l * 100];
  };
  convert.hcg.hwb = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1 - c);
    return [hcg[0], (v - c) * 100, (1 - v) * 100];
  };
  convert.hwb.hcg = function(hwb) {
    const w = hwb[1] / 100;
    const b = hwb[2] / 100;
    const v = 1 - b;
    const c = v - w;
    let g = 0;
    if (c < 1) {
      g = (v - c) / (1 - c);
    }
    return [hwb[0], c * 100, g * 100];
  };
  convert.apple.rgb = function(apple) {
    return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
  };
  convert.rgb.apple = function(rgb) {
    return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
  };
  convert.gray.rgb = function(args) {
    return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
  };
  convert.gray.hsl = function(args) {
    return [0, 0, args[0]];
  };
  convert.gray.hsv = convert.gray.hsl;
  convert.gray.hwb = function(gray) {
    return [0, 100, gray[0]];
  };
  convert.gray.cmyk = function(gray) {
    return [0, 0, 0, gray[0]];
  };
  convert.gray.lab = function(gray) {
    return [gray[0], 0, 0];
  };
  convert.gray.hex = function(gray) {
    const val = Math.round(gray[0] / 100 * 255) & 255;
    const integer = (val << 16) + (val << 8) + val;
    const string = integer.toString(16).toUpperCase();
    return "000000".substring(string.length) + string;
  };
  convert.rgb.gray = function(rgb) {
    const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
    return [val / 255 * 100];
  };
});

// node_modules/color-convert/route.js
var require_route = __commonJS((exports, module) => {
  var buildGraph = function() {
    const graph = {};
    const models = Object.keys(conversions);
    for (let len = models.length, i = 0;i < len; i++) {
      graph[models[i]] = {
        distance: -1,
        parent: null
      };
    }
    return graph;
  };
  var deriveBFS = function(fromModel) {
    const graph = buildGraph();
    const queue = [fromModel];
    graph[fromModel].distance = 0;
    while (queue.length) {
      const current = queue.pop();
      const adjacents = Object.keys(conversions[current]);
      for (let len = adjacents.length, i = 0;i < len; i++) {
        const adjacent = adjacents[i];
        const node = graph[adjacent];
        if (node.distance === -1) {
          node.distance = graph[current].distance + 1;
          node.parent = current;
          queue.unshift(adjacent);
        }
      }
    }
    return graph;
  };
  var link = function(from, to) {
    return function(args) {
      return to(from(args));
    };
  };
  var wrapConversion = function(toModel, graph) {
    const path = [graph[toModel].parent, toModel];
    let fn = conversions[graph[toModel].parent][toModel];
    let cur = graph[toModel].parent;
    while (graph[cur].parent) {
      path.unshift(graph[cur].parent);
      fn = link(conversions[graph[cur].parent][cur], fn);
      cur = graph[cur].parent;
    }
    fn.conversion = path;
    return fn;
  };
  var conversions = require_conversions();
  module.exports = function(fromModel) {
    const graph = deriveBFS(fromModel);
    const conversion = {};
    const models = Object.keys(graph);
    for (let len = models.length, i = 0;i < len; i++) {
      const toModel = models[i];
      const node = graph[toModel];
      if (node.parent === null) {
        continue;
      }
      conversion[toModel] = wrapConversion(toModel, graph);
    }
    return conversion;
  };
});

// node_modules/color-convert/index.js
var require_color_convert = __commonJS((exports, module) => {
  var wrapRaw = function(fn) {
    const wrappedFn = function(...args) {
      const arg0 = args[0];
      if (arg0 === undefined || arg0 === null) {
        return arg0;
      }
      if (arg0.length > 1) {
        args = arg0;
      }
      return fn(args);
    };
    if ("conversion" in fn) {
      wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
  };
  var wrapRounded = function(fn) {
    const wrappedFn = function(...args) {
      const arg0 = args[0];
      if (arg0 === undefined || arg0 === null) {
        return arg0;
      }
      if (arg0.length > 1) {
        args = arg0;
      }
      const result = fn(args);
      if (typeof result === "object") {
        for (let len = result.length, i = 0;i < len; i++) {
          result[i] = Math.round(result[i]);
        }
      }
      return result;
    };
    if ("conversion" in fn) {
      wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
  };
  var conversions = require_conversions();
  var route = require_route();
  var convert = {};
  var models = Object.keys(conversions);
  models.forEach((fromModel) => {
    convert[fromModel] = {};
    Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
    Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
    const routes = route(fromModel);
    const routeModels = Object.keys(routes);
    routeModels.forEach((toModel) => {
      const fn = routes[toModel];
      convert[fromModel][toModel] = wrapRounded(fn);
      convert[fromModel][toModel].raw = wrapRaw(fn);
    });
  });
  module.exports = convert;
});

// node_modules/ansi-styles/index.js
var require_ansi_styles = __commonJS((exports, module) => {
  var assembleStyles = function() {
    const codes = new Map;
    const styles = {
      modifier: {
        reset: [0, 0],
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        blackBright: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
      }
    };
    styles.color.gray = styles.color.blackBright;
    styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
    styles.color.grey = styles.color.blackBright;
    styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
    for (const [groupName, group] of Object.entries(styles)) {
      for (const [styleName, style] of Object.entries(group)) {
        styles[styleName] = {
          open: `\x1B[${style[0]}m`,
          close: `\x1B[${style[1]}m`
        };
        group[styleName] = styles[styleName];
        codes.set(style[0], style[1]);
      }
      Object.defineProperty(styles, groupName, {
        value: group,
        enumerable: false
      });
    }
    Object.defineProperty(styles, "codes", {
      value: codes,
      enumerable: false
    });
    styles.color.close = "\x1B[39m";
    styles.bgColor.close = "\x1B[49m";
    setLazyProperty(styles.color, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, false));
    setLazyProperty(styles.color, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, false));
    setLazyProperty(styles.color, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, false));
    setLazyProperty(styles.bgColor, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, true));
    setLazyProperty(styles.bgColor, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, true));
    setLazyProperty(styles.bgColor, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, true));
    return styles;
  };
  var wrapAnsi16 = (fn, offset) => (...args) => {
    const code = fn(...args);
    return `\x1B[${code + offset}m`;
  };
  var wrapAnsi256 = (fn, offset) => (...args) => {
    const code = fn(...args);
    return `\x1B[${38 + offset};5;${code}m`;
  };
  var wrapAnsi16m = (fn, offset) => (...args) => {
    const rgb = fn(...args);
    return `\x1B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
  };
  var ansi2ansi = (n) => n;
  var rgb2rgb = (r, g, b) => [r, g, b];
  var setLazyProperty = (object, property, get) => {
    Object.defineProperty(object, property, {
      get: () => {
        const value = get();
        Object.defineProperty(object, property, {
          value,
          enumerable: true,
          configurable: true
        });
        return value;
      },
      enumerable: true,
      configurable: true
    });
  };
  var colorConvert;
  var makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
    if (colorConvert === undefined) {
      colorConvert = require_color_convert();
    }
    const offset = isBackground ? 10 : 0;
    const styles = {};
    for (const [sourceSpace, suite] of Object.entries(colorConvert)) {
      const name = sourceSpace === "ansi16" ? "ansi" : sourceSpace;
      if (sourceSpace === targetSpace) {
        styles[name] = wrap(identity, offset);
      } else if (typeof suite === "object") {
        styles[name] = wrap(suite[targetSpace], offset);
      }
    }
    return styles;
  };
  Object.defineProperty(module, "exports", {
    enumerable: true,
    get: assembleStyles
  });
});

// node_modules/has-flag/index.js
var require_has_flag = __commonJS((exports, module) => {
  module.exports = (flag, argv = process.argv) => {
    const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf("--");
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
  };
});

// node_modules/supports-color/index.js
var require_supports_color = __commonJS((exports, module) => {
  var translateLevel = function(level) {
    if (level === 0) {
      return false;
    }
    return {
      level,
      hasBasic: true,
      has256: level >= 2,
      has16m: level >= 3
    };
  };
  var supportsColor = function(haveStream, streamIsTTY) {
    if (forceColor === 0) {
      return 0;
    }
    if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
      return 3;
    }
    if (hasFlag("color=256")) {
      return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) {
      return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === "dumb") {
      return min;
    }
    if (process.platform === "win32") {
      const osRelease = os.release().split(".");
      if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
        return Number(osRelease[2]) >= 14931 ? 3 : 2;
      }
      return 1;
    }
    if ("CI" in env) {
      if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((sign) => (sign in env)) || env.CI_NAME === "codeship") {
        return 1;
      }
      return min;
    }
    if ("TEAMCITY_VERSION" in env) {
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env.COLORTERM === "truecolor") {
      return 3;
    }
    if ("TERM_PROGRAM" in env) {
      const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (env.TERM_PROGRAM) {
        case "iTerm.app":
          return version >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
      return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
      return 1;
    }
    if ("COLORTERM" in env) {
      return 1;
    }
    return min;
  };
  var getSupportLevel = function(stream) {
    const level = supportsColor(stream, stream && stream.isTTY);
    return translateLevel(level);
  };
  var os = __require("os");
  var tty = __require("tty");
  var hasFlag = require_has_flag();
  var { env } = process;
  var forceColor;
  if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
    forceColor = 0;
  } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
    forceColor = 1;
  }
  if ("FORCE_COLOR" in env) {
    if (env.FORCE_COLOR === "true") {
      forceColor = 1;
    } else if (env.FORCE_COLOR === "false") {
      forceColor = 0;
    } else {
      forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
    }
  }
  module.exports = {
    supportsColor: getSupportLevel,
    stdout: translateLevel(supportsColor(true, tty.isatty(1))),
    stderr: translateLevel(supportsColor(true, tty.isatty(2)))
  };
});

// node_modules/chalk/source/util.js
var require_util = __commonJS((exports, module) => {
  var stringReplaceAll = (string, substring, replacer) => {
    let index = string.indexOf(substring);
    if (index === -1) {
      return string;
    }
    const substringLength = substring.length;
    let endIndex = 0;
    let returnValue = "";
    do {
      returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
      endIndex = index + substringLength;
      index = string.indexOf(substring, endIndex);
    } while (index !== -1);
    returnValue += string.substr(endIndex);
    return returnValue;
  };
  var stringEncaseCRLFWithFirstIndex = (string, prefix, postfix, index) => {
    let endIndex = 0;
    let returnValue = "";
    do {
      const gotCR = string[index - 1] === "\r";
      returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
      endIndex = index + 1;
      index = string.indexOf("\n", endIndex);
    } while (index !== -1);
    returnValue += string.substr(endIndex);
    return returnValue;
  };
  module.exports = {
    stringReplaceAll,
    stringEncaseCRLFWithFirstIndex
  };
});

// node_modules/chalk/source/templates.js
var require_templates = __commonJS((exports, module) => {
  var unescape = function(c) {
    const u = c[0] === "u";
    const bracket = c[1] === "{";
    if (u && !bracket && c.length === 5 || c[0] === "x" && c.length === 3) {
      return String.fromCharCode(parseInt(c.slice(1), 16));
    }
    if (u && bracket) {
      return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
    }
    return ESCAPES.get(c) || c;
  };
  var parseArguments = function(name, arguments_) {
    const results = [];
    const chunks = arguments_.trim().split(/\s*,\s*/g);
    let matches;
    for (const chunk of chunks) {
      const number = Number(chunk);
      if (!Number.isNaN(number)) {
        results.push(number);
      } else if (matches = chunk.match(STRING_REGEX)) {
        results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, character) => escape ? unescape(escape) : character));
      } else {
        throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
      }
    }
    return results;
  };
  var parseStyle = function(style) {
    STYLE_REGEX.lastIndex = 0;
    const results = [];
    let matches;
    while ((matches = STYLE_REGEX.exec(style)) !== null) {
      const name = matches[1];
      if (matches[2]) {
        const args = parseArguments(name, matches[2]);
        results.push([name].concat(args));
      } else {
        results.push([name]);
      }
    }
    return results;
  };
  var buildStyle = function(chalk, styles) {
    const enabled = {};
    for (const layer of styles) {
      for (const style of layer.styles) {
        enabled[style[0]] = layer.inverse ? null : style.slice(1);
      }
    }
    let current = chalk;
    for (const [styleName, styles2] of Object.entries(enabled)) {
      if (!Array.isArray(styles2)) {
        continue;
      }
      if (!(styleName in current)) {
        throw new Error(`Unknown Chalk style: ${styleName}`);
      }
      current = styles2.length > 0 ? current[styleName](...styles2) : current[styleName];
    }
    return current;
  };
  var TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
  var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
  var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
  var ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
  var ESCAPES = new Map([
    ["n", "\n"],
    ["r", "\r"],
    ["t", "\t"],
    ["b", "\b"],
    ["f", "\f"],
    ["v", "\v"],
    ["0", "\0"],
    ["\\", "\\"],
    ["e", "\x1B"],
    ["a", "\x07"]
  ]);
  module.exports = (chalk, temporary) => {
    const styles = [];
    const chunks = [];
    let chunk = [];
    temporary.replace(TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character) => {
      if (escapeCharacter) {
        chunk.push(unescape(escapeCharacter));
      } else if (style) {
        const string = chunk.join("");
        chunk = [];
        chunks.push(styles.length === 0 ? string : buildStyle(chalk, styles)(string));
        styles.push({ inverse, styles: parseStyle(style) });
      } else if (close) {
        if (styles.length === 0) {
          throw new Error("Found extraneous } in Chalk template literal");
        }
        chunks.push(buildStyle(chalk, styles)(chunk.join("")));
        chunk = [];
        styles.pop();
      } else {
        chunk.push(character);
      }
    });
    chunks.push(chunk.join(""));
    if (styles.length > 0) {
      const errMessage = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? "" : "s"} (\`}\`)`;
      throw new Error(errMessage);
    }
    return chunks.join("");
  };
});

// node_modules/chalk/source/index.js
var require_source = __commonJS((exports, module) => {
  var Chalk = function(options) {
    return chalkFactory(options);
  };
  var ansiStyles = require_ansi_styles();
  var { stdout: stdoutColor, stderr: stderrColor } = require_supports_color();
  var {
    stringReplaceAll,
    stringEncaseCRLFWithFirstIndex
  } = require_util();
  var { isArray } = Array;
  var levelMapping = [
    "ansi",
    "ansi",
    "ansi256",
    "ansi16m"
  ];
  var styles = Object.create(null);
  var applyOptions = (object, options = {}) => {
    if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
      throw new Error("The `level` option should be an integer from 0 to 3");
    }
    const colorLevel = stdoutColor ? stdoutColor.level : 0;
    object.level = options.level === undefined ? colorLevel : options.level;
  };

  class ChalkClass {
    constructor(options) {
      return chalkFactory(options);
    }
  }
  var chalkFactory = (options) => {
    const chalk2 = {};
    applyOptions(chalk2, options);
    chalk2.template = (...arguments_) => chalkTag(chalk2.template, ...arguments_);
    Object.setPrototypeOf(chalk2, Chalk.prototype);
    Object.setPrototypeOf(chalk2.template, chalk2);
    chalk2.template.constructor = () => {
      throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
    };
    chalk2.template.Instance = ChalkClass;
    return chalk2.template;
  };
  for (const [styleName, style] of Object.entries(ansiStyles)) {
    styles[styleName] = {
      get() {
        const builder = createBuilder(this, createStyler(style.open, style.close, this._styler), this._isEmpty);
        Object.defineProperty(this, styleName, { value: builder });
        return builder;
      }
    };
  }
  styles.visible = {
    get() {
      const builder = createBuilder(this, this._styler, true);
      Object.defineProperty(this, "visible", { value: builder });
      return builder;
    }
  };
  var usedModels = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
  for (const model of usedModels) {
    styles[model] = {
      get() {
        const { level } = this;
        return function(...arguments_) {
          const styler = createStyler(ansiStyles.color[levelMapping[level]][model](...arguments_), ansiStyles.color.close, this._styler);
          return createBuilder(this, styler, this._isEmpty);
        };
      }
    };
  }
  for (const model of usedModels) {
    const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
    styles[bgModel] = {
      get() {
        const { level } = this;
        return function(...arguments_) {
          const styler = createStyler(ansiStyles.bgColor[levelMapping[level]][model](...arguments_), ansiStyles.bgColor.close, this._styler);
          return createBuilder(this, styler, this._isEmpty);
        };
      }
    };
  }
  var proto = Object.defineProperties(() => {
  }, {
    ...styles,
    level: {
      enumerable: true,
      get() {
        return this._generator.level;
      },
      set(level) {
        this._generator.level = level;
      }
    }
  });
  var createStyler = (open, close, parent) => {
    let openAll;
    let closeAll;
    if (parent === undefined) {
      openAll = open;
      closeAll = close;
    } else {
      openAll = parent.openAll + open;
      closeAll = close + parent.closeAll;
    }
    return {
      open,
      close,
      openAll,
      closeAll,
      parent
    };
  };
  var createBuilder = (self2, _styler, _isEmpty) => {
    const builder = (...arguments_) => {
      if (isArray(arguments_[0]) && isArray(arguments_[0].raw)) {
        return applyStyle(builder, chalkTag(builder, ...arguments_));
      }
      return applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
    };
    Object.setPrototypeOf(builder, proto);
    builder._generator = self2;
    builder._styler = _styler;
    builder._isEmpty = _isEmpty;
    return builder;
  };
  var applyStyle = (self2, string) => {
    if (self2.level <= 0 || !string) {
      return self2._isEmpty ? "" : string;
    }
    let styler = self2._styler;
    if (styler === undefined) {
      return string;
    }
    const { openAll, closeAll } = styler;
    if (string.indexOf("\x1B") !== -1) {
      while (styler !== undefined) {
        string = stringReplaceAll(string, styler.close, styler.open);
        styler = styler.parent;
      }
    }
    const lfIndex = string.indexOf("\n");
    if (lfIndex !== -1) {
      string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
    }
    return openAll + string + closeAll;
  };
  var template;
  var chalkTag = (chalk2, ...strings) => {
    const [firstString] = strings;
    if (!isArray(firstString) || !isArray(firstString.raw)) {
      return strings.join(" ");
    }
    const arguments_ = strings.slice(1);
    const parts = [firstString.raw[0]];
    for (let i = 1;i < firstString.length; i++) {
      parts.push(String(arguments_[i - 1]).replace(/[{}\\]/g, "\\$&"), String(firstString.raw[i]));
    }
    if (template === undefined) {
      template = require_templates();
    }
    return template(chalk2, parts.join(""));
  };
  Object.defineProperties(Chalk.prototype, styles);
  var chalk = Chalk();
  chalk.supportsColor = stdoutColor;
  chalk.stderr = Chalk({ level: stderrColor ? stderrColor.level : 0 });
  chalk.stderr.supportsColor = stderrColor;
  module.exports = chalk;
});

// node_modules/picocolors/picocolors.js
var require_picocolors = __commonJS((exports, module) => {
  var tty = __require("tty");
  var isColorSupported = !(("NO_COLOR" in process.env) || process.argv.includes("--no-color")) && (("FORCE_COLOR" in process.env) || process.argv.includes("--color") || process.platform === "win32" || tty.isatty(1) && process.env.TERM !== "dumb" || ("CI" in process.env));
  var formatter = (open, close, replace = open) => (input) => {
    let string = "" + input;
    let index = string.indexOf(close, open.length);
    return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
  };
  var replaceClose = (string, close, replace, index) => {
    let start = string.substring(0, index) + replace;
    let end = string.substring(index + close.length);
    let nextIndex = end.indexOf(close);
    return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end;
  };
  var createColors = (enabled = isColorSupported) => ({
    isColorSupported: enabled,
    reset: enabled ? (s) => `\x1B[0m${s}\x1B[0m` : String,
    bold: enabled ? formatter("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m") : String,
    dim: enabled ? formatter("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m") : String,
    italic: enabled ? formatter("\x1B[3m", "\x1B[23m") : String,
    underline: enabled ? formatter("\x1B[4m", "\x1B[24m") : String,
    inverse: enabled ? formatter("\x1B[7m", "\x1B[27m") : String,
    hidden: enabled ? formatter("\x1B[8m", "\x1B[28m") : String,
    strikethrough: enabled ? formatter("\x1B[9m", "\x1B[29m") : String,
    black: enabled ? formatter("\x1B[30m", "\x1B[39m") : String,
    red: enabled ? formatter("\x1B[31m", "\x1B[39m") : String,
    green: enabled ? formatter("\x1B[32m", "\x1B[39m") : String,
    yellow: enabled ? formatter("\x1B[33m", "\x1B[39m") : String,
    blue: enabled ? formatter("\x1B[34m", "\x1B[39m") : String,
    magenta: enabled ? formatter("\x1B[35m", "\x1B[39m") : String,
    cyan: enabled ? formatter("\x1B[36m", "\x1B[39m") : String,
    white: enabled ? formatter("\x1B[37m", "\x1B[39m") : String,
    gray: enabled ? formatter("\x1B[90m", "\x1B[39m") : String,
    bgBlack: enabled ? formatter("\x1B[40m", "\x1B[49m") : String,
    bgRed: enabled ? formatter("\x1B[41m", "\x1B[49m") : String,
    bgGreen: enabled ? formatter("\x1B[42m", "\x1B[49m") : String,
    bgYellow: enabled ? formatter("\x1B[43m", "\x1B[49m") : String,
    bgBlue: enabled ? formatter("\x1B[44m", "\x1B[49m") : String,
    bgMagenta: enabled ? formatter("\x1B[45m", "\x1B[49m") : String,
    bgCyan: enabled ? formatter("\x1B[46m", "\x1B[49m") : String,
    bgWhite: enabled ? formatter("\x1B[47m", "\x1B[49m") : String
  });
  module.exports = createColors();
  module.exports.createColors = createColors;
});

// node_modules/nanospinner/consts.js
var require_consts = __commonJS((exports, module) => {
  var tty = __require("tty");
  var isCI = process.env.CI || process.env.WT_SESSION || process.env.ConEmuTask === "{cmd::Cmder}" || process.env.TERM_PROGRAM === "vscode" || process.env.TERM === "xterm-256color" || process.env.TERM === "alacritty";
  var isTTY = tty.isatty(1) && process.env.TERM !== "dumb" && !("CI" in process.env);
  var supportUnicode = process.platform !== "win32" ? process.env.TERM !== "linux" : isCI;
  var symbols = {
    frames: isTTY ? supportUnicode ? ["\u280B", "\u2819", "\u2839", "\u2838", "\u283C", "\u2834", "\u2826", "\u2827", "\u2807", "\u280F"] : ["-", "\\", "|", "/"] : ["-"],
    tick: supportUnicode ? "\u2714" : "\u221A",
    cross: supportUnicode ? "\u2716" : "\xD7",
    warn: supportUnicode ? "\u26A0" : "!!"
  };
  module.exports = { isTTY, symbols };
});

// node_modules/nanospinner/index.js
var require_nanospinner = __commonJS((exports, module) => {
  var getLines = function(str = "", width = 80) {
    return str.replace(/\u001b[^m]*?m/g, "").split("\n").reduce((col, line) => col += Math.max(1, Math.ceil(line.length / width)), 0);
  };
  var createSpinner = function(text = "", opts = {}) {
    let current = 0, interval = opts.interval || 50, stream = opts.stream || process.stderr, frames = opts.frames && opts.frames.length ? opts.frames : symbols.frames, color = opts.color || "yellow", lines = 0, timer;
    let spinner = {
      reset() {
        current = 0;
        lines = 0;
        timer = clearTimeout(timer);
      },
      clear() {
        spinner.write("\x1B[1G");
        for (let i = 0;i < lines; i++) {
          i > 0 && spinner.write("\x1B[1A");
          spinner.write("\x1B[2K\x1B[1G");
        }
        lines = 0;
        return spinner;
      },
      write(str, clear = false) {
        if (clear && isTTY) {
          spinner.clear();
        }
        stream.write(str);
        return spinner;
      },
      render() {
        let mark = pico[color](frames[current]);
        let str = `${mark} ${text}`;
        isTTY ? spinner.write(`\x1B[?25l`) : str += "\n";
        spinner.write(str, true);
        isTTY && (lines = getLines(str, stream.columns));
      },
      spin() {
        spinner.render();
        current = ++current % frames.length;
        return spinner;
      },
      update(opts2 = {}) {
        text = opts2.text || text;
        frames = opts2.frames && opts2.frames.length ? opts2.frames : frames;
        interval = opts2.interval || interval;
        color = opts2.color || color;
        if (frames.length - 1 < current) {
          current = 0;
        }
        return spinner;
      },
      loop() {
        isTTY && (timer = setTimeout(() => spinner.loop(), interval));
        return spinner.spin();
      },
      start(opts2 = {}) {
        timer && spinner.reset();
        return spinner.update({ text: opts2.text, color: opts2.color }).loop();
      },
      stop(opts2 = {}) {
        timer = clearTimeout(timer);
        let mark = pico[opts2.color || color](frames[current]);
        let optsMark = opts2.mark && opts2.color ? pico[opts2.color](opts2.mark) : opts2.mark;
        spinner.write(`${optsMark || mark} ${opts2.text || text}\n`, true);
        return isTTY ? spinner.write(`\x1B[?25h`) : spinner;
      },
      success(opts2 = {}) {
        let mark = green(symbols.tick);
        return spinner.stop({ mark, ...opts2 });
      },
      error(opts2 = {}) {
        let mark = red(symbols.cross);
        return spinner.stop({ mark, ...opts2 });
      },
      warn(opts2 = {}) {
        let mark = yellow(symbols.warn);
        return spinner.stop({ mark, ...opts2 });
      }
    };
    return spinner;
  };
  var pico = require_picocolors();
  var { isTTY, symbols } = require_consts();
  var { green, red, yellow } = pico;
  module.exports = {
    createSpinner
  };
});

// node_modules/figlet/lib/figlet.js
var require_figlet = __commonJS((exports, module) => {
  var figlet = (() => {
    const FULL_WIDTH = 0, FITTING = 1, SMUSHING = 2, CONTROLLED_SMUSHING = 3;
    const figFonts = {};
    const figDefaults = {
      font: "Standard",
      fontPath: "./fonts"
    };
    function getSmushingRules(oldLayout, newLayout) {
      let rules = {};
      let val, index, len, code;
      let codes = [
        [16384, "vLayout", SMUSHING],
        [8192, "vLayout", FITTING],
        [4096, "vRule5", true],
        [2048, "vRule4", true],
        [1024, "vRule3", true],
        [512, "vRule2", true],
        [256, "vRule1", true],
        [128, "hLayout", SMUSHING],
        [64, "hLayout", FITTING],
        [32, "hRule6", true],
        [16, "hRule5", true],
        [8, "hRule4", true],
        [4, "hRule3", true],
        [2, "hRule2", true],
        [1, "hRule1", true]
      ];
      val = newLayout !== null ? newLayout : oldLayout;
      index = 0;
      len = codes.length;
      while (index < len) {
        code = codes[index];
        if (val >= code[0]) {
          val = val - code[0];
          rules[code[1]] = typeof rules[code[1]] === "undefined" ? code[2] : rules[code[1]];
        } else if (code[1] !== "vLayout" && code[1] !== "hLayout") {
          rules[code[1]] = false;
        }
        index++;
      }
      if (typeof rules["hLayout"] === "undefined") {
        if (oldLayout === 0) {
          rules["hLayout"] = FITTING;
        } else if (oldLayout === -1) {
          rules["hLayout"] = FULL_WIDTH;
        } else {
          if (rules["hRule1"] || rules["hRule2"] || rules["hRule3"] || rules["hRule4"] || rules["hRule5"] || rules["hRule6"]) {
            rules["hLayout"] = CONTROLLED_SMUSHING;
          } else {
            rules["hLayout"] = SMUSHING;
          }
        }
      } else if (rules["hLayout"] === SMUSHING) {
        if (rules["hRule1"] || rules["hRule2"] || rules["hRule3"] || rules["hRule4"] || rules["hRule5"] || rules["hRule6"]) {
          rules["hLayout"] = CONTROLLED_SMUSHING;
        }
      }
      if (typeof rules["vLayout"] === "undefined") {
        if (rules["vRule1"] || rules["vRule2"] || rules["vRule3"] || rules["vRule4"] || rules["vRule5"]) {
          rules["vLayout"] = CONTROLLED_SMUSHING;
        } else {
          rules["vLayout"] = FULL_WIDTH;
        }
      } else if (rules["vLayout"] === SMUSHING) {
        if (rules["vRule1"] || rules["vRule2"] || rules["vRule3"] || rules["vRule4"] || rules["vRule5"]) {
          rules["vLayout"] = CONTROLLED_SMUSHING;
        }
      }
      return rules;
    }
    function hRule1_Smush(ch1, ch2, hardBlank) {
      if (ch1 === ch2 && ch1 !== hardBlank) {
        return ch1;
      }
      return false;
    }
    function hRule2_Smush(ch1, ch2) {
      let rule2Str = "|/\\[]{}()<>";
      if (ch1 === "_") {
        if (rule2Str.indexOf(ch2) !== -1) {
          return ch2;
        }
      } else if (ch2 === "_") {
        if (rule2Str.indexOf(ch1) !== -1) {
          return ch1;
        }
      }
      return false;
    }
    function hRule3_Smush(ch1, ch2) {
      let rule3Classes = "| /\\ [] {} () <>";
      let r3_pos1 = rule3Classes.indexOf(ch1);
      let r3_pos2 = rule3Classes.indexOf(ch2);
      if (r3_pos1 !== -1 && r3_pos2 !== -1) {
        if (r3_pos1 !== r3_pos2 && Math.abs(r3_pos1 - r3_pos2) !== 1) {
          const startPos = Math.max(r3_pos1, r3_pos2);
          const endPos = startPos + 1;
          return rule3Classes.substring(startPos, endPos);
        }
      }
      return false;
    }
    function hRule4_Smush(ch1, ch2) {
      let rule4Str = "[] {} ()";
      let r4_pos1 = rule4Str.indexOf(ch1);
      let r4_pos2 = rule4Str.indexOf(ch2);
      if (r4_pos1 !== -1 && r4_pos2 !== -1) {
        if (Math.abs(r4_pos1 - r4_pos2) <= 1) {
          return "|";
        }
      }
      return false;
    }
    function hRule5_Smush(ch1, ch2) {
      let rule5Str = "/\\ \\/ ><";
      let rule5Hash = { 0: "|", 3: "Y", 6: "X" };
      let r5_pos1 = rule5Str.indexOf(ch1);
      let r5_pos2 = rule5Str.indexOf(ch2);
      if (r5_pos1 !== -1 && r5_pos2 !== -1) {
        if (r5_pos2 - r5_pos1 === 1) {
          return rule5Hash[r5_pos1];
        }
      }
      return false;
    }
    function hRule6_Smush(ch1, ch2, hardBlank) {
      if (ch1 === hardBlank && ch2 === hardBlank) {
        return hardBlank;
      }
      return false;
    }
    function vRule1_Smush(ch1, ch2) {
      if (ch1 === ch2) {
        return ch1;
      }
      return false;
    }
    function vRule2_Smush(ch1, ch2) {
      let rule2Str = "|/\\[]{}()<>";
      if (ch1 === "_") {
        if (rule2Str.indexOf(ch2) !== -1) {
          return ch2;
        }
      } else if (ch2 === "_") {
        if (rule2Str.indexOf(ch1) !== -1) {
          return ch1;
        }
      }
      return false;
    }
    function vRule3_Smush(ch1, ch2) {
      let rule3Classes = "| /\\ [] {} () <>";
      let r3_pos1 = rule3Classes.indexOf(ch1);
      let r3_pos2 = rule3Classes.indexOf(ch2);
      if (r3_pos1 !== -1 && r3_pos2 !== -1) {
        if (r3_pos1 !== r3_pos2 && Math.abs(r3_pos1 - r3_pos2) !== 1) {
          const startPos = Math.max(r3_pos1, r3_pos2);
          const endPos = startPos + 1;
          return rule3Classes.substring(startPos, endPos);
        }
      }
      return false;
    }
    function vRule4_Smush(ch1, ch2) {
      if (ch1 === "-" && ch2 === "_" || ch1 === "_" && ch2 === "-") {
        return "=";
      }
      return false;
    }
    function vRule5_Smush(ch1, ch2) {
      if (ch1 === "|" && ch2 === "|") {
        return "|";
      }
      return false;
    }
    function uni_Smush(ch1, ch2, hardBlank) {
      if (ch2 === " " || ch2 === "") {
        return ch1;
      } else if (ch2 === hardBlank && ch1 !== " ") {
        return ch1;
      } else {
        return ch2;
      }
    }
    function canVerticalSmush(txt1, txt2, opts) {
      if (opts.fittingRules.vLayout === FULL_WIDTH) {
        return "invalid";
      }
      let ii, len = Math.min(txt1.length, txt2.length), ch1, ch2, endSmush = false, validSmush;
      if (len === 0) {
        return "invalid";
      }
      for (ii = 0;ii < len; ii++) {
        ch1 = txt1.substring(ii, ii + 1);
        ch2 = txt2.substring(ii, ii + 1);
        if (ch1 !== " " && ch2 !== " ") {
          if (opts.fittingRules.vLayout === FITTING) {
            return "invalid";
          } else if (opts.fittingRules.vLayout === SMUSHING) {
            return "end";
          } else {
            if (vRule5_Smush(ch1, ch2)) {
              endSmush = endSmush || false;
              continue;
            }
            validSmush = false;
            validSmush = opts.fittingRules.vRule1 ? vRule1_Smush(ch1, ch2) : validSmush;
            validSmush = !validSmush && opts.fittingRules.vRule2 ? vRule2_Smush(ch1, ch2) : validSmush;
            validSmush = !validSmush && opts.fittingRules.vRule3 ? vRule3_Smush(ch1, ch2) : validSmush;
            validSmush = !validSmush && opts.fittingRules.vRule4 ? vRule4_Smush(ch1, ch2) : validSmush;
            endSmush = true;
            if (!validSmush) {
              return "invalid";
            }
          }
        }
      }
      if (endSmush) {
        return "end";
      } else {
        return "valid";
      }
    }
    function getVerticalSmushDist(lines1, lines2, opts) {
      let maxDist = lines1.length;
      let len1 = lines1.length;
      let len2 = lines2.length;
      let subLines1, subLines2, slen;
      let curDist = 1;
      let ii, ret, result;
      while (curDist <= maxDist) {
        subLines1 = lines1.slice(Math.max(0, len1 - curDist), len1);
        subLines2 = lines2.slice(0, Math.min(maxDist, curDist));
        slen = subLines2.length;
        result = "";
        for (ii = 0;ii < slen; ii++) {
          ret = canVerticalSmush(subLines1[ii], subLines2[ii], opts);
          if (ret === "end") {
            result = ret;
          } else if (ret === "invalid") {
            result = ret;
            break;
          } else {
            if (result === "") {
              result = "valid";
            }
          }
        }
        if (result === "invalid") {
          curDist--;
          break;
        }
        if (result === "end") {
          break;
        }
        if (result === "valid") {
          curDist++;
        }
      }
      return Math.min(maxDist, curDist);
    }
    function verticallySmushLines(line1, line2, opts) {
      let ii, len = Math.min(line1.length, line2.length);
      let ch1, ch2, result = "", validSmush;
      for (ii = 0;ii < len; ii++) {
        ch1 = line1.substring(ii, ii + 1);
        ch2 = line2.substring(ii, ii + 1);
        if (ch1 !== " " && ch2 !== " ") {
          if (opts.fittingRules.vLayout === FITTING) {
            result += uni_Smush(ch1, ch2);
          } else if (opts.fittingRules.vLayout === SMUSHING) {
            result += uni_Smush(ch1, ch2);
          } else {
            validSmush = false;
            validSmush = opts.fittingRules.vRule5 ? vRule5_Smush(ch1, ch2) : validSmush;
            validSmush = !validSmush && opts.fittingRules.vRule1 ? vRule1_Smush(ch1, ch2) : validSmush;
            validSmush = !validSmush && opts.fittingRules.vRule2 ? vRule2_Smush(ch1, ch2) : validSmush;
            validSmush = !validSmush && opts.fittingRules.vRule3 ? vRule3_Smush(ch1, ch2) : validSmush;
            validSmush = !validSmush && opts.fittingRules.vRule4 ? vRule4_Smush(ch1, ch2) : validSmush;
            result += validSmush;
          }
        } else {
          result += uni_Smush(ch1, ch2);
        }
      }
      return result;
    }
    function verticalSmush(lines1, lines2, overlap, opts) {
      let len1 = lines1.length;
      let len2 = lines2.length;
      let piece1 = lines1.slice(0, Math.max(0, len1 - overlap));
      let piece2_1 = lines1.slice(Math.max(0, len1 - overlap), len1);
      let piece2_2 = lines2.slice(0, Math.min(overlap, len2));
      let ii, len, line, piece2 = [], piece3, result = [];
      len = piece2_1.length;
      for (ii = 0;ii < len; ii++) {
        if (ii >= len2) {
          line = piece2_1[ii];
        } else {
          line = verticallySmushLines(piece2_1[ii], piece2_2[ii], opts);
        }
        piece2.push(line);
      }
      piece3 = lines2.slice(Math.min(overlap, len2), len2);
      return result.concat(piece1, piece2, piece3);
    }
    function padLines(lines, numSpaces) {
      let ii, len = lines.length, padding = "";
      for (ii = 0;ii < numSpaces; ii++) {
        padding += " ";
      }
      for (ii = 0;ii < len; ii++) {
        lines[ii] += padding;
      }
    }
    function smushVerticalFigLines(output, lines, opts) {
      let len1 = output[0].length;
      let len2 = lines[0].length;
      let overlap;
      if (len1 > len2) {
        padLines(lines, len1 - len2);
      } else if (len2 > len1) {
        padLines(output, len2 - len1);
      }
      overlap = getVerticalSmushDist(output, lines, opts);
      return verticalSmush(output, lines, overlap, opts);
    }
    function getHorizontalSmushLength(txt1, txt2, opts) {
      if (opts.fittingRules.hLayout === FULL_WIDTH) {
        return 0;
      }
      let ii, len1 = txt1.length, len2 = txt2.length;
      let maxDist = len1;
      let curDist = 1;
      let breakAfter = false;
      let validSmush = false;
      let seg1, seg2, ch1, ch2;
      if (len1 === 0) {
        return 0;
      }
      distCal:
        while (curDist <= maxDist) {
          const seg1StartPos = len1 - curDist;
          seg1 = txt1.substring(seg1StartPos, seg1StartPos + curDist);
          seg2 = txt2.substring(0, Math.min(curDist, len2));
          for (ii = 0;ii < Math.min(curDist, len2); ii++) {
            ch1 = seg1.substring(ii, ii + 1);
            ch2 = seg2.substring(ii, ii + 1);
            if (ch1 !== " " && ch2 !== " ") {
              if (opts.fittingRules.hLayout === FITTING) {
                curDist = curDist - 1;
                break distCal;
              } else if (opts.fittingRules.hLayout === SMUSHING) {
                if (ch1 === opts.hardBlank || ch2 === opts.hardBlank) {
                  curDist = curDist - 1;
                }
                break distCal;
              } else {
                breakAfter = true;
                validSmush = false;
                validSmush = opts.fittingRules.hRule1 ? hRule1_Smush(ch1, ch2, opts.hardBlank) : validSmush;
                validSmush = !validSmush && opts.fittingRules.hRule2 ? hRule2_Smush(ch1, ch2, opts.hardBlank) : validSmush;
                validSmush = !validSmush && opts.fittingRules.hRule3 ? hRule3_Smush(ch1, ch2, opts.hardBlank) : validSmush;
                validSmush = !validSmush && opts.fittingRules.hRule4 ? hRule4_Smush(ch1, ch2, opts.hardBlank) : validSmush;
                validSmush = !validSmush && opts.fittingRules.hRule5 ? hRule5_Smush(ch1, ch2, opts.hardBlank) : validSmush;
                validSmush = !validSmush && opts.fittingRules.hRule6 ? hRule6_Smush(ch1, ch2, opts.hardBlank) : validSmush;
                if (!validSmush) {
                  curDist = curDist - 1;
                  break distCal;
                }
              }
            }
          }
          if (breakAfter) {
            break;
          }
          curDist++;
        }
      return Math.min(maxDist, curDist);
    }
    function horizontalSmush(textBlock1, textBlock2, overlap, opts) {
      let ii, jj, outputFig = [], overlapStart, piece1, piece2, piece3, len1, len2, txt1, txt2;
      for (ii = 0;ii < opts.height; ii++) {
        txt1 = textBlock1[ii];
        txt2 = textBlock2[ii];
        len1 = txt1.length;
        len2 = txt2.length;
        overlapStart = len1 - overlap;
        piece1 = txt1.substr(0, Math.max(0, overlapStart));
        piece2 = "";
        const seg1StartPos = Math.max(0, len1 - overlap);
        var seg1 = txt1.substring(seg1StartPos, seg1StartPos + overlap);
        var seg2 = txt2.substring(0, Math.min(overlap, len2));
        for (jj = 0;jj < overlap; jj++) {
          var ch1 = jj < len1 ? seg1.substring(jj, jj + 1) : " ";
          var ch2 = jj < len2 ? seg2.substring(jj, jj + 1) : " ";
          if (ch1 !== " " && ch2 !== " ") {
            if (opts.fittingRules.hLayout === FITTING) {
              piece2 += uni_Smush(ch1, ch2, opts.hardBlank);
            } else if (opts.fittingRules.hLayout === SMUSHING) {
              piece2 += uni_Smush(ch1, ch2, opts.hardBlank);
            } else {
              var nextCh = "";
              nextCh = !nextCh && opts.fittingRules.hRule1 ? hRule1_Smush(ch1, ch2, opts.hardBlank) : nextCh;
              nextCh = !nextCh && opts.fittingRules.hRule2 ? hRule2_Smush(ch1, ch2, opts.hardBlank) : nextCh;
              nextCh = !nextCh && opts.fittingRules.hRule3 ? hRule3_Smush(ch1, ch2, opts.hardBlank) : nextCh;
              nextCh = !nextCh && opts.fittingRules.hRule4 ? hRule4_Smush(ch1, ch2, opts.hardBlank) : nextCh;
              nextCh = !nextCh && opts.fittingRules.hRule5 ? hRule5_Smush(ch1, ch2, opts.hardBlank) : nextCh;
              nextCh = !nextCh && opts.fittingRules.hRule6 ? hRule6_Smush(ch1, ch2, opts.hardBlank) : nextCh;
              nextCh = nextCh || uni_Smush(ch1, ch2, opts.hardBlank);
              piece2 += nextCh;
            }
          } else {
            piece2 += uni_Smush(ch1, ch2, opts.hardBlank);
          }
        }
        if (overlap >= len2) {
          piece3 = "";
        } else {
          piece3 = txt2.substring(overlap, overlap + Math.max(0, len2 - overlap));
        }
        outputFig[ii] = piece1 + piece2 + piece3;
      }
      return outputFig;
    }
    function newFigChar(len) {
      let outputFigText = [], row;
      for (row = 0;row < len; row++) {
        outputFigText[row] = "";
      }
      return outputFigText;
    }
    const figLinesWidth = function(textLines) {
      return Math.max.apply(Math, textLines.map(function(line, i) {
        return line.length;
      }));
    };
    function joinFigArray(array, len, opts) {
      return array.reduce(function(acc, data) {
        return horizontalSmush(acc, data.fig, data.overlap, opts);
      }, newFigChar(len));
    }
    function breakWord(figChars, len, opts) {
      const result = {};
      for (let i = figChars.length;--i; ) {
        let w = joinFigArray(figChars.slice(0, i), len, opts);
        if (figLinesWidth(w) <= opts.width) {
          result.outputFigText = w;
          if (i < figChars.length) {
            result.chars = figChars.slice(i);
          } else {
            result.chars = [];
          }
          break;
        }
      }
      return result;
    }
    function generateFigTextLines(txt, figChars, opts) {
      let charIndex, figChar, overlap = 0, row, outputFigText, len, height = opts.height, outputFigLines = [], maxWidth, nextFigChars, figWords = [], char, isSpace, textFigWord, textFigLine, tmpBreak;
      outputFigText = newFigChar(height);
      if (opts.width > 0 && opts.whitespaceBreak) {
        nextFigChars = {
          chars: [],
          overlap
        };
      }
      if (opts.printDirection === 1) {
        txt = txt.split("").reverse().join("");
      }
      len = txt.length;
      for (charIndex = 0;charIndex < len; charIndex++) {
        char = txt.substring(charIndex, charIndex + 1);
        isSpace = char.match(/\s/);
        figChar = figChars[char.charCodeAt(0)];
        textFigLine = null;
        if (figChar) {
          if (opts.fittingRules.hLayout !== FULL_WIDTH) {
            overlap = 1e4;
            for (row = 0;row < opts.height; row++) {
              overlap = Math.min(overlap, getHorizontalSmushLength(outputFigText[row], figChar[row], opts));
            }
            overlap = overlap === 1e4 ? 0 : overlap;
          }
          if (opts.width > 0) {
            if (opts.whitespaceBreak) {
              textFigWord = joinFigArray(nextFigChars.chars.concat([
                {
                  fig: figChar,
                  overlap
                }
              ]), height, opts);
              textFigLine = joinFigArray(figWords.concat([
                {
                  fig: textFigWord,
                  overlap: nextFigChars.overlap
                }
              ]), height, opts);
              maxWidth = figLinesWidth(textFigLine);
            } else {
              textFigLine = horizontalSmush(outputFigText, figChar, overlap, opts);
              maxWidth = figLinesWidth(textFigLine);
            }
            if (maxWidth >= opts.width && charIndex > 0) {
              if (opts.whitespaceBreak) {
                outputFigText = joinFigArray(figWords.slice(0, -1), height, opts);
                if (figWords.length > 1) {
                  outputFigLines.push(outputFigText);
                  outputFigText = newFigChar(height);
                }
                figWords = [];
              } else {
                outputFigLines.push(outputFigText);
                outputFigText = newFigChar(height);
              }
            }
          }
          if (opts.width > 0 && opts.whitespaceBreak) {
            if (!isSpace || charIndex === len - 1) {
              nextFigChars.chars.push({ fig: figChar, overlap });
            }
            if (isSpace || charIndex === len - 1) {
              tmpBreak = null;
              while (true) {
                textFigLine = joinFigArray(nextFigChars.chars, height, opts);
                maxWidth = figLinesWidth(textFigLine);
                if (maxWidth >= opts.width) {
                  tmpBreak = breakWord(nextFigChars.chars, height, opts);
                  nextFigChars = { chars: tmpBreak.chars };
                  outputFigLines.push(tmpBreak.outputFigText);
                } else {
                  break;
                }
              }
              if (maxWidth > 0) {
                if (tmpBreak) {
                  figWords.push({ fig: textFigLine, overlap: 1 });
                } else {
                  figWords.push({
                    fig: textFigLine,
                    overlap: nextFigChars.overlap
                  });
                }
              }
              if (isSpace) {
                figWords.push({ fig: figChar, overlap });
                outputFigText = newFigChar(height);
              }
              if (charIndex === len - 1) {
                outputFigText = joinFigArray(figWords, height, opts);
              }
              nextFigChars = {
                chars: [],
                overlap
              };
              continue;
            }
          }
          outputFigText = horizontalSmush(outputFigText, figChar, overlap, opts);
        }
      }
      if (figLinesWidth(outputFigText) > 0) {
        outputFigLines.push(outputFigText);
      }
      if (opts.showHardBlanks !== true) {
        outputFigLines.forEach(function(outputFigText2) {
          len = outputFigText2.length;
          for (row = 0;row < len; row++) {
            outputFigText2[row] = outputFigText2[row].replace(new RegExp("\\" + opts.hardBlank, "g"), " ");
          }
        });
      }
      return outputFigLines;
    }
    const getHorizontalFittingRules = function(layout, options) {
      let props = [
        "hLayout",
        "hRule1",
        "hRule2",
        "hRule3",
        "hRule4",
        "hRule5",
        "hRule6"
      ], params = {}, ii;
      if (layout === "default") {
        for (ii = 0;ii < props.length; ii++) {
          params[props[ii]] = options.fittingRules[props[ii]];
        }
      } else if (layout === "full") {
        params = {
          hLayout: FULL_WIDTH,
          hRule1: false,
          hRule2: false,
          hRule3: false,
          hRule4: false,
          hRule5: false,
          hRule6: false
        };
      } else if (layout === "fitted") {
        params = {
          hLayout: FITTING,
          hRule1: false,
          hRule2: false,
          hRule3: false,
          hRule4: false,
          hRule5: false,
          hRule6: false
        };
      } else if (layout === "controlled smushing") {
        params = {
          hLayout: CONTROLLED_SMUSHING,
          hRule1: true,
          hRule2: true,
          hRule3: true,
          hRule4: true,
          hRule5: true,
          hRule6: true
        };
      } else if (layout === "universal smushing") {
        params = {
          hLayout: SMUSHING,
          hRule1: false,
          hRule2: false,
          hRule3: false,
          hRule4: false,
          hRule5: false,
          hRule6: false
        };
      } else {
        return;
      }
      return params;
    };
    const getVerticalFittingRules = function(layout, options) {
      let props = ["vLayout", "vRule1", "vRule2", "vRule3", "vRule4", "vRule5"], params = {}, ii;
      if (layout === "default") {
        for (ii = 0;ii < props.length; ii++) {
          params[props[ii]] = options.fittingRules[props[ii]];
        }
      } else if (layout === "full") {
        params = {
          vLayout: FULL_WIDTH,
          vRule1: false,
          vRule2: false,
          vRule3: false,
          vRule4: false,
          vRule5: false
        };
      } else if (layout === "fitted") {
        params = {
          vLayout: FITTING,
          vRule1: false,
          vRule2: false,
          vRule3: false,
          vRule4: false,
          vRule5: false
        };
      } else if (layout === "controlled smushing") {
        params = {
          vLayout: CONTROLLED_SMUSHING,
          vRule1: true,
          vRule2: true,
          vRule3: true,
          vRule4: true,
          vRule5: true
        };
      } else if (layout === "universal smushing") {
        params = {
          vLayout: SMUSHING,
          vRule1: false,
          vRule2: false,
          vRule3: false,
          vRule4: false,
          vRule5: false
        };
      } else {
        return;
      }
      return params;
    };
    const generateText = function(fontName, options, txt) {
      txt = txt.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
      let lines = txt.split("\n");
      let figLines = [];
      let ii, len, output;
      len = lines.length;
      for (ii = 0;ii < len; ii++) {
        figLines = figLines.concat(generateFigTextLines(lines[ii], figFonts[fontName], options));
      }
      len = figLines.length;
      output = figLines[0];
      for (ii = 1;ii < len; ii++) {
        output = smushVerticalFigLines(output, figLines[ii], options);
      }
      return output ? output.join("\n") : "";
    };
    function _reworkFontOpts(fontOpts, options) {
      let myOpts = JSON.parse(JSON.stringify(fontOpts)), params, prop;
      if (typeof options.horizontalLayout !== "undefined") {
        params = getHorizontalFittingRules(options.horizontalLayout, fontOpts);
        for (prop in params) {
          if (params.hasOwnProperty(prop)) {
            myOpts.fittingRules[prop] = params[prop];
          }
        }
      }
      if (typeof options.verticalLayout !== "undefined") {
        params = getVerticalFittingRules(options.verticalLayout, fontOpts);
        for (prop in params) {
          if (params.hasOwnProperty(prop)) {
            myOpts.fittingRules[prop] = params[prop];
          }
        }
      }
      myOpts.printDirection = typeof options.printDirection !== "undefined" ? options.printDirection : fontOpts.printDirection;
      myOpts.showHardBlanks = options.showHardBlanks || false;
      myOpts.width = options.width || -1;
      myOpts.whitespaceBreak = options.whitespaceBreak || false;
      return myOpts;
    }
    const me = function(txt, options, next) {
      return me.text(txt, options, next);
    };
    me.text = async function(txt, options, next) {
      let fontName = "";
      txt = txt + "";
      if (typeof arguments[1] === "function") {
        next = options;
        options = {};
        options.font = figDefaults.font;
      }
      if (typeof options === "string") {
        fontName = options;
        options = {};
      } else {
        options = options || {};
        fontName = options.font || figDefaults.font;
      }
      return await new Promise((resolve, reject) => {
        me.loadFont(fontName, function(err, fontOpts) {
          if (err) {
            reject(err);
            if (next)
              next(err);
            return;
          }
          const generatedTxt = generateText(fontName, _reworkFontOpts(fontOpts, options), txt);
          resolve(generatedTxt);
          if (next)
            next(null, generatedTxt);
        });
      });
    };
    me.textSync = function(txt, options) {
      let fontName = "";
      txt = txt + "";
      if (typeof options === "string") {
        fontName = options;
        options = {};
      } else {
        options = options || {};
        fontName = options.font || figDefaults.font;
      }
      var fontOpts = _reworkFontOpts(me.loadFontSync(fontName), options);
      return generateText(fontName, fontOpts, txt);
    };
    me.metadata = function(fontName, next) {
      fontName = fontName + "";
      me.loadFont(fontName, function(err, fontOpts) {
        if (err) {
          next(err);
          return;
        }
        next(null, fontOpts, figFonts[fontName].comment);
      });
    };
    me.defaults = function(opts) {
      if (typeof opts === "object" && opts !== null) {
        for (var prop in opts) {
          if (opts.hasOwnProperty(prop)) {
            figDefaults[prop] = opts[prop];
          }
        }
      }
      return JSON.parse(JSON.stringify(figDefaults));
    };
    me.parseFont = function(fontName, data) {
      data = data.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
      figFonts[fontName] = {};
      var lines = data.split("\n");
      var headerData = lines.splice(0, 1)[0].split(" ");
      var figFont = figFonts[fontName];
      var opts = {};
      opts.hardBlank = headerData[0].substr(5, 1);
      opts.height = parseInt(headerData[1], 10);
      opts.baseline = parseInt(headerData[2], 10);
      opts.maxLength = parseInt(headerData[3], 10);
      opts.oldLayout = parseInt(headerData[4], 10);
      opts.numCommentLines = parseInt(headerData[5], 10);
      opts.printDirection = headerData.length >= 6 ? parseInt(headerData[6], 10) : 0;
      opts.fullLayout = headerData.length >= 7 ? parseInt(headerData[7], 10) : null;
      opts.codeTagCount = headerData.length >= 8 ? parseInt(headerData[8], 10) : null;
      opts.fittingRules = getSmushingRules(opts.oldLayout, opts.fullLayout);
      figFont.options = opts;
      if (opts.hardBlank.length !== 1 || isNaN(opts.height) || isNaN(opts.baseline) || isNaN(opts.maxLength) || isNaN(opts.oldLayout) || isNaN(opts.numCommentLines)) {
        throw new Error("FIGlet header contains invalid values.");
      }
      let charNums = [], ii;
      for (ii = 32;ii <= 126; ii++) {
        charNums.push(ii);
      }
      charNums = charNums.concat(196, 214, 220, 228, 246, 252, 223);
      if (lines.length < opts.numCommentLines + opts.height * charNums.length) {
        throw new Error("FIGlet file is missing data.");
      }
      let cNum, endCharRegEx, parseError = false;
      figFont.comment = lines.splice(0, opts.numCommentLines).join("\n");
      figFont.numChars = 0;
      while (lines.length > 0 && figFont.numChars < charNums.length) {
        cNum = charNums[figFont.numChars];
        figFont[cNum] = lines.splice(0, opts.height);
        for (ii = 0;ii < opts.height; ii++) {
          if (typeof figFont[cNum][ii] === "undefined") {
            figFont[cNum][ii] = "";
          } else {
            endCharRegEx = new RegExp("\\" + figFont[cNum][ii].substr(figFont[cNum][ii].length - 1, 1) + "+$");
            figFont[cNum][ii] = figFont[cNum][ii].replace(endCharRegEx, "");
          }
        }
        figFont.numChars++;
      }
      while (lines.length > 0) {
        cNum = lines.splice(0, 1)[0].split(" ")[0];
        if (/^0[xX][0-9a-fA-F]+$/.test(cNum)) {
          cNum = parseInt(cNum, 16);
        } else if (/^0[0-7]+$/.test(cNum)) {
          cNum = parseInt(cNum, 8);
        } else if (/^[0-9]+$/.test(cNum)) {
          cNum = parseInt(cNum, 10);
        } else if (/^-0[xX][0-9a-fA-F]+$/.test(cNum)) {
          cNum = parseInt(cNum, 16);
        } else {
          if (cNum === "") {
            break;
          }
          console.log("Invalid data:" + cNum);
          parseError = true;
          break;
        }
        figFont[cNum] = lines.splice(0, opts.height);
        for (ii = 0;ii < opts.height; ii++) {
          if (typeof figFont[cNum][ii] === "undefined") {
            figFont[cNum][ii] = "";
          } else {
            endCharRegEx = new RegExp("\\" + figFont[cNum][ii].substr(figFont[cNum][ii].length - 1, 1) + "+$");
            figFont[cNum][ii] = figFont[cNum][ii].replace(endCharRegEx, "");
          }
        }
        figFont.numChars++;
      }
      if (parseError === true) {
        throw new Error("Error parsing data.");
      }
      return opts;
    };
    me.loadFont = function(fontName, next) {
      if (figFonts[fontName]) {
        next(null, figFonts[fontName].options);
        return;
      }
      if (typeof fetch !== "function") {
        console.error("figlet.js requires the fetch API or a fetch polyfill such as https://cdnjs.com/libraries/fetch");
        throw new Error("fetch is required for figlet.js to work.");
      }
      fetch(figDefaults.fontPath + "/" + fontName + ".flf").then(function(response) {
        if (response.ok) {
          return response.text();
        }
        console.log("Unexpected response", response);
        throw new Error("Network response was not ok.");
      }).then(function(text) {
        next(null, me.parseFont(fontName, text));
      }).catch(next);
    };
    me.loadFontSync = function(name) {
      if (figFonts[name]) {
        return figFonts[name].options;
      }
      throw new Error("synchronous font loading is not implemented for the browser");
    };
    me.preloadFonts = function(fonts, next) {
      let fontData = [];
      fonts.reduce(function(promise, name) {
        return promise.then(function() {
          return fetch(figDefaults.fontPath + "/" + name + ".flf").then((response) => {
            return response.text();
          }).then(function(data) {
            fontData.push(data);
          });
        });
      }, Promise.resolve()).then(function(res) {
        for (var i in fonts) {
          if (fonts.hasOwnProperty(i)) {
            me.parseFont(fonts[i], fontData[i]);
          }
        }
        if (next) {
          next();
        }
      });
    };
    me.figFonts = figFonts;
    return me;
  })();
  if (typeof module !== "undefined") {
    if (typeof exports !== "undefined") {
      module.exports = figlet;
    }
  }
});

// node_modules/figlet/lib/node-figlet.js
var require_node_figlet = __commonJS((exports, module) => {
  var __dirname = "/Users/guilhermenascimento/Documents/git/cli/mantine-tw/node_modules/figlet/lib";
  var figlet = require_figlet();
  var fs = __require("fs");
  var path = __require("path");
  var fontDir = path.join(__dirname, "/../fonts/");
  figlet.loadFont = function(name, next) {
    if (figlet.figFonts[name]) {
      next(null, figlet.figFonts[name].options);
      return;
    }
    fs.readFile(path.join(fontDir, name + ".flf"), { encoding: "utf-8" }, function(err, fontData) {
      if (err) {
        return next(err);
      }
      fontData = fontData + "";
      try {
        next(null, figlet.parseFont(name, fontData));
      } catch (error) {
        next(error);
      }
    });
  };
  figlet.loadFontSync = function(name) {
    if (figlet.figFonts[name]) {
      return figlet.figFonts[name].options;
    }
    var fontData = fs.readFileSync(path.join(fontDir, name + ".flf"), {
      encoding: "utf-8"
    });
    fontData = fontData + "";
    return figlet.parseFont(name, fontData);
  };
  figlet.fonts = function(next) {
    var fontList = [];
    fs.readdir(fontDir, function(err, files) {
      if (err) {
        return next(err);
      }
      files.forEach(function(file) {
        if (/\.flf$/.test(file)) {
          fontList.push(file.replace(/\.flf$/, ""));
        }
      });
      next(null, fontList);
    });
  };
  figlet.fontsSync = function() {
    var fontList = [];
    fs.readdirSync(fontDir).forEach(function(file) {
      if (/\.flf$/.test(file)) {
        fontList.push(file.replace(/\.flf$/, ""));
      }
    });
    return fontList;
  };
  module.exports = figlet;
});

// node_modules/tinycolor2/cjs/tinycolor.js
var require_tinycolor = __commonJS((exports, module) => {
  (function(global, factory) {
    typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.tinycolor = factory());
  })(exports, function() {
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    var trimLeft = /^\s+/;
    var trimRight = /\s+$/;
    function tinycolor(color, opts) {
      color = color ? color : "";
      opts = opts || {};
      if (color instanceof tinycolor) {
        return color;
      }
      if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
      }
      var rgb = inputToRGB(color);
      this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = Math.round(100 * this._a) / 100, this._format = opts.format || rgb.format;
      this._gradientType = opts.gradientType;
      if (this._r < 1)
        this._r = Math.round(this._r);
      if (this._g < 1)
        this._g = Math.round(this._g);
      if (this._b < 1)
        this._b = Math.round(this._b);
      this._ok = rgb.ok;
    }
    tinycolor.prototype = {
      isDark: function isDark() {
        return this.getBrightness() < 128;
      },
      isLight: function isLight() {
        return !this.isDark();
      },
      isValid: function isValid() {
        return this._ok;
      },
      getOriginalInput: function getOriginalInput() {
        return this._originalInput;
      },
      getFormat: function getFormat() {
        return this._format;
      },
      getAlpha: function getAlpha() {
        return this._a;
      },
      getBrightness: function getBrightness() {
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
      },
      getLuminance: function getLuminance() {
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r / 255;
        GsRGB = rgb.g / 255;
        BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928)
          R = RsRGB / 12.92;
        else
          R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
        if (GsRGB <= 0.03928)
          G = GsRGB / 12.92;
        else
          G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
        if (BsRGB <= 0.03928)
          B = BsRGB / 12.92;
        else
          B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
      },
      setAlpha: function setAlpha(value) {
        this._a = boundAlpha(value);
        this._roundA = Math.round(100 * this._a) / 100;
        return this;
      },
      toHsv: function toHsv() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return {
          h: hsv.h * 360,
          s: hsv.s,
          v: hsv.v,
          a: this._a
        };
      },
      toHsvString: function toHsvString() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = Math.round(hsv.h * 360), s = Math.round(hsv.s * 100), v = Math.round(hsv.v * 100);
        return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
      },
      toHsl: function toHsl() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return {
          h: hsl.h * 360,
          s: hsl.s,
          l: hsl.l,
          a: this._a
        };
      },
      toHslString: function toHslString() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = Math.round(hsl.h * 360), s = Math.round(hsl.s * 100), l = Math.round(hsl.l * 100);
        return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
      },
      toHex: function toHex(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
      },
      toHexString: function toHexString(allow3Char) {
        return "#" + this.toHex(allow3Char);
      },
      toHex8: function toHex8(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
      },
      toHex8String: function toHex8String(allow4Char) {
        return "#" + this.toHex8(allow4Char);
      },
      toRgb: function toRgb() {
        return {
          r: Math.round(this._r),
          g: Math.round(this._g),
          b: Math.round(this._b),
          a: this._a
        };
      },
      toRgbString: function toRgbString() {
        return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
      },
      toPercentageRgb: function toPercentageRgb() {
        return {
          r: Math.round(bound01(this._r, 255) * 100) + "%",
          g: Math.round(bound01(this._g, 255) * 100) + "%",
          b: Math.round(bound01(this._b, 255) * 100) + "%",
          a: this._a
        };
      },
      toPercentageRgbString: function toPercentageRgbString() {
        return this._a == 1 ? "rgb(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
      },
      toName: function toName() {
        if (this._a === 0) {
          return "transparent";
        }
        if (this._a < 1) {
          return false;
        }
        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
      },
      toFilter: function toFilter(secondColor) {
        var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";
        if (secondColor) {
          var s = tinycolor(secondColor);
          secondHex8String = "#" + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }
        return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
      },
      toString: function toString(format) {
        var formatSet = !!format;
        format = format || this._format;
        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
        if (needsAlphaFormat) {
          if (format === "name" && this._a === 0) {
            return this.toName();
          }
          return this.toRgbString();
        }
        if (format === "rgb") {
          formattedString = this.toRgbString();
        }
        if (format === "prgb") {
          formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
          formattedString = this.toHexString();
        }
        if (format === "hex3") {
          formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
          formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
          formattedString = this.toHex8String();
        }
        if (format === "name") {
          formattedString = this.toName();
        }
        if (format === "hsl") {
          formattedString = this.toHslString();
        }
        if (format === "hsv") {
          formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
      },
      clone: function clone() {
        return tinycolor(this.toString());
      },
      _applyModification: function _applyModification(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
      },
      lighten: function lighten() {
        return this._applyModification(_lighten, arguments);
      },
      brighten: function brighten() {
        return this._applyModification(_brighten, arguments);
      },
      darken: function darken() {
        return this._applyModification(_darken, arguments);
      },
      desaturate: function desaturate() {
        return this._applyModification(_desaturate, arguments);
      },
      saturate: function saturate() {
        return this._applyModification(_saturate, arguments);
      },
      greyscale: function greyscale() {
        return this._applyModification(_greyscale, arguments);
      },
      spin: function spin() {
        return this._applyModification(_spin, arguments);
      },
      _applyCombination: function _applyCombination(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
      },
      analogous: function analogous() {
        return this._applyCombination(_analogous, arguments);
      },
      complement: function complement() {
        return this._applyCombination(_complement, arguments);
      },
      monochromatic: function monochromatic() {
        return this._applyCombination(_monochromatic, arguments);
      },
      splitcomplement: function splitcomplement() {
        return this._applyCombination(_splitcomplement, arguments);
      },
      triad: function triad() {
        return this._applyCombination(polyad, [3]);
      },
      tetrad: function tetrad() {
        return this._applyCombination(polyad, [4]);
      }
    };
    tinycolor.fromRatio = function(color, opts) {
      if (_typeof(color) == "object") {
        var newColor = {};
        for (var i in color) {
          if (color.hasOwnProperty(i)) {
            if (i === "a") {
              newColor[i] = color[i];
            } else {
              newColor[i] = convertToPercentage(color[i]);
            }
          }
        }
        color = newColor;
      }
      return tinycolor(color, opts);
    };
    function inputToRGB(color) {
      var rgb = {
        r: 0,
        g: 0,
        b: 0
      };
      var a = 1;
      var s = null;
      var v = null;
      var l = null;
      var ok = false;
      var format = false;
      if (typeof color == "string") {
        color = stringInputToObject(color);
      }
      if (_typeof(color) == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
          rgb = rgbToRgb(color.r, color.g, color.b);
          ok = true;
          format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
          s = convertToPercentage(color.s);
          v = convertToPercentage(color.v);
          rgb = hsvToRgb(color.h, s, v);
          ok = true;
          format = "hsv";
        } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
          s = convertToPercentage(color.s);
          l = convertToPercentage(color.l);
          rgb = hslToRgb(color.h, s, l);
          ok = true;
          format = "hsl";
        }
        if (color.hasOwnProperty("a")) {
          a = color.a;
        }
      }
      a = boundAlpha(a);
      return {
        ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a
      };
    }
    function rgbToRgb(r, g, b) {
      return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
      };
    }
    function rgbToHsl(r, g, b) {
      r = bound01(r, 255);
      g = bound01(g, 255);
      b = bound01(b, 255);
      var max = Math.max(r, g, b), min = Math.min(r, g, b);
      var h, s, l = (max + min) / 2;
      if (max == min) {
        h = s = 0;
      } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }
      return {
        h,
        s,
        l
      };
    }
    function hslToRgb(h, s, l) {
      var r, g, b;
      h = bound01(h, 360);
      s = bound01(s, 100);
      l = bound01(l, 100);
      function hue2rgb(p2, q2, t) {
        if (t < 0)
          t += 1;
        if (t > 1)
          t -= 1;
        if (t < 1 / 6)
          return p2 + (q2 - p2) * 6 * t;
        if (t < 1 / 2)
          return q2;
        if (t < 2 / 3)
          return p2 + (q2 - p2) * (2 / 3 - t) * 6;
        return p2;
      }
      if (s === 0) {
        r = g = b = l;
      } else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }
      return {
        r: r * 255,
        g: g * 255,
        b: b * 255
      };
    }
    function rgbToHsv(r, g, b) {
      r = bound01(r, 255);
      g = bound01(g, 255);
      b = bound01(b, 255);
      var max = Math.max(r, g, b), min = Math.min(r, g, b);
      var h, s, v = max;
      var d = max - min;
      s = max === 0 ? 0 : d / max;
      if (max == min) {
        h = 0;
      } else {
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }
      return {
        h,
        s,
        v
      };
    }
    function hsvToRgb(h, s, v) {
      h = bound01(h, 360) * 6;
      s = bound01(s, 100);
      v = bound01(v, 100);
      var i = Math.floor(h), f = h - i, p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s), mod = i % 6, r = [v, q, p, p, t, v][mod], g = [t, v, v, q, p, p][mod], b = [p, p, t, v, v, q][mod];
      return {
        r: r * 255,
        g: g * 255,
        b: b * 255
      };
    }
    function rgbToHex(r, g, b, allow3Char) {
      var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
      if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
      }
      return hex.join("");
    }
    function rgbaToHex(r, g, b, a, allow4Char) {
      var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16)), pad2(convertDecimalToHex(a))];
      if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
      }
      return hex.join("");
    }
    function rgbaToArgbHex(r, g, b, a) {
      var hex = [pad2(convertDecimalToHex(a)), pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
      return hex.join("");
    }
    tinycolor.equals = function(color1, color2) {
      if (!color1 || !color2)
        return false;
      return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
    };
    tinycolor.random = function() {
      return tinycolor.fromRatio({
        r: Math.random(),
        g: Math.random(),
        b: Math.random()
      });
    };
    function _desaturate(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var hsl = tinycolor(color).toHsl();
      hsl.s -= amount / 100;
      hsl.s = clamp01(hsl.s);
      return tinycolor(hsl);
    }
    function _saturate(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var hsl = tinycolor(color).toHsl();
      hsl.s += amount / 100;
      hsl.s = clamp01(hsl.s);
      return tinycolor(hsl);
    }
    function _greyscale(color) {
      return tinycolor(color).desaturate(100);
    }
    function _lighten(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var hsl = tinycolor(color).toHsl();
      hsl.l += amount / 100;
      hsl.l = clamp01(hsl.l);
      return tinycolor(hsl);
    }
    function _brighten(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var rgb = tinycolor(color).toRgb();
      rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
      rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
      rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
      return tinycolor(rgb);
    }
    function _darken(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var hsl = tinycolor(color).toHsl();
      hsl.l -= amount / 100;
      hsl.l = clamp01(hsl.l);
      return tinycolor(hsl);
    }
    function _spin(color, amount) {
      var hsl = tinycolor(color).toHsl();
      var hue = (hsl.h + amount) % 360;
      hsl.h = hue < 0 ? 360 + hue : hue;
      return tinycolor(hsl);
    }
    function _complement(color) {
      var hsl = tinycolor(color).toHsl();
      hsl.h = (hsl.h + 180) % 360;
      return tinycolor(hsl);
    }
    function polyad(color, number) {
      if (isNaN(number) || number <= 0) {
        throw new Error("Argument to polyad must be a positive number");
      }
      var hsl = tinycolor(color).toHsl();
      var result = [tinycolor(color)];
      var step = 360 / number;
      for (var i = 1;i < number; i++) {
        result.push(tinycolor({
          h: (hsl.h + i * step) % 360,
          s: hsl.s,
          l: hsl.l
        }));
      }
      return result;
    }
    function _splitcomplement(color) {
      var hsl = tinycolor(color).toHsl();
      var h = hsl.h;
      return [tinycolor(color), tinycolor({
        h: (h + 72) % 360,
        s: hsl.s,
        l: hsl.l
      }), tinycolor({
        h: (h + 216) % 360,
        s: hsl.s,
        l: hsl.l
      })];
    }
    function _analogous(color, results, slices) {
      results = results || 6;
      slices = slices || 30;
      var hsl = tinycolor(color).toHsl();
      var part = 360 / slices;
      var ret = [tinycolor(color)];
      for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360;--results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
      }
      return ret;
    }
    function _monochromatic(color, results) {
      results = results || 6;
      var hsv = tinycolor(color).toHsv();
      var { h, s, v } = hsv;
      var ret = [];
      var modification = 1 / results;
      while (results--) {
        ret.push(tinycolor({
          h,
          s,
          v
        }));
        v = (v + modification) % 1;
      }
      return ret;
    }
    tinycolor.mix = function(color1, color2, amount) {
      amount = amount === 0 ? 0 : amount || 50;
      var rgb1 = tinycolor(color1).toRgb();
      var rgb2 = tinycolor(color2).toRgb();
      var p = amount / 100;
      var rgba = {
        r: (rgb2.r - rgb1.r) * p + rgb1.r,
        g: (rgb2.g - rgb1.g) * p + rgb1.g,
        b: (rgb2.b - rgb1.b) * p + rgb1.b,
        a: (rgb2.a - rgb1.a) * p + rgb1.a
      };
      return tinycolor(rgba);
    };
    tinycolor.readability = function(color1, color2) {
      var c1 = tinycolor(color1);
      var c2 = tinycolor(color2);
      return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
    };
    tinycolor.isReadable = function(color1, color2, wcag2) {
      var readability = tinycolor.readability(color1, color2);
      var wcag2Parms, out;
      out = false;
      wcag2Parms = validateWCAG2Parms(wcag2);
      switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
          out = readability >= 4.5;
          break;
        case "AAlarge":
          out = readability >= 3;
          break;
        case "AAAsmall":
          out = readability >= 7;
          break;
      }
      return out;
    };
    tinycolor.mostReadable = function(baseColor, colorList, args) {
      var bestColor = null;
      var bestScore = 0;
      var readability;
      var includeFallbackColors, level, size;
      args = args || {};
      includeFallbackColors = args.includeFallbackColors;
      level = args.level;
      size = args.size;
      for (var i = 0;i < colorList.length; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
          bestScore = readability;
          bestColor = tinycolor(colorList[i]);
        }
      }
      if (tinycolor.isReadable(baseColor, bestColor, {
        level,
        size
      }) || !includeFallbackColors) {
        return bestColor;
      } else {
        args.includeFallbackColors = false;
        return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
      }
    };
    var names = tinycolor.names = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "0ff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000",
      blanchedalmond: "ffebcd",
      blue: "00f",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      burntsienna: "ea7e5d",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "0ff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkgrey: "a9a9a9",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkslategrey: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dimgrey: "696969",
      dodgerblue: "1e90ff",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "f0f",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      grey: "808080",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgray: "d3d3d3",
      lightgreen: "90ee90",
      lightgrey: "d3d3d3",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslategray: "789",
      lightslategrey: "789",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "0f0",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "f0f",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370db",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "db7093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "663399",
      red: "f00",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      slategrey: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      wheat: "f5deb3",
      white: "fff",
      whitesmoke: "f5f5f5",
      yellow: "ff0",
      yellowgreen: "9acd32"
    };
    var hexNames = tinycolor.hexNames = flip(names);
    function flip(o) {
      var flipped = {};
      for (var i in o) {
        if (o.hasOwnProperty(i)) {
          flipped[o[i]] = i;
        }
      }
      return flipped;
    }
    function boundAlpha(a) {
      a = parseFloat(a);
      if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
      }
      return a;
    }
    function bound01(n, max) {
      if (isOnePointZero(n))
        n = "100%";
      var processPercent = isPercentage(n);
      n = Math.min(max, Math.max(0, parseFloat(n)));
      if (processPercent) {
        n = parseInt(n * max, 10) / 100;
      }
      if (Math.abs(n - max) < 0.000001) {
        return 1;
      }
      return n % max / parseFloat(max);
    }
    function clamp01(val) {
      return Math.min(1, Math.max(0, val));
    }
    function parseIntFromHex(val) {
      return parseInt(val, 16);
    }
    function isOnePointZero(n) {
      return typeof n == "string" && n.indexOf(".") != -1 && parseFloat(n) === 1;
    }
    function isPercentage(n) {
      return typeof n === "string" && n.indexOf("%") != -1;
    }
    function pad2(c) {
      return c.length == 1 ? "0" + c : "" + c;
    }
    function convertToPercentage(n) {
      if (n <= 1) {
        n = n * 100 + "%";
      }
      return n;
    }
    function convertDecimalToHex(d) {
      return Math.round(parseFloat(d) * 255).toString(16);
    }
    function convertHexToDecimal(h) {
      return parseIntFromHex(h) / 255;
    }
    var matchers = function() {
      var CSS_INTEGER = "[-\\+]?\\d+%?";
      var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
      var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
      var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
      var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
      return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
      };
    }();
    function isValidCSSUnit(color) {
      return !!matchers.CSS_UNIT.exec(color);
    }
    function stringInputToObject(color) {
      color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
      var named = false;
      if (names[color]) {
        color = names[color];
        named = true;
      } else if (color == "transparent") {
        return {
          r: 0,
          g: 0,
          b: 0,
          a: 0,
          format: "name"
        };
      }
      var match;
      if (match = matchers.rgb.exec(color)) {
        return {
          r: match[1],
          g: match[2],
          b: match[3]
        };
      }
      if (match = matchers.rgba.exec(color)) {
        return {
          r: match[1],
          g: match[2],
          b: match[3],
          a: match[4]
        };
      }
      if (match = matchers.hsl.exec(color)) {
        return {
          h: match[1],
          s: match[2],
          l: match[3]
        };
      }
      if (match = matchers.hsla.exec(color)) {
        return {
          h: match[1],
          s: match[2],
          l: match[3],
          a: match[4]
        };
      }
      if (match = matchers.hsv.exec(color)) {
        return {
          h: match[1],
          s: match[2],
          v: match[3]
        };
      }
      if (match = matchers.hsva.exec(color)) {
        return {
          h: match[1],
          s: match[2],
          v: match[3],
          a: match[4]
        };
      }
      if (match = matchers.hex8.exec(color)) {
        return {
          r: parseIntFromHex(match[1]),
          g: parseIntFromHex(match[2]),
          b: parseIntFromHex(match[3]),
          a: convertHexToDecimal(match[4]),
          format: named ? "name" : "hex8"
        };
      }
      if (match = matchers.hex6.exec(color)) {
        return {
          r: parseIntFromHex(match[1]),
          g: parseIntFromHex(match[2]),
          b: parseIntFromHex(match[3]),
          format: named ? "name" : "hex"
        };
      }
      if (match = matchers.hex4.exec(color)) {
        return {
          r: parseIntFromHex(match[1] + "" + match[1]),
          g: parseIntFromHex(match[2] + "" + match[2]),
          b: parseIntFromHex(match[3] + "" + match[3]),
          a: convertHexToDecimal(match[4] + "" + match[4]),
          format: named ? "name" : "hex8"
        };
      }
      if (match = matchers.hex3.exec(color)) {
        return {
          r: parseIntFromHex(match[1] + "" + match[1]),
          g: parseIntFromHex(match[2] + "" + match[2]),
          b: parseIntFromHex(match[3] + "" + match[3]),
          format: named ? "name" : "hex"
        };
      }
      return false;
    }
    function validateWCAG2Parms(parms) {
      var level, size;
      parms = parms || {
        level: "AA",
        size: "small"
      };
      level = (parms.level || "AA").toUpperCase();
      size = (parms.size || "small").toLowerCase();
      if (level !== "AA" && level !== "AAA") {
        level = "AA";
      }
      if (size !== "small" && size !== "large") {
        size = "small";
      }
      return {
        level,
        size
      };
    }
    return tinycolor;
  });
});

// node_modules/tinygradient/index.js
var require_tinygradient = __commonJS((exports, module) => {
  var stepize = function(start, end, steps) {
    let step = {};
    for (let k in start) {
      if (start.hasOwnProperty(k)) {
        step[k] = steps === 0 ? 0 : (end[k] - start[k]) / steps;
      }
    }
    return step;
  };
  var interpolate = function(step, start, i, max) {
    let color = {};
    for (let k in start) {
      if (start.hasOwnProperty(k)) {
        color[k] = step[k] * i + start[k];
        color[k] = color[k] < 0 ? color[k] + max[k] : max[k] !== 1 ? color[k] % max[k] : color[k];
      }
    }
    return color;
  };
  var interpolateRgb = function(stop1, stop2, steps) {
    const start = stop1.color.toRgb();
    const end = stop2.color.toRgb();
    const step = stepize(start, end, steps);
    let gradient = [stop1.color];
    for (let i = 1;i < steps; i++) {
      const color = interpolate(step, start, i, RGBA_MAX);
      gradient.push(tinycolor(color));
    }
    return gradient;
  };
  var interpolateHsv = function(stop1, stop2, steps, mode) {
    const start = stop1.color.toHsv();
    const end = stop2.color.toHsv();
    if (start.s === 0 || end.s === 0) {
      return interpolateRgb(stop1, stop2, steps);
    }
    let trigonometric;
    if (typeof mode === "boolean") {
      trigonometric = mode;
    } else {
      const trigShortest = start.h < end.h && end.h - start.h < 180 || start.h > end.h && start.h - end.h > 180;
      trigonometric = mode === "long" && trigShortest || mode === "short" && !trigShortest;
    }
    const step = stepize(start, end, steps);
    let gradient = [stop1.color];
    let diff;
    if (start.h <= end.h && !trigonometric || start.h >= end.h && trigonometric) {
      diff = end.h - start.h;
    } else if (trigonometric) {
      diff = 360 - end.h + start.h;
    } else {
      diff = 360 - start.h + end.h;
    }
    step.h = Math.pow(-1, trigonometric ? 1 : 0) * Math.abs(diff) / steps;
    for (let i = 1;i < steps; i++) {
      const color = interpolate(step, start, i, HSVA_MAX);
      gradient.push(tinycolor(color));
    }
    return gradient;
  };
  var computeSubsteps = function(stops, steps) {
    const l = stops.length;
    steps = parseInt(steps, 10);
    if (isNaN(steps) || steps < 2) {
      throw new Error("Invalid number of steps (< 2)");
    }
    if (steps < l) {
      throw new Error("Number of steps cannot be inferior to number of stops");
    }
    let substeps = [];
    for (let i = 1;i < l; i++) {
      const step = (steps - 1) * (stops[i].pos - stops[i - 1].pos);
      substeps.push(Math.max(1, Math.round(step)));
    }
    let totalSubsteps = 1;
    for (let n = l - 1;n--; )
      totalSubsteps += substeps[n];
    while (totalSubsteps !== steps) {
      if (totalSubsteps < steps) {
        const min = Math.min.apply(null, substeps);
        substeps[substeps.indexOf(min)]++;
        totalSubsteps++;
      } else {
        const max = Math.max.apply(null, substeps);
        substeps[substeps.indexOf(max)]--;
        totalSubsteps--;
      }
    }
    return substeps;
  };
  var computeAt = function(stops, pos, method, max) {
    if (pos < 0 || pos > 1) {
      throw new Error("Position must be between 0 and 1");
    }
    let start, end;
    for (let i = 0, l = stops.length;i < l - 1; i++) {
      if (pos >= stops[i].pos && pos < stops[i + 1].pos) {
        start = stops[i];
        end = stops[i + 1];
        break;
      }
    }
    if (!start) {
      start = end = stops[stops.length - 1];
    }
    const step = stepize(start.color[method](), end.color[method](), (end.pos - start.pos) * 100);
    const color = interpolate(step, start.color[method](), (pos - start.pos) * 100, max);
    return tinycolor(color);
  };
  var tinycolor = require_tinycolor();
  var RGBA_MAX = { r: 256, g: 256, b: 256, a: 1 };
  var HSVA_MAX = { h: 360, s: 1, v: 1, a: 1 };

  class TinyGradient {
    constructor(stops) {
      if (stops.length < 2) {
        throw new Error("Invalid number of stops (< 2)");
      }
      const havingPositions = stops[0].pos !== undefined;
      let l = stops.length;
      let p = -1;
      let lastColorLess = false;
      this.stops = stops.map((stop, i) => {
        const hasPosition = stop.pos !== undefined;
        if (havingPositions ^ hasPosition) {
          throw new Error("Cannot mix positionned and not posionned color stops");
        }
        if (hasPosition) {
          const hasColor = stop.color !== undefined;
          if (!hasColor && (lastColorLess || i === 0 || i === l - 1)) {
            throw new Error("Cannot define two consecutive position-only stops");
          }
          lastColorLess = !hasColor;
          stop = {
            color: hasColor ? tinycolor(stop.color) : null,
            colorLess: !hasColor,
            pos: stop.pos
          };
          if (stop.pos < 0 || stop.pos > 1) {
            throw new Error("Color stops positions must be between 0 and 1");
          } else if (stop.pos < p) {
            throw new Error("Color stops positions are not ordered");
          }
          p = stop.pos;
        } else {
          stop = {
            color: tinycolor(stop.color !== undefined ? stop.color : stop),
            pos: i / (l - 1)
          };
        }
        return stop;
      });
      if (this.stops[0].pos !== 0) {
        this.stops.unshift({
          color: this.stops[0].color,
          pos: 0
        });
        l++;
      }
      if (this.stops[l - 1].pos !== 1) {
        this.stops.push({
          color: this.stops[l - 1].color,
          pos: 1
        });
      }
    }
    reverse() {
      let stops = [];
      this.stops.forEach(function(stop) {
        stops.push({
          color: stop.color,
          pos: 1 - stop.pos
        });
      });
      return new TinyGradient(stops.reverse());
    }
    loop() {
      let stops1 = [];
      let stops2 = [];
      this.stops.forEach((stop) => {
        stops1.push({
          color: stop.color,
          pos: stop.pos / 2
        });
      });
      this.stops.slice(0, -1).forEach((stop) => {
        stops2.push({
          color: stop.color,
          pos: 1 - stop.pos / 2
        });
      });
      return new TinyGradient(stops1.concat(stops2.reverse()));
    }
    rgb(steps) {
      const substeps = computeSubsteps(this.stops, steps);
      let gradient = [];
      this.stops.forEach((stop, i) => {
        if (stop.colorLess) {
          stop.color = interpolateRgb(this.stops[i - 1], this.stops[i + 1], 2)[1];
        }
      });
      for (let i = 0, l = this.stops.length;i < l - 1; i++) {
        const rgb = interpolateRgb(this.stops[i], this.stops[i + 1], substeps[i]);
        gradient.splice(gradient.length, 0, ...rgb);
      }
      gradient.push(this.stops[this.stops.length - 1].color);
      return gradient;
    }
    hsv(steps, mode) {
      const substeps = computeSubsteps(this.stops, steps);
      let gradient = [];
      this.stops.forEach((stop, i) => {
        if (stop.colorLess) {
          stop.color = interpolateHsv(this.stops[i - 1], this.stops[i + 1], 2, mode)[1];
        }
      });
      for (let i = 0, l = this.stops.length;i < l - 1; i++) {
        const hsv = interpolateHsv(this.stops[i], this.stops[i + 1], substeps[i], mode);
        gradient.splice(gradient.length, 0, ...hsv);
      }
      gradient.push(this.stops[this.stops.length - 1].color);
      return gradient;
    }
    css(mode, direction) {
      mode = mode || "linear";
      direction = direction || (mode === "linear" ? "to right" : "ellipse at center");
      let css = mode + "-gradient(" + direction;
      this.stops.forEach(function(stop) {
        css += ", " + (stop.colorLess ? "" : stop.color.toRgbString() + " ") + stop.pos * 100 + "%";
      });
      css += ")";
      return css;
    }
    rgbAt(pos) {
      return computeAt(this.stops, pos, "toRgb", RGBA_MAX);
    }
    hsvAt(pos) {
      return computeAt(this.stops, pos, "toHsv", HSVA_MAX);
    }
  }
  module.exports = function(stops) {
    if (arguments.length === 1) {
      if (!Array.isArray(arguments[0])) {
        throw new Error('"stops" is not an array');
      }
      stops = arguments[0];
    } else {
      stops = Array.prototype.slice.call(arguments);
    }
    return new TinyGradient(stops);
  };
});

// node_modules/gradient-string/index.js
var require_gradient_string = __commonJS((exports, module) => {
  var InitGradient = function(...args) {
    const grad = tinygradient.apply(this, args);
    const ret = (str, opts) => applyGradient(str ? str.toString() : "", grad, opts);
    ret.multiline = (str, opts) => multilineGradient(str ? str.toString() : "", grad, opts);
    return ret;
  };
  var applyGradient = function(str, gradient, opts) {
    const options = validateOptions(opts);
    const colorsCount = Math.max(str.replace(forbiddenChars, "").length, gradient.stops.length);
    const colors = getColors(gradient, options, colorsCount);
    let result = "";
    for (const s of str) {
      result += s.match(forbiddenChars) ? s : chalk.hex(colors.shift().toHex())(s);
    }
    return result;
  };
  var multilineGradient = function(str, gradient, opts) {
    const options = validateOptions(opts);
    const lines = str.split("\n");
    const maxLength = Math.max.apply(null, lines.map((l) => l.length).concat([gradient.stops.length]));
    const colors = getColors(gradient, options, maxLength);
    const results = [];
    for (const line of lines) {
      const lineColors = colors.slice(0);
      let lineResult = "";
      for (const l of line) {
        lineResult += chalk.hex(lineColors.shift().toHex())(l);
      }
      results.push(lineResult);
    }
    return results.join("\n");
  };
  var validateOptions = function(opts) {
    const options = { interpolation: "rgb", hsvSpin: "short", ...opts };
    if (opts !== undefined && typeof opts !== "object") {
      throw new TypeError(`Expected \`options\` to be an \`object\`, got \`${typeof opts}\``);
    }
    if (typeof options.interpolation !== "string") {
      throw new TypeError(`Expected \`options.interpolation\` to be a \`string\`, got \`${typeof options.interpolation}\``);
    }
    if (options.interpolation.toLowerCase() === "hsv" && typeof options.hsvSpin !== "string") {
      throw new TypeError(`Expected \`options.hsvSpin\` to be a \`string\`, got \`${typeof options.hsvSpin}\``);
    }
    return options;
  };
  var chalk = require_source();
  var tinygradient = require_tinygradient();
  var forbiddenChars = /\s/g;
  var getColors = (gradient, options, count) => options.interpolation.toLowerCase() === "hsv" ? gradient.hsv(count, options.hsvSpin.toLowerCase()) : gradient.rgb(count);
  var aliases = {
    atlas: { colors: ["#feac5e", "#c779d0", "#4bc0c8"], options: {} },
    cristal: { colors: ["#bdfff3", "#4ac29a"], options: {} },
    teen: { colors: ["#77a1d3", "#79cbca", "#e684ae"], options: {} },
    mind: { colors: ["#473b7b", "#3584a7", "#30d2be"], options: {} },
    morning: { colors: ["#ff5f6d", "#ffc371"], options: { interpolation: "hsv" } },
    vice: { colors: ["#5ee7df", "#b490ca"], options: { interpolation: "hsv" } },
    passion: { colors: ["#f43b47", "#453a94"], options: {} },
    fruit: { colors: ["#ff4e50", "#f9d423"], options: {} },
    instagram: { colors: ["#833ab4", "#fd1d1d", "#fcb045"], options: {} },
    retro: { colors: ["#3f51b1", "#5a55ae", "#7b5fac", "#8f6aae", "#a86aa4", "#cc6b8e", "#f18271", "#f3a469", "#f7c978"], options: {} },
    summer: { colors: ["#fdbb2d", "#22c1c3"], options: {} },
    rainbow: { colors: ["#ff0000", "#ff0100"], options: { interpolation: "hsv", hsvSpin: "long" } },
    pastel: { colors: ["#74ebd5", "#74ecd5"], options: { interpolation: "hsv", hsvSpin: "long" } }
  };
  module.exports = InitGradient;
  for (const a in aliases) {
    module.exports[a] = (str) => new InitGradient(aliases[a].colors)(str, aliases[a].options);
    module.exports[a].multiline = (str) => new InitGradient(aliases[a].colors).multiline(str, aliases[a].options);
  }
});

// node_modules/cli-spinners/spinners.json
var require_spinners = __commonJS((exports, module) => {
  module.exports = {
    dots: {
      interval: 80,
      frames: [
        "\u280B",
        "\u2819",
        "\u2839",
        "\u2838",
        "\u283C",
        "\u2834",
        "\u2826",
        "\u2827",
        "\u2807",
        "\u280F"
      ]
    },
    dots2: {
      interval: 80,
      frames: [
        "\u28FE",
        "\u28FD",
        "\u28FB",
        "\u28BF",
        "\u287F",
        "\u28DF",
        "\u28EF",
        "\u28F7"
      ]
    },
    dots3: {
      interval: 80,
      frames: [
        "\u280B",
        "\u2819",
        "\u281A",
        "\u281E",
        "\u2816",
        "\u2826",
        "\u2834",
        "\u2832",
        "\u2833",
        "\u2813"
      ]
    },
    dots4: {
      interval: 80,
      frames: [
        "\u2804",
        "\u2806",
        "\u2807",
        "\u280B",
        "\u2819",
        "\u2838",
        "\u2830",
        "\u2820",
        "\u2830",
        "\u2838",
        "\u2819",
        "\u280B",
        "\u2807",
        "\u2806"
      ]
    },
    dots5: {
      interval: 80,
      frames: [
        "\u280B",
        "\u2819",
        "\u281A",
        "\u2812",
        "\u2802",
        "\u2802",
        "\u2812",
        "\u2832",
        "\u2834",
        "\u2826",
        "\u2816",
        "\u2812",
        "\u2810",
        "\u2810",
        "\u2812",
        "\u2813",
        "\u280B"
      ]
    },
    dots6: {
      interval: 80,
      frames: [
        "\u2801",
        "\u2809",
        "\u2819",
        "\u281A",
        "\u2812",
        "\u2802",
        "\u2802",
        "\u2812",
        "\u2832",
        "\u2834",
        "\u2824",
        "\u2804",
        "\u2804",
        "\u2824",
        "\u2834",
        "\u2832",
        "\u2812",
        "\u2802",
        "\u2802",
        "\u2812",
        "\u281A",
        "\u2819",
        "\u2809",
        "\u2801"
      ]
    },
    dots7: {
      interval: 80,
      frames: [
        "\u2808",
        "\u2809",
        "\u280B",
        "\u2813",
        "\u2812",
        "\u2810",
        "\u2810",
        "\u2812",
        "\u2816",
        "\u2826",
        "\u2824",
        "\u2820",
        "\u2820",
        "\u2824",
        "\u2826",
        "\u2816",
        "\u2812",
        "\u2810",
        "\u2810",
        "\u2812",
        "\u2813",
        "\u280B",
        "\u2809",
        "\u2808"
      ]
    },
    dots8: {
      interval: 80,
      frames: [
        "\u2801",
        "\u2801",
        "\u2809",
        "\u2819",
        "\u281A",
        "\u2812",
        "\u2802",
        "\u2802",
        "\u2812",
        "\u2832",
        "\u2834",
        "\u2824",
        "\u2804",
        "\u2804",
        "\u2824",
        "\u2820",
        "\u2820",
        "\u2824",
        "\u2826",
        "\u2816",
        "\u2812",
        "\u2810",
        "\u2810",
        "\u2812",
        "\u2813",
        "\u280B",
        "\u2809",
        "\u2808",
        "\u2808"
      ]
    },
    dots9: {
      interval: 80,
      frames: [
        "\u28B9",
        "\u28BA",
        "\u28BC",
        "\u28F8",
        "\u28C7",
        "\u2867",
        "\u2857",
        "\u284F"
      ]
    },
    dots10: {
      interval: 80,
      frames: [
        "\u2884",
        "\u2882",
        "\u2881",
        "\u2841",
        "\u2848",
        "\u2850",
        "\u2860"
      ]
    },
    dots11: {
      interval: 100,
      frames: [
        "\u2801",
        "\u2802",
        "\u2804",
        "\u2840",
        "\u2880",
        "\u2820",
        "\u2810",
        "\u2808"
      ]
    },
    dots12: {
      interval: 80,
      frames: [
        "\u2880\u2800",
        "\u2840\u2800",
        "\u2804\u2800",
        "\u2882\u2800",
        "\u2842\u2800",
        "\u2805\u2800",
        "\u2883\u2800",
        "\u2843\u2800",
        "\u280D\u2800",
        "\u288B\u2800",
        "\u284B\u2800",
        "\u280D\u2801",
        "\u288B\u2801",
        "\u284B\u2801",
        "\u280D\u2809",
        "\u280B\u2809",
        "\u280B\u2809",
        "\u2809\u2819",
        "\u2809\u2819",
        "\u2809\u2829",
        "\u2808\u2899",
        "\u2808\u2859",
        "\u2888\u2829",
        "\u2840\u2899",
        "\u2804\u2859",
        "\u2882\u2829",
        "\u2842\u2898",
        "\u2805\u2858",
        "\u2883\u2828",
        "\u2843\u2890",
        "\u280D\u2850",
        "\u288B\u2820",
        "\u284B\u2880",
        "\u280D\u2841",
        "\u288B\u2801",
        "\u284B\u2801",
        "\u280D\u2809",
        "\u280B\u2809",
        "\u280B\u2809",
        "\u2809\u2819",
        "\u2809\u2819",
        "\u2809\u2829",
        "\u2808\u2899",
        "\u2808\u2859",
        "\u2808\u2829",
        "\u2800\u2899",
        "\u2800\u2859",
        "\u2800\u2829",
        "\u2800\u2898",
        "\u2800\u2858",
        "\u2800\u2828",
        "\u2800\u2890",
        "\u2800\u2850",
        "\u2800\u2820",
        "\u2800\u2880",
        "\u2800\u2840"
      ]
    },
    dots13: {
      interval: 80,
      frames: [
        "\u28FC",
        "\u28F9",
        "\u28BB",
        "\u283F",
        "\u285F",
        "\u28CF",
        "\u28E7",
        "\u28F6"
      ]
    },
    dots8Bit: {
      interval: 80,
      frames: [
        "\u2800",
        "\u2801",
        "\u2802",
        "\u2803",
        "\u2804",
        "\u2805",
        "\u2806",
        "\u2807",
        "\u2840",
        "\u2841",
        "\u2842",
        "\u2843",
        "\u2844",
        "\u2845",
        "\u2846",
        "\u2847",
        "\u2808",
        "\u2809",
        "\u280A",
        "\u280B",
        "\u280C",
        "\u280D",
        "\u280E",
        "\u280F",
        "\u2848",
        "\u2849",
        "\u284A",
        "\u284B",
        "\u284C",
        "\u284D",
        "\u284E",
        "\u284F",
        "\u2810",
        "\u2811",
        "\u2812",
        "\u2813",
        "\u2814",
        "\u2815",
        "\u2816",
        "\u2817",
        "\u2850",
        "\u2851",
        "\u2852",
        "\u2853",
        "\u2854",
        "\u2855",
        "\u2856",
        "\u2857",
        "\u2818",
        "\u2819",
        "\u281A",
        "\u281B",
        "\u281C",
        "\u281D",
        "\u281E",
        "\u281F",
        "\u2858",
        "\u2859",
        "\u285A",
        "\u285B",
        "\u285C",
        "\u285D",
        "\u285E",
        "\u285F",
        "\u2820",
        "\u2821",
        "\u2822",
        "\u2823",
        "\u2824",
        "\u2825",
        "\u2826",
        "\u2827",
        "\u2860",
        "\u2861",
        "\u2862",
        "\u2863",
        "\u2864",
        "\u2865",
        "\u2866",
        "\u2867",
        "\u2828",
        "\u2829",
        "\u282A",
        "\u282B",
        "\u282C",
        "\u282D",
        "\u282E",
        "\u282F",
        "\u2868",
        "\u2869",
        "\u286A",
        "\u286B",
        "\u286C",
        "\u286D",
        "\u286E",
        "\u286F",
        "\u2830",
        "\u2831",
        "\u2832",
        "\u2833",
        "\u2834",
        "\u2835",
        "\u2836",
        "\u2837",
        "\u2870",
        "\u2871",
        "\u2872",
        "\u2873",
        "\u2874",
        "\u2875",
        "\u2876",
        "\u2877",
        "\u2838",
        "\u2839",
        "\u283A",
        "\u283B",
        "\u283C",
        "\u283D",
        "\u283E",
        "\u283F",
        "\u2878",
        "\u2879",
        "\u287A",
        "\u287B",
        "\u287C",
        "\u287D",
        "\u287E",
        "\u287F",
        "\u2880",
        "\u2881",
        "\u2882",
        "\u2883",
        "\u2884",
        "\u2885",
        "\u2886",
        "\u2887",
        "\u28C0",
        "\u28C1",
        "\u28C2",
        "\u28C3",
        "\u28C4",
        "\u28C5",
        "\u28C6",
        "\u28C7",
        "\u2888",
        "\u2889",
        "\u288A",
        "\u288B",
        "\u288C",
        "\u288D",
        "\u288E",
        "\u288F",
        "\u28C8",
        "\u28C9",
        "\u28CA",
        "\u28CB",
        "\u28CC",
        "\u28CD",
        "\u28CE",
        "\u28CF",
        "\u2890",
        "\u2891",
        "\u2892",
        "\u2893",
        "\u2894",
        "\u2895",
        "\u2896",
        "\u2897",
        "\u28D0",
        "\u28D1",
        "\u28D2",
        "\u28D3",
        "\u28D4",
        "\u28D5",
        "\u28D6",
        "\u28D7",
        "\u2898",
        "\u2899",
        "\u289A",
        "\u289B",
        "\u289C",
        "\u289D",
        "\u289E",
        "\u289F",
        "\u28D8",
        "\u28D9",
        "\u28DA",
        "\u28DB",
        "\u28DC",
        "\u28DD",
        "\u28DE",
        "\u28DF",
        "\u28A0",
        "\u28A1",
        "\u28A2",
        "\u28A3",
        "\u28A4",
        "\u28A5",
        "\u28A6",
        "\u28A7",
        "\u28E0",
        "\u28E1",
        "\u28E2",
        "\u28E3",
        "\u28E4",
        "\u28E5",
        "\u28E6",
        "\u28E7",
        "\u28A8",
        "\u28A9",
        "\u28AA",
        "\u28AB",
        "\u28AC",
        "\u28AD",
        "\u28AE",
        "\u28AF",
        "\u28E8",
        "\u28E9",
        "\u28EA",
        "\u28EB",
        "\u28EC",
        "\u28ED",
        "\u28EE",
        "\u28EF",
        "\u28B0",
        "\u28B1",
        "\u28B2",
        "\u28B3",
        "\u28B4",
        "\u28B5",
        "\u28B6",
        "\u28B7",
        "\u28F0",
        "\u28F1",
        "\u28F2",
        "\u28F3",
        "\u28F4",
        "\u28F5",
        "\u28F6",
        "\u28F7",
        "\u28B8",
        "\u28B9",
        "\u28BA",
        "\u28BB",
        "\u28BC",
        "\u28BD",
        "\u28BE",
        "\u28BF",
        "\u28F8",
        "\u28F9",
        "\u28FA",
        "\u28FB",
        "\u28FC",
        "\u28FD",
        "\u28FE",
        "\u28FF"
      ]
    },
    sand: {
      interval: 80,
      frames: [
        "\u2801",
        "\u2802",
        "\u2804",
        "\u2840",
        "\u2848",
        "\u2850",
        "\u2860",
        "\u28C0",
        "\u28C1",
        "\u28C2",
        "\u28C4",
        "\u28CC",
        "\u28D4",
        "\u28E4",
        "\u28E5",
        "\u28E6",
        "\u28EE",
        "\u28F6",
        "\u28F7",
        "\u28FF",
        "\u287F",
        "\u283F",
        "\u289F",
        "\u281F",
        "\u285B",
        "\u281B",
        "\u282B",
        "\u288B",
        "\u280B",
        "\u280D",
        "\u2849",
        "\u2809",
        "\u2811",
        "\u2821",
        "\u2881"
      ]
    },
    line: {
      interval: 130,
      frames: [
        "-",
        "\\",
        "|",
        "/"
      ]
    },
    line2: {
      interval: 100,
      frames: [
        "\u2802",
        "-",
        "\u2013",
        "\u2014",
        "\u2013",
        "-"
      ]
    },
    pipe: {
      interval: 100,
      frames: [
        "\u2524",
        "\u2518",
        "\u2534",
        "\u2514",
        "\u251C",
        "\u250C",
        "\u252C",
        "\u2510"
      ]
    },
    simpleDots: {
      interval: 400,
      frames: [
        ".  ",
        ".. ",
        "...",
        "   "
      ]
    },
    simpleDotsScrolling: {
      interval: 200,
      frames: [
        ".  ",
        ".. ",
        "...",
        " ..",
        "  .",
        "   "
      ]
    },
    star: {
      interval: 70,
      frames: [
        "\u2736",
        "\u2738",
        "\u2739",
        "\u273A",
        "\u2739",
        "\u2737"
      ]
    },
    star2: {
      interval: 80,
      frames: [
        "+",
        "x",
        "*"
      ]
    },
    flip: {
      interval: 70,
      frames: [
        "_",
        "_",
        "_",
        "-",
        "`",
        "`",
        "'",
        "\xB4",
        "-",
        "_",
        "_",
        "_"
      ]
    },
    hamburger: {
      interval: 100,
      frames: [
        "\u2631",
        "\u2632",
        "\u2634"
      ]
    },
    growVertical: {
      interval: 120,
      frames: [
        "\u2581",
        "\u2583",
        "\u2584",
        "\u2585",
        "\u2586",
        "\u2587",
        "\u2586",
        "\u2585",
        "\u2584",
        "\u2583"
      ]
    },
    growHorizontal: {
      interval: 120,
      frames: [
        "\u258F",
        "\u258E",
        "\u258D",
        "\u258C",
        "\u258B",
        "\u258A",
        "\u2589",
        "\u258A",
        "\u258B",
        "\u258C",
        "\u258D",
        "\u258E"
      ]
    },
    balloon: {
      interval: 140,
      frames: [
        " ",
        ".",
        "o",
        "O",
        "@",
        "*",
        " "
      ]
    },
    balloon2: {
      interval: 120,
      frames: [
        ".",
        "o",
        "O",
        "\xB0",
        "O",
        "o",
        "."
      ]
    },
    noise: {
      interval: 100,
      frames: [
        "\u2593",
        "\u2592",
        "\u2591"
      ]
    },
    bounce: {
      interval: 120,
      frames: [
        "\u2801",
        "\u2802",
        "\u2804",
        "\u2802"
      ]
    },
    boxBounce: {
      interval: 120,
      frames: [
        "\u2596",
        "\u2598",
        "\u259D",
        "\u2597"
      ]
    },
    boxBounce2: {
      interval: 100,
      frames: [
        "\u258C",
        "\u2580",
        "\u2590",
        "\u2584"
      ]
    },
    triangle: {
      interval: 50,
      frames: [
        "\u25E2",
        "\u25E3",
        "\u25E4",
        "\u25E5"
      ]
    },
    binary: {
      interval: 80,
      frames: [
        "010010",
        "001100",
        "100101",
        "111010",
        "111101",
        "010111",
        "101011",
        "111000",
        "110011",
        "110101"
      ]
    },
    arc: {
      interval: 100,
      frames: [
        "\u25DC",
        "\u25E0",
        "\u25DD",
        "\u25DE",
        "\u25E1",
        "\u25DF"
      ]
    },
    circle: {
      interval: 120,
      frames: [
        "\u25E1",
        "\u2299",
        "\u25E0"
      ]
    },
    squareCorners: {
      interval: 180,
      frames: [
        "\u25F0",
        "\u25F3",
        "\u25F2",
        "\u25F1"
      ]
    },
    circleQuarters: {
      interval: 120,
      frames: [
        "\u25F4",
        "\u25F7",
        "\u25F6",
        "\u25F5"
      ]
    },
    circleHalves: {
      interval: 50,
      frames: [
        "\u25D0",
        "\u25D3",
        "\u25D1",
        "\u25D2"
      ]
    },
    squish: {
      interval: 100,
      frames: [
        "\u256B",
        "\u256A"
      ]
    },
    toggle: {
      interval: 250,
      frames: [
        "\u22B6",
        "\u22B7"
      ]
    },
    toggle2: {
      interval: 80,
      frames: [
        "\u25AB",
        "\u25AA"
      ]
    },
    toggle3: {
      interval: 120,
      frames: [
        "\u25A1",
        "\u25A0"
      ]
    },
    toggle4: {
      interval: 100,
      frames: [
        "\u25A0",
        "\u25A1",
        "\u25AA",
        "\u25AB"
      ]
    },
    toggle5: {
      interval: 100,
      frames: [
        "\u25AE",
        "\u25AF"
      ]
    },
    toggle6: {
      interval: 300,
      frames: [
        "\u101D",
        "\u1040"
      ]
    },
    toggle7: {
      interval: 80,
      frames: [
        "\u29BE",
        "\u29BF"
      ]
    },
    toggle8: {
      interval: 100,
      frames: [
        "\u25CD",
        "\u25CC"
      ]
    },
    toggle9: {
      interval: 100,
      frames: [
        "\u25C9",
        "\u25CE"
      ]
    },
    toggle10: {
      interval: 100,
      frames: [
        "\u3282",
        "\u3280",
        "\u3281"
      ]
    },
    toggle11: {
      interval: 50,
      frames: [
        "\u29C7",
        "\u29C6"
      ]
    },
    toggle12: {
      interval: 120,
      frames: [
        "\u2617",
        "\u2616"
      ]
    },
    toggle13: {
      interval: 80,
      frames: [
        "=",
        "*",
        "-"
      ]
    },
    arrow: {
      interval: 100,
      frames: [
        "\u2190",
        "\u2196",
        "\u2191",
        "\u2197",
        "\u2192",
        "\u2198",
        "\u2193",
        "\u2199"
      ]
    },
    arrow2: {
      interval: 80,
      frames: [
        "\u2B06\uFE0F ",
        "\u2197\uFE0F ",
        "\u27A1\uFE0F ",
        "\u2198\uFE0F ",
        "\u2B07\uFE0F ",
        "\u2199\uFE0F ",
        "\u2B05\uFE0F ",
        "\u2196\uFE0F "
      ]
    },
    arrow3: {
      interval: 120,
      frames: [
        "\u25B9\u25B9\u25B9\u25B9\u25B9",
        "\u25B8\u25B9\u25B9\u25B9\u25B9",
        "\u25B9\u25B8\u25B9\u25B9\u25B9",
        "\u25B9\u25B9\u25B8\u25B9\u25B9",
        "\u25B9\u25B9\u25B9\u25B8\u25B9",
        "\u25B9\u25B9\u25B9\u25B9\u25B8"
      ]
    },
    bouncingBar: {
      interval: 80,
      frames: [
        "[    ]",
        "[=   ]",
        "[==  ]",
        "[=== ]",
        "[====]",
        "[ ===]",
        "[  ==]",
        "[   =]",
        "[    ]",
        "[   =]",
        "[  ==]",
        "[ ===]",
        "[====]",
        "[=== ]",
        "[==  ]",
        "[=   ]"
      ]
    },
    bouncingBall: {
      interval: 80,
      frames: [
        "( \u25CF    )",
        "(  \u25CF   )",
        "(   \u25CF  )",
        "(    \u25CF )",
        "(     \u25CF)",
        "(    \u25CF )",
        "(   \u25CF  )",
        "(  \u25CF   )",
        "( \u25CF    )",
        "(\u25CF     )"
      ]
    },
    smiley: {
      interval: 200,
      frames: [
        "\uD83D\uDE04 ",
        "\uD83D\uDE1D "
      ]
    },
    monkey: {
      interval: 300,
      frames: [
        "\uD83D\uDE48 ",
        "\uD83D\uDE48 ",
        "\uD83D\uDE49 ",
        "\uD83D\uDE4A "
      ]
    },
    hearts: {
      interval: 100,
      frames: [
        "\uD83D\uDC9B ",
        "\uD83D\uDC99 ",
        "\uD83D\uDC9C ",
        "\uD83D\uDC9A ",
        "\u2764\uFE0F "
      ]
    },
    clock: {
      interval: 100,
      frames: [
        "\uD83D\uDD5B ",
        "\uD83D\uDD50 ",
        "\uD83D\uDD51 ",
        "\uD83D\uDD52 ",
        "\uD83D\uDD53 ",
        "\uD83D\uDD54 ",
        "\uD83D\uDD55 ",
        "\uD83D\uDD56 ",
        "\uD83D\uDD57 ",
        "\uD83D\uDD58 ",
        "\uD83D\uDD59 ",
        "\uD83D\uDD5A "
      ]
    },
    earth: {
      interval: 180,
      frames: [
        "\uD83C\uDF0D ",
        "\uD83C\uDF0E ",
        "\uD83C\uDF0F "
      ]
    },
    material: {
      interval: 17,
      frames: [
        "\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581",
        "\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581",
        "\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581",
        "\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581",
        "\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588",
        "\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588",
        "\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588",
        "\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588",
        "\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588",
        "\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588",
        "\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588",
        "\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581",
        "\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581",
        "\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
        "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581"
      ]
    },
    moon: {
      interval: 80,
      frames: [
        "\uD83C\uDF11 ",
        "\uD83C\uDF12 ",
        "\uD83C\uDF13 ",
        "\uD83C\uDF14 ",
        "\uD83C\uDF15 ",
        "\uD83C\uDF16 ",
        "\uD83C\uDF17 ",
        "\uD83C\uDF18 "
      ]
    },
    runner: {
      interval: 140,
      frames: [
        "\uD83D\uDEB6 ",
        "\uD83C\uDFC3 "
      ]
    },
    pong: {
      interval: 80,
      frames: [
        "\u2590\u2802       \u258C",
        "\u2590\u2808       \u258C",
        "\u2590 \u2802      \u258C",
        "\u2590 \u2820      \u258C",
        "\u2590  \u2840     \u258C",
        "\u2590  \u2820     \u258C",
        "\u2590   \u2802    \u258C",
        "\u2590   \u2808    \u258C",
        "\u2590    \u2802   \u258C",
        "\u2590    \u2820   \u258C",
        "\u2590     \u2840  \u258C",
        "\u2590     \u2820  \u258C",
        "\u2590      \u2802 \u258C",
        "\u2590      \u2808 \u258C",
        "\u2590       \u2802\u258C",
        "\u2590       \u2820\u258C",
        "\u2590       \u2840\u258C",
        "\u2590      \u2820 \u258C",
        "\u2590      \u2802 \u258C",
        "\u2590     \u2808  \u258C",
        "\u2590     \u2802  \u258C",
        "\u2590    \u2820   \u258C",
        "\u2590    \u2840   \u258C",
        "\u2590   \u2820    \u258C",
        "\u2590   \u2802    \u258C",
        "\u2590  \u2808     \u258C",
        "\u2590  \u2802     \u258C",
        "\u2590 \u2820      \u258C",
        "\u2590 \u2840      \u258C",
        "\u2590\u2820       \u258C"
      ]
    },
    shark: {
      interval: 120,
      frames: [
        "\u2590|\\____________\u258C",
        "\u2590_|\\___________\u258C",
        "\u2590__|\\__________\u258C",
        "\u2590___|\\_________\u258C",
        "\u2590____|\\________\u258C",
        "\u2590_____|\\_______\u258C",
        "\u2590______|\\______\u258C",
        "\u2590_______|\\_____\u258C",
        "\u2590________|\\____\u258C",
        "\u2590_________|\\___\u258C",
        "\u2590__________|\\__\u258C",
        "\u2590___________|\\_\u258C",
        "\u2590____________|\\\u258C",
        "\u2590____________/|\u258C",
        "\u2590___________/|_\u258C",
        "\u2590__________/|__\u258C",
        "\u2590_________/|___\u258C",
        "\u2590________/|____\u258C",
        "\u2590_______/|_____\u258C",
        "\u2590______/|______\u258C",
        "\u2590_____/|_______\u258C",
        "\u2590____/|________\u258C",
        "\u2590___/|_________\u258C",
        "\u2590__/|__________\u258C",
        "\u2590_/|___________\u258C",
        "\u2590/|____________\u258C"
      ]
    },
    dqpb: {
      interval: 100,
      frames: [
        "d",
        "q",
        "p",
        "b"
      ]
    },
    weather: {
      interval: 100,
      frames: [
        "\u2600\uFE0F ",
        "\u2600\uFE0F ",
        "\u2600\uFE0F ",
        "\uD83C\uDF24 ",
        "\u26C5\uFE0F ",
        "\uD83C\uDF25 ",
        "\u2601\uFE0F ",
        "\uD83C\uDF27 ",
        "\uD83C\uDF28 ",
        "\uD83C\uDF27 ",
        "\uD83C\uDF28 ",
        "\uD83C\uDF27 ",
        "\uD83C\uDF28 ",
        "\u26C8 ",
        "\uD83C\uDF28 ",
        "\uD83C\uDF27 ",
        "\uD83C\uDF28 ",
        "\u2601\uFE0F ",
        "\uD83C\uDF25 ",
        "\u26C5\uFE0F ",
        "\uD83C\uDF24 ",
        "\u2600\uFE0F ",
        "\u2600\uFE0F "
      ]
    },
    christmas: {
      interval: 400,
      frames: [
        "\uD83C\uDF32",
        "\uD83C\uDF84"
      ]
    },
    grenade: {
      interval: 80,
      frames: [
        "\u060C  ",
        "\u2032  ",
        " \xB4 ",
        " \u203E ",
        "  \u2E0C",
        "  \u2E0A",
        "  |",
        "  \u204E",
        "  \u2055",
        " \u0DF4 ",
        "  \u2053",
        "   ",
        "   ",
        "   "
      ]
    },
    point: {
      interval: 125,
      frames: [
        "\u2219\u2219\u2219",
        "\u25CF\u2219\u2219",
        "\u2219\u25CF\u2219",
        "\u2219\u2219\u25CF",
        "\u2219\u2219\u2219"
      ]
    },
    layer: {
      interval: 150,
      frames: [
        "-",
        "=",
        "\u2261"
      ]
    },
    betaWave: {
      interval: 80,
      frames: [
        "\u03C1\u03B2\u03B2\u03B2\u03B2\u03B2\u03B2",
        "\u03B2\u03C1\u03B2\u03B2\u03B2\u03B2\u03B2",
        "\u03B2\u03B2\u03C1\u03B2\u03B2\u03B2\u03B2",
        "\u03B2\u03B2\u03B2\u03C1\u03B2\u03B2\u03B2",
        "\u03B2\u03B2\u03B2\u03B2\u03C1\u03B2\u03B2",
        "\u03B2\u03B2\u03B2\u03B2\u03B2\u03C1\u03B2",
        "\u03B2\u03B2\u03B2\u03B2\u03B2\u03B2\u03C1"
      ]
    },
    fingerDance: {
      interval: 160,
      frames: [
        "\uD83E\uDD18 ",
        "\uD83E\uDD1F ",
        "\uD83D\uDD96 ",
        "\u270B ",
        "\uD83E\uDD1A ",
        "\uD83D\uDC46 "
      ]
    },
    fistBump: {
      interval: 80,
      frames: [
        "\uD83E\uDD1C\u3000\u3000\u3000\u3000\uD83E\uDD1B ",
        "\uD83E\uDD1C\u3000\u3000\u3000\u3000\uD83E\uDD1B ",
        "\uD83E\uDD1C\u3000\u3000\u3000\u3000\uD83E\uDD1B ",
        "\u3000\uD83E\uDD1C\u3000\u3000\uD83E\uDD1B\u3000 ",
        "\u3000\u3000\uD83E\uDD1C\uD83E\uDD1B\u3000\u3000 ",
        "\u3000\uD83E\uDD1C\u2728\uD83E\uDD1B\u3000\u3000 ",
        "\uD83E\uDD1C\u3000\u2728\u3000\uD83E\uDD1B\u3000 "
      ]
    },
    soccerHeader: {
      interval: 80,
      frames: [
        " \uD83E\uDDD1\u26BD\uFE0F       \uD83E\uDDD1 ",
        "\uD83E\uDDD1  \u26BD\uFE0F      \uD83E\uDDD1 ",
        "\uD83E\uDDD1   \u26BD\uFE0F     \uD83E\uDDD1 ",
        "\uD83E\uDDD1    \u26BD\uFE0F    \uD83E\uDDD1 ",
        "\uD83E\uDDD1     \u26BD\uFE0F   \uD83E\uDDD1 ",
        "\uD83E\uDDD1      \u26BD\uFE0F  \uD83E\uDDD1 ",
        "\uD83E\uDDD1       \u26BD\uFE0F\uD83E\uDDD1  ",
        "\uD83E\uDDD1      \u26BD\uFE0F  \uD83E\uDDD1 ",
        "\uD83E\uDDD1     \u26BD\uFE0F   \uD83E\uDDD1 ",
        "\uD83E\uDDD1    \u26BD\uFE0F    \uD83E\uDDD1 ",
        "\uD83E\uDDD1   \u26BD\uFE0F     \uD83E\uDDD1 ",
        "\uD83E\uDDD1  \u26BD\uFE0F      \uD83E\uDDD1 "
      ]
    },
    mindblown: {
      interval: 160,
      frames: [
        "\uD83D\uDE10 ",
        "\uD83D\uDE10 ",
        "\uD83D\uDE2E ",
        "\uD83D\uDE2E ",
        "\uD83D\uDE26 ",
        "\uD83D\uDE26 ",
        "\uD83D\uDE27 ",
        "\uD83D\uDE27 ",
        "\uD83E\uDD2F ",
        "\uD83D\uDCA5 ",
        "\u2728 ",
        "\u3000 ",
        "\u3000 ",
        "\u3000 "
      ]
    },
    speaker: {
      interval: 160,
      frames: [
        "\uD83D\uDD08 ",
        "\uD83D\uDD09 ",
        "\uD83D\uDD0A ",
        "\uD83D\uDD09 "
      ]
    },
    orangePulse: {
      interval: 100,
      frames: [
        "\uD83D\uDD38 ",
        "\uD83D\uDD36 ",
        "\uD83D\uDFE0 ",
        "\uD83D\uDFE0 ",
        "\uD83D\uDD36 "
      ]
    },
    bluePulse: {
      interval: 100,
      frames: [
        "\uD83D\uDD39 ",
        "\uD83D\uDD37 ",
        "\uD83D\uDD35 ",
        "\uD83D\uDD35 ",
        "\uD83D\uDD37 "
      ]
    },
    orangeBluePulse: {
      interval: 100,
      frames: [
        "\uD83D\uDD38 ",
        "\uD83D\uDD36 ",
        "\uD83D\uDFE0 ",
        "\uD83D\uDFE0 ",
        "\uD83D\uDD36 ",
        "\uD83D\uDD39 ",
        "\uD83D\uDD37 ",
        "\uD83D\uDD35 ",
        "\uD83D\uDD35 ",
        "\uD83D\uDD37 "
      ]
    },
    timeTravel: {
      interval: 100,
      frames: [
        "\uD83D\uDD5B ",
        "\uD83D\uDD5A ",
        "\uD83D\uDD59 ",
        "\uD83D\uDD58 ",
        "\uD83D\uDD57 ",
        "\uD83D\uDD56 ",
        "\uD83D\uDD55 ",
        "\uD83D\uDD54 ",
        "\uD83D\uDD53 ",
        "\uD83D\uDD52 ",
        "\uD83D\uDD51 ",
        "\uD83D\uDD50 "
      ]
    },
    aesthetic: {
      interval: 80,
      frames: [
        "\u25B0\u25B1\u25B1\u25B1\u25B1\u25B1\u25B1",
        "\u25B0\u25B0\u25B1\u25B1\u25B1\u25B1\u25B1",
        "\u25B0\u25B0\u25B0\u25B1\u25B1\u25B1\u25B1",
        "\u25B0\u25B0\u25B0\u25B0\u25B1\u25B1\u25B1",
        "\u25B0\u25B0\u25B0\u25B0\u25B0\u25B1\u25B1",
        "\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B1",
        "\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0",
        "\u25B0\u25B1\u25B1\u25B1\u25B1\u25B1\u25B1"
      ]
    },
    dwarfFortress: {
      interval: 80,
      frames: [
        " \u2588\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "\u263A\u2588\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "\u263A\u2588\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "\u263A\u2593\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "\u263A\u2593\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "\u263A\u2592\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "\u263A\u2592\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "\u263A\u2591\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "\u263A\u2591\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "\u263A \u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        " \u263A\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        " \u263A\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        " \u263A\u2593\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        " \u263A\u2593\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        " \u263A\u2592\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        " \u263A\u2592\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        " \u263A\u2591\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        " \u263A\u2591\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        " \u263A \u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "  \u263A\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "  \u263A\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "  \u263A\u2593\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "  \u263A\u2593\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "  \u263A\u2592\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "  \u263A\u2592\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "  \u263A\u2591\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "  \u263A\u2591\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "  \u263A \u2588\u2588\u2588\xA3\xA3\xA3  ",
        "   \u263A\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "   \u263A\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "   \u263A\u2593\u2588\u2588\xA3\xA3\xA3  ",
        "   \u263A\u2593\u2588\u2588\xA3\xA3\xA3  ",
        "   \u263A\u2592\u2588\u2588\xA3\xA3\xA3  ",
        "   \u263A\u2592\u2588\u2588\xA3\xA3\xA3  ",
        "   \u263A\u2591\u2588\u2588\xA3\xA3\xA3  ",
        "   \u263A\u2591\u2588\u2588\xA3\xA3\xA3  ",
        "   \u263A \u2588\u2588\xA3\xA3\xA3  ",
        "    \u263A\u2588\u2588\xA3\xA3\xA3  ",
        "    \u263A\u2588\u2588\xA3\xA3\xA3  ",
        "    \u263A\u2593\u2588\xA3\xA3\xA3  ",
        "    \u263A\u2593\u2588\xA3\xA3\xA3  ",
        "    \u263A\u2592\u2588\xA3\xA3\xA3  ",
        "    \u263A\u2592\u2588\xA3\xA3\xA3  ",
        "    \u263A\u2591\u2588\xA3\xA3\xA3  ",
        "    \u263A\u2591\u2588\xA3\xA3\xA3  ",
        "    \u263A \u2588\xA3\xA3\xA3  ",
        "     \u263A\u2588\xA3\xA3\xA3  ",
        "     \u263A\u2588\xA3\xA3\xA3  ",
        "     \u263A\u2593\xA3\xA3\xA3  ",
        "     \u263A\u2593\xA3\xA3\xA3  ",
        "     \u263A\u2592\xA3\xA3\xA3  ",
        "     \u263A\u2592\xA3\xA3\xA3  ",
        "     \u263A\u2591\xA3\xA3\xA3  ",
        "     \u263A\u2591\xA3\xA3\xA3  ",
        "     \u263A \xA3\xA3\xA3  ",
        "      \u263A\xA3\xA3\xA3  ",
        "      \u263A\xA3\xA3\xA3  ",
        "      \u263A\u2593\xA3\xA3  ",
        "      \u263A\u2593\xA3\xA3  ",
        "      \u263A\u2592\xA3\xA3  ",
        "      \u263A\u2592\xA3\xA3  ",
        "      \u263A\u2591\xA3\xA3  ",
        "      \u263A\u2591\xA3\xA3  ",
        "      \u263A \xA3\xA3  ",
        "       \u263A\xA3\xA3  ",
        "       \u263A\xA3\xA3  ",
        "       \u263A\u2593\xA3  ",
        "       \u263A\u2593\xA3  ",
        "       \u263A\u2592\xA3  ",
        "       \u263A\u2592\xA3  ",
        "       \u263A\u2591\xA3  ",
        "       \u263A\u2591\xA3  ",
        "       \u263A \xA3  ",
        "        \u263A\xA3  ",
        "        \u263A\xA3  ",
        "        \u263A\u2593  ",
        "        \u263A\u2593  ",
        "        \u263A\u2592  ",
        "        \u263A\u2592  ",
        "        \u263A\u2591  ",
        "        \u263A\u2591  ",
        "        \u263A   ",
        "        \u263A  &",
        "        \u263A \u263C&",
        "       \u263A \u263C &",
        "       \u263A\u263C  &",
        "      \u263A\u263C  & ",
        "      \u203C   & ",
        "     \u263A   &  ",
        "    \u203C    &  ",
        "   \u263A    &   ",
        "  \u203C     &   ",
        " \u263A     &    ",
        "\u203C      &    ",
        "      &     ",
        "      &     ",
        "     &   \u2591  ",
        "     &   \u2592  ",
        "    &    \u2593  ",
        "    &    \xA3  ",
        "   &    \u2591\xA3  ",
        "   &    \u2592\xA3  ",
        "  &     \u2593\xA3  ",
        "  &     \xA3\xA3  ",
        " &     \u2591\xA3\xA3  ",
        " &     \u2592\xA3\xA3  ",
        "&      \u2593\xA3\xA3  ",
        "&      \xA3\xA3\xA3  ",
        "      \u2591\xA3\xA3\xA3  ",
        "      \u2592\xA3\xA3\xA3  ",
        "      \u2593\xA3\xA3\xA3  ",
        "      \u2588\xA3\xA3\xA3  ",
        "     \u2591\u2588\xA3\xA3\xA3  ",
        "     \u2592\u2588\xA3\xA3\xA3  ",
        "     \u2593\u2588\xA3\xA3\xA3  ",
        "     \u2588\u2588\xA3\xA3\xA3  ",
        "    \u2591\u2588\u2588\xA3\xA3\xA3  ",
        "    \u2592\u2588\u2588\xA3\xA3\xA3  ",
        "    \u2593\u2588\u2588\xA3\xA3\xA3  ",
        "    \u2588\u2588\u2588\xA3\xA3\xA3  ",
        "   \u2591\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "   \u2592\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "   \u2593\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "   \u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "  \u2591\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "  \u2592\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "  \u2593\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        "  \u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        " \u2591\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        " \u2592\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        " \u2593\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        " \u2588\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
        " \u2588\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  "
      ]
    }
  };
});

// node_modules/cli-spinners/index.js
var require_cli_spinners = __commonJS((exports, module) => {
  var spinners = Object.assign({}, require_spinners());
  var spinnersList = Object.keys(spinners);
  Object.defineProperty(spinners, "random", {
    get() {
      const randomIndex = Math.floor(Math.random() * spinnersList.length);
      const spinnerName = spinnersList[randomIndex];
      return spinners[spinnerName];
    }
  });
  module.exports = spinners;
});

// node_modules/cli-width/index.js
var require_cli_width = __commonJS((exports, module) => {
  var normalizeOpts = function(options) {
    const defaultOpts = {
      defaultWidth: 0,
      output: process.stdout,
      tty: __require("tty")
    };
    if (!options) {
      return defaultOpts;
    }
    Object.keys(defaultOpts).forEach(function(key) {
      if (!options[key]) {
        options[key] = defaultOpts[key];
      }
    });
    return options;
  };
  var cliWidth = function(options) {
    const opts = normalizeOpts(options);
    if (opts.output.getWindowSize) {
      return opts.output.getWindowSize()[0] || opts.defaultWidth;
    }
    if (opts.tty.getWindowSize) {
      return opts.tty.getWindowSize()[1] || opts.defaultWidth;
    }
    if (opts.output.columns) {
      return opts.output.columns;
    }
    if (process.env.CLI_WIDTH) {
      const width = parseInt(process.env.CLI_WIDTH, 10);
      if (!isNaN(width) && width !== 0) {
        return width;
      }
    }
    return opts.defaultWidth;
  };
  module.exports = cliWidth;
});

// node_modules/ansi-regex/index.js
var require_ansi_regex = __commonJS((exports, module) => {
  module.exports = ({ onlyFirst = false } = {}) => {
    const pattern = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
    ].join("|");
    return new RegExp(pattern, onlyFirst ? undefined : "g");
  };
});

// node_modules/strip-ansi/index.js
var require_strip_ansi = __commonJS((exports, module) => {
  var ansiRegex = require_ansi_regex();
  module.exports = (string) => typeof string === "string" ? string.replace(ansiRegex(), "") : string;
});

// node_modules/is-fullwidth-code-point/index.js
var require_is_fullwidth_code_point = __commonJS((exports, module) => {
  var isFullwidthCodePoint = (codePoint) => {
    if (Number.isNaN(codePoint)) {
      return false;
    }
    if (codePoint >= 4352 && (codePoint <= 4447 || codePoint === 9001 || codePoint === 9002 || 11904 <= codePoint && codePoint <= 12871 && codePoint !== 12351 || 12880 <= codePoint && codePoint <= 19903 || 19968 <= codePoint && codePoint <= 42182 || 43360 <= codePoint && codePoint <= 43388 || 44032 <= codePoint && codePoint <= 55203 || 63744 <= codePoint && codePoint <= 64255 || 65040 <= codePoint && codePoint <= 65049 || 65072 <= codePoint && codePoint <= 65131 || 65281 <= codePoint && codePoint <= 65376 || 65504 <= codePoint && codePoint <= 65510 || 110592 <= codePoint && codePoint <= 110593 || 127488 <= codePoint && codePoint <= 127569 || 131072 <= codePoint && codePoint <= 262141)) {
      return true;
    }
    return false;
  };
  module.exports = isFullwidthCodePoint;
  module.exports.default = isFullwidthCodePoint;
});

// node_modules/emoji-regex/index.js
var require_emoji_regex = __commonJS((exports, module) => {
  module.exports = function() {
    return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
  };
});

// node_modules/string-width/index.js
var require_string_width = __commonJS((exports, module) => {
  var stripAnsi = require_strip_ansi();
  var isFullwidthCodePoint = require_is_fullwidth_code_point();
  var emojiRegex = require_emoji_regex();
  var stringWidth = (string) => {
    if (typeof string !== "string" || string.length === 0) {
      return 0;
    }
    string = stripAnsi(string);
    if (string.length === 0) {
      return 0;
    }
    string = string.replace(emojiRegex(), "  ");
    let width = 0;
    for (let i = 0;i < string.length; i++) {
      const code = string.codePointAt(i);
      if (code <= 31 || code >= 127 && code <= 159) {
        continue;
      }
      if (code >= 768 && code <= 879) {
        continue;
      }
      if (code > 65535) {
        i++;
      }
      width += isFullwidthCodePoint(code) ? 2 : 1;
    }
    return width;
  };
  module.exports = stringWidth;
  module.exports.default = stringWidth;
});

// node_modules/wrap-ansi/index.js
var require_wrap_ansi = __commonJS((exports, module) => {
  var stringWidth = require_string_width();
  var stripAnsi = require_strip_ansi();
  var ansiStyles = require_ansi_styles();
  var ESCAPES = new Set([
    "\x1B",
    "\x9B"
  ]);
  var END_CODE = 39;
  var wrapAnsi = (code) => `${ESCAPES.values().next().value}[${code}m`;
  var wordLengths = (string) => string.split(" ").map((character) => stringWidth(character));
  var wrapWord = (rows, word, columns) => {
    const characters = [...word];
    let isInsideEscape = false;
    let visible = stringWidth(stripAnsi(rows[rows.length - 1]));
    for (const [index, character] of characters.entries()) {
      const characterLength = stringWidth(character);
      if (visible + characterLength <= columns) {
        rows[rows.length - 1] += character;
      } else {
        rows.push(character);
        visible = 0;
      }
      if (ESCAPES.has(character)) {
        isInsideEscape = true;
      } else if (isInsideEscape && character === "m") {
        isInsideEscape = false;
        continue;
      }
      if (isInsideEscape) {
        continue;
      }
      visible += characterLength;
      if (visible === columns && index < characters.length - 1) {
        rows.push("");
        visible = 0;
      }
    }
    if (!visible && rows[rows.length - 1].length > 0 && rows.length > 1) {
      rows[rows.length - 2] += rows.pop();
    }
  };
  var stringVisibleTrimSpacesRight = (str) => {
    const words = str.split(" ");
    let last = words.length;
    while (last > 0) {
      if (stringWidth(words[last - 1]) > 0) {
        break;
      }
      last--;
    }
    if (last === words.length) {
      return str;
    }
    return words.slice(0, last).join(" ") + words.slice(last).join("");
  };
  var exec = (string, columns, options = {}) => {
    if (options.trim !== false && string.trim() === "") {
      return "";
    }
    let pre = "";
    let ret = "";
    let escapeCode;
    const lengths = wordLengths(string);
    let rows = [""];
    for (const [index, word] of string.split(" ").entries()) {
      if (options.trim !== false) {
        rows[rows.length - 1] = rows[rows.length - 1].trimLeft();
      }
      let rowLength = stringWidth(rows[rows.length - 1]);
      if (index !== 0) {
        if (rowLength >= columns && (options.wordWrap === false || options.trim === false)) {
          rows.push("");
          rowLength = 0;
        }
        if (rowLength > 0 || options.trim === false) {
          rows[rows.length - 1] += " ";
          rowLength++;
        }
      }
      if (options.hard && lengths[index] > columns) {
        const remainingColumns = columns - rowLength;
        const breaksStartingThisLine = 1 + Math.floor((lengths[index] - remainingColumns - 1) / columns);
        const breaksStartingNextLine = Math.floor((lengths[index] - 1) / columns);
        if (breaksStartingNextLine < breaksStartingThisLine) {
          rows.push("");
        }
        wrapWord(rows, word, columns);
        continue;
      }
      if (rowLength + lengths[index] > columns && rowLength > 0 && lengths[index] > 0) {
        if (options.wordWrap === false && rowLength < columns) {
          wrapWord(rows, word, columns);
          continue;
        }
        rows.push("");
      }
      if (rowLength + lengths[index] > columns && options.wordWrap === false) {
        wrapWord(rows, word, columns);
        continue;
      }
      rows[rows.length - 1] += word;
    }
    if (options.trim !== false) {
      rows = rows.map(stringVisibleTrimSpacesRight);
    }
    pre = rows.join("\n");
    for (const [index, character] of [...pre].entries()) {
      ret += character;
      if (ESCAPES.has(character)) {
        const code2 = parseFloat(/\d[^m]*/.exec(pre.slice(index, index + 4)));
        escapeCode = code2 === END_CODE ? null : code2;
      }
      const code = ansiStyles.codes.get(Number(escapeCode));
      if (escapeCode && code) {
        if (pre[index + 1] === "\n") {
          ret += wrapAnsi(code);
        } else if (character === "\n") {
          ret += wrapAnsi(escapeCode);
        }
      }
    }
    return ret;
  };
  module.exports = (string, columns, options) => {
    return String(string).normalize().replace(/\r\n/g, "\n").split("\n").map((line) => exec(line, columns, options)).join("\n");
  };
});

// node_modules/mute-stream/lib/index.js
var require_lib = __commonJS((exports, module) => {
  var Stream = __require("stream");

  class MuteStream extends Stream {
    #isTTY = null;
    constructor(opts = {}) {
      super(opts);
      this.writable = this.readable = true;
      this.muted = false;
      this.on("pipe", this._onpipe);
      this.replace = opts.replace;
      this._prompt = opts.prompt || null;
      this._hadControl = false;
    }
    #destSrc(key, def) {
      if (this._dest) {
        return this._dest[key];
      }
      if (this._src) {
        return this._src[key];
      }
      return def;
    }
    #proxy(method, ...args) {
      if (typeof this._dest?.[method] === "function") {
        this._dest[method](...args);
      }
      if (typeof this._src?.[method] === "function") {
        this._src[method](...args);
      }
    }
    get isTTY() {
      if (this.#isTTY !== null) {
        return this.#isTTY;
      }
      return this.#destSrc("isTTY", false);
    }
    set isTTY(val) {
      this.#isTTY = val;
    }
    get rows() {
      return this.#destSrc("rows");
    }
    get columns() {
      return this.#destSrc("columns");
    }
    mute() {
      this.muted = true;
    }
    unmute() {
      this.muted = false;
    }
    _onpipe(src) {
      this._src = src;
    }
    pipe(dest, options) {
      this._dest = dest;
      return super.pipe(dest, options);
    }
    pause() {
      if (this._src) {
        return this._src.pause();
      }
    }
    resume() {
      if (this._src) {
        return this._src.resume();
      }
    }
    write(c) {
      if (this.muted) {
        if (!this.replace) {
          return true;
        }
        if (c.match(/^\u001b/)) {
          if (c.indexOf(this._prompt) === 0) {
            c = c.slice(this._prompt.length);
            c = c.replace(/./g, this.replace);
            c = this._prompt + c;
          }
          this._hadControl = true;
          return this.emit("data", c);
        } else {
          if (this._prompt && this._hadControl && c.indexOf(this._prompt) === 0) {
            this._hadControl = false;
            this.emit("data", this._prompt);
            c = c.slice(this._prompt.length);
          }
          c = c.toString().replace(/./g, this.replace);
        }
      }
      this.emit("data", c);
    }
    end(c) {
      if (this.muted) {
        if (c && this.replace) {
          c = c.toString().replace(/./g, this.replace);
        } else {
          c = null;
        }
      }
      if (c) {
        this.emit("data", c);
      }
      this.emit("end");
    }
    destroy(...args) {
      return this.#proxy("destroy", ...args);
    }
    destroySoon(...args) {
      return this.#proxy("destroySoon", ...args);
    }
    close(...args) {
      return this.#proxy("close", ...args);
    }
  }
  module.exports = MuteStream;
});

// node_modules/ansi-escapes/index.js
var require_ansi_escapes = __commonJS((exports, module) => {
  var ansiEscapes = exports;
  exports.default = ansiEscapes;
  var ESC = "\x1B[";
  var OSC = "\x1B]";
  var BEL = "\x07";
  var SEP = ";";
  var isTerminalApp = process.env.TERM_PROGRAM === "Apple_Terminal";
  ansiEscapes.cursorTo = (x, y) => {
    if (typeof x !== "number") {
      throw new TypeError("The `x` argument is required");
    }
    if (typeof y !== "number") {
      return ESC + (x + 1) + "G";
    }
    return ESC + (y + 1) + ";" + (x + 1) + "H";
  };
  ansiEscapes.cursorMove = (x, y) => {
    if (typeof x !== "number") {
      throw new TypeError("The `x` argument is required");
    }
    let ret = "";
    if (x < 0) {
      ret += ESC + -x + "D";
    } else if (x > 0) {
      ret += ESC + x + "C";
    }
    if (y < 0) {
      ret += ESC + -y + "A";
    } else if (y > 0) {
      ret += ESC + y + "B";
    }
    return ret;
  };
  ansiEscapes.cursorUp = (count = 1) => ESC + count + "A";
  ansiEscapes.cursorDown = (count = 1) => ESC + count + "B";
  ansiEscapes.cursorForward = (count = 1) => ESC + count + "C";
  ansiEscapes.cursorBackward = (count = 1) => ESC + count + "D";
  ansiEscapes.cursorLeft = ESC + "G";
  ansiEscapes.cursorSavePosition = isTerminalApp ? "\x1B7" : ESC + "s";
  ansiEscapes.cursorRestorePosition = isTerminalApp ? "\x1B8" : ESC + "u";
  ansiEscapes.cursorGetPosition = ESC + "6n";
  ansiEscapes.cursorNextLine = ESC + "E";
  ansiEscapes.cursorPrevLine = ESC + "F";
  ansiEscapes.cursorHide = ESC + "?25l";
  ansiEscapes.cursorShow = ESC + "?25h";
  ansiEscapes.eraseLines = (count) => {
    let clear = "";
    for (let i = 0;i < count; i++) {
      clear += ansiEscapes.eraseLine + (i < count - 1 ? ansiEscapes.cursorUp() : "");
    }
    if (count) {
      clear += ansiEscapes.cursorLeft;
    }
    return clear;
  };
  ansiEscapes.eraseEndLine = ESC + "K";
  ansiEscapes.eraseStartLine = ESC + "1K";
  ansiEscapes.eraseLine = ESC + "2K";
  ansiEscapes.eraseDown = ESC + "J";
  ansiEscapes.eraseUp = ESC + "1J";
  ansiEscapes.eraseScreen = ESC + "2J";
  ansiEscapes.scrollUp = ESC + "S";
  ansiEscapes.scrollDown = ESC + "T";
  ansiEscapes.clearScreen = "\x1Bc";
  ansiEscapes.clearTerminal = process.platform === "win32" ? `${ansiEscapes.eraseScreen}${ESC}0f` : `${ansiEscapes.eraseScreen}${ESC}3J${ESC}H`;
  ansiEscapes.beep = BEL;
  ansiEscapes.link = (text, url) => {
    return [
      OSC,
      "8",
      SEP,
      SEP,
      url,
      BEL,
      text,
      OSC,
      "8",
      SEP,
      SEP,
      BEL
    ].join("");
  };
  ansiEscapes.image = (buffer, options = {}) => {
    let ret = `${OSC}1337;File=inline=1`;
    if (options.width) {
      ret += `;width=${options.width}`;
    }
    if (options.height) {
      ret += `;height=${options.height}`;
    }
    if (options.preserveAspectRatio === false) {
      ret += ";preserveAspectRatio=0";
    }
    return ret + ":" + buffer.toString("base64") + BEL;
  };
  ansiEscapes.iTerm = {
    setCwd: (cwd = process.cwd()) => `${OSC}50;CurrentDir=${cwd}${BEL}`,
    annotation: (message, options = {}) => {
      let ret = `${OSC}1337;`;
      const hasX = typeof options.x !== "undefined";
      const hasY = typeof options.y !== "undefined";
      if ((hasX || hasY) && !(hasX && hasY && typeof options.length !== "undefined")) {
        throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
      }
      message = message.replace(/\|/g, "");
      ret += options.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=";
      if (options.length > 0) {
        ret += (hasX ? [message, options.length, options.x, options.y] : [options.length, message]).join("|");
      } else {
        ret += message;
      }
      return ret + BEL;
    }
  };
});

// node_modules/escape-string-regexp/index.js
var require_escape_string_regexp = __commonJS((exports, module) => {
  var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
  module.exports = function(str) {
    if (typeof str !== "string") {
      throw new TypeError("Expected a string");
    }
    return str.replace(matchOperatorsRe, "\\$&");
  };
});

// node_modules/figures/index.js
var require_figures = __commonJS((exports, module) => {
  var escapeStringRegexp = require_escape_string_regexp();
  var { platform } = process;
  var main = {
    tick: "\u2714",
    cross: "\u2716",
    star: "\u2605",
    square: "\u2587",
    squareSmall: "\u25FB",
    squareSmallFilled: "\u25FC",
    play: "\u25B6",
    circle: "\u25EF",
    circleFilled: "\u25C9",
    circleDotted: "\u25CC",
    circleDouble: "\u25CE",
    circleCircle: "\u24DE",
    circleCross: "\u24E7",
    circlePipe: "\u24BE",
    circleQuestionMark: "?\u20DD",
    bullet: "\u25CF",
    dot: "\u2024",
    line: "\u2500",
    ellipsis: "\u2026",
    pointer: "\u276F",
    pointerSmall: "\u203A",
    info: "\u2139",
    warning: "\u26A0",
    hamburger: "\u2630",
    smiley: "\u32E1",
    mustache: "\u0DF4",
    heart: "\u2665",
    nodejs: "\u2B22",
    arrowUp: "\u2191",
    arrowDown: "\u2193",
    arrowLeft: "\u2190",
    arrowRight: "\u2192",
    radioOn: "\u25C9",
    radioOff: "\u25EF",
    checkboxOn: "\u2612",
    checkboxOff: "\u2610",
    checkboxCircleOn: "\u24E7",
    checkboxCircleOff: "\u24BE",
    questionMarkPrefix: "?\u20DD",
    oneHalf: "\xBD",
    oneThird: "\u2153",
    oneQuarter: "\xBC",
    oneFifth: "\u2155",
    oneSixth: "\u2159",
    oneSeventh: "\u2150",
    oneEighth: "\u215B",
    oneNinth: "\u2151",
    oneTenth: "\u2152",
    twoThirds: "\u2154",
    twoFifths: "\u2156",
    threeQuarters: "\xBE",
    threeFifths: "\u2157",
    threeEighths: "\u215C",
    fourFifths: "\u2158",
    fiveSixths: "\u215A",
    fiveEighths: "\u215D",
    sevenEighths: "\u215E"
  };
  var windows = {
    tick: "\u221A",
    cross: "\xD7",
    star: "*",
    square: "\u2588",
    squareSmall: "[ ]",
    squareSmallFilled: "[\u2588]",
    play: "\u25BA",
    circle: "( )",
    circleFilled: "(*)",
    circleDotted: "( )",
    circleDouble: "( )",
    circleCircle: "(\u25CB)",
    circleCross: "(\xD7)",
    circlePipe: "(\u2502)",
    circleQuestionMark: "(?)",
    bullet: "*",
    dot: ".",
    line: "\u2500",
    ellipsis: "...",
    pointer: ">",
    pointerSmall: "\xBB",
    info: "i",
    warning: "\u203C",
    hamburger: "\u2261",
    smiley: "\u263A",
    mustache: "\u250C\u2500\u2510",
    heart: main.heart,
    nodejs: "\u2666",
    arrowUp: main.arrowUp,
    arrowDown: main.arrowDown,
    arrowLeft: main.arrowLeft,
    arrowRight: main.arrowRight,
    radioOn: "(*)",
    radioOff: "( )",
    checkboxOn: "[\xD7]",
    checkboxOff: "[ ]",
    checkboxCircleOn: "(\xD7)",
    checkboxCircleOff: "( )",
    questionMarkPrefix: "\uFF1F",
    oneHalf: "1/2",
    oneThird: "1/3",
    oneQuarter: "1/4",
    oneFifth: "1/5",
    oneSixth: "1/6",
    oneSeventh: "1/7",
    oneEighth: "1/8",
    oneNinth: "1/9",
    oneTenth: "1/10",
    twoThirds: "2/3",
    twoFifths: "2/5",
    threeQuarters: "3/4",
    threeFifths: "3/5",
    threeEighths: "3/8",
    fourFifths: "4/5",
    fiveSixths: "5/6",
    fiveEighths: "5/8",
    sevenEighths: "7/8"
  };
  if (platform === "linux") {
    main.questionMarkPrefix = "?";
  }
  var figures = platform === "win32" ? windows : main;
  var fn = (string) => {
    if (figures === main) {
      return string;
    }
    for (const [key, value] of Object.entries(main)) {
      if (value === figures[key]) {
        continue;
      }
      string = string.replace(new RegExp(escapeStringRegexp(value), "g"), figures[key]);
    }
    return string;
  };
  module.exports = Object.assign(fn, figures);
  module.exports.main = main;
  module.exports.windows = windows;
});

// src/lib/utils.ts
async function log(options) {
  const { text, ms = 1000, newLine, type = "log" } = options;
  await sleep(ms);
  console[type](text);
  if (newLine)
    console.log("");
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// src/main.ts
var import_chalk6 = __toESM(require_source(), 1);
var import_nanospinner = __toESM(require_nanospinner(), 1);

// src/welcome.ts
var import_figlet = __toESM(require_node_figlet(), 1);
var import_gradient_string = __toESM(require_gradient_string(), 1);
var import_chalk = __toESM(require_source(), 1);
async function welcome() {
  console.log(import_gradient_string.default.rainbow(import_figlet.default.textSync("MANTINE TW", {
    font: "Standard",
    horizontalLayout: "universal smushing",
    verticalLayout: "full",
    width: 140,
    whitespaceBreak: true
  })));
  const messages = [
    {
      text: "\uD83D\uDE80 Welcome to Mantine TW \u2728",
      ms: 300,
      newLine: true
    },
    {
      text: "This is a simple CLI tool to help you get started with Mantine",
      ms: 400
    },
    {
      text: `And also help to add ${import_chalk.default.blueBright("Tailwind CSS")} to your project Mantine project`,
      ms: 100,
      newLine: true
    },
    {
      text: import_gradient_string.default.rainbow(`Consider starring the project if you find it useful \uD83C\uDF1F 
https://example.com`),
      newLine: true
    }
  ];
  for (const message of messages) {
    await log(message);
  }
}

// src/check-compatibility.ts
import {promises as fsPromises} from "fs";
import * as path from "path";
async function checkProjectCompatibility() {
  const rootDir = process.cwd();
  const packageJsonPath = path.join(rootDir, "package.json");
  const nextConfigPattern = /^next\.config\..+$/;
  if (!await fsPromises.access(packageJsonPath).then(() => true).catch(() => false)) {
    throw new Error("package.json not found. Make sure you are in the root directory of your project.");
  }
  const packageJsonData = await fsPromises.readFile(packageJsonPath, "utf-8");
  const packageJson = JSON.parse(packageJsonData);
  const dependencies = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies
  };
  const hasNext = "next" in dependencies;
  const hasMantine = Object.keys(dependencies).some((dep) => dep.startsWith("@mantine/"));
  const files = await fsPromises.readdir(rootDir);
  const hasNextConfig = files.some((file) => nextConfigPattern.test(file));
  if (!hasNext || !hasNextConfig) {
    throw new Error("The project is incompatible. You should have Next.js installed.");
  }
  if (hasMantine) {
    throw new Error("Mantine is already installed.");
  }
  if (!hasNext || !hasNextConfig || hasMantine) {
    throw new Error("The project is incompatible. Exiting...");
  }
  return true;
}

// node_modules/@inquirer/core/dist/esm/lib/key.mjs
var isUpKey = (key) => key.name === "up" || key.name === "k" || key.ctrl && key.name === "p";
var isDownKey = (key) => key.name === "down" || key.name === "j" || key.ctrl && key.name === "n";
var isNumberKey = (key) => "123456789".includes(key.name);
var isEnterKey = (key) => key.name === "enter" || key.name === "return";
// node_modules/@inquirer/core/dist/esm/lib/use-prefix.mjs
var import_chalk2 = __toESM(require_source(), 1);
var import_cli_spinners = __toESM(require_cli_spinners(), 1);

// node_modules/@inquirer/core/dist/esm/lib/hook-engine.mjs
import {AsyncLocalStorage, AsyncResource} from "node:async_hooks";
var createStore = function(rl) {
  const store = {
    rl,
    hooks: [],
    hooksCleanup: [],
    hooksEffect: [],
    index: 0,
    handleChange() {
    }
  };
  return store;
};
function withHooks(rl, cb) {
  const store = createStore(rl);
  return hookStorage.run(store, () => {
    cb(store);
  });
}
var getStore = function() {
  const store = hookStorage.getStore();
  if (!store) {
    throw new Error("[Inquirer] Hook functions can only be called from within a prompt");
  }
  return store;
};
function readline() {
  return getStore().rl;
}
function withUpdates(fn) {
  const wrapped = (...args) => {
    const store = getStore();
    let shouldUpdate = false;
    const oldHandleChange = store.handleChange;
    store.handleChange = () => {
      shouldUpdate = true;
    };
    const returnValue = fn(...args);
    if (shouldUpdate) {
      oldHandleChange();
    }
    store.handleChange = oldHandleChange;
    return returnValue;
  };
  return AsyncResource.bind(wrapped);
}
function withPointer(cb) {
  const store = getStore();
  const { index } = store;
  const pointer = {
    get() {
      return store.hooks[index];
    },
    set(value) {
      store.hooks[index] = value;
    },
    initialized: index in store.hooks
  };
  const returnValue = cb(pointer);
  store.index++;
  return returnValue;
}
function handleChange() {
  getStore().handleChange();
}
var hookStorage = new AsyncLocalStorage;
var effectScheduler = {
  queue(cb) {
    const store = getStore();
    const { index } = store;
    store.hooksEffect.push(() => {
      store.hooksCleanup[index]?.();
      const cleanFn = cb(readline());
      if (cleanFn != null && typeof cleanFn !== "function") {
        throw new Error("useEffect return value must be a cleanup function or nothing.");
      }
      store.hooksCleanup[index] = cleanFn;
    });
  },
  run() {
    const store = getStore();
    withUpdates(() => {
      store.hooksEffect.forEach((effect) => {
        effect();
      });
      store.hooksEffect.length = 0;
    })();
  }
};

// node_modules/@inquirer/core/dist/esm/lib/use-state.mjs
function useState(defaultValue) {
  return withPointer((pointer) => {
    const setFn = (newValue) => {
      if (pointer.get() !== newValue) {
        pointer.set(newValue);
        handleChange();
      }
    };
    if (pointer.initialized) {
      return [pointer.get(), setFn];
    }
    const value = typeof defaultValue === "function" ? defaultValue() : defaultValue;
    pointer.set(value);
    return [value, setFn];
  });
}

// node_modules/@inquirer/core/dist/esm/lib/use-effect.mjs
function useEffect(cb, depArray) {
  withPointer((pointer) => {
    const oldDeps = pointer.get();
    const hasChanged = !Array.isArray(oldDeps) || depArray.some((dep, i) => !Object.is(dep, oldDeps[i]));
    if (hasChanged) {
      effectScheduler.queue(cb);
    }
    pointer.set(depArray);
  });
}

// node_modules/@inquirer/core/dist/esm/lib/use-prefix.mjs
function usePrefix(isLoading = false) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (isLoading) {
      const timeout = setTimeout(() => {
        setTick(tick + 1);
      }, spinner.interval);
      return () => clearTimeout(timeout);
    }
  }, [isLoading, tick]);
  if (isLoading) {
    const frame = tick % spinner.frames.length;
    return import_chalk2.default.yellow(spinner.frames[frame]);
  }
  return import_chalk2.default.green("?");
}
var spinner = import_cli_spinners.default.dots;
// node_modules/@inquirer/core/dist/esm/lib/use-memo.mjs
function useMemo(fn, dependencies) {
  return withPointer((pointer) => {
    const prev = pointer.get();
    if (!prev || prev.dependencies.length !== dependencies.length || prev.dependencies.some((dep, i) => dep !== dependencies[i])) {
      const value = fn();
      pointer.set({ value, dependencies });
      return value;
    }
    return prev.value;
  });
}
// node_modules/@inquirer/core/dist/esm/lib/use-ref.mjs
function useRef(val) {
  return useState({ current: val })[0];
}
// node_modules/@inquirer/core/dist/esm/lib/use-keypress.mjs
function useKeypress(userHandler) {
  const signal = useRef(userHandler);
  signal.current = userHandler;
  useEffect((rl) => {
    const handler = withUpdates((_input, event) => {
      signal.current(event, rl);
    });
    rl.input.on("keypress", handler);
    return () => {
      rl.input.removeListener("keypress", handler);
    };
  }, []);
}
// node_modules/@inquirer/core/dist/esm/lib/pagination/use-pagination.mjs
var import_chalk3 = __toESM(require_source(), 1);

// node_modules/@inquirer/core/dist/esm/lib/utils.mjs
var import_cli_width = __toESM(require_cli_width(), 1);
var import_wrap_ansi = __toESM(require_wrap_ansi(), 1);
function breakLines(content, width) {
  return content.split("\n").flatMap((line) => import_wrap_ansi.default(line, width, { trim: false, hard: true }).split("\n").map((str) => str.trimEnd())).join("\n");
}
function readlineWidth() {
  return import_cli_width.default({ defaultWidth: 80, output: readline().output });
}

// node_modules/@inquirer/core/dist/esm/lib/pagination/lines.mjs
var split = function(content, width) {
  return breakLines(content, width).split("\n");
};
var rotate = function(count, items) {
  const max = items.length;
  const offset = (count % max + max) % max;
  return items.slice(offset).concat(items.slice(0, offset));
};
function lines({ items, width, renderItem, active, position: requested, pageSize }) {
  const layouts = items.map((item, index) => ({
    item,
    index,
    isActive: index === active
  }));
  const layoutsInPage = rotate(active - requested, layouts).slice(0, pageSize);
  const renderItemAt = (index) => split(renderItem(layoutsInPage[index]), width);
  const pageBuffer = new Array(pageSize);
  const activeItem = renderItemAt(requested).slice(0, pageSize);
  const position = requested + activeItem.length <= pageSize ? requested : pageSize - activeItem.length;
  pageBuffer.splice(position, activeItem.length, ...activeItem);
  let bufferPointer = position + activeItem.length;
  let layoutPointer = requested + 1;
  while (bufferPointer < pageSize && layoutPointer < layoutsInPage.length) {
    for (const line of renderItemAt(layoutPointer)) {
      pageBuffer[bufferPointer++] = line;
      if (bufferPointer >= pageSize)
        break;
    }
    layoutPointer++;
  }
  bufferPointer = position - 1;
  layoutPointer = requested - 1;
  while (bufferPointer >= 0 && layoutPointer >= 0) {
    for (const line of renderItemAt(layoutPointer).reverse()) {
      pageBuffer[bufferPointer--] = line;
      if (bufferPointer < 0)
        break;
    }
    layoutPointer--;
  }
  return pageBuffer.filter((line) => typeof line === "string");
}

// node_modules/@inquirer/core/dist/esm/lib/pagination/position.mjs
function finite({ active, pageSize, total }) {
  const middle = Math.floor(pageSize / 2);
  if (total <= pageSize || active < middle)
    return active;
  if (active >= total - middle)
    return active + pageSize - total;
  return middle;
}
function infinite({ active, lastActive, total, pageSize, pointer }) {
  if (total <= pageSize)
    return active;
  if (lastActive < active && active - lastActive < pageSize) {
    return Math.min(Math.floor(pageSize / 2), pointer + active - lastActive);
  }
  return pointer;
}

// node_modules/@inquirer/core/dist/esm/lib/pagination/use-pagination.mjs
function usePagination({ items, active, renderItem, pageSize = 7, loop = true }) {
  const state = useRef({ position: 0, lastActive: 0 });
  const position2 = loop ? infinite({
    active,
    lastActive: state.current.lastActive,
    total: items.length,
    pageSize,
    pointer: state.current.position
  }) : finite({
    active,
    total: items.length,
    pageSize
  });
  state.current.position = position2;
  state.current.lastActive = active;
  const visibleLines = lines({
    items,
    width: readlineWidth(),
    renderItem,
    active,
    position: position2,
    pageSize
  }).join("\n");
  if (items.length > pageSize) {
    return `${visibleLines}\n${import_chalk3.default.dim("(Use arrow keys to reveal more choices)")}`;
  }
  return visibleLines;
}
// node_modules/@inquirer/core/dist/esm/lib/create-prompt.mjs
import * as readline2 from "node:readline";

// node_modules/@inquirer/type/dist/esm/index.mjs
class CancelablePromise extends Promise {
  cancel = () => {
  };
}

// node_modules/@inquirer/core/dist/esm/lib/create-prompt.mjs
var import_mute_stream = __toESM(require_lib(), 1);

// node_modules/signal-exit/dist/mjs/signals.js
var signals = [];
signals.push("SIGHUP", "SIGINT", "SIGTERM");
if (process.platform !== "win32") {
  signals.push("SIGALRM", "SIGABRT", "SIGVTALRM", "SIGXCPU", "SIGXFSZ", "SIGUSR2", "SIGTRAP", "SIGSYS", "SIGQUIT", "SIGIOT");
}
if (process.platform === "linux") {
  signals.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT");
}

// node_modules/signal-exit/dist/mjs/index.js
var processOk = (process2) => !!process2 && typeof process2 === "object" && typeof process2.removeListener === "function" && typeof process2.emit === "function" && typeof process2.reallyExit === "function" && typeof process2.listeners === "function" && typeof process2.kill === "function" && typeof process2.pid === "number" && typeof process2.on === "function";
var kExitEmitter = Symbol.for("signal-exit emitter");
var global = globalThis;
var ObjectDefineProperty = Object.defineProperty.bind(Object);

class Emitter {
  emitted = {
    afterExit: false,
    exit: false
  };
  listeners = {
    afterExit: [],
    exit: []
  };
  count = 0;
  id = Math.random();
  constructor() {
    if (global[kExitEmitter]) {
      return global[kExitEmitter];
    }
    ObjectDefineProperty(global, kExitEmitter, {
      value: this,
      writable: false,
      enumerable: false,
      configurable: false
    });
  }
  on(ev, fn) {
    this.listeners[ev].push(fn);
  }
  removeListener(ev, fn) {
    const list = this.listeners[ev];
    const i = list.indexOf(fn);
    if (i === -1) {
      return;
    }
    if (i === 0 && list.length === 1) {
      list.length = 0;
    } else {
      list.splice(i, 1);
    }
  }
  emit(ev, code, signal) {
    if (this.emitted[ev]) {
      return false;
    }
    this.emitted[ev] = true;
    let ret = false;
    for (const fn of this.listeners[ev]) {
      ret = fn(code, signal) === true || ret;
    }
    if (ev === "exit") {
      ret = this.emit("afterExit", code, signal) || ret;
    }
    return ret;
  }
}

class SignalExitBase {
}
var signalExitWrap = (handler) => {
  return {
    onExit(cb, opts) {
      return handler.onExit(cb, opts);
    },
    load() {
      return handler.load();
    },
    unload() {
      return handler.unload();
    }
  };
};

class SignalExitFallback extends SignalExitBase {
  onExit() {
    return () => {
    };
  }
  load() {
  }
  unload() {
  }
}

class SignalExit extends SignalExitBase {
  #hupSig = process2.platform === "win32" ? "SIGINT" : "SIGHUP";
  #emitter = new Emitter;
  #process;
  #originalProcessEmit;
  #originalProcessReallyExit;
  #sigListeners = {};
  #loaded = false;
  constructor(process2) {
    super();
    this.#process = process2;
    this.#sigListeners = {};
    for (const sig of signals) {
      this.#sigListeners[sig] = () => {
        const listeners = this.#process.listeners(sig);
        let { count } = this.#emitter;
        const p = process2;
        if (typeof p.__signal_exit_emitter__ === "object" && typeof p.__signal_exit_emitter__.count === "number") {
          count += p.__signal_exit_emitter__.count;
        }
        if (listeners.length === count) {
          this.unload();
          const ret = this.#emitter.emit("exit", null, sig);
          const s = sig === "SIGHUP" ? this.#hupSig : sig;
          if (!ret)
            process2.kill(process2.pid, s);
        }
      };
    }
    this.#originalProcessReallyExit = process2.reallyExit;
    this.#originalProcessEmit = process2.emit;
  }
  onExit(cb, opts) {
    if (!processOk(this.#process)) {
      return () => {
      };
    }
    if (this.#loaded === false) {
      this.load();
    }
    const ev = opts?.alwaysLast ? "afterExit" : "exit";
    this.#emitter.on(ev, cb);
    return () => {
      this.#emitter.removeListener(ev, cb);
      if (this.#emitter.listeners["exit"].length === 0 && this.#emitter.listeners["afterExit"].length === 0) {
        this.unload();
      }
    };
  }
  load() {
    if (this.#loaded) {
      return;
    }
    this.#loaded = true;
    this.#emitter.count += 1;
    for (const sig of signals) {
      try {
        const fn = this.#sigListeners[sig];
        if (fn)
          this.#process.on(sig, fn);
      } catch (_) {
      }
    }
    this.#process.emit = (ev, ...a) => {
      return this.#processEmit(ev, ...a);
    };
    this.#process.reallyExit = (code) => {
      return this.#processReallyExit(code);
    };
  }
  unload() {
    if (!this.#loaded) {
      return;
    }
    this.#loaded = false;
    signals.forEach((sig) => {
      const listener = this.#sigListeners[sig];
      if (!listener) {
        throw new Error("Listener not defined for signal: " + sig);
      }
      try {
        this.#process.removeListener(sig, listener);
      } catch (_) {
      }
    });
    this.#process.emit = this.#originalProcessEmit;
    this.#process.reallyExit = this.#originalProcessReallyExit;
    this.#emitter.count -= 1;
  }
  #processReallyExit(code) {
    if (!processOk(this.#process)) {
      return 0;
    }
    this.#process.exitCode = code || 0;
    this.#emitter.emit("exit", this.#process.exitCode, null);
    return this.#originalProcessReallyExit.call(this.#process, this.#process.exitCode);
  }
  #processEmit(ev, ...args) {
    const og = this.#originalProcessEmit;
    if (ev === "exit" && processOk(this.#process)) {
      if (typeof args[0] === "number") {
        this.#process.exitCode = args[0];
      }
      const ret = og.call(this.#process, ev, ...args);
      this.#emitter.emit("exit", this.#process.exitCode, null);
      return ret;
    } else {
      return og.call(this.#process, ev, ...args);
    }
  }
}
var process2 = globalThis.process;
var {
  onExit,
  load,
  unload
} = signalExitWrap(processOk(process2) ? new SignalExit(process2) : new SignalExitFallback);

// node_modules/@inquirer/core/dist/esm/lib/screen-manager.mjs
var import_strip_ansi = __toESM(require_strip_ansi(), 1);
var import_ansi_escapes = __toESM(require_ansi_escapes(), 1);
var height = (content) => content.split("\n").length;
var lastLine = (content) => content.split("\n").pop() ?? "";

class ScreenManager {
  rl;
  height = 0;
  extraLinesUnderPrompt = 0;
  cursorPos;
  constructor(rl) {
    this.rl = rl;
    this.rl = rl;
    this.cursorPos = rl.getCursorPos();
  }
  render(content, bottomContent = "") {
    this.clean();
    this.rl.output.unmute();
    const promptLine = lastLine(content);
    const rawPromptLine = import_strip_ansi.default(promptLine);
    let prompt = rawPromptLine;
    if (this.rl.line.length) {
      prompt = prompt.slice(0, -this.rl.line.length);
    }
    this.rl.setPrompt(prompt);
    this.cursorPos = this.rl.getCursorPos();
    const width = readlineWidth();
    content = breakLines(content, width);
    bottomContent = breakLines(bottomContent, width);
    if (rawPromptLine.length % width === 0) {
      content += "\n";
    }
    let output = content + (bottomContent ? "\n" + bottomContent : "");
    const promptLineUpDiff = Math.floor(rawPromptLine.length / width) - this.cursorPos.rows;
    const bottomContentHeight = promptLineUpDiff + (bottomContent ? height(bottomContent) : 0);
    if (bottomContentHeight > 0)
      output += import_ansi_escapes.default.cursorUp(bottomContentHeight);
    output += import_ansi_escapes.default.cursorTo(this.cursorPos.cols);
    this.extraLinesUnderPrompt = bottomContentHeight;
    this.height = height(output);
    this.rl.output.write(output);
    this.rl.output.mute();
  }
  checkCursorPos() {
    const cursorPos = this.rl.getCursorPos();
    if (cursorPos.cols !== this.cursorPos.cols) {
      this.rl.output.unmute();
      this.rl.output.write(import_ansi_escapes.default.cursorTo(cursorPos.cols));
      this.rl.output.mute();
      this.cursorPos = cursorPos;
    }
  }
  clean() {
    this.rl.output.unmute();
    this.rl.output.write([
      this.extraLinesUnderPrompt > 0 ? import_ansi_escapes.default.cursorDown(this.extraLinesUnderPrompt) : "",
      import_ansi_escapes.default.eraseLines(this.height)
    ].join(""));
    this.extraLinesUnderPrompt = 0;
    this.rl.output.mute();
  }
  clearContent() {
    this.rl.output.unmute();
    this.rl.output.write([
      this.extraLinesUnderPrompt > 0 ? import_ansi_escapes.default.cursorDown(this.extraLinesUnderPrompt) : "",
      "\n"
    ].join(""));
    this.rl.output.mute();
  }
  done() {
    this.rl.setPrompt("");
    this.rl.output.unmute();
    this.rl.output.write(import_ansi_escapes.default.cursorShow);
    this.rl.output.end();
    this.rl.close();
  }
}

// node_modules/@inquirer/core/dist/esm/lib/create-prompt.mjs
async function getPromptConfig(config) {
  const message = typeof config.message === "function" ? config.message() : config.message;
  return {
    ...config,
    message: await message
  };
}
function createPrompt(view) {
  const prompt = (config, context) => {
    const input = context?.input ?? process.stdin;
    const output = new import_mute_stream.default;
    output.pipe(context?.output ?? process.stdout);
    const rl = readline2.createInterface({
      terminal: true,
      input,
      output
    });
    const screen = new ScreenManager(rl);
    let cancel = () => {
    };
    const answer = new CancelablePromise((resolve, reject) => {
      withHooks(rl, (store) => {
        function checkCursorPos() {
          screen.checkCursorPos();
        }
        const removeExitListener = onExit((code, signal) => {
          onExit2();
          reject(new Error(`User force closed the prompt with ${code} ${signal}`));
        });
        function onExit2() {
          try {
            store.hooksCleanup.forEach((cleanFn) => {
              cleanFn?.();
            });
          } catch (err) {
            reject(err);
          }
          if (context?.clearPromptOnDone) {
            screen.clean();
          } else {
            screen.clearContent();
          }
          screen.done();
          removeExitListener();
          store.rl.input.removeListener("keypress", checkCursorPos);
        }
        cancel = () => {
          onExit2();
          reject(new Error("Prompt was canceled"));
        };
        function done(value) {
          setImmediate(() => {
            onExit2();
            resolve(value);
          });
        }
        function workLoop(resolvedConfig) {
          store.index = 0;
          store.handleChange = () => workLoop(resolvedConfig);
          try {
            const nextView = view(resolvedConfig, done);
            const [content, bottomContent] = typeof nextView === "string" ? [nextView] : nextView;
            screen.render(content, bottomContent);
            effectScheduler.run();
          } catch (err) {
            onExit2();
            reject(err);
          }
        }
        getPromptConfig(config).then((resolvedConfig) => {
          workLoop(resolvedConfig);
          store.rl.input.on("keypress", checkCursorPos);
        }, reject);
      });
    });
    answer.cancel = cancel;
    return answer;
  };
  return prompt;
}
// node_modules/@inquirer/core/dist/esm/lib/Separator.mjs
var import_chalk4 = __toESM(require_source(), 1);
var import_figures = __toESM(require_figures(), 1);

class Separator {
  separator = import_chalk4.default.dim(new Array(15).join(import_figures.default.line));
  type = "separator";
  constructor(separator) {
    if (separator) {
      this.separator = separator;
    }
  }
  static isSeparator(choice) {
    return Boolean(choice && choice.type === "separator");
  }
}
// node_modules/@inquirer/select/dist/esm/index.mjs
var import_chalk5 = __toESM(require_source(), 1);
var import_figures2 = __toESM(require_figures(), 1);
var import_ansi_escapes2 = __toESM(require_ansi_escapes(), 1);
var isSelectable = function(item) {
  return !Separator.isSeparator(item) && !item.disabled;
};
var renderItem = function({ item, isActive }) {
  if (Separator.isSeparator(item)) {
    return ` ${item.separator}`;
  }
  const line = item.name || item.value;
  if (item.disabled) {
    const disabledLabel = typeof item.disabled === "string" ? item.disabled : "(disabled)";
    return import_chalk5.default.dim(`- ${line} ${disabledLabel}`);
  }
  const color = isActive ? import_chalk5.default.cyan : (x) => x;
  const prefix = isActive ? import_figures2.default.pointer : ` `;
  return color(`${prefix} ${line}`);
};
var esm_default = createPrompt((config, done) => {
  const { choices: items, loop = true, pageSize } = config;
  const firstRender = useRef(true);
  const prefix = usePrefix();
  const [status, setStatus] = useState("pending");
  const bounds = useMemo(() => {
    const first = items.findIndex(isSelectable);
    const last = items.length - 1 - [...items].reverse().findIndex(isSelectable);
    if (first < 0)
      throw new Error("[select prompt] No selectable choices. All choices are disabled.");
    return { first, last };
  }, [items]);
  const defaultItemIndex = useMemo(() => {
    if (!("default" in config))
      return -1;
    return items.findIndex((item) => isSelectable(item) && item.value === config.default);
  }, [config.default, items]);
  const [active, setActive] = useState(defaultItemIndex === -1 ? bounds.first : defaultItemIndex);
  const selectedChoice = items[active];
  useKeypress((key2) => {
    if (isEnterKey(key2)) {
      setStatus("done");
      done(selectedChoice.value);
    } else if (isUpKey(key2) || isDownKey(key2)) {
      if (loop || isUpKey(key2) && active !== bounds.first || isDownKey(key2) && active !== bounds.last) {
        const offset = isUpKey(key2) ? -1 : 1;
        let next = active;
        do {
          next = (next + offset + items.length) % items.length;
        } while (!isSelectable(items[next]));
        setActive(next);
      }
    } else if (isNumberKey(key2)) {
      const position2 = Number(key2.name) - 1;
      const item = items[position2];
      if (item != null && isSelectable(item)) {
        setActive(position2);
      }
    }
  });
  let message = import_chalk5.default.bold(config.message);
  if (firstRender.current) {
    firstRender.current = false;
    message += import_chalk5.default.dim(" (Use arrow keys)");
  }
  const page = usePagination({
    items,
    active,
    renderItem,
    pageSize,
    loop
  });
  if (status === "done") {
    return `${prefix} ${message} ${import_chalk5.default.cyan(selectedChoice.name || selectedChoice.value)}`;
  }
  const choiceDescription = selectedChoice.description ? `\n${selectedChoice.description}` : ``;
  return `${prefix} ${message}\n${page}${choiceDescription}${import_ansi_escapes2.default.cursorHide}`;
});

// src/postcss-setup.ts
import {promises as fs} from "fs";
import * as path2 from "path";
async function checkPostCSSConfigExists() {
  const rootDir = process.cwd();
  const configPatterns = [
    "postcss.config.cjs",
    "postcss.config.js",
    "postcss.config.mjs"
  ];
  for (const pattern of configPatterns) {
    const configFilePath = path2.join(rootDir, pattern);
    if (await fs.access(configFilePath).then(() => true).catch(() => false)) {
      return configFilePath;
    }
  }
  return null;
}
async function createPostCSSConfig() {
  const rootDir = process.cwd();
  const configFileName = "postcss.config.cjs";
  const configFilePath = path2.join(rootDir, configFileName);
  const initialContent = `${mantineComment}\nmodule.exports = {\n  plugins: {\n    ${mantineConfig}\n  },\n};\n`;
  await fs.writeFile(configFilePath, initialContent);
}
async function updatePostCSSConfig(configFilePath) {
  let configContent = await fs.readFile(configFilePath, "utf-8");
  const isCommonJS = configContent.includes("module.exports");
  if (!configContent.includes(mantineComment)) {
    configContent = `${mantineComment}\n${configContent}`;
  }
  const hasPresetMantine = configContent.includes("'postcss-preset-mantine': {},");
  const hasSimpleVars = configContent.includes("'postcss-simple-vars': {");
  let newPluginConfig = "";
  if (!hasPresetMantine) {
    newPluginConfig += "\n    'postcss-preset-mantine': {},";
  }
  if (!hasSimpleVars) {
    newPluginConfig += mantineConfig;
  }
  if (newPluginConfig) {
    const pluginsRegex = /plugins\s*:\s*{/;
    const pluginsExist = pluginsRegex.test(configContent);
    if (pluginsExist) {
      const insertionPoint = configContent.search(pluginsRegex) + "plugins: {".length;
      configContent = configContent.slice(0, insertionPoint) + newPluginConfig + configContent.slice(insertionPoint);
    } else if (isCommonJS) {
      const exportStatement = "module.exports = {";
      const insertionPoint = configContent.indexOf(exportStatement) + exportStatement.length;
      configContent = configContent.slice(0, insertionPoint) + `\n  plugins: {${newPluginConfig}\n  },` + configContent.slice(insertionPoint);
    } else {
      throw new Error("\u26A0\uFE0F The postcss.config file is not in the expected format and cannot be automatically updated. Please check the postcss.config file and try again.");
    }
  }
  await fs.writeFile(configFilePath, configContent);
}
async function ensurePostCSSConfig() {
  try {
    const configFilePath = await checkPostCSSConfigExists();
    if (configFilePath) {
      await updatePostCSSConfig(configFilePath);
    } else {
      await createPostCSSConfig();
    }
  } catch (error) {
    console.error("Error ensuring PostCSS config:", error.message);
    throw error;
  }
}
var mantineComment = "// This configuration was updated by Mantine TW CLI";
var mantineConfig = `
  'postcss-preset-mantine': {},
  'postcss-simple-vars': {
    variables: {
      'mantine-breakpoint-xs': '36em',
      'mantine-breakpoint-sm': '48em',
      'mantine-breakpoint-md': '62em',
      'mantine-breakpoint-lg': '75em',
      'mantine-breakpoint-xl': '88em',
    },
  },
`;

// src/mantine-files-setup.ts
import {promises as fs2} from "fs";
import * as path3 from "path";
async function detectNextRouterType(projectRoot) {
  const appRouterPaths = [
    path3.join(projectRoot, "app", "layout.tsx"),
    path3.join(projectRoot, "src", "app", "layout.tsx")
  ];
  const pageRouterPaths = [
    path3.join(projectRoot, "pages", "_app.tsx"),
    path3.join(projectRoot, "src", "pages", "_app.tsx")
  ];
  for (const appPath of appRouterPaths) {
    if (await fs2.access(appPath).then(() => true).catch(() => false)) {
      return appPath.replace("layout.tsx", "");
    }
  }
  for (const pagePath of pageRouterPaths) {
    if (await fs2.access(pagePath).then(() => true).catch(() => false)) {
      return pagePath.replace("_app.tsx", "");
    }
  }
  throw new Error("Could not determine the router type of the project. Make sure you are in the root directory of a Next.js project.");
}
async function installMantineProviderAppRouter(appDirectory) {
  const layoutFilePath = path3.join(appDirectory, "layout.tsx");
  let layoutContent = await fs2.readFile(layoutFilePath, "utf-8");
  const mantineImports = `import '@mantine/core/styles.css';\n\nimport { ColorSchemeScript, MantineProvider } from '@mantine/core';\n`;
  if (!layoutContent.includes(mantineImports.split("\n")[0])) {
    layoutContent = mantineImports + layoutContent;
  }
  if (!layoutContent.includes("<head>")) {
    layoutContent = layoutContent.replace('<html lang="en">', `<html lang="en">\n      <head>\n        <ColorSchemeScript />\n      </head>`);
  } else if (!layoutContent.includes("<ColorSchemeScript />")) {
    layoutContent = layoutContent.replace("<head>", `<head>\n        <ColorSchemeScript />`);
  }
  if (!layoutContent.includes("<MantineProvider>")) {
    layoutContent = layoutContent.replace("{children}", `\n        <MantineProvider>\n          {children}\n        </MantineProvider>\n			`);
  }
  await fs2.writeFile(layoutFilePath, layoutContent);
}
async function setupMantineInNextProject() {
  const projectRoot = process.cwd();
  try {
    const routerPath = await detectNextRouterType(projectRoot);
    if (routerPath.includes("app") && !routerPath.includes("pages")) {
      await installMantineProviderAppRouter(routerPath);
    } else {
      console.log("Detected a page router or an unknown router type. Mantine installation for this router type is not yet supported.");
    }
  } catch (error) {
    throw new Error(`Failed to setup Mantine in the Next.js project. ${error.message}`);
  }
}

// src/package-install.ts
import {promises as fs3} from "fs";
import * as path4 from "path";
import {exec} from "child_process";
import {promisify} from "util";
async function detectPackageManager(projectRoot) {
  const lockFiles = {
    "package-lock.json": PackageManager.Npm,
    "pnpm-lock.yaml": PackageManager.Pnpm,
    "yarn.lock": PackageManager.Yarn,
    "bun.lockb": PackageManager.Bun
  };
  for (const [lockFile, packageManager] of Object.entries(lockFiles)) {
    if (await fs3.access(path4.join(projectRoot, lockFile)).then(() => true).catch(() => false)) {
      return packageManager;
    }
  }
  throw new Error("Could not detect the package manager. No lock file found.");
}
async function installMantineCorePackages(packageManager, version) {
  const corePackages = ["@mantine/core", "@mantine/hooks"].map((pkg) => `${pkg}${version ? `@${version}` : ""}`);
  const devPackages = [
    "postcss",
    "postcss-preset-mantine",
    "postcss-simple-vars"
  ].map((pkg) => `${pkg}`);
  let installCommand = "";
  switch (packageManager) {
    case PackageManager.Npm:
      installCommand = `npm install ${corePackages.join(" ")} && npm install --save-dev ${devPackages.join(" ")}`;
      break;
    case PackageManager.Pnpm:
      installCommand = `pnpm add ${corePackages.join(" ")} && pnpm add --save-dev ${devPackages.join(" ")}`;
      break;
    case PackageManager.Yarn:
      installCommand = `yarn add ${corePackages.join(" ")} && yarn add --dev ${devPackages.join(" ")}`;
      break;
    case PackageManager.Bun:
      installCommand = `bun add ${corePackages.join(" ")} && bun add --dev ${devPackages.join(" ")}`;
      break;
  }
  try {
    await execAsync(installCommand, {
      cwd: projectRoot
    });
  } catch (error) {
    throw new Error(`Failed to install Mantine packages. ${error.message}`);
  }
}
async function runMantinePackageInstallation() {
  const packageManager = await detectPackageManager(projectRoot);
  await installMantineCorePackages(packageManager);
}
var execAsync = promisify(exec);
var projectRoot = process.cwd();
var PackageManager;
(function(PackageManager2) {
  PackageManager2["Npm"] = "npm";
  PackageManager2["Pnpm"] = "pnpm";
  PackageManager2["Yarn"] = "yarn";
  PackageManager2["Bun"] = "bun";
})(PackageManager || (PackageManager = {}));

// src/main.ts
async function main() {
  await welcome();
  await sleep(1000);
  const spinner2 = import_nanospinner.createSpinner("Checking the project compatibility...");
  spinner2.start();
  await sleep(1000);
  try {
    await checkProjectCompatibility();
    spinner2.update({
      text: "Project compatibility check passed.",
      color: "green"
    });
    spinner2.success();
  } catch (error) {
    spinner2.update({
      text: error.message,
      color: "red"
    });
    spinner2.error();
    process.exit(1);
  }
  await sleep(1000);
  console.log(import_chalk6.default.bold("\nWhat do you want to do?"));
  const action = await esm_default({
    message: "\uD83D\uDC49",
    choices: [
      {
        value: "add-mantine",
        name: "Add Mantine"
      },
      new Separator,
      {
        value: "add-mantine-modules",
        name: "Add Mantine Modules",
        disabled: "(Coming soon...)"
      },
      {
        value: "add-tailwindcss",
        name: "Add Tailwind CSS",
        disabled: "(Coming soon...)"
      }
    ]
  });
  if (action === "add-mantine") {
    console.log(import_chalk6.default.bold("\nWhat type of instalation you want?"));
    const mantineAction = await esm_default({
      message: "\uD83D\uDC49",
      choices: [
        {
          value: "full-setup",
          name: "Add Mantine Provider & CSS"
        },
        {
          value: "only-package",
          name: "Add Mantine to package.json only"
        }
      ]
    });
    if (mantineAction === "full-setup") {
      const installSpinner = import_nanospinner.createSpinner("Installing Mantine with Provider & CSS...");
      installSpinner.start();
      await sleep(1000);
      try {
        await ensurePostCSSConfig();
        installSpinner.update({
          text: "PostCSS configuration updated.",
          color: "green"
        });
        await sleep(1000);
      } catch (error) {
        installSpinner.update({
          text: error.message,
          color: "red"
        });
        installSpinner.error();
        process.exit(1);
      }
      try {
        await setupMantineInNextProject();
        installSpinner.update({
          text: "Mantine has been successfully installed.",
          color: "green"
        });
        await sleep(1000);
      } catch (error) {
        installSpinner.update({
          text: error.message,
          color: "red"
        });
        installSpinner.error();
        process.exit(1);
      }
      try {
        installSpinner.update({
          text: "Installing Mantine in package.json...",
          color: "yellow"
        });
        await runMantinePackageInstallation();
        installSpinner.update({
          text: "Mantine Packages has been successfully installed.",
          color: "green"
        });
      } catch (error) {
        installSpinner.update({
          text: error.message,
          color: "red"
        });
        installSpinner.error();
        process.exit(1);
      }
      await sleep(1000);
      installSpinner.success({
        text: "Mantine Provider & CSS has been successfully installed."
      });
      return;
    }
  }
}

// index.ts
await main();
