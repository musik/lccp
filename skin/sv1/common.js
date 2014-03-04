var T, baidu = T = baidu || {
  version: "1.5.2.2"
};
baidu.guid = "$BAIDU$",
  baidu.$$ = window[baidu.guid] = window[baidu.guid] || {
    global: {}
  },
  baidu.ajax = baidu.ajax || {},
  baidu.fn = baidu.fn || {},
  baidu.fn.blank = function() {},
  baidu.ajax.request = function(a, b) {
    function c() {
      if (4 == h.readyState) {
        try {
          var a = h.status
        } catch(b) {
          return e("failure"),
          void 0
        }
        e(a),
          a >= 200 && 300 > a || 304 == a || 1223 == a ? e("success") : e("failure"),
          window.setTimeout(function() {
            h.onreadystatechange = baidu.fn.blank,
          k && (h = null)
          },
          0)
      }
    }
    function d() {
      if (window.ActiveXObject) try {
        return new ActiveXObject("Msxml2.XMLHTTP")
      } catch(a) {
        try {
          return new ActiveXObject("Microsoft.XMLHTTP")
        } catch(a) {}
      }
      return window.XMLHttpRequest ? new XMLHttpRequest: void 0
    }
    function e(a) {
      a = "on" + a;
      var b = q[a],
          c = baidu.ajax[a];
      if (b) if (f && clearTimeout(f), "onsuccess" != a) b(h);
      else {
        try {
          h.responseText
        } catch(d) {
          return b(h)
        }
        b(h, h.responseText)
      } else if (c) {
        if ("onsuccess" == a) return;
        c(h)
      }
    }
    var f, g, h, i = b || {},
        j = i.data || "",
        k = !(i.async === !1),
        l = i.username || "",
        m = i.password || "",
        n = (i.method || "GET").toUpperCase(),
        o = i.headers || {},
        p = i.timeout || 0,
        q = {};
    for (g in i) q[g] = i[g];
    o["X-Requested-With"] = "XMLHttpRequest";
    try {
      h = d(),
        "GET" == n && (j && (a += (a.indexOf("?") >= 0 ? "&": "?") + j, j = null), i.noCache && (a += (a.indexOf("?") >= 0 ? "&": "?") + "b" + +new Date + "=1")),
        l ? h.open(n, a, k, l, m) : h.open(n, a, k),
        k && (h.onreadystatechange = c),
        "POST" == n && h.setRequestHeader("Content-Type", o["Content-Type"] || "application/x-www-form-urlencoded");
      for (g in o) o.hasOwnProperty(g) && h.setRequestHeader(g, o[g]);
      e("beforerequest"),
        p && (f = setTimeout(function() {
          h.onreadystatechange = baidu.fn.blank,
        h.abort(),
        e("timeout")
        },
        p)),
          h.send(j),
          k || c()
    } catch(r) {
      e("failure")
    }
    return h
  },
  baidu.url = baidu.url || {},
  baidu.url.escapeSymbol = function(a) {
    return String(a).replace(/[#%&+=\/\\\ \　\f\r\n\t]/g,
        function(a) {
          return "%" + (256 + a.charCodeAt()).toString(16).substring(1).toUpperCase()
        })
  },
  baidu.ajax.form = function(a, b) {
    function c(a, b) {
      r.push(a + "=" + b)
    }
    b = b || {};
    var d, e, f, g, h, i, j, k, l, m = a.elements,
        n = m.length,
        o = (a.getAttribute("method"), a.getAttribute("action")),
        p = b.replacer ||
          function(a) {
            return a
          },
        q = {},
        r = [];
    for (d in b) b.hasOwnProperty(d) && (q[d] = b[d]);
    for (d = 0; n > d; d++) if (e = m[d], g = e.name, !e.disabled && g) switch (f = e.type, h = baidu.url.escapeSymbol(e.value), f) {
      case "radio":
      case "checkbox":
        if (!e.checked) break;
      case "textarea":
      case "text":
      case "password":
      case "hidden":
      case "select-one":
        c(g, p(h, g));
        break;
      case "select-multiple":
        for (i = e.options, k = i.length, j = 0; k > j; j++) l = i[j],
            l.selected && c(g, p(l.value, g))
    }
    return q.data = r.join("&"),
           q.method = a.getAttribute("method") || "GET",
           baidu.ajax.request(o, q)
  },
  baidu.ajax.get = function(a, b) {
    return baidu.ajax.request(a, {
      onsuccess: b
    })
  },
  baidu.ajax.post = function(a, b, c) {
    return baidu.ajax.request(a, {
      onsuccess: c,
    method: "POST",
    data: b
    })
  },
  baidu.array = baidu.array || {},
  baidu.array.indexOf = function(a, b, c) {
    var d = a.length;
    for (c = 0 | c, 0 > c && (c = Math.max(0, d + c)); d > c; c++) if (c in a && a[c] === b) return c;
    return - 1
  },
  baidu.array.contains = function(a, b) {
    return baidu.array.indexOf(a, b) >= 0
  },
  baidu.each = baidu.array.forEach = baidu.array.each = function(a, b, c) {
    var d, e, f, g = a.length;
    if ("function" == typeof b) for (f = 0; g > f && (e = a[f], d = b.call(c || a, e, f), d !== !1); f++);
    return a
  },
  baidu.array.empty = function(a) {
    a.length = 0
  },
  baidu.array.every = function(a, b, c) {
    for (var d = 0,
        e = a.length; e > d; d++) if (d in a && !b.call(c || a, a[d], d)) return ! 1;
    return ! 0
  },
  baidu.array.filter = function(a, b, c) {
    var d, e, f = [],
    g = 0,
    h = a.length;
    if ("function" == typeof b) for (e = 0; h > e; e++) d = a[e],
       !0 === b.call(c || a, d, e) && (f[g++] = d);
    return f
  },
  baidu.array.find = function(a, b) {
    var c, d, e = a.length;
    if ("function" == typeof b) for (d = 0; e > d; d++) if (c = a[d], !0 === b.call(a, c, d)) return c;
    return null
  },
  baidu.array.hash = function(a, b) {
    for (var c = {},
        d = b && b.length,
        e = 0,
        f = a.length; f > e; e++) c[a[e]] = d && d > e ? b[e] : !0;
    return c
  },
  baidu.array.lastIndexOf = function(a, b, c) {
    var d = a.length;
    for (c = 0 | c, (!c || c >= d) && (c = d - 1), 0 > c && (c += d); c >= 0; c--) if (c in a && a[c] === b) return c;
    return - 1
  },
  baidu.array.map = function(a, b, c) {
    for (var d = [], e = 0, f = a.length; f > e; e++) d[e] = b.call(c || a, a[e], e);
    return d
  },
  baidu.array.reduce = function(a, b, c) {
    var d = 0,
    e = a.length,
    f = 0;
    if (arguments.length < 3) {
      for (; e > d; d++) {
        c = a[d++],
          f = 1;
        break
      }
      if (!f) return
    }
    for (; e > d; d++) d in a && (c = b(c, a[d], d, a));
    return c
  },
  baidu.array.remove = function(a, b) {
    for (var c = a.length; c--;) c in a && a[c] === b && a.splice(c, 1);
    return a
  },
  baidu.array.removeAt = function(a, b) {
    return a.splice(b, 1)[0]
  },
  baidu.array.some = function(a, b, c) {
    for (var d = 0,
        e = a.length; e > d; d++) if (d in a && b.call(c || a, a[d], d)) return ! 0;
    return ! 1
  },
  baidu.array.unique = function(a, b) {
    var c, d, e = a.length,
    f = a.slice(0);
    for ("function" != typeof b && (b = function(a, b) {
      return a === b
    }); --e > 0;) for (d = f[e], c = e; c--;) if (b(d, f[c])) {
      f.splice(e, 1);
      break
    }
    return f
  },
  baidu.async = baidu.async || {},
  baidu.object = baidu.object || {},
  baidu.extend = baidu.object.extend = function(a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    return a
  },
  baidu.lang = baidu.lang || {},
  baidu.lang.isFunction = function(a) {
    return "[object Function]" == Object.prototype.toString.call(a)
  },
  baidu.async._isDeferred = function(a) {
    var b = baidu.lang.isFunction;
    return a && b(a.success) && b(a.then) && b(a.fail) && b(a.cancel)
  },
  baidu.async.Deferred = function() {
    function a() {
      if (!b._cancelled && !b._firing) {
        if (b._nextDeferred) return b._nextDeferred.then(b._resolveChain[0], b._rejectChain[0]),
          void 0;
        b._firing = 1;
        for (var a = b._isError ? b._rejectChain: b._resolveChain, c = b._result[b._isError ? 1 : 0]; a[0] && !b._cancelled;) try {
          var d = a.shift().call(b, c);
          baidu.async._isDeferred(d) && (b._nextDeferred = d, [].push.apply(d._resolveChain, b._resolveChain), [].push.apply(d._rejectChain, b._rejectChain), a = b._resolveChain = [], b._rejectChain = [])
        } catch(e) {
          throw e
        } finally {
          b._fired = 1,
            b._firing = 0
        }
      }
    }
    var b = this;
    baidu.extend(b, {
      _fired: 0,
      _firing: 0,
      _cancelled: 0,
      _resolveChain: [],
      _rejectChain: [],
      _result: [],
      _isError: 0
    }),
      b.resolve = b.fireSuccess = function(c) {
        return b._result[0] = c,
        a(),
        b
      },
      b.reject = b.fireFail = function(c) {
        return b._result[1] = c,
        b._isError = 1,
        a(),
        b
      },
      b.then = function(c, d) {
        return b._resolveChain.push(c),
        b._rejectChain.push(d),
        b._fired && a(),
        b
      },
      b.success = function(a) {
        return b.then(a, baidu.fn.blank)
      },
      b.fail = function(a) {
        return b.then(baidu.fn.blank, a)
      },
      b.cancel = function() {
        b._cancelled = 1
      }
  },
  baidu.async.get = function(a) {
    var b = new baidu.async.Deferred;
    return baidu.ajax.request(a, {
      onsuccess: function(a, c) {
        b.resolve({
          xhr: a,
          responseText: c
        })
      },
           onfailure: function(a) {
             b.reject({
               xhr: a
             })
           }
    }),
           b
  },
  baidu.async.post = function(a, b) {
    var c = new baidu.async.Deferred;
    return baidu.ajax.request(a, {
      method: "POST",
           data: b,
           onsuccess: function(a, b) {
             c.resolve({
               xhr: a,
             responseText: b
             })
           },
           onfailure: function(a) {
             c.reject({
               xhr: a
             })
           }
    }),
           c
  },
  baidu.async.when = function(a, b, c) {
    if (baidu.async._isDeferred(a)) return a.then(b, c),
    a;
    var d = new baidu.async.Deferred;
    return d.then(b, c).resolve(a),
           d
  },
  baidu.browser = baidu.browser || {},
  baidu.browser.chrome = /chrome\/(\d+\.\d+)/i.test(navigator.userAgent) ? +RegExp.$1: void 0,
  baidu.browser.firefox = /firefox\/(\d+\.\d+)/i.test(navigator.userAgent) ? +RegExp.$1: void 0,
  baidu.browser.ie = baidu.ie = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1: void 0,
  baidu.browser.isGecko = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent),
  baidu.browser.isStrict = "CSS1Compat" == document.compatMode,
  baidu.browser.isWebkit = /webkit/i.test(navigator.userAgent);
try { / (\d + \.\d + ) / .test(external.max_version) && (baidu.browser.maxthon = +RegExp.$1)
} catch(e) {}
baidu.browser.opera = /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent) ? +(RegExp.$6 || RegExp.$2) : void 0,
  function() {
    var a = navigator.userAgent;
    baidu.browser.safari = /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(a) && !/chrome/i.test(a) ? +(RegExp.$1 || RegExp.$2) : void 0
  } (),
  baidu.cookie = baidu.cookie || {},
  baidu.cookie._isValidKey = function(a) {
    return new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(a)
  },
  baidu.cookie.getRaw = function(a) {
    if (baidu.cookie._isValidKey(a)) {
      var b = new RegExp("(^| )" + a + "=([^;]*)(;|$)"),
        c = b.exec(document.cookie);
      if (c) return c[2] || null
    }
    return null
  },
  baidu.cookie.get = function(a) {
    var b = baidu.cookie.getRaw(a);
    return "string" == typeof b ? b = decodeURIComponent(b) : null
  },
  baidu.cookie.setRaw = function(a, b, c) {
    if (baidu.cookie._isValidKey(a)) {
      c = c || {};
      var d = c.expires;
      "number" == typeof c.expires && (d = new Date, d.setTime(d.getTime() + c.expires)),
        document.cookie = a + "=" + b + (c.path ? "; path=" + c.path: "") + (d ? "; expires=" + d.toGMTString() : "") + (c.domain ? "; domain=" + c.domain: "") + (c.secure ? "; secure": "")
    }
  },
  baidu.cookie.remove = function(a, b) {
    b = b || {},
    b.expires = new Date(0),
    baidu.cookie.setRaw(a, "", b)
  },
  baidu.cookie.set = function(a, b, c) {
    baidu.cookie.setRaw(a, encodeURIComponent(b), c)
  },
  baidu.date = baidu.date || {},
  baidu.number = baidu.number || {},
  baidu.number.pad = function(a, b) {
    var c = "",
    d = 0 > a,
    e = String(Math.abs(a));
    return e.length < b && (c = new Array(b - e.length + 1).join("0")),
           (d ? "-": "") + c + e
  },
  baidu.date.format = function(a, b) {
    function c(a, c) {
      b = b.replace(a, c)
    }
    if ("string" != typeof b) return a.toString();
    var d = baidu.number.pad,
      e = a.getFullYear(),
        f = a.getMonth() + 1,
        g = a.getDate(),
        h = a.getHours(),
        i = a.getMinutes(),
        j = a.getSeconds();
    return c(/yyyy/g, d(e, 4)),
           c(/yy/g, d(parseInt(e.toString().slice(2), 10), 2)),
           c(/MM/g, d(f, 2)),
           c(/M/g, f),
           c(/dd/g, d(g, 2)),
           c(/d/g, g),
           c(/HH/g, d(h, 2)),
           c(/H/g, h),
           c(/hh/g, d(h % 12, 2)),
           c(/h/g, h % 12),
           c(/mm/g, d(i, 2)),
           c(/m/g, i),
           c(/ss/g, d(j, 2)),
           c(/s/g, j),
           b
  },
  baidu.date.parse = function(a) {
    var b = new RegExp("^\\d+(\\-|\\/)\\d+(\\-|\\/)\\d+$");
    if ("string" == typeof a) {
      if (b.test(a) || isNaN(Date.parse(a))) {
        var c = a.split(/ |T/),
          d = c.length > 1 ? c[1].split(/[^\d]/) : [0, 0, 0],
            e = c[0].split(/[^\d]/);
        return new Date(e[0] - 0, e[1] - 1, e[2] - 0, d[0] - 0, d[1] - 0, d[2] - 0)
      }
      return new Date(a)
    }
    return new Date
  },
  baidu.dom = baidu.dom || {},
  baidu.dom.g = function(a) {
    return a ? "string" == typeof a || a instanceof String ? document.getElementById(a) : !a.nodeName || 1 != a.nodeType && 9 != a.nodeType ? null: a: null
  },
  baidu.g = baidu.G = baidu.dom.g,
  baidu.string = baidu.string || {},
  function() {
    var a = new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
    baidu.string.trim = function(b) {
      return String(b).replace(a, "")
    }
  } (),
  baidu.trim = baidu.string.trim,
  baidu.dom.addClass = function(a, b) {
    a = baidu.dom.g(a);
    for (var c = b.split(/\s+/), d = a.className, e = " " + d + " ", f = 0, g = c.length; g > f; f++) e.indexOf(" " + c[f] + " ") < 0 && (d += (d ? " ": "") + c[f]);
    return a.className = d,
      a
  },
  baidu.addClass = baidu.dom.addClass,
  baidu.dom.children = function(a) {
    a = baidu.dom.g(a);
    for (var b = [], c = a.firstChild; c; c = c.nextSibling) 1 == c.nodeType && b.push(c);
    return b
  },
  baidu.lang.isString = function(a) {
    return "[object String]" == Object.prototype.toString.call(a)
  },
  baidu.isString = baidu.lang.isString,
  baidu.dom._g = function(a) {
    return baidu.lang.isString(a) ? document.getElementById(a) : a
  },
  baidu._g = baidu.dom._g,
  baidu.dom.contains = function(a, b) {
    var c = baidu.dom._g;
    return a = c(a),
           b = c(b),
           a.contains ? a != b && a.contains(b) : !!(16 & a.compareDocumentPosition(b))
  },
  baidu.dom._NAME_ATTRS = function() {
    var a = {
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      colspan: "colSpan",
      rowspan: "rowSpan",
      valign: "vAlign",
      usemap: "useMap",
      frameborder: "frameBorder"
    };
    return baidu.browser.ie < 8 ? (a["for"] = "htmlFor", a["class"] = "className") : (a.htmlFor = "for", a.className = "class"),
           a
  } (),
  baidu.dom.setAttr = function(a, b, c) {
    return a = baidu.dom.g(a),
    "style" == b ? a.style.cssText = c: (b = baidu.dom._NAME_ATTRS[b] || b, a.setAttribute(b, c)),
    a
  },
  baidu.setAttr = baidu.dom.setAttr,
  baidu.dom.setAttrs = function(a, b) {
    a = baidu.dom.g(a);
    for (var c in b) baidu.dom.setAttr(a, c, b[c]);
    return a
  },
  baidu.setAttrs = baidu.dom.setAttrs,
  baidu.dom.create = function(a, b) {
    var c = document.createElement(a),
    d = b || {};
    return baidu.dom.setAttrs(c, d)
  },
  baidu.lang.guid = function() {
    return "TANGRAM$" + baidu.$$._counter++
  },
  baidu.$$._counter = baidu.$$._counter || 1,
  baidu.lang.Class = function() {
    this.guid = baidu.lang.guid(),
    !this.__decontrolled && (baidu.$$._instances[this.guid] = this)
  },
  baidu.$$._instances = baidu.$$._instances || {},
  baidu.lang.Class.prototype.dispose = function() {
    delete baidu.$$._instances[this.guid];
    for (var a in this)"function" != typeof this[a] && delete this[a];
    this.disposed = !0
  },
  baidu.lang.Class.prototype.toString = function() {
    return "[object " + (this.__type || this._className || "Object") + "]"
  },
  window.baiduInstance = function(a) {
    return baidu.$$._instances[a]
  },
  baidu.lang.Class.prototype.un = baidu.lang.Class.prototype.removeEventListener = function(a, b) {
    var c, d = this.__listeners;
    if (d) if ("undefined" != typeof a) {
      if (a.indexOf("on") && (a = "on" + a), "undefined" == typeof b) delete d[a];
      else if (d[a]) for ("string" == typeof b && (b = d[a][b]) && delete d[a][b], c = d[a].length - 1; c >= 0; c--) d[a][c] === b && d[a].splice(c, 1)
    } else for (c in d) delete d[c]
  },
  baidu.lang.Event = function(a, b) {
    this.type = a,
    this.returnValue = !0,
    this.target = b || null,
    this.currentTarget = null
  },
  baidu.lang.Class.prototype.fire = baidu.lang.Class.prototype.dispatchEvent = function(a, b) {
    baidu.lang.isString(a) && (a = new baidu.lang.Event(a)),
    !this.__listeners && (this.__listeners = {}),
    b = b || {};
    for (var c in b) a[c] = b[c];
    var c, d, e = this,
      f = e.__listeners,
        g = a.type;
    if (a.target = a.target || (a.currentTarget = e), g.indexOf("on") && (g = "on" + g), "function" == typeof e[g] && e[g].apply(e, arguments), "object" == typeof f[g]) for (c = 0, d = f[g].length; d > c; c++) f[g][c] && f[g][c].apply(e, arguments);
    return a.returnValue
  },
  baidu.lang.Class.prototype.on = baidu.lang.Class.prototype.addEventListener = function(a, b, c) {
    if ("function" == typeof b) { ! this.__listeners && (this.__listeners = {});
      var d, e = this.__listeners;
      for (a.indexOf("on") && (a = "on" + a), "object" != typeof e[a] && (e[a] = []), d = e[a].length - 1; d >= 0; d--) if (e[a][d] === b) return b;
      return e[a].push(b),
        c && "string" == typeof c && (e[a][c] = b),
          b
    }
  },
  baidu.lang.createSingle = function(a) {
    var b = new baidu.lang.Class;
    for (var c in a) b[c] = a[c];
    return b
  },
  baidu.dom.ddManager = baidu.lang.createSingle({
    _targetsDroppingOver: {}
  }),
  baidu.dom.getDocument = function(a) {
    return a = baidu.dom.g(a),
    9 == a.nodeType ? a: a.ownerDocument || a.document
  },
  baidu.dom.getComputedStyle = function(a, b) {
    a = baidu.dom._g(a);
    var c, d = baidu.dom.getDocument(a);
    return d.defaultView && d.defaultView.getComputedStyle && (c = d.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) : ""
  },
  baidu.dom._styleFixer = baidu.dom._styleFixer || {},
  baidu.dom._styleFilter = baidu.dom._styleFilter || [],
  baidu.dom._styleFilter.filter = function(a, b, c) {
    for (var d, e = 0,
        f = baidu.dom._styleFilter; d = f[e]; e++)(d = d[c]) && (b = d(a, b));
    return b
  },
  baidu.string.toCamelCase = function(a) {
    return a.indexOf("-") < 0 && a.indexOf("_") < 0 ? a: a.replace(/[-_][^-_]/g,
        function(a) {
          return a.charAt(1).toUpperCase()
        })
  },
  baidu.dom.getStyle = function(a, b) {
    var c = baidu.dom;
    a = c.g(a),
      b = baidu.string.toCamelCase(b);
    var d = a.style[b] || (a.currentStyle ? a.currentStyle[b] : "") || c.getComputedStyle(a, b);
    if (!d || "auto" == d) {
      var e = c._styleFixer[b];
      e && (d = e.get ? e.get(a, b, d) : baidu.dom.getStyle(a, e))
    }
    return (e = c._styleFilter) && (d = e.filter(b, d, "get")),
           d
  },
  baidu.getStyle = baidu.dom.getStyle,
  baidu.event = baidu.event || {},
  baidu.event._listeners = baidu.event._listeners || [],
  baidu.event.on = function(a, b, c) {
    b = b.replace(/^on/i, ""),
    a = baidu.dom._g(a);
    var d, e = function(b) {
      c.call(a, b)
    },
        f = baidu.event._listeners,
        g = baidu.event._eventFilter,
        h = b;
    return b = b.toLowerCase(),
           g && g[b] && (d = g[b](a, b, e), h = d.type, e = d.listener),
           a.addEventListener ? a.addEventListener(h, e, !1) : a.attachEvent && a.attachEvent("on" + h, e),
           f[f.length] = [a, b, c, e, h],
           a
  },
  baidu.on = baidu.event.on,
  baidu.page = baidu.page || {},
  baidu.page.getScrollTop = function() {
    var a = document;
    return window.pageYOffset || a.documentElement.scrollTop || a.body.scrollTop
  },
  baidu.page.getScrollLeft = function() {
    var a = document;
    return window.pageXOffset || a.documentElement.scrollLeft || a.body.scrollLeft
  },
  function() {
    baidu.page.getMousePosition = function() {
      return {
        x: baidu.page.getScrollLeft() + a.x,
        y: baidu.page.getScrollTop() + a.y
      }
    };
    var a = {
      x: 0,
      y: 0
    };
    baidu.event.on(document, "onmousemove",
        function(b) {
          b = window.event || b,
      a.x = b.clientX,
      a.y = b.clientY
        })
  } (),
  baidu.event.un = function(a, b, c) {
    a = baidu.dom._g(a),
    b = b.replace(/^on/i, "").toLowerCase();
    for (var d, e, f, g = baidu.event._listeners,
        h = g.length,
        i = !c; h--;) d = g[h],
        d[1] !== b || d[0] !== a || !i && d[2] !== c || (e = d[4], f = d[3], a.removeEventListener ? a.removeEventListener(e, f, !1) : a.detachEvent && a.detachEvent("on" + e, f), g.splice(h, 1));
    return a
  },
  baidu.un = baidu.event.un,
  baidu.event.preventDefault = function(a) {
    a.preventDefault ? a.preventDefault() : a.returnValue = !1
  },
  baidu.lang.isObject = function(a) {
    return "function" == typeof a || !(!a || "object" != typeof a)
  },
  baidu.isObject = baidu.lang.isObject,
  function() {
    function a() {
      clearInterval(h),
      e.capture && d.releaseCapture ? d.releaseCapture() : e.capture && window.captureEvents && window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP),
      document.body.style.MozUserSelect = m,
      baidu.event.un(document, "selectstart", c),
      e.autoStop && baidu.event.un(document, "mouseup", a),
      baidu.lang.isFunction(e.ondragend) && e.ondragend(d, e, {
        left: k,
      top: l
      })
    }
    function b() {
      var a = e.range || [],
      b = baidu.page.getMousePosition(),
      c = i + b.x - f,
      h = j + b.y - g;
      baidu.lang.isObject(a) && 4 == a.length && (c = Math.max(a[3], c), c = Math.min(a[1] - d.offsetWidth, c), h = Math.max(a[0], h), h = Math.min(a[2] - d.offsetHeight, h)),
        d.style.left = c + "px",
        d.style.top = h + "px",
        k = c,
        l = h,
        baidu.lang.isFunction(e.ondrag) && e.ondrag(d, e, {
          left: k,
        top: l
        })
    }
    function c(a) {
      return baidu.event.preventDefault(a, !1)
    }
    var d, e, f, g, h, i, j, k, l, m;
    baidu.dom.drag = function(n, o) {
      return (d = baidu.dom.g(n)) ? (e = baidu.object.extend({
        autoStop: !0,
             capture: !0,
             interval: 16
      },
      o), k = i = parseInt(baidu.dom.getStyle(d, "left")) || 0, l = j = parseInt(baidu.dom.getStyle(d, "top")) || 0, setTimeout(function() {
        var a = baidu.page.getMousePosition();
        f = e.mouseEvent ? baidu.page.getScrollLeft() + e.mouseEvent.clientX: a.x,
      g = e.mouseEvent ? baidu.page.getScrollTop() + e.mouseEvent.clientY: a.y,
      clearInterval(h),
      h = setInterval(b, e.interval)
      },
      1), e.autoStop && baidu.event.on(document, "mouseup", a), baidu.event.on(document, "selectstart", c), e.capture && d.setCapture ? d.setCapture() : e.capture && window.captureEvents && window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP), m = document.body.style.MozUserSelect, document.body.style.MozUserSelect = "none", baidu.lang.isFunction(e.ondragstart) && e.ondragstart(d, e), {
        stop: a,
             dispose: a,
             update: function(a) {
               baidu.object.extend(e, a)
             }
      }) : !1
    }
  } (),
  baidu.dom.setStyle = function(a, b, c) {
    var d, e = baidu.dom;
    return a = e.g(a),
           b = baidu.string.toCamelCase(b),
           (d = e._styleFilter) && (c = d.filter(b, c, "set")),
           d = e._styleFixer[b],
           d && d.set ? d.set(a, c, b) : a.style[d || b] = c,
           a
  },
  baidu.setStyle = baidu.dom.setStyle,
  baidu.dom.draggable = function(a, b) {
    function c(c) {
      var d = b.mouseEvent = window.event || c;
      b.mouseEvent = {
        clientX: d.clientX,
        clientY: d.clientY
      },
        d.button > 1 || baidu.lang.isFunction(b.toggle) && !b.toggle() || (baidu.lang.isFunction(b.onbeforedragstart) && b.onbeforedragstart(a), f = baidu.dom.drag(a, b), i.stop = f.stop, i.update = f.update, baidu.event.preventDefault(d))
    }
    b = baidu.object.extend({
      toggle: function() {
        return ! 0
      }
    },
    b),
      b.autoStop = !0,
      a = baidu.dom.g(a),
      b.handler = b.handler || a;
    var d, e, f, g = ["ondragstart", "ondrag", "ondragend"],
        h = g.length - 1,
        i = {
          dispose: function() {
            f && f.stop(),
            baidu.event.un(b.handler, "onmousedown", c),
            baidu.lang.Class.prototype.dispose.call(i)
          }
        },
        j = this;
    if (d = baidu.dom.ddManager) for (; h >= 0; h--) e = g[h],
       b[e] = function(c) {
         var e = b[c];
         return function() {
           baidu.lang.isFunction(e) && e.apply(j, arguments),
             d.dispatchEvent(c, {
               DOM: a
             })
         }
       } (e);
    return a && baidu.event.on(b.handler, "onmousedown", c),
           {
             cancel: function() {
               i.dispose()
             }
           }
  },
  baidu.dom.getPosition = function(a) {
    a = baidu.dom.g(a);
    var b, c, d = baidu.dom.getDocument(a),
        e = baidu.browser,
        f = baidu.dom.getStyle,
        g = (e.isGecko > 0 && d.getBoxObjectFor && "absolute" == f(a, "position") && ("" === a.style.top || "" === a.style.left), {
          left: 0,
        top: 0
        }),
        h = e.ie && !e.isStrict ? d.body: d.documentElement;
    if (a == h) return g;
    if (a.getBoundingClientRect) {
      c = a.getBoundingClientRect(),
        g.left = Math.floor(c.left) + Math.max(d.documentElement.scrollLeft, d.body.scrollLeft),
          g.top = Math.floor(c.top) + Math.max(d.documentElement.scrollTop, d.body.scrollTop),
          g.left -= d.documentElement.clientLeft,
          g.top -= d.documentElement.clientTop;
      var i = d.body,
          j = parseInt(f(i, "borderLeftWidth")),
          k = parseInt(f(i, "borderTopWidth"));
      e.ie && !e.isStrict && (g.left -= isNaN(j) ? 2 : j, g.top -= isNaN(k) ? 2 : k)
    } else {
      b = a;
      do {
        if (g.left += b.offsetLeft, g.top += b.offsetTop, e.isWebkit > 0 && "fixed" == f(b, "position")) {
          g.left += d.body.scrollLeft,
            g.top += d.body.scrollTop;
          break
        }
        b = b.offsetParent
      } while ( b && b != a );
      for ((e.opera > 0 || e.isWebkit > 0 && "absolute" == f(a, "position")) && (g.top -= d.body.offsetTop), b = a.offsetParent; b && b != d.body;) g.left -= b.scrollLeft,
          e.opera && "TR" == b.tagName || (g.top -= b.scrollTop),
            b = b.offsetParent
    }
    return g
  },
  baidu.dom.intersect = function(a, b) {
    var c = baidu.dom.g,
    d = baidu.dom.getPosition,
    e = Math.max,
    f = Math.min;
    a = c(a),
      b = c(b);
    var g = d(a),
        h = d(b);
    return e(g.left, h.left) <= f(g.left + a.offsetWidth, h.left + b.offsetWidth) && e(g.top, h.top) <= f(g.top + a.offsetHeight, h.top + b.offsetHeight)
  },
  baidu.dom.droppable = function(a, b) {
    b = b || {};
    var c = baidu.dom.ddManager,
        d = baidu.dom.g(a),
        e = baidu.lang.guid(),
        f = function(a) {
          var f = c._targetsDroppingOver,
          g = {
            trigger: a.DOM,
            reciever: d
          };
          baidu.dom.intersect(d, a.DOM) ? f[e] || ("function" == typeof b.ondropover && b.ondropover.call(d, g), c.dispatchEvent("ondropover", g), f[e] = !0) : (f[e] && ("function" == typeof b.ondropout && b.ondropout.call(d, g), c.dispatchEvent("ondropout", g)), delete f[e])
        },
        g = function(a) {
          var f = {
            trigger: a.DOM,
            reciever: d
          };
          baidu.dom.intersect(d, a.DOM) && ("function" == typeof b.ondrop && b.ondrop.call(d, f), c.dispatchEvent("ondrop", f)),
            delete c._targetsDroppingOver[e]
        };
    return c.addEventListener("ondrag", f),
           c.addEventListener("ondragend", g),
           {
             cancel: function() {
               c.removeEventListener("ondrag", f),
               c.removeEventListener("ondragend", g)
             }
           }
  },
  baidu.dom.empty = function(a) {
    for (a = baidu.dom.g(a); a.firstChild;) a.removeChild(a.firstChild);
    return a
  },
  baidu.dom._matchNode = function(a, b, c) {
    a = baidu.dom.g(a);
    for (var d = a[c]; d; d = d[b]) if (1 == d.nodeType) return d;
    return null
  },
  baidu.dom.first = function(a) {
    return baidu.dom._matchNode(a, "nextSibling", "firstChild")
  },
  baidu.dom.getAttr = function(a, b) {
    return a = baidu.dom.g(a),
    "style" == b ? a.style.cssText: (b = baidu.dom._NAME_ATTRS[b] || b, a.getAttribute(b))
  },
  baidu.getAttr = baidu.dom.getAttr,
  baidu.dom.setStyles = function(a, b) {
    a = baidu.dom.g(a);
    for (var c in b) baidu.dom.setStyle(a, c, b[c]);
    return a
  },
  baidu.setStyles = baidu.dom.setStyles,
  baidu.page.getViewHeight = function() {
    var a = document,
    b = "BackCompat" == a.compatMode ? a.body: a.documentElement;
    return b.clientHeight
  },
  baidu.page.getViewWidth = function() {
    var a = document,
    b = "BackCompat" == a.compatMode ? a.body: a.documentElement;
    return b.clientWidth
  },
  baidu.dom._styleFilter[baidu.dom._styleFilter.length] = {
    set: function(a, b) {
      return b.constructor != Number || /zIndex|fontWeight|opacity|zoom|lineHeight/i.test(a) || (b += "px"),
      b
    }
  },
  baidu.dom.fixable = function(a, b) {
    function c() {
      return {
        top: "top" == n ? k.y: baidu.page.getViewHeight() - k.y - j.height,
        left: "left" == o ? k.x: baidu.page.getViewWidth() - k.x - j.width
      }
    }
    function d() {
      var a = c();
      l.style.setExpression("left", "eval((document.body.scrollLeft || document.documentElement.scrollLeft) + " + a.left + ") + 'px'"),
        l.style.setExpression("top", "eval((document.body.scrollTop || document.documentElement.scrollTop) + " + a.top + ") + 'px'")
    }
    function e() {
      var a = {
        position: baidu.getStyle(l, "position"),
        height: function() {
          var a = baidu.getStyle(l, "height");
          return "auto" != a ? /\d+/.exec(a)[0] : l.offsetHeight
        } (),
        width: function() {
          var a = baidu.getStyle(l, "width");
          return "auto" != a ? /\d+/.exec(a)[0] : l.offsetWidth
        } ()
      };
      return f("top", a),
             f("left", a),
             f("bottom", a),
             f("right", a),
             a
    }
    function f(a, b) {
      var c;
      "static" == b.position ? b[a] = "": (c = baidu.getStyle(l, a), b[a] = "auto" == c || "0px" == c ? "": c)
    }
    function g() {
      if (!q) {
        if (baidu.setStyles(l, {
          top: "",
          left: "",
          bottom: "",
          right: ""
        }), m) baidu.setStyle(l, "position", "absolute"),
          d();
        else {
          var a = {
            position: "fixed"
          };
          a["top" == n ? "top": "bottom"] = k.y + "px",
            a["left" == o ? "left": "right"] = k.x + "px",
            baidu.setStyles(l, a)
        }
        r(),
          q = !0
      }
    }
    function h() {
      if (q) {
        var a = {
          position: j.position,
          left: "" == j.left ? "auto": j.left,
          top: "" == j.top ? "auto": j.top,
          bottom: "" == j.bottom ? "auto": j.bottom,
          right: "" == j.right ? "auto": j.right
        };
        m && (l.style.removeExpression("left"), l.style.removeExpression("top")),
          baidu.setStyles(l, a),
          t(),
          q = !1
      }
    }
    function i(a) {
      a && (r = a.onrender || r, s = a.onupdate || s, t = a.onrelease || t, n = a.vertival || "top", o = a.horizontal || "left", baidu.extend(k, a.offset || {}), s())
    }
    var j, k, l = baidu.g(a),
        m = baidu.browser.ie && baidu.browser.ie <= 7 ? !0 : !1,
        n = b.vertival || "top",
        o = b.horizontal || "left",
        p = "undefined" != typeof b.autofix ? b.autofix: !0,
        q = !1,
        r = b.onrender || new Function,
        s = b.onupdate || new Function,
        t = b.onrelease || new Function;
    if (l) return j = e(),
       k = {
         y: m ? "static" == j.position ? baidu.dom.getPosition(l).top: baidu.dom.getPosition(l).top - baidu.dom.getPosition(l.parentNode).top: l.offsetTop,
         x: m ? "static" == j.position ? baidu.dom.getPosition(l).left: baidu.dom.getPosition(l).left - baidu.dom.getPosition(l.parentNode).left: l.offsetLeft
       },
         baidu.extend(k, b.offset || {}),
           p && g(),
           {
             render: g,
             update: i,
             release: h
           }
  },
  baidu.dom.getAncestorBy = function(a, b) {
    for (a = baidu.dom.g(a); (a = a.parentNode) && 1 == a.nodeType;) if (b(a)) return a;
    return null
  },
  baidu.dom.getAncestorByClass = function(a, b) {
    for (a = baidu.dom.g(a), b = new RegExp("(^|\\s)" + baidu.string.trim(b) + "(\\s|$)"); (a = a.parentNode) && 1 == a.nodeType;) if (b.test(a.className)) return a;
    return null
  },
  baidu.dom.getAncestorByTag = function(a, b) {
    for (a = baidu.dom.g(a), b = b.toUpperCase(); (a = a.parentNode) && 1 == a.nodeType;) if (a.tagName == b) return a;
    return null
  },
  baidu.dom.getCurrentStyle = function(a, b) {
    return a = baidu.dom.g(a),
    a.style[b] || (a.currentStyle ? a.currentStyle[b] : "") || baidu.dom.getComputedStyle(a, b)
  },
  baidu.dom.getParent = function(a) {
    return a = baidu.dom._g(a),
    a.parentElement || a.parentNode || null
  },
  baidu.dom.getText = function(a) {
    var b, c, d = "",
    e = 0;
    if (a = baidu._g(a), 3 === a.nodeType || 4 === a.nodeType) d += a.nodeValue;
    else if (8 !== a.nodeType) for (b = a.childNodes, c = b.length; c > e; e++) d += baidu.dom.getText(b[e]);
    return d
  },
  baidu.dom.getWindow = function(a) {
    a = baidu.dom.g(a);
    var b = baidu.dom.getDocument(a);
    return b.parentWindow || b.defaultView || null
  },
  baidu.dom.hasAttr = function(a, b) {
    a = baidu.g(a);
    var c = a.attributes.getNamedItem(b);
    return ! (!c || !c.specified)
  },
  baidu.dom.hasClass = function(a, b) {
    if (a = baidu.dom.g(a), !a || !a.className) return ! 1;
    var c = baidu.string.trim(b).split(/\s+/),
      d = c.length;
    for (b = a.className.split(/\s+/).join(" "); d--;) if (!new RegExp("(^| )" + c[d] + "( |$)").test(b)) return ! 1;
    return ! 0
  },
  baidu.dom.hide = function(a) {
    return a = baidu.dom.g(a),
    a.style.display = "none",
    a
  },
  baidu.hide = baidu.dom.hide,
  baidu.dom.insertAfter = function(a, b) {
    var c, d;
    return c = baidu.dom._g,
           a = c(a),
           b = c(b),
           d = b.parentNode,
           d && d.insertBefore(a, b.nextSibling),
           a
  },
  baidu.dom.insertBefore = function(a, b) {
    var c, d;
    return c = baidu.dom._g,
           a = c(a),
           b = c(b),
           d = b.parentNode,
           d && d.insertBefore(a, b),
           a
  },
  baidu.dom.insertHTML = function(a, b, c) {
    a = baidu.dom.g(a);
    var d, e;
    return a.insertAdjacentHTML && !baidu.browser.opera ? a.insertAdjacentHTML(b, c) : (d = a.ownerDocument.createRange(), b = b.toUpperCase(), "AFTERBEGIN" == b || "BEFOREEND" == b ? (d.selectNodeContents(a), d.collapse("AFTERBEGIN" == b)) : (e = "BEFOREBEGIN" == b, d[e ? "setStartBefore": "setEndAfter"](a), d.collapse(e)), d.insertNode(d.createContextualFragment(c))),
           a
  },
  baidu.insertHTML = baidu.dom.insertHTML,
  baidu.dom.last = function(a) {
    return baidu.dom._matchNode(a, "previousSibling", "lastChild")
  },
  baidu.dom.next = function(a) {
    return baidu.dom._matchNode(a, "nextSibling", "nextSibling")
  },
  baidu.dom.opacity = function(a, b) {
    a = baidu.dom.g(a),
    baidu.browser.ie ? a.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity:" + Math.floor(100 * b) + ")": (a.style.opacity = b, a.style.KHTMLOpacity = b)
  },
  baidu.dom.prev = function(a) {
    return baidu.dom._matchNode(a, "previousSibling", "previousSibling")
  },
  baidu.string.escapeReg = function(a) {
    return String(a).replace(new RegExp("([.*+?^=!:${}()|[\\]/\\\\])", "g"), "\\$1")
  },
  baidu.dom.q = function(a, b, c) {
    var d, e, f, g, h = [],
    i = baidu.string.trim;
    if (! (a = i(a))) return h;
    if ("undefined" == typeof b) b = document;
    else if (b = baidu.dom.g(b), !b) return h;
    if (c && (c = i(c).toUpperCase()), b.getElementsByClassName) for (f = b.getElementsByClassName(a), d = f.length, e = 0; d > e; e++) g = f[e],
      c && g.tagName != c || (h[h.length] = g);
    else for (a = new RegExp("(^|\\s)" + baidu.string.escapeReg(a) + "(\\s|$)"), f = c ? b.getElementsByTagName(c) : b.all || b.getElementsByTagName("*"), d = f.length, e = 0; d > e; e++) g = f[e],
         a.test(g.className) && (h[h.length] = g);
    return h
  },
  baidu.q = baidu.Q = baidu.dom.q,
  function() {
    function a(a, b, c, e, f, g) {
      for (var h = 0,
          i = e.length; i > h; h++) {
            var j = e[h];
            if (j) {
              var k = !1;
              for (j = j[a]; j;) {
                if (j[d] === c) {
                  k = e[j.sizset];
                  break
                }
                if (1 !== j.nodeType || g || (j[d] = c, j.sizset = h), j.nodeName.toLowerCase() === b) {
                  k = j;
                  break
                }
                j = j[a]
              }
              e[h] = k
            }
          }
    }
    function b(a, b, c, e, f, g) {
      for (var h = 0,
          i = e.length; i > h; h++) {
            var j = e[h];
            if (j) {
              var k = !1;
              for (j = j[a]; j;) {
                if (j[d] === c) {
                  k = e[j.sizset];
                  break
                }
                if (1 === j.nodeType) if (g || (j[d] = c, j.sizset = h), "string" != typeof b) {
                  if (j === b) {
                    k = !0;
                    break
                  }
                } else if (l.filter(b, [j]).length > 0) {
                  k = j;
                  break
                }
                j = j[a]
              }
              e[h] = k
            }
          }
    }
    var c = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        d = "sizcache" + (Math.random() + "").replace(".", ""),
        e = 0,
        f = Object.prototype.toString,
        g = !1,
        h = !0,
        i = /\\/g,
        j = /\r\n/g,
        k = /\W/; [0, 0].sort(function() {
          return h = !1,
        0
        });
        var l = function(a, b, d, e) {
          d = d || [],
        b = b || document;
    var g = b;
    if (1 !== b.nodeType && 9 !== b.nodeType) return [];
    if (!a || "string" != typeof a) return d;
    var h, i, j, k, m, p, q, s, t = !0,
        u = l.isXML(b),
        w = [],
        x = a;
    do
      if (c.exec(""), h = c.exec(x), h && (x = h[3], w.push(h[1]), h[2])) {
        k = h[3];
        break
      }
    while (h);
    if (w.length > 1 && o.exec(a)) if (2 === w.length && n.relative[w[0]]) i = v(w[0] + w[1], b, e);
    else for (i = n.relative[w[0]] ? [b] : l(w.shift(), b); w.length;) a = w.shift(),
      n.relative[a] && (a += w.shift()),
        i = v(a, i, e);
      else if (!e && w.length > 1 && 9 === b.nodeType && !u && n.match.ID.test(w[0]) && !n.match.ID.test(w[w.length - 1]) && (m = l.find(w.shift(), b, u), b = m.expr ? l.filter(m.expr, m.set)[0] : m.set[0]), b) for (m = e ? {
        expr: w.pop(),
           set: r(e)
      }: l.find(w.pop(), 1 !== w.length || "~" !== w[0] && "+" !== w[0] || !b.parentNode ? b: b.parentNode, u), i = m.expr ? l.filter(m.expr, m.set) : m.set, w.length > 0 ? j = r(i) : t = !1; w.length;) p = w.pop(),
           q = p,
           n.relative[p] ? q = w.pop() : p = "",
           null == q && (q = b),
           n.relative[p](j, q, u);
      else j = w = [];
    if (j || (j = i), j || l.error(p || a), "[object Array]" === f.call(j)) if (t) if (b && 1 === b.nodeType) for (s = 0; null != j[s]; s++) j[s] && (j[s] === !0 || 1 === j[s].nodeType && l.contains(b, j[s])) && d.push(i[s]);
    else for (s = 0; null != j[s]; s++) j[s] && 1 === j[s].nodeType && d.push(i[s]);
    else d.push.apply(d, j);
    else r(j, d);
    return k && (l(k, g, d, e), l.uniqueSort(d)),
      d
        };
        l.uniqueSort = function(a) {
          if (t && (g = h, a.sort(t), g)) for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1);
          return a
        },
          l.matches = function(a, b) {
            return l(a, null, null, b)
          },
          l.matchesSelector = function(a, b) {
            return l(b, null, null, [a]).length > 0
          },
          l.find = function(a, b, c) {
            var d, e, f, g, h, j;
            if (!a) return [];
            for (e = 0, f = n.order.length; f > e; e++) if (h = n.order[e], (g = n.leftMatch[h].exec(a)) && (j = g[1], g.splice(1, 1), "\\" !== j.substr(j.length - 1) && (g[1] = (g[1] || "").replace(i, ""), d = n.find[h](g, b, c), null != d))) {
              a = a.replace(n.match[h], "");
              break
            }
            return d || (d = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : []),
                   {
                     set: d,
                     expr: a
                   }
          },
          l.filter = function(a, b, c, d) {
            for (var e, f, g, h, i, j, k, m, o, p = a,
                q = [], r = b, s = b && b[0] && l.isXML(b[0]); a && b.length;) {
                  for (g in n.filter) if (null != (e = n.leftMatch[g].exec(a)) && e[2]) {
                    if (j = n.filter[g], k = e[1], f = !1, e.splice(1, 1), "\\" === k.substr(k.length - 1)) continue;
                    if (r === q && (q = []), n.preFilter[g]) if (e = n.preFilter[g](e, r, c, q, d, s)) {
                      if (e === !0) continue
                    } else f = h = !0;
                    if (e) for (m = 0; null != (i = r[m]); m++) i && (h = j(i, e, m, r), o = d ^ h, c && null != h ? o ? f = !0 : r[m] = !1 : o && (q.push(i), f = !0));
                    if (void 0 !== h) {
                      if (c || (r = q), a = a.replace(n.match[g], ""), !f) return [];
                      break
                    }
                  }
                  if (a === p) {
                    if (null != f) break;
                    l.error(a)
                  }
                  p = a
                }
            return r
          },
          l.error = function(a) {
            throw "Syntax error, unrecognized expression: " + a
          };
        var m = l.getText = function(a) {
          var b, c, d = a.nodeType,
              e = "";
          if (d) {
            if (1 === d) {
              if ("string" == typeof a.textContent) return a.textContent;
              if ("string" == typeof a.innerText) return a.innerText.replace(j, "");
              for (a = a.firstChild; a; a = a.nextSibling) e += m(a)
            } else if (3 === d || 4 === d) return a.nodeValue
          } else for (b = 0; c = a[b]; b++) 8 !== c.nodeType && (e += m(c));
          return e
        },
            n = l.selectors = {
              order: ["ID", "NAME", "TAG"],
              match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
              },
              leftMatch: {},
              attrMap: {
                "class": "className",
                "for": "htmlFor"
              },
              attrHandle: {
                href: function(a) {
                  return a.getAttribute("href")
                },
                type: function(a) {
                  return a.getAttribute("type")
                }
              },
              relative: {
                "+": function(a, b) {
                  var c = "string" == typeof b,
                  d = c && !k.test(b),
                  e = c && !d;
                  d && (b = b.toLowerCase());
                  for (var f, g = 0,
                      h = a.length; h > g; g++) if (f = a[g]) {
                        for (; (f = f.previousSibling) && 1 !== f.nodeType;);
                        a[g] = e || f && f.nodeName.toLowerCase() === b ? f || !1 : f === b
                      }
                  e && l.filter(b, a, !0)
                },
                ">": function(a, b) {
                  var c, d = "string" == typeof b,
                  e = 0,
                  f = a.length;
                  if (d && !k.test(b)) {
                    for (b = b.toLowerCase(); f > e; e++) if (c = a[e]) {
                      var g = c.parentNode;
                      a[e] = g.nodeName.toLowerCase() === b ? g: !1
                    }
                  } else {
                    for (; f > e; e++) c = a[e],
                      c && (a[e] = d ? c.parentNode: c.parentNode === b);
                    d && l.filter(b, a, !0)
                  }
                },
                "": function(c, d, f) {
                  var g, h = e++,
                  i = b;
                  "string" != typeof d || k.test(d) || (d = d.toLowerCase(), g = d, i = a),
                    i("parentNode", d, h, c, g, f)
                },
                "~": function(c, d, f) {
                  var g, h = e++,
                  i = b;
                  "string" != typeof d || k.test(d) || (d = d.toLowerCase(), g = d, i = a),
                    i("previousSibling", d, h, c, g, f)
                }
              },
              find: {
                ID: function(a, b, c) {
                  if ("undefined" != typeof b.getElementById && !c) {
                    var d = b.getElementById(a[1]);
                    return d && d.parentNode ? [d] : []
                  }
                },
                NAME: function(a, b) {
                  if ("undefined" != typeof b.getElementsByName) {
                    for (var c = [], d = b.getElementsByName(a[1]), e = 0, f = d.length; f > e; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                    return 0 === c.length ? null: c
                  }
                },
                TAG: function(a, b) {
                  return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a[1]) : void 0
                }
              },
              preFilter: {
                CLASS: function(a, b, c, d, e, f) {
                  if (a = " " + a[1].replace(i, "") + " ", f) return a;
                  for (var g, h = 0; null != (g = b[h]); h++) g && (e ^ (g.className && (" " + g.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(g) : c && (b[h] = !1));
                  return ! 1
                },
                ID: function(a) {
                  return a[1].replace(i, "")
                },
                TAG: function(a) {
                  return a[1].replace(i, "").toLowerCase()
                },
                CHILD: function(a) {
                  if ("nth" === a[1]) {
                    a[2] || l.error(a[0]),
                      a[2] = a[2].replace(/^\+|\s*/g, "");
                    var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                    a[2] = b[1] + (b[2] || 1) - 0,
                      a[3] = b[3] - 0
                  } else a[2] && l.error(a[0]);
                  return a[0] = e++,
                    a
                },
                ATTR: function(a, b, c, d, e, f) {
                  var g = a[1] = a[1].replace(i, "");
                  return ! f && n.attrMap[g] && (a[1] = n.attrMap[g]),
                         a[4] = (a[4] || a[5] || "").replace(i, ""),
                         "~=" === a[2] && (a[4] = " " + a[4] + " "),
                         a
                },
                PSEUDO: function(a, b, d, e, f) {
                  if ("not" === a[1]) {
                    if (! ((c.exec(a[3]) || "").length > 1 || /^\w/.test(a[3]))) {
                      var g = l.filter(a[3], b, d, !0 ^ f);
                      return d || e.push.apply(e, g),
                             !1
                    }
                    a[3] = l(a[3], null, null, b)
                  } else if (n.match.POS.test(a[0]) || n.match.CHILD.test(a[0])) return ! 0;
                  return a
                },
                POS: function(a) {
                  return a.unshift(!0),
                  a
                }
              },
              filters: {
                enabled: function(a) {
                  return a.disabled === !1 && "hidden" !== a.type
                },
                disabled: function(a) {
                  return a.disabled === !0
                },
                checked: function(a) {
                  return a.checked === !0
                },
                selected: function(a) {
                  return a.parentNode && a.parentNode.selectedIndex,
                  a.selected === !0
                },
                parent: function(a) {
                  return !! a.firstChild
                },
                empty: function(a) {
                  return ! a.firstChild
                },
                has: function(a, b, c) {
                  return !! l(c[3], a).length
                },
                header: function(a) {
                  return /h\d/i.test(a.nodeName)
                },
                text: function(a) {
                  var b = a.getAttribute("type"),
                  c = a.type;
                  return "input" === a.nodeName.toLowerCase() && "text" === c && (b === c || null === b)
                },
                radio: function(a) {
                  return "input" === a.nodeName.toLowerCase() && "radio" === a.type
                },
                checkbox: function(a) {
                  return "input" === a.nodeName.toLowerCase() && "checkbox" === a.type
                },
                file: function(a) {
                  return "input" === a.nodeName.toLowerCase() && "file" === a.type
                },
                password: function(a) {
                  return "input" === a.nodeName.toLowerCase() && "password" === a.type
                },
                submit: function(a) {
                  var b = a.nodeName.toLowerCase();
                  return ("input" === b || "button" === b) && "submit" === a.type
                },
                image: function(a) {
                  return "input" === a.nodeName.toLowerCase() && "image" === a.type
                },
                reset: function(a) {
                  var b = a.nodeName.toLowerCase();
                  return ("input" === b || "button" === b) && "reset" === a.type
                },
                button: function(a) {
                  var b = a.nodeName.toLowerCase();
                  return "input" === b && "button" === a.type || "button" === b
                },
                input: function(a) {
                  return /input|select|textarea|button/i.test(a.nodeName)
                },
                focus: function(a) {
                  return a === a.ownerDocument.activeElement
                }
              },
              setFilters: {
                first: function(a, b) {
                  return 0 === b
                },
                last: function(a, b, c, d) {
                  return b === d.length - 1
                },
                even: function(a, b) {
                  return b % 2 === 0
                },
                odd: function(a, b) {
                  return b % 2 === 1
                },
                lt: function(a, b, c) {
                  return b < c[3] - 0
                },
                gt: function(a, b, c) {
                  return b > c[3] - 0
                },
                nth: function(a, b, c) {
                  return c[3] - 0 === b
                },
                eq: function(a, b, c) {
                  return c[3] - 0 === b
                }
              },
              filter: {
                PSEUDO: function(a, b, c, d) {
                  var e = b[1],
                  f = n.filters[e];
                  if (f) return f(a, c, b, d);
                  if ("contains" === e) return (a.textContent || a.innerText || m([a]) || "").indexOf(b[3]) >= 0;
                  if ("not" === e) {
                    for (var g = b[3], h = 0, i = g.length; i > h; h++) if (g[h] === a) return ! 1;
                    return ! 0
                  }
                  l.error(e)
                },
                CHILD: function(a, b) {
                  var c, e, f, g, h, i, j = b[1],
                  k = a;
                  switch (j) {
                    case "only":
                    case "first":
                      for (; k = k.previousSibling;) if (1 === k.nodeType) return ! 1;
                      if ("first" === j) return ! 0;
                      k = a;
                    case "last":
                      for (; k = k.nextSibling;) if (1 === k.nodeType) return ! 1;
                      return ! 0;
                    case "nth":
                      if (c = b[2], e = b[3], 1 === c && 0 === e) return ! 0;
                      if (f = b[0], g = a.parentNode, g && (g[d] !== f || !a.nodeIndex)) {
                        for (h = 0, k = g.firstChild; k; k = k.nextSibling) 1 === k.nodeType && (k.nodeIndex = ++h);
                        g[d] = f
                      }
                      return i = a.nodeIndex - e,
                             0 === c ? 0 === i: i % c === 0 && i / c >= 0
                  }
                },
                ID: function(a, b) {
                  return 1 === a.nodeType && a.getAttribute("id") === b
                },
                TAG: function(a, b) {
                  return "*" === b && 1 === a.nodeType || !!a.nodeName && a.nodeName.toLowerCase() === b
                },
                CLASS: function(a, b) {
                  return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                },
                ATTR: function(a, b) {
                  var c = b[1],
                  d = l.attr ? l.attr(a, c) : n.attrHandle[c] ? n.attrHandle[c](a) : null != a[c] ? a[c] : a.getAttribute(c),
                  e = d + "",
                  f = b[2],
                  g = b[4];
                  return null == d ? "!=" === f: !f && l.attr ? null != d: "=" === f ? e === g: "*=" === f ? e.indexOf(g) >= 0 : "~=" === f ? (" " + e + " ").indexOf(g) >= 0 : g ? "!=" === f ? e !== g: "^=" === f ? 0 === e.indexOf(g) : "$=" === f ? e.substr(e.length - g.length) === g: "|=" === f ? e === g || e.substr(0, g.length + 1) === g + "-": !1 : e && d !== !1
                },
                POS: function(a, b, c, d) {
                  var e = b[2],
                  f = n.setFilters[e];
                  return f ? f(a, c, b, d) : void 0
                }
              }
            },
            o = n.match.POS,
            p = function(a, b) {
              return "\\" + (b - 0 + 1)
            };
        for (var q in n.match) n.match[q] = new RegExp(n.match[q].source + /(?![^\[]*\])(?![^\(]*\))/.source),
            n.leftMatch[q] = new RegExp(/(^(?:.|\r|\n)*?)/.source + n.match[q].source.replace(/\\(\d+)/g, p));
        var r = function(a, b) {
          return a = Array.prototype.slice.call(a, 0),
                 b ? (b.push.apply(b, a), b) : a
        };
        try {
          Array.prototype.slice.call(document.documentElement.childNodes, 0)[0].nodeType
        } catch(s) {
          r = function(a, b) {
            var c = 0,
                d = b || [];
            if ("[object Array]" === f.call(a)) Array.prototype.push.apply(d, a);
            else if ("number" == typeof a.length) for (var e = a.length; e > c; c++) d.push(a[c]);
            else for (; a[c]; c++) d.push(a[c]);
            return d
          }
        }
        var t, u;
        document.documentElement.compareDocumentPosition ? t = function(a, b) {
          return a === b ? (g = !0, 0) : a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
        }: (t = function(a, b) {
          if (a === b) return g = !0,
          0;
        if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
        var c, d, e = [],
          f = [],
          h = a.parentNode,
          i = b.parentNode,
          j = h;
        if (h === i) return u(a, b);
        if (!h) return - 1;
        if (!i) return 1;
        for (; j;) e.unshift(j),
          j = j.parentNode;
        for (j = i; j;) f.unshift(j),
          j = j.parentNode;
        c = e.length,
          d = f.length;
        for (var k = 0; c > k && d > k; k++) if (e[k] !== f[k]) return u(e[k], f[k]);
        return k === c ? u(a, f[k], -1) : u(e[k], b, 1)
        },
          u = function(a, b, c) {
            if (a === b) return c;
            for (var d = a.nextSibling; d;) {
              if (d === b) return - 1;
              d = d.nextSibling
            }
            return 1
          }),
          function() {
            var a = document.createElement("div"),
            b = "script" + (new Date).getTime(),
            c = document.documentElement;
            a.innerHTML = "<a name='" + b + "'/>",
              c.insertBefore(a, c.firstChild),
              document.getElementById(b) && (n.find.ID = function(a, b, c) {
                if ("undefined" != typeof b.getElementById && !c) {
                  var d = b.getElementById(a[1]);
                  return d ? d.id === a[1] || "undefined" != typeof d.getAttributeNode && d.getAttributeNode("id").nodeValue === a[1] ? [d] : void 0 : []
                }
              },
              n.filter.ID = function(a, b) {
                var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                return 1 === a.nodeType && c && c.nodeValue === b
              }),
              c.removeChild(a),
              c = a = null
          } (),
          function() {
            var a = document.createElement("div");
            a.appendChild(document.createComment("")),
              a.getElementsByTagName("*").length > 0 && (n.find.TAG = function(a, b) {
                var c = b.getElementsByTagName(a[1]);
                if ("*" === a[1]) {
                  for (var d = [], e = 0; c[e]; e++) 1 === c[e].nodeType && d.push(c[e]);
                  c = d
                }
                return c
              }),
              a.innerHTML = "<a href='#'></a>",
              a.firstChild && "undefined" != typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (n.attrHandle.href = function(a) {
                return a.getAttribute("href", 2)
              }),
              a = null
          } (),
          document.querySelectorAll && !
            function() {
              var a = l,
              b = document.createElement("div"),
              c = "__sizzle__";
              if (b.innerHTML = "<p class='TEST'></p>", !b.querySelectorAll || 0 !== b.querySelectorAll(".TEST").length) {
                l = function(b, d, e, f) {
                  if (d = d || document, !f && !l.isXML(d)) {
                    var g = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                    if (g && (1 === d.nodeType || 9 === d.nodeType)) {
                      if (g[1]) return r(d.getElementsByTagName(b), e);
                      if (g[2] && n.find.CLASS && d.getElementsByClassName) return r(d.getElementsByClassName(g[2]), e)
                    }
                    if (9 === d.nodeType) {
                      if ("body" === b && d.body) return r([d.body], e);
                      if (g && g[3]) {
                        var h = d.getElementById(g[3]);
                        if (!h || !h.parentNode) return r([], e);
                        if (h.id === g[3]) return r([h], e)
                      }
                      try {
                        return r(d.querySelectorAll(b), e)
                      } catch(i) {}
                    } else if (1 === d.nodeType && "object" !== d.nodeName.toLowerCase()) {
                      var j = d,
                        k = d.getAttribute("id"),
                          m = k || c,
                          o = d.parentNode,
                          p = /^\s*[+~]/.test(b);
                      k ? m = m.replace(/'/g, "\\$&") : d.setAttribute("id", m),
                        p && o && (d = d.parentNode);
                      try {
                        if (!p || o) return r(d.querySelectorAll("[id='" + m + "'] " + b), e)
                      } catch(q) {} finally {
                        k || j.removeAttribute("id")
                      }
                    }
                  }
                  return a(b, d, e, f)
                };
                for (var d in a) l[d] = a[d];
                b = null
              }
            } (),
          function() {
            var a = document.documentElement,
            b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
              var c = !b.call(document.createElement("div"), "div"),
                d = !1;
              try {
                b.call(document.documentElement, "[test!='']:sizzle")
              } catch(e) {
                d = !0
              }
              l.matchesSelector = function(a, e) {
                if (e = e.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !l.isXML(a)) try {
                  if (d || !n.match.PSEUDO.test(e) && !/!=/.test(e)) {
                    var f = b.call(a, e);
                    if (f || !c || a.document && 11 !== a.document.nodeType) return f
                  }
              } catch(g) {}
              return l(e, null, null, [a]).length > 0
              }
            }
          } (),
          function() {
            var a = document.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>",
              a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length && (a.lastChild.className = "e", 1 !== a.getElementsByClassName("e").length && (n.order.splice(1, 0, "CLASS"), n.find.CLASS = function(a, b, c) {
                return "undefined" == typeof b.getElementsByClassName || c ? void 0 : b.getElementsByClassName(a[1])
              },
              a = null))
          } (),
          l.contains = document.documentElement.contains ?
            function(a, b) {
              return a !== b && (a.contains ? a.contains(b) : !0)
            }: document.documentElement.compareDocumentPosition ?
        function(a, b) {
          return !! (16 & a.compareDocumentPosition(b))
        }: function() {
          return ! 1
        },
          l.isXML = function(a) {
            var b = (a ? a.ownerDocument || a: 0).documentElement;
            return b ? "HTML" !== b.nodeName: !1
          };
        var v = function(a, b, c) {
          for (var d, e = [], f = "", g = b.nodeType ? [b] : b; d = n.match.PSEUDO.exec(a);) f += d[0],
              a = a.replace(n.match.PSEUDO, "");
          a = n.relative[a] ? a + "*": a;
          for (var h = 0,
              i = g.length; i > h; h++) l(a, g[h], e, c);
          return l.filter(f, e)
        };
        baidu.dom.query = l
  } (),
  function() {
    var a = baidu.dom.ready = function() {
      function a() {
        if (!a.isReady) {
          a.isReady = !0;
          for (var b = 0,
              c = f.length; c > b; b++) f[b]()
        }
      }
      function b() {
        try {
          document.documentElement.doScroll("left")
        } catch(c) {
          return setTimeout(b, 1),
          void 0
        }
        a()
      }
      function c() {
        if (!e) if (e = !0, "complete" === document.readyState) a.isReady = !0;
        else if (document.addEventListener) document.addEventListener("DOMContentLoaded", d, !1),
          window.addEventListener("load", a, !1);
        else if (document.attachEvent) {
          document.attachEvent("onreadystatechange", d),
            window.attachEvent("onload", a);
          var c = !1;
          try {
            c = null == window.frameElement
          } catch(f) {}
          document.documentElement.doScroll && c && b()
        }
      }
      var d, e = !1,
          f = [];
      return document.addEventListener ? d = function() {
        document.removeEventListener("DOMContentLoaded", d, !1),
          a()
      }: document.attachEvent && (d = function() {
        "complete" === document.readyState && (document.detachEvent("onreadystatechange", d), a())
      }),
      c(),
      function(b) {
        a.isReady ? b() : f.push(b)
      }
    } ();
    a.isReady = !1
  } (),
  baidu.dom.remove = function(a) {
    a = baidu.dom._g(a);
    var b = a.parentNode;
    b && b.removeChild(a)
  },
  baidu.dom.removeClass = function(a, b) {
    a = baidu.dom.g(a);
    for (var c, d, e = a.className.split(/\s+/), f = b.split(/\s+/), g = f.length, h = 0; g > h; ++h) for (d = 0, c = e.length; c > d; ++d) if (e[d] == f[h]) {
      e.splice(d, 1);
      break
    }
    return a.className = e.join(" "),
           a
  },
  baidu.removeClass = baidu.dom.removeClass,
  baidu.dom.removeStyle = function() {
    var a, b = document.createElement("DIV"),
    c = baidu.dom._g;
    return b.style.removeProperty ? a = function(a, b) {
      return a = c(a),
             a.style.removeProperty(b),
             a
    }: b.style.removeAttribute && (a = function(a, b) {
      return a = c(a),
    a.style.removeAttribute(baidu.string.toCamelCase(b)),
    a
    }),
    b = null,
    a
  } (),
  baidu.object.each = function(a, b) {
    var c, d, e;
    if ("function" == typeof b) for (d in a) if (a.hasOwnProperty(d) && (e = a[d], c = b.call(a, e, d), c === !1)) break;
    return a
  },
  baidu.lang.isNumber = function(a) {
    return "[object Number]" == Object.prototype.toString.call(a) && isFinite(a)
  },
  baidu.event.getTarget = function(a) {
    return a.target || a.srcElement
  },
  baidu.dom.setBorderBoxSize = function(a, b) {
    function c(a, b) {
      return parseFloat(baidu.getStyle(a, b)) || 0
    }
    var d = {};
    return b.width && (d.width = parseFloat(b.width)),
           b.height && (d.height = parseFloat(b.height)),
           baidu.browser.isStrict && (b.width && (d.width = parseFloat(b.width) - c(a, "paddingLeft") - c(a, "paddingRight") - c(a, "borderLeftWidth") - c(a, "borderRightWidth"), d.width < 0 && (d.width = 0)), b.height && (d.height = parseFloat(b.height) - c(a, "paddingTop") - c(a, "paddingBottom") - c(a, "borderTopWidth") - c(a, "borderBottomWidth"), d.height < 0 && (d.height = 0))),
           baidu.dom.setStyles(a, d)
  },
  baidu.dom.setOuterHeight = baidu.dom.setBorderBoxHeight = function(a, b) {
    return baidu.dom.setBorderBoxSize(a, {
      height: b
    })
  },
  baidu.dom.setOuterWidth = baidu.dom.setBorderBoxWidth = function(a, b) {
    return baidu.dom.setBorderBoxSize(a, {
      width: b
    })
  },
  baidu.dom.resizable = function(a, b) {
    function c() {
      r = baidu.extend({
        e: {
          right: "-5px",
      top: "0px",
      width: "7px",
      height: k.offsetHeight
        },
      s: {
        left: "0px",
      bottom: "-5px",
      height: "7px",
      width: k.offsetWidth
      },
      n: {
        left: "0px",
      top: "-5px",
      height: "7px",
      width: k.offsetWidth
      },
      w: {
        left: "-5px",
        top: "0px",
        height: k.offsetHeight,
        width: "7px"
      },
      se: {
        right: "1px",
        bottom: "1px",
        height: "16px",
        width: "16px"
      },
      sw: {
        left: "1px",
        bottom: "1px",
        height: "16px",
        width: "16px"
      },
      ne: {
        right: "1px",
        top: "1px",
        height: "16px",
        width: "16px"
      },
      nw: {
        left: "1px",
        top: "1px",
        height: "16px",
        width: "16px"
      }
      },
      l.directionHandlePosition),
      baidu.each(l.direction,
          function(a) {
            var b = l.classPrefix.split(" ");
            b[0] = b[0] + "-resizable-" + a;
            var c = baidu.dom.create("div", {
              className: b.join(" ")
            }),
                d = r[a];
            d.cursor = a + "-resize",
      d.position = "absolute",
      baidu.setStyles(c, d),
      c.key = a,
      c.style.MozUserSelect = "none",
      k.appendChild(c),
      t[a] = c,
      baidu.on(c, "mousedown", f)
          }),
      v = !1
    }
    function d() {
      q && g(),
        baidu.object.each(t,
            function(a) {
              baidu.un(a, "mousedown", f),
        baidu.dom.remove(a)
            }),
        v = !0
    }
    function e(a) {
      v || (l = baidu.extend(l, a || {}), d(), c())
    }
    function f(a) {
      w && g();
      var b = baidu.event.getTarget(a),
          c = b.key;
      q = b,
        w = !0,
        b.setCapture ? b.setCapture() : window.captureEvents && window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP),
        o = baidu.getStyle(document.body, "cursor"),
        baidu.setStyle(document.body, "cursor", c + "-resize"),
        baidu.on(document.body, "mouseup", g),
        baidu.on(document.body, "selectstart", i),
        n = document.body.style.MozUserSelect,
        document.body.style.MozUserSelect = "none";
      var d = baidu.page.getMousePosition();
      u = j(),
        s = setInterval(function() {
          h(c, d)
        },
        20),
        baidu.lang.isFunction(l.onresizestart) && l.onresizestart(),
        baidu.event.preventDefault(a)
    }
    function g() {
      q && q.releaseCapture ? q.releaseCapture() : window.releaseEvents && window.releaseEvents(Event.MOUSEMOVE | Event.MOUSEUP),
        baidu.un(document.body, "mouseup", g),
        baidu.un(document, "selectstart", i),
        document.body.style.MozUserSelect = n,
        baidu.un(document.body, "selectstart", i),
        clearInterval(s),
        baidu.setStyle(document.body, "cursor", o),
        q = null,
        w = !1,
        baidu.lang.isFunction(l.onresizeend) && l.onresizeend()
    }
    function h(a, b) {
      var c, d = baidu.page.getMousePosition(),
          e = u.width,
          f = u.height,
          g = u.top,
          h = u.left;
      a.indexOf("e") >= 0 ? (e = Math.max(d.x - b.x + u.width, m[0]), e = Math.min(e, m[1])) : a.indexOf("w") >= 0 && (e = Math.max(b.x - d.x + u.width, m[0]), e = Math.min(e, m[1]), h -= e - u.width),
        a.indexOf("s") >= 0 ? (f = Math.max(d.y - b.y + u.height, m[2]), f = Math.min(f, m[3])) : a.indexOf("n") >= 0 && (f = Math.max(b.y - d.y + u.height, m[2]), f = Math.min(f, m[3]), g -= f - u.height),
        c = {
          width: e,
          height: f,
          top: g,
          left: h
        },
        baidu.dom.setOuterHeight(k, f),
        baidu.dom.setOuterWidth(k, e),
        baidu.setStyles(k, {
          top: g,
        left: h
        }),
        t.n && baidu.setStyle(t.n, "width", e),
        t.s && baidu.setStyle(t.s, "width", e),
        t.e && baidu.setStyle(t.e, "height", f),
        t.w && baidu.setStyle(t.w, "height", f),
        baidu.lang.isFunction(l.onresize) && l.onresize({
          current: c,
        original: u
        })
    }
    function i(a) {
      return baidu.event.preventDefault(a, !1)
    }
    function j() {
      var a, b, c = baidu.dom.getPosition(k.offsetParent),
          d = baidu.dom.getPosition(k);
      return "absolute" == y ? (a = d.top - (k.offsetParent == document.body ? 0 : c.top), b = d.left - (k.offsetParent == document.body ? 0 : c.left)) : (a = parseFloat(baidu.getStyle(k, "top")) || -parseFloat(baidu.getStyle(k, "bottom")) || 0, b = parseFloat(baidu.getStyle(k, "left")) || -parseFloat(baidu.getStyle(k, "right")) || 0),
             baidu.setStyles(k, {
               top: a,
             left: b
             }),
             {
               width: k.offsetWidth,
               height: k.offsetHeight,
               top: a,
               left: b
             }
    }
    var k, l, m, n, o, p, q, r, s, t = {},
        u = {},
        v = !1,
        w = !1,
        x = {
          direction: ["e", "s", "se"],
          minWidth: 16,
          minHeight: 16,
          classPrefix: "tangram",
          directionHandlePosition: {}
        };
    if (! (k = baidu.dom.g(a)) && "static" == baidu.getStyle(k, "position")) return ! 1;
    p = k.offsetParent;
    var y = baidu.getStyle(k, "position");
    return l = baidu.extend(x, b),
           baidu.each(["minHeight", "minWidth", "maxHeight", "maxWidth"],
               function(a) {
                 l[a] && (l[a] = parseFloat(l[a]))
               }),
           m = [l.minWidth || 0, l.maxWidth || Number.MAX_VALUE, l.minHeight || 0, l.maxHeight || Number.MAX_VALUE],
           c(),
           {
             cancel: d,
             update: e,
             enable: c
           }
  },
  baidu.dom.setPixel = function(a, b, c) {
    "undefined" != typeof c && (baidu.dom.g(a).style[b] = c + (isNaN(c) ? "": "px"))
  },
  baidu.dom.setPosition = function(a, b) {
    return baidu.dom.setStyles(a, {
      left: b.left - (parseFloat(baidu.dom.getStyle(a, "margin-left")) || 0),
    top: b.top - (parseFloat(baidu.dom.getStyle(a, "margin-top")) || 0)
    })
  },
  baidu.dom.show = function(a) {
    return a = baidu.dom.g(a),
    a.style.display = "",
    a
  },
  baidu.show = baidu.dom.show,
  baidu.dom.toggle = function(a) {
    return a = baidu.dom.g(a),
    a.style.display = "none" == a.style.display ? "": "none",
    a
  },
  baidu.dom.toggleClass = function(a, b) {
    baidu.dom.hasClass(a, b) ? baidu.dom.removeClass(a, b) : baidu.dom.addClass(a, b)
  },
  baidu.dom._styleFilter[baidu.dom._styleFilter.length] = {
    get: function(a, b) {
      if (/color/i.test(a) && -1 != b.indexOf("rgb(")) {
        var c = b.split(",");
        b = "#";
        for (var d, e = 0; d = c[e]; e++) d = parseInt(d.replace(/[^\d]/gi, ""), 10).toString(16),
            b += 1 == d.length ? "0" + d: d;
        b = b.toUpperCase()
      }
      return b
    }
  },
  baidu.dom._styleFixer.display = baidu.browser.ie && baidu.browser.ie < 8 ? {
    set: function(a, b) {
      a = a.style,
      "inline-block" == b ? (a.display = "inline", a.zoom = 1) : a.display = b
    }
  }: baidu.browser.firefox && baidu.browser.firefox < 3 ? {
    set: function(a, b) {
      a.style.display = "inline-block" == b ? "-moz-inline-box": b
    }
  }: null,
  baidu.dom._styleFixer["float"] = baidu.browser.ie ? "styleFloat": "cssFloat",
  baidu.dom._styleFixer.opacity = baidu.browser.ie ? {
    get: function(a) {
      var b = a.style.filter;
      return b && b.indexOf("opacity=") >= 0 ? parseFloat(b.match(/opacity=([^)]*)/)[1]) / 100 + "": "1"
    },
    set: function(a, b) {
      var c = a.style;
      c.filter = (c.filter || "").replace(/alpha\([^\)]*\)/gi, "") + (1 == b ? "": "alpha(opacity=" + 100 * b + ")"),
        c.zoom = 1
    }
  }: null,
  baidu.dom._styleFixer.width = baidu.dom._styleFixer.height = {
    get: function(a, b, c) {
      var b = b.replace(/^[a-z]/,
          function(a) {
            return a.toUpperCase()
          }),
      d = a["client" + b] || a["offset" + b];
      return d > 0 ? d + "px": c && "auto" != c ? d: "0px"
    },
    set: function(a, b, c) {
      a.style[c] = b
    }
  },
  baidu.dom._styleFixer.textOverflow = function() {
    function a(a) {
      var b = a.length;
      return b > 0 ? (b = a[b - 1], a.length--) : b = null,
             b
    }
    function b(a, b) {
      a[baidu.browser.firefox ? "textContent": "innerText"] = b
    }
    function c(e, f, g) {
      var h = baidu.browser.ie ? e.currentStyle || e.style: getComputedStyle(e, null),
      i = h.fontWeight,
      j = "font-family:" + h.fontFamily + ";font-size:" + h.fontSize + ";word-spacing:" + h.wordSpacing + ";font-weight:" + (401 == (parseInt(i) || 0) ? 700 : i) + ";font-style:" + h.fontStyle + ";font-variant:" + h.fontVariant,
      k = d[j];
      if (!k) {
        h = e.appendChild(document.createElement("div")),
          h.style.cssText = "float:left;" + j,
            k = d[j] = [];
        for (var l = 0; 256 > l; l++) 32 == l ? h.innerHTML = "&nbsp;": b(h, String.fromCharCode(l)),
            k[l] = h.offsetWidth;
        b(h, "一"),
          k[256] = h.offsetWidth,
          b(h, "一一"),
          k[257] = h.offsetWidth - 2 * k[256],
          k[258] = 3 * k[".".charCodeAt(0)] + 3 * k[257],
          e.removeChild(h)
      }
      for (var m = e.firstChild,
          n = k[256], o = k[257], p = k[258], q = [], g = g ? p: 0; m; m = m.nextSibling) if (g > f) e.removeChild(m);
      else if (3 == m.nodeType) for (var l = 0,
          r = m.nodeValue,
          s = r.length; s > l && (h = r.charCodeAt(l), q[q.length] = [f, m, l], f -= (l ? o: 0) + (256 > h ? k[h] : n), !(g > f)); l++);
      else h = m.tagName,
           "IMG" == h || "TABLE" == h ? (h = m, m = m.previousSibling, e.removeChild(h)) : (q[q.length] = [f, m], f -= m.offsetWidth);
      if (g > f) {
        for (; h = a(q);) if (f = h[0], m = h[1], h = h[2], 3 == m.nodeType) {
          if (f >= p) return m.nodeValue = m.nodeValue.substring(0, h) + "...",
            !0;
          h || e.removeChild(m)
        } else {
          if (c(m, f, !0)) return ! 0;
          e.removeChild(m)
        }
        e.innerHTML = ""
      }
    }
    var d = {};
    return {
      get: function(a) {
        var b = baidu.browser,
            c = dom.getStyle;
        return (b.opera ? c("OTextOverflow") : b.firefox ? a._baiduOverflow: c("textOverflow")) || "clip"
      },
        set: function(a, b) {
          var d = baidu.browser;
          if ("TD" == a.tagName || "TH" == a.tagName || d.firefox) if (a._baiduHTML && (a.innerHTML = a._baiduHTML), "ellipsis" == b) {
            a._baiduHTML = a.innerHTML;
            var e = document.createElement("div"),
                f = a.appendChild(e).offsetWidth;
            a.removeChild(e),
              c(a, f)
          } else a._baiduHTML = "";
          e = a.style,
            d.opera ? e.OTextOverflow = b: d.firefox ? a._baiduOverflow = b: e.textOverflow = b
        }
    }
  } (),
  baidu.lang.isArray = function(a) {
    return "[object Array]" == Object.prototype.toString.call(a)
  },
  baidu.lang.toArray = function(a) {
    if (null === a || void 0 === a) return [];
    if (baidu.lang.isArray(a)) return a;
    if ("number" != typeof a.length || "string" == typeof a || baidu.lang.isFunction(a)) return [a];
    if (a.item) {
      for (var b = a.length,
          c = new Array(b); b--;) c[b] = a[b];
      return c
    }
    return [].slice.call(a)
  },
  baidu.fn.methodize = function(a, b) {
    return function() {
      return a.apply(this, [b ? this[b] : this].concat([].slice.call(arguments)))
    }
  },
  baidu.fn.wrapReturnValue = function(a, b, c) {
    return c = 0 | c,
    function() {
      var d = a.apply(this, arguments);
      return c ? c > 0 ? new b(arguments[c - 1]) : d: new b(d)
    }
  },
  baidu.fn.multize = function(a, b, c) {
    var d = function() {
      var e, f, g = arguments[0],
      h = b ? d: a,
      i = [],
      j = [].slice.call(arguments, 0),
      k = 0;
      if (g instanceof Array) {
        for (e = g.length; e > k; k++) j[0] = g[k],
          f = h.apply(this, j),
            c ? f && (i = i.concat(f)) : i.push(f);
        return i
      }
      return a.apply(this, arguments)
    };
    return d
  },
  baidu.element = function(a) {
    var b = baidu._g(a);
    return ! b && baidu.dom.query && (b = baidu.dom.query(a)),
           new baidu.element.Element(b)
  },
  baidu.e = baidu.element,
  baidu.element.Element = function(a) {
    baidu.element._init || (baidu.element._makeChain(), baidu.element._init = !0),
    this._dom = "select" == (a.tagName || "").toLowerCase() ? [a] : baidu.lang.toArray(a)
  },
  baidu.element.Element.prototype.each = function(a) {
    baidu.array.each(this._dom,
        function(b, c) {
          a.call(b, b, c)
        })
  },
  baidu.element._toChainFunction = function(a, b) {
    return baidu.fn.methodize(baidu.fn.wrapReturnValue(baidu.fn.multize(a, 0, 1), baidu.element.Element, b), "_dom")
  },
  baidu.element._makeChain = function() {
    function a(a) {
      return a.charAt(3).toLowerCase()
    }
    var b = baidu.element.Element.prototype,
        c = baidu.element._toChainFunction;
    baidu.each("draggable droppable resizable fixable".split(" "),
        function(a) {
          b[a] = c(baidu.dom[a], 1)
        }),
      baidu.each("remove getText contains getAttr getPosition getStyle hasClass intersect hasAttr getComputedStyle".split(" "),
          function(d) {
            b[d] = b[d.replace(/^get[A-Z]/g, a)] = c(baidu.dom[d], -1)
          }),
      baidu.each("addClass empty hide show insertAfter insertBefore insertHTML removeClass setAttr setAttrs setStyle setStyles show toggleClass toggle next first getAncestorByClass getAncestorBy getAncestorByTag getDocument getParent getWindow last next prev g removeStyle setBorderBoxSize setOuterWidth setOuterHeight setBorderBoxWidth setBorderBoxHeight setPosition children query".split(" "),
          function(d) {
            b[d] = b[d.replace(/^get[A-Z]/g, a)] = c(baidu.dom[d], 0)
          }),
      b.q = b.Q = c(function(a, b) {
        return baidu.dom.q.apply(this, [b, a].concat([].slice.call(arguments, 2)))
      },
      0),
      baidu.each("on un".split(" "),
          function(a) {
            b[a] = c(baidu.event[a], 0)
          }),
      baidu.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
          function(a) {
            b[a] = function(b) {
              return this.on(a, b)
            }
          })
  },
  baidu.element.extend = function(a) {
    var b = baidu.element;
    baidu.object.each(a,
        function(a, c) {
          b.Element.prototype[c] = baidu.element._toChainFunction(a, -1)
        })
  },
  baidu.event.EventArg = function(a, b) {
    b = b || window,
    a = a || b.event;
    var c = b.document;
    this.target = a.target || a.srcElement,
      this.keyCode = a.which || a.keyCode;
    for (var d in a) {
      var e = a[d];
      "function" != typeof e && (this[d] = e)
    }
    this.pageX || 0 === this.pageX || (this.pageX = (a.clientX || 0) + (c.documentElement.scrollLeft || c.body.scrollLeft), this.pageY = (a.clientY || 0) + (c.documentElement.scrollTop || c.body.scrollTop)),
      this._event = a
  },
  baidu.event.EventArg.prototype.preventDefault = function() {
    return this._event.preventDefault ? this._event.preventDefault() : this._event.returnValue = !1,
    this
  },
  baidu.event.EventArg.prototype.stopPropagation = function() {
    return this._event.stopPropagation ? this._event.stopPropagation() : this._event.cancelBubble = !0,
    this
  },
  baidu.event.EventArg.prototype.stop = function() {
    return this.stopPropagation().preventDefault()
  },
  baidu.object.values = function(a) {
    var b, c = [],
    d = 0;
    for (b in a) a.hasOwnProperty(b) && (c[d++] = a[b]);
    return c
  },
  function() {
    function a(a, b) {
      for (var c = 0,
          d = a.length,
          e = {}; d > c; c++) e[a[c]] = b[a[c]],
      delete b[a[c]];
      return e
    }
    function b(b, c, d) {
      d = baidu.object.extend({},
          d);
      var e = baidu.object.values(a(l[c], d)),
          f = document.createEvent(c);
      return e.unshift(b),
             "KeyEvents" == c ? f.initKeyEvent.apply(f, e) : "MouseEvents" == c ? f.initMouseEvent.apply(f, e) : "UIEvents" == c ? f.initUIEvent.apply(f, e) : f.initEvent.apply(f, e),
             baidu.object.extend(f, d),
             f
    }
    function c(a) {
      var b;
      return document.createEventObject && (b = document.createEventObject(), baidu.object.extend(b, a)),
             b
    }
    function d(d, e) {
      e = a(l.KeyEvents, e);
      var f;
      if (document.createEvent) try {
        f = b(d, "KeyEvents", e)
      } catch(g) {
        try {
          f = b(d, "Events", e)
        } catch(h) {
          f = b(d, "UIEvents", e)
        }
      } else e.keyCode = e.charCode > 0 ? e.charCode: e.keyCode,
        f = c(e);
      return f
    }
    function e(d, e) {
      e = a(l.MouseEvents, e);
      var f;
      return document.createEvent ? (f = b(d, "MouseEvents", e), e.relatedTarget && !f.relatedTarget && ("mouseout" == d.toLowerCase() ? f.toElement = e.relatedTarget: "mouseover" == d.toLowerCase() && (f.fromElement = e.relatedTarget))) : (e.button = 0 == e.button ? 1 : 1 == e.button ? 4 : baidu.lang.isNumber(e.button) ? e.button: 0, f = c(e)),
             f
    }
    function f(d, e) {
      e.bubbles = k.hasOwnProperty(d),
      e = a(l.HTMLEvents, e);
      var f;
      if (document.createEvent) try {
        f = b(d, "HTMLEvents", e)
      } catch(g) {
        try {
          f = b(d, "UIEvents", e)
        } catch(h) {
          f = b(d, "Events", e)
        }
      } else f = c(e);
      return f
    }
    var g = baidu.browser,
        h = {
          keydown: 1,
          keyup: 1,
          keypress: 1
        },
        i = {
          click: 1,
          dblclick: 1,
          mousedown: 1,
          mousemove: 1,
          mouseup: 1,
          mouseover: 1,
          mouseout: 1
        },
        j = {
          abort: 1,
          blur: 1,
          change: 1,
          error: 1,
          focus: 1,
          load: g.ie ? 0 : 1,
          reset: 1,
          resize: 1,
          scroll: 1,
          select: 1,
          submit: 1,
          unload: g.ie ? 0 : 1
        },
        k = {
          scroll: 1,
          resize: 1,
          reset: 1,
          submit: 1,
          change: 1,
          select: 1,
          error: 1,
          abort: 1
        },
        l = {
          KeyEvents: ["bubbles", "cancelable", "view", "ctrlKey", "altKey", "shiftKey", "metaKey", "keyCode", "charCode"],
          MouseEvents: ["bubbles", "cancelable", "view", "detail", "screenX", "screenY", "clientX", "clientY", "ctrlKey", "altKey", "shiftKey", "metaKey", "button", "relatedTarget"],
          HTMLEvents: ["bubbles", "cancelable"],
          UIEvents: ["bubbles", "cancelable", "view", "detail"],
          Events: ["bubbles", "cancelable"]
        };
    baidu.object.extend(k, h),
      baidu.object.extend(k, i),
      baidu.event.fire = function(a, b, c) {
        var g;
        if (b = b.replace(/^on/i, ""), a = baidu.dom._g(a), c = baidu.object.extend({
          bubbles: !0,
           cancelable: !0,
           view: window,
           detail: 1,
           screenX: 0,
           screenY: 0,
           clientX: 0,
           clientY: 0,
           ctrlKey: !1,
           altKey: !1,
           shiftKey: !1,
           metaKey: !1,
           keyCode: 0,
           charCode: 0,
           button: 0,
           relatedTarget: null
        },
        c), h[b]) g = d(b, c);
        else if (i[b]) g = e(b, c);
        else {
          if (!j[b]) throw new Error(b + " is not support!");
          g = f(b, c)
        }
        g && (a.dispatchEvent ? a.dispatchEvent(g) : a.fireEvent && a.fireEvent("on" + b, g))
      }
  } (),
  baidu.event.get = function(a, b) {
    return new baidu.event.EventArg(a, b)
  },
  baidu.event.getEvent = function() {
    if (window.event) return window.event;
    var a = arguments.callee;
    do
      if (/Event/.test(a.arguments[0])) return a.arguments[0];
    while (a = a.caller);
    return null
  },
  baidu.event.getKeyCode = function(a) {
    return a.which || a.keyCode
  },
  baidu.event.getPageX = function(a) {
    var b = a.pageX,
    c = document;
    return b || 0 === b || (b = (a.clientX || 0) + (c.documentElement.scrollLeft || c.body.scrollLeft)),
           b
  },
  baidu.event.getPageY = function(a) {
    var b = a.pageY,
    c = document;
    return b || 0 === b || (b = (a.clientY || 0) + (c.documentElement.scrollTop || c.body.scrollTop)),
           b
  },
  baidu.event.once = function(a, b, c) {
    function d(e) {
      c.call(a, e),
      baidu.event.un(a, b, d)
    }
    return a = baidu.dom._g(a),
           baidu.event.on(a, b, d),
           a
  },
  baidu.event.stopPropagation = function(a) {
    a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
  },
  baidu.event.stop = function(a) {
    var b = baidu.event;
    b.stopPropagation(a),
      b.preventDefault(a)
  },
  baidu.event._eventFilter = baidu.event._eventFilter || {},
  baidu.event._eventFilter._crossElementBoundary = function(a, b) {
    var c = b.relatedTarget,
    d = b.currentTarget;
    if (c !== !1 && d != c && (!c || "xul" != c.prefix && !baidu.dom.contains(d, c))) return a.call(d, b)
  },
  baidu.fn.bind = function(a, b) {
    var c = arguments.length > 2 ? [].slice.call(arguments, 2) : null;
    return function() {
      var d = baidu.lang.isString(a) ? b[a] : a,
          e = c ? c.concat([].slice.call(arguments, 0)) : arguments;
      return d.apply(b || d, e)
    }
  },
  baidu.event._eventFilter.mouseenter = window.attachEvent ? null: function(a, b, c) {
    return {
      type: "mouseover",
      listener: baidu.fn.bind(baidu.event._eventFilter._crossElementBoundary, this, c)
    }
  },
  baidu.event._eventFilter.mouseleave = window.attachEvent ? null: function(a, b, c) {
    return {
      type: "mouseout",
      listener: baidu.fn.bind(baidu.event._eventFilter._crossElementBoundary, this, c)
    }
  },
  baidu.event._unload = function() {
    for (var a, b, c = baidu.event._listeners,
        d = c.length,
        e = !!window.removeEventListener; d--;) a = c[d],
    "unload" != a[1] && (b = a[0]) && (b.removeEventListener ? b.removeEventListener(a[1], a[3], !1) : b.detachEvent && b.detachEvent("on" + a[1], a[3]));
    e ? window.removeEventListener("unload", baidu.event._unload, !1) : window.detachEvent("onunload", baidu.event._unload)
  },
  window.attachEvent ? window.attachEvent("onunload", baidu.event._unload) : window.addEventListener("unload", baidu.event._unload, !1),
  baidu.fn.abstractMethod = function() {
    throw Error("unimplemented abstract method")
  },
  baidu.form = baidu.form || {},
  baidu.form.json = function(a, b) {
    function c(a, b) {
      var c = m[a];
      c ? (c.push || (m[a] = [c]), m[a].push(b)) : m[a] = b
    }
    for (var d, e, f, g, h, i, j, k, l = a.elements,
        b = b ||
        function(a) {
          return a
        },
        m = {},
        n = 0, o = l.length; o > n; n++) if (d = l[n], f = d.name, !d.disabled && f) switch (e = d.type, g = baidu.url.escapeSymbol(d.value), e) {
          case "radio":
          case "checkbox":
            if (!d.checked) break;
          case "textarea":
          case "text":
          case "password":
          case "hidden":
          case "file":
          case "select-one":
            c(f, b(g, f));
            break;
          case "select-multiple":
            for (h = d.options, j = h.length, i = 0; j > i; i++) k = h[i],
                k.selected && c(f, b(k.value, f))
        }
    return m
  },
  baidu.form.serialize = function(a, b) {
    function c(a, b) {
      m.push(a + "=" + b)
    }
    for (var d, e, f, g, h, i, j, k, l = a.elements,
        b = b ||
        function(a) {
          return a
        },
        m = [], n = 0, o = l.length; o > n; n++) if (d = l[n], f = d.name, !d.disabled && f) switch (e = d.type, g = baidu.url.escapeSymbol(d.value), e) {
          case "radio":
          case "checkbox":
            if (!d.checked) break;
          case "textarea":
          case "text":
          case "password":
          case "hidden":
          case "file":
          case "select-one":
            c(f, b(g, f));
            break;
          case "select-multiple":
            for (h = d.options, j = h.length, i = 0; j > i; i++) k = h[i],
                k.selected && c(f, b(k.value, f))
        }
    return m
  },
  baidu.global = baidu.global || {},
  window[baidu.guid].global = window[baidu.guid].global || {},
  function() {
    var a = window[baidu.guid].global;
    baidu.global.get = function(b) {
      return a[b]
    }
  } (),
  function() {
    var a = window[baidu.guid].global;
    baidu.global.set = function(b, c, d) {
      var e = !d || d && "undefined" == typeof a[b];
      return e && (a[b] = c),
             a[b]
    }
  } (),
  baidu.global.getZIndex = function(a, b) {
    var c = baidu.global.get("zIndex");
    return a && (c[a] = c[a] + (b || 1)),
           c[a]
  },
  baidu.global.set("zIndex", {
    popup: 5e4,
  dialog: 1e3
  },
  !0),
  baidu.json = baidu.json || {},
  baidu.json.parse = function(a) {
    return new Function("return (" + a + ")")()
  },
  baidu.json.decode = baidu.json.parse,
  baidu.json.stringify = function() {
    function a(a) {
      return /["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g,
      function(a) {
        var b = e[a];
        return b ? b: (b = a.charCodeAt(), "\\u00" + Math.floor(b / 16).toString(16) + (b % 16).toString(16))
      })),
      '"' + a + '"'
    }
    function b(a) {
      var b, c, d, e = ["["],
      f = a.length;
      for (c = 0; f > c; c++) switch (d = a[c], typeof d) {
        case "undefined":
        case "function":
        case "unknown":
          break;
        default:
          b && e.push(","),
            e.push(baidu.json.stringify(d)),
            b = 1
      }
      return e.push("]"),
             e.join("")
    }
    function c(a) {
      return 10 > a ? "0" + a: a
    }
    function d(a) {
      return '"' + a.getFullYear() + "-" + c(a.getMonth() + 1) + "-" + c(a.getDate()) + "T" + c(a.getHours()) + ":" + c(a.getMinutes()) + ":" + c(a.getSeconds()) + '"'
    }
    var e = {
      "\b": "\\b",
      " ": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      '"': '\\"',
      "\\": "\\\\"
    };
    return function(c) {
      switch (typeof c) {
        case "undefined":
          return "undefined";
        case "number":
          return isFinite(c) ? String(c) : "null";
        case "string":
          return a(c);
        case "boolean":
          return String(c);
        default:
          if (null === c) return "null";
          if (c instanceof Array) return b(c);
          if (c instanceof Date) return d(c);
          var e, f, g = ["{"],
            h = baidu.json.stringify;
          for (var i in c) if (Object.prototype.hasOwnProperty.call(c, i)) switch (f = c[i], typeof f) {
            case "undefined":
            case "unknown":
            case "function":
              break;
            default:
              e && g.push(","),
                e = 1,
                g.push(h(i) + ":" + h(f))
          }
          return g.push("}"),
                 g.join("")
      }
    }
  } (),
  baidu.json.encode = baidu.json.stringify,
  baidu.lang.Class.prototype.addEventListeners = function(a, b) {
    if ("undefined" == typeof b) for (var c in a) this.addEventListener(c, a[c]);
    else {
      a = a.split(",");
      for (var c = 0,
          d = a.length; d > c; c++) this.addEventListener(baidu.trim(a[c]), b)
    }
  },
  baidu.lang.createClass = function(a, b) {
    b = b || {};
    var c = b.superClass || baidu.lang.Class,
        d = function() {
          var e = this;
          b.decontrolled && (e.__decontrolled = !0),
            c.apply(e, arguments);
          for (f in d.options) e[f] = d.options[f];
          a.apply(e, arguments);
          for (var f = 0,
              g = d["r"]; g && f < g.length; f++) g[f].apply(e, arguments)
        };
    d.options = b.options || {};
    var e = function() {},
        f = a.prototype;
    e.prototype = c.prototype;
    var g = d.prototype = new e;
    for (var h in f) g[h] = f[h];
    var i = b.className || b.type;
    return "string" == typeof i && (g.__type = i),
           g.constructor = f.constructor,
           d.extend = function(a) {
             for (var b in a) d.prototype[b] = a[b];
             return d
           },
           d
  },
  window[baidu.guid]._instances = window[baidu.guid]._instances || {},
  baidu.lang.decontrol = function(a) {
    var b = window[baidu.guid];
    b._instances && delete b._instances[a]
  },
  baidu.lang.eventCenter = baidu.lang.eventCenter || baidu.lang.createSingle(),
  baidu.lang.getModule = function(a, b) {
    for (var c, d = a.split("."), e = b || window; c = d.shift();) {
      if (null == e[c]) return null;
      e = e[c]
    }
    return e
  },
  baidu.lang.inherits = function(a, b, c) {
    var d, e, f = a.prototype,
    g = new Function;
    g.prototype = b.prototype,
      e = a.prototype = new g;
    for (d in f) e[d] = f[d];
    return a.prototype.constructor = a,
      a.superClass = b.prototype,
        "string" == typeof c && (e.__type = c),
        a.extend = function(b) {
          for (var c in b) e[c] = b[c];
          return a
        },
        a
  },
  baidu.inherits = baidu.lang.inherits,
  baidu.lang.instance = function(a) {
    return window[baidu.guid]._instances[a] || null
  },
  baidu.lang.isBoolean = function(a) {
    return "boolean" == typeof a
  },
  baidu.lang.isDate = function(a) {
    return "[object Date]" === {}.toString.call(a) && "Invalid Date" !== a.toString() && !isNaN(a)
  },
  baidu.lang.isElement = function(a) {
    return ! (!a || !a.nodeName || 1 != a.nodeType)
  },
  baidu.lang.module = function(name, module, owner) {
    var packages = name.split("."),
    len = packages.length - 1,
    packageName,
    i = 0;
    if (!owner) try {
      if (!new RegExp("^[a-zA-Z_$][a-zA-Z0-9_$]*$").test(packages[0])) throw "";
      owner = eval(packages[0]),
        i = 1
    } catch(e) {
      owner = window
    }
    for (; len > i; i++) packageName = packages[i],
        owner[packageName] || (owner[packageName] = {}),
          owner = owner[packageName];
    owner[packages[len]] || (owner[packages[len]] = module)
  },
  baidu.lang.register = function(a, b, c) {
    var d = a["r"] || (a["r"] = []);
    d[d.length] = b;
    for (var e in c) a.prototype[e] = c[e]
  },
  baidu.number.comma = function(a, b) {
    return (!b || 1 > b) && (b = 3),
    a = String(a).split("."),
    a[0] = a[0].replace(new RegExp("(\\d)(?=(\\d{" + b + "})+$)", "ig"), "$1,"),
    a.join(".")
  },
  baidu.number.randomInt = function(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
  },
  baidu.object.isPlain = function(a) {
    var b, c = Object.prototype.hasOwnProperty;
    if (! (a && "[object Object]" === Object.prototype.toString.call(a) && "isPrototypeOf" in a)) return ! 1;
    if (a.constructor && !c.call(a, "constructor") && !c.call(a.constructor.prototype, "isPrototypeOf")) return ! 1;
    for (b in a);
    return void 0 === b || c.call(a, b)
  },
  baidu.object.clone = function(a) {
    var b, c, d = a;
    if (!a || a instanceof Number || a instanceof String || a instanceof Boolean) return d;
    if (baidu.lang.isArray(a)) {
      d = [];
      var e = 0;
      for (b = 0, c = a.length; c > b; b++) d[e++] = baidu.object.clone(a[b])
    } else if (baidu.object.isPlain(a)) {
      d = {};
      for (b in a) a.hasOwnProperty(b) && (d[b] = baidu.object.clone(a[b]))
    }
    return d
  },
  baidu.object.isEmpty = function(a) {
    for (var b in a) return ! 1;
    return ! 0
  },
  baidu.object.keys = function(a) {
    var b, c = [],
    d = 0;
    for (b in a) a.hasOwnProperty(b) && (c[d++] = b);
    return c
  },
  baidu.object.map = function(a, b) {
    var c = {};
    for (var d in a) a.hasOwnProperty(d) && (c[d] = b(a[d], d));
    return c
  },
  function() {
    function a(a, c, d, e, f) {
      c.hasOwnProperty(d) && (f && b(a[d]) ? baidu.object.merge(a[d], c[d], {
        overwrite: e,
      recursive: f
      }) : !e && d in a || (a[d] = c[d]))
    }
    var b = function(a) {
      return baidu.lang.isObject(a) && !baidu.lang.isFunction(a)
    };
    baidu.object.merge = function(b, c, d) {
      var e, f = 0,
          g = d || {},
          h = g.overwrite,
          i = g.whiteList,
          j = g.recursive;
      if (i && i.length) for (e = i.length; e > f; ++f) a(b, c, i[f], h, j);
      else for (f in c) a(b, c, f, h, j);
      return b
    }
  } (),
  baidu.page.createStyleSheet = function(a) {
    var b, c = a || {},
    d = c.document || document;
    if (baidu.browser.ie) return c.url || (c.url = ""),
       d.createStyleSheet(c.url, c.index);
    if (b = "<style type='text/css'></style>", c.url && (b = "<link type='text/css' rel='stylesheet' href='" + c.url + "'/>"), baidu.dom.insertHTML(d.getElementsByTagName("HEAD")[0], "beforeEnd", b), c.url) return null;
    var e = d.styleSheets[d.styleSheets.length - 1],
      f = e.rules || e.cssRules;
    return {
      self: e,
        rules: e.rules || e.cssRules,
        addRule: function(a, b, c) {
          return e.addRule ? e.addRule(a, b, c) : e.insertRule ? (isNaN(c) && (c = f.length), e.insertRule(a + "{" + b + "}", c)) : void 0
        },
        removeRule: function(a) {
          e.removeRule ? e.removeRule(a) : e.deleteRule && (isNaN(a) && (a = 0), e.deleteRule(a))
        }
    }
  },
  baidu.page.getHeight = function() {
    var a = document,
    b = a.body,
    c = a.documentElement,
    d = "BackCompat" == a.compatMode ? b: a.documentElement;
    return Math.max(c.scrollHeight, b.scrollHeight, d.clientHeight)
  },
  baidu.page.getWidth = function() {
    var a = document,
    b = a.body,
    c = a.documentElement,
    d = "BackCompat" == a.compatMode ? b: a.documentElement;
    return Math.max(c.scrollWidth, b.scrollWidth, d.clientWidth)
  },
  baidu.page.lazyLoadImage = function(a) {
    a = a || {},
    a.preloadHeight = a.preloadHeight || 0,
    baidu.dom.ready(function() {
      function b() {
        return baidu.page.getScrollTop() + baidu.page.getViewHeight() + a.preloadHeight
      }
      var c, d = document.getElementsByTagName("IMG"),
    e = d,
    f = d.length,
    g = 0,
    h = b(),
    i = "data-tangram-ori-src";
    if (a.className) for (e = []; f > g; ++g) baidu.dom.hasClass(d[g], a.className) && e.push(d[g]);
    for (g = 0, f = e.length; f > g; ++g) c = e[g],
    baidu.dom.getPosition(c).top > h && (c.setAttribute(i, c.src), a.placeHolder ? c.src = a.placeHolder: c.removeAttribute("src"));
    var j = function() {
      for (var d, f = b(), g = !0, h = 0, k = e.length; k > h; ++h) c = e[h],
    d = c.getAttribute(i),
    d && (g = !1),
    baidu.dom.getPosition(c).top < f && d && (c.src = d, c.removeAttribute(i), baidu.lang.isFunction(a.onlazyload) && a.onlazyload(c));
    g && baidu.un(window, "scroll", j)
    };
    baidu.on(window, "scroll", j)
    })
  },
  baidu.page.load = function(a, b, c) {
    function d() {
      for (var c = 0,
          d = a.length; d > c; ++c) if (!h[a[c].url]) return setTimeout(arguments.callee, 10),
      void 0;
      b.onload()
    }
    function e(a, b) {
      var c, d, e;
      switch (a.type.toLowerCase()) {
        case "css":
          c = document.createElement("link"),
            c.setAttribute("rel", "stylesheet"),
            c.setAttribute("type", "text/css");
          break;
        case "js":
          c = document.createElement("script"),
            c.setAttribute("type", "text/javascript"),
            c.setAttribute("charset", a.charset || g.charset);
          break;
        case "html":
          c = document.createElement("iframe"),
            c.frameBorder = "none";
          break;
        default:
          return
      }
      e = function() {
        d || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (d = !0, baidu.un(c, "load", e), baidu.un(c, "readystatechange", e), b.call(window, c))
      },
        baidu.on(c, "load", e),
        baidu.on(c, "readystatechange", e),
        "css" == a.type && !
          function() {
            if (!d) {
              try {
                c.sheet.cssRule
              } catch(a) {
                return setTimeout(arguments.callee, 20),
                void 0
              }
              d = !0,
                b.call(window, c)
            }
          } (),
        c.href = c.src = a.url,
        document.getElementsByTagName("head")[0].appendChild(c)
    }
    function f(k) {
      var l, m = k.url,
          n = !!j,
          o = function(e) {
            h[k.url] = e,
            delete i[k.url],
            baidu.lang.isFunction(k.onload) && !1 === k.onload.call(window, e) || (!j && g(a.slice(1), b, !0), !c && baidu.lang.isFunction(b.onload) && d())
          };
      return k.type = k.type || m.replace(/^[^\?#]+\.(css|js|html)(\?|#| |$)[^\?#]*/i, "$1"),
             k.requestType = k.requestType || ("html" == k.type ? "ajax": "dom"),
             (l = h[k.url]) ? (o(l), n) : !b.refresh && i[k.url] ? (setTimeout(function() {
               f(k)
             },
             10), n) : (i[k.url] = !0, "dom" == k.requestType.toLowerCase() ? e(k, o) : baidu.ajax.get(k.url,
               function(a, b) {
                 o(b)
               }), n)
    }
    b = b || {};
    var g = baidu.page.load,
        h = g._cache = g._cache || {},
        i = g._loadingCache = g._loadingCache || {},
        j = b.parallel;
    baidu.lang.isString(a) && (a = [{
      url: a
    }]),
      a && a.length && baidu.each(a, f)
  },
  baidu.page.load.charset = "UTF8",
  baidu.page.loadCssFile = function(a) {
    var b = document.createElement("link");
    b.setAttribute("rel", "stylesheet"),
      b.setAttribute("type", "text/css"),
      b.setAttribute("href", a),
      document.getElementsByTagName("head")[0].appendChild(b)
  },
  baidu.page.loadJsFile = function(a) {
    var b = document.createElement("script");
    b.setAttribute("type", "text/javascript"),
      b.setAttribute("src", a),
      b.setAttribute("defer", "defer"),
      document.getElementsByTagName("head")[0].appendChild(b)
  },
  baidu.platform = baidu.platform || {},
  baidu.platform.isAndroid = /android/i.test(navigator.userAgent),
  baidu.platform.isIpad = /ipad/i.test(navigator.userAgent),
  baidu.platform.isIphone = /iphone/i.test(navigator.userAgent),
  baidu.platform.isMacintosh = /macintosh/i.test(navigator.userAgent),
  baidu.platform.isWindows = /windows/i.test(navigator.userAgent),
  baidu.platform.isX11 = /x11/i.test(navigator.userAgent),
  baidu.sio = baidu.sio || {},
  baidu.sio._createScriptTag = function(a, b, c) {
    a.setAttribute("type", "text/javascript"),
    c && a.setAttribute("charset", c),
    a.setAttribute("src", b),
    document.getElementsByTagName("head")[0].appendChild(a)
  },
  baidu.sio._removeScriptTag = function(a) {
    if (a.clearAttributes) a.clearAttributes();
    else for (var b in a) a.hasOwnProperty(b) && delete a[b];
    a && a.parentNode && a.parentNode.removeChild(a),
      a = null
  },
  baidu.sio.callByBrowser = function(a, b, c) {
    var d, e = document.createElement("SCRIPT"),
    f = 0,
    g = c || {},
    h = g.charset,
    i = b ||
      function() {},
    j = g.timeOut || 0;
    e.onload = e.onreadystatechange = function() {
      if (!f) {
        var a = e.readyState;
        if ("undefined" == typeof a || "loaded" == a || "complete" == a) {
          f = 1;
          try {
            i(),
              clearTimeout(d)
          } finally {
            e.onload = e.onreadystatechange = null,
              baidu.sio._removeScriptTag(e)
          }
        }
      }
    },
      j && (d = setTimeout(function() {
        e.onload = e.onreadystatechange = null,
      baidu.sio._removeScriptTag(e),
      g.onfailure && g.onfailure()
      },
      j)),
      baidu.sio._createScriptTag(e, a, h)
  },
  baidu.sio.callByServer = function(a, b, c) {
    function d(a) {
      return function() {
        try {
          a ? j.onfailure && j.onfailure() : (b.apply(window, arguments), clearTimeout(f)),
          window[e] = null,
          delete window[e]
        } catch(c) {} finally {
          baidu.sio._removeScriptTag(h)
        }
      }
    }
    var e, f, g, h = document.createElement("SCRIPT"),
        i = "bd__cbs__",
        j = c || {},
        k = j.charset,
        l = j.queryField || "callback",
        m = j.timeOut || 0,
        n = new RegExp("(\\?|&)" + l + "=([^&]*)");
    baidu.lang.isFunction(b) ? (e = i + Math.floor(2147483648 * Math.random()).toString(36), window[e] = d(0)) : baidu.lang.isString(b) ? e = b: (g = n.exec(a)) && (e = g[2]),
      m && (f = setTimeout(d(1), m)),
      a = a.replace(n, "$1" + l + "=" + e),
      a.search(n) < 0 && (a += (a.indexOf("?") < 0 ? "?": "&") + l + "=" + e),
      baidu.sio._createScriptTag(h, a, k)
  },
  baidu.sio.log = function(a) {
    var b = new Image,
    c = "tangram_sio_log_" + Math.floor(2147483648 * Math.random()).toString(36);
    window[c] = b,
      b.onload = b.onerror = b.onabort = function() {
        b.onload = b.onerror = b.onabort = null,
        window[c] = null,
        b = null
      },
      b.src = a
  },
  baidu.string.decodeHTML = function(a) {
    var b = String(a).replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
    return b.replace(/&#([\d]+);/g,
        function(a, b) {
          return String.fromCharCode(parseInt(b, 10))
        })
  },
  baidu.decodeHTML = baidu.string.decodeHTML,
  baidu.string.encodeHTML = function(a) {
    return String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
  },
  baidu.encodeHTML = baidu.string.encodeHTML,
  baidu.string.filterFormat = function(a, b) {
    var c = Array.prototype.slice.call(arguments, 1),
    d = Object.prototype.toString;
    return c.length ? (c = 1 == c.length ? null !== b && /\[object Array\]|\[object Object\]/.test(d.call(b)) ? b: c: c, a.replace(/#\{(.+?)\}/g,
          function(a, b) {
            var e, f, g, h, i;
            if (!c) return "";
            for (e = b.split("|"), f = c[e[0]], "[object Function]" == d.call(f) && (f = f(e[0])), g = 1, h = e.length; h > g; ++g) i = baidu.string.filterFormat[e[g]],
           "[object Function]" == d.call(i) && (f = i(f));
    return "undefined" == typeof f || null === f ? "": f
          })) : a
  },
  baidu.string.filterFormat.escapeJs = function(a) {
    if (!a || "string" != typeof a) return a;
    var b, c, d, e = [];
    for (b = 0, c = a.length; c > b; ++b) d = a.charCodeAt(b),
        d > 255 ? e.push(a.charAt(b)) : e.push("\\x" + d.toString(16));
    return e.join("")
  },
  baidu.string.filterFormat.js = baidu.string.filterFormat.escapeJs,
  baidu.string.filterFormat.escapeString = function(a) {
    return a && "string" == typeof a ? a.replace(/["'<>\\\/`]/g,
        function(a) {
          return "&#" + a.charCodeAt(0) + ";"
        }) : a
  },
  baidu.string.filterFormat.e = baidu.string.filterFormat.escapeString,
  baidu.string.filterFormat.toInt = function(a) {
    return parseInt(a, 10) || 0
  },
  baidu.string.filterFormat.i = baidu.string.filterFormat.toInt,
  baidu.string.format = function(a, b) {
    a = String(a);
    var c = Array.prototype.slice.call(arguments, 1),
        d = Object.prototype.toString;
    return c.length ? (c = 1 == c.length ? null !== b && /\[object Array\]|\[object Object\]/.test(d.call(b)) ? b: c: c, a.replace(/#\{(.+?)\}/g,
          function(a, b) {
            var e = c[b];
            return "[object Function]" == d.call(e) && (e = e(b)),
           "undefined" == typeof e ? "": e
          })) : a
  },
  baidu.format = baidu.string.format,
  function() {
    var a = /^\#[\da-f]{6}$/i,
    b = /^rgb\((\d+), (\d+), (\d+)\)$/,
    c = {
      black: "#000000",
      silver: "#c0c0c0",
      gray: "#808080",
      white: "#ffffff",
      maroon: "#800000",
      red: "#ff0000",
      purple: "#800080",
      fuchsia: "#ff00ff",
      green: "#008000",
      lime: "#00ff00",
      olive: "#808000",
      yellow: "#ffff0",
      navy: "#000080",
      blue: "#0000ff",
      teal: "#008080",
      aqua: "#00ffff"
    };
    baidu.string.formatColor = function(d) {
      if (a.test(d)) return d;
      if (b.test(d)) {
        for (var e, f = 1,
            d = "#"; 4 > f; f++) e = parseInt(RegExp["$" + f]).toString(16),
          d += ("00" + e).substr(e.length);
        return d
      }
      if (/^\#[\da-f]{3}$/.test(d)) {
        var g = d.charAt(1),
          h = d.charAt(2),
            i = d.charAt(3);
        return "#" + g + g + h + h + i + i
      }
      return c[d] ? c[d] : ""
    }
  } (),
  baidu.string.getByteLength = function(a) {
    return String(a).replace(/[^\x00-\xff]/g, "ci").length
  },
  baidu.string.stripTags = function(a) {
    return String(a || "").replace(/<[^>]+>/g, "")
  },
  baidu.string.subByte = function(a, b, c) {
    return a = String(a),
    c = c || "",
    0 > b || baidu.string.getByteLength(a) <= b ? a + c: (a = a.substr(0, b).replace(/([^\x00-\xff])/g, "$1 ").substr(0, b).replace(/[^\x00-\xff]$/, "").replace(/([^\x00-\xff]) /g, "$1"), a + c)
  },
  baidu.string.toHalfWidth = function(a) {
    return String(a).replace(/[\uFF01-\uFF5E]/g,
        function(a) {
          return String.fromCharCode(a.charCodeAt(0) - 65248)
        }).replace(/\u3000/g, " ")
  },
  baidu.string.wbr = function(a) {
    return String(a).replace(/(?:<[^>]+>)|(?:&#?[0-9a-z]{2,6};)|(.{1})/gi, "$&<wbr>").replace(/><wbr>/g, ">")
  },
  baidu.swf = baidu.swf || {},
  baidu.swf.version = function() {
    var a = navigator;
    if (a.plugins && a.mimeTypes.length) {
      var b = a.plugins["Shockwave Flash"];
      if (b && b.description) return b.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0"
    } else if (window.ActiveXObject && !window.opera) for (var c = 12; c >= 2; c--) try {
      var d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + c);
      if (d) {
        var e = d.GetVariable("$version");
        return e.replace(/WIN/g, "").replace(/,/g, ".")
      }
    } catch(f) {}
  } (),
  baidu.swf.createHTML = function(a) {
    a = a || {};
    var b, c, d, e, f, g, h = baidu.swf.version,
        i = a.ver || "6.0.0",
        j = {},
        k = baidu.string.encodeHTML;
    for (e in a) j[e] = a[e];
    if (a = j, !h) return "";
    for (h = h.split("."), i = i.split("."), d = 0; 3 > d && (b = parseInt(h[d], 10), c = parseInt(i[d], 10), !(b > c)); d++) if (c > b) return "";
    var l = a.vars,
      m = ["classid", "codebase", "id", "width", "height", "align"];
    if (a.align = a.align || "middle", a.classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000", a.codebase = "http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0", a.movie = a.url || "", delete a.vars, delete a.url, "string" == typeof l) a.flashvars = l;
    else {
      var n = [];
      for (e in l) g = l[e],
          n.push(e + "=" + encodeURIComponent(g));
      a.flashvars = n.join("&")
    }
    var o = ["<object "];
    for (d = 0, f = m.length; f > d; d++) g = m[d],
        o.push(" ", g, '="', k(a[g]), '"');
    o.push(">");
    var p = {
      wmode: 1,
      scale: 1,
      quality: 1,
      play: 1,
      loop: 1,
      menu: 1,
      salign: 1,
      bgcolor: 1,
      base: 1,
      allowscriptaccess: 1,
      allownetworking: 1,
      allowfullscreen: 1,
      seamlesstabbing: 1,
      devicefont: 1,
      swliveconnect: 1,
      flashvars: 1,
      movie: 1
    };
    for (e in a) g = a[e],
        e = e.toLowerCase(),
          p[e] && (g || g === !1 || 0 === g) && o.push('<param name="' + e + '" value="' + k(g) + '" />');
    a.src = a.movie,
      a.name = a.id,
      delete a.id,
      delete a.movie,
      delete a.classid,
      delete a.codebase,
      a.type = "application/x-shockwave-flash",
      a.pluginspage = "http://www.macromedia.com/go/getflashplayer",
      o.push("<embed");
    var q;
    for (e in a) if (g = a[e], g || g === !1 || 0 === g) {
      if (new RegExp("^salign$", "i").test(e)) {
        q = g;
        continue
      }
      o.push(" ", e, '="', k(g), '"')
    }
    return q && o.push(' salign="', k(q), '"'),
           o.push("></embed></object>"),
           o.join("")
  },
  baidu.swf.create = function(a, b) {
    a = a || {};
    var c = baidu.swf.createHTML(a) || a.errorMessage || "";
    b && "string" == typeof b && (b = document.getElementById(b)),
      baidu.dom.insertHTML(b || document.body, "beforeEnd", c)
  },
  baidu.swf.getMovie = function(a) {
    var b, c = document[a];
    return 9 == baidu.browser.ie ? c && c.length ? 1 == (b = baidu.array.remove(baidu.lang.toArray(c),
          function(a) {
            return "embed" != a.tagName.toLowerCase()
          })).length ? b[0] : b: c: c || window[a]
  },
  baidu.swf.Proxy = function(a, b, c) {
    var d, e = this,
    f = this._flash = baidu.swf.getMovie(a);
    return b ? (d = setInterval(function() {
      try {
        f[b] && (e._initialized = !0, clearInterval(d), c && c())
      } catch(a) {}
    },
    100), void 0) : this
  },
  baidu.swf.Proxy.prototype.getFlash = function() {
    return this._flash
  },
  baidu.swf.Proxy.prototype.isReady = function() {
    return !! this._initialized
  },
  baidu.swf.Proxy.prototype.call = function(a) {
    try {
      var b = this.getFlash(),
      c = Array.prototype.slice.call(arguments);
      c.shift(),
        b[a] && b[a].apply(b, c)
    } catch(d) {}
  },
  baidu.url.getQueryValue = function(a, b) {
    var c = new RegExp("(^|&|\\?|#)" + baidu.string.escapeReg(b) + "=([^&#]*)(&|$|#)", ""),
    d = a.match(c);
    return d ? d[2] : null
  },
  baidu.url.jsonToQuery = function(a, b) {
    var c, d = [],
    e = b ||
      function(a) {
        return baidu.url.escapeSymbol(a)
      };
    return baidu.object.each(a,
        function(a, b) {
          if (baidu.lang.isArray(a)) for (c = a.length; c--;) d.push(b + "=" + e(a[c], b));
          else d.push(b + "=" + e(a, b))
        }),
           d.join("&")
  },
  baidu.url.queryToJson = function(a) {
    for (var b, c, d, e, f = a.substr(a.lastIndexOf("?") + 1), g = f.split("&"), h = g.length, i = {},
        j = 0; h > j; j++) g[j] && (e = g[j].split("="), b = e[0], c = e[1], d = i[b], "undefined" == typeof d ? i[b] = c: baidu.lang.isArray(d) ? d.push(c) : i[b] = [d, c]);
    return i
  },
  baidu.ejson = function() {
    function a(a, c) {
      var d = c.onsuccess,
      e = c.onfailure;
      return c.onsuccess = function(a) {
        b(a.responseText, d, e),
          c = null
      },
             c.onfailure = function(a) {
               b({
                 status: a.status,
               statusInfo: a.statusText,
               data: a.responseText
               },
               d, e),
               c = null
             },
             baidu.ajax.request(a, c)
    }
    function b(a, b, c) {
      c = c || new Function,
      b = b || new Function;
      var d = "string" == typeof a ? baidu.json.parse(a) : a;
      return d && "object" == typeof d ? (d.status ? c(d.status, d) : b(d.data, d), void 0) : (c(1, d), void 0)
    }
    return {
      request: a,
      get: function(b, c, d) {
        return a(b, {
          method: "get",
        onsuccess: c,
        onfailure: d
        })
      },
      post: function(b, c, d, e) {
        return a(b, {
          method: "post",
        data: c,
        onsuccess: d,
        onfailure: e
        })
      },
      process: b
    }
  } (),
  baidu.zhixin = baidu.zhixin || {},
  baidu.zhixin.masker = function() {
    var a = !1,
    b = baidu.dom.create("div", {
      "class": "ui-common-masker"
    }),
    c = function() {
      a || (document.body.appendChild(b), a = !0);
      var c = baidu.page.getHeight(document.body) + "px",
          d = baidu.page.getWidth(document.body) + "px";
      baidu.dom.setStyle(b, "height", c),
        baidu.dom.setStyle(b, "width", d),
        baidu.dom.show(b)
    },
    d = function() {
      baidu.dom.hide(b)
    };
    return {
      show: c,
        hide: d
    }
  } (),
  baidu.zhixin.loading = function() {
    var a = baidu.zhixin.masker,
    b = !1,
    c = baidu.dom.create("div", {
      "class": "ui-common-loading"
    }),
    d = function() {
      if (b || (document.body.appendChild(c), b = !0), baidu.browser.ie < 7) {
        var d = baidu.page.getScrollTop() + baidu.page.getViewHeight / 2 + 25 + "px",
          e = baidu.page.getScrollLeft() + baidu.page.getViewWidth / 2 + 25 + "px";
        baidu.dom.setStyle(c, "position", "absolute"),
          baidu.dom.setStyle(c, "top", d),
          baidu.dom.setStyle(c, "left", e)
      }
      baidu.dom.show(c),
        a.show()
    },
    e = function() {
      baidu.dom.hide(c),
      a.hide()
    };
    return {
      hide: e,
        show: d
    }
  } (),
  baidu.zhixin.request = function() {
    var a = [].slice.call(arguments),
    b = a[1].onsuccess,
    c = a[1].onfailure,
    d = function() {
      baidu.zhixin.loading.hide();
      var a = [].slice.call(arguments);
      b && b.apply(this, a)
    },
    e = function() {
      baidu.zhixin.loading.hide();
      var a = [].slice.call(arguments);
      c && c.apply(this, a)
    };
    return a[1].onsuccess = d,
           a[1].onfailure = e,
           baidu.zhixin.loading.show(),
           baidu.ejson.request.apply(this, a)
  },
  baidu.zhixin.get = function(a, b, c) {
    return baidu.zhixin.request(a, {
      method: "get",
    onsuccess: b,
    onfailure: c
    })
  },
  baidu.zhixin.post = function(a, b, c, d) {
    return baidu.zhixin.request(a, {
      method: "post",
    data: b,
    onsuccess: c,
    onfailure: d
    })
  };
var define, require; !
function(a) {
  function require(a, c) {
    z(a);
    var d = bb.waitSeconds;
    return F(a) && d && (I && clearTimeout(I), I = setTimeout(b, 1e3 * d)),
           P(a, c)
  }
  function b() {
    var a, b = [],
        c = [],
        d = {};
    for (var e in J) i(e) || (a = 1, b.push(e)),
        G(J[e].depMs || [],
            function(b) {
              var e = b.absId;
              J[e] || d[e] || (a = 1, c.push(e), d[e] = 1)
            });
    if (a) throw new Error("[MODULE_TIMEOUT]Hang( " + (b.join(", ") || "none") + " ) Miss( " + (c.join(", ") || "none") + " )")
  }
  function define() {
    var a = arguments.length;
    if (a) {
      for (var b, c, f = arguments[--a]; a--;) {
        var g = arguments[a];
        "string" == typeof g ? b = g: F(g) && (c = g)
      }
      var h = window.opera;
      if (!b && document.attachEvent && (!h || "[object Opera]" !== h.toString())) {
        var i = C();
        b = i && i.getAttribute("data-require-id")
      }
      b ? (d(b, c, f), Q && clearTimeout(Q), Q = setTimeout(e, 1)) : _.push({
        deps: c,
        factory: f
      })
    }
  }
  function c() {
    var a = bb.config[this.id];
    return a && "object" == typeof a ? a: {}
  }
  function d(a, b, d) {
    if (!J[a]) {
      var e = {
        id: a,
        deps: b || ["require", "exports", "module"],
        factoryDeps: [],
        factory: d,
        exports: {},
        config: c,
        state: L,
        require: w(a),
        depMs: [],
        depMsIndex: {},
        depRs: [],
        depPMs: {}
      };
      J[a] = e,
        K.push(e)
    }
  }
  function e() {
    function a(a) {
      J[a] || c[a] || (b.push(a), c[a] = 1)
    }
    var b = [],
        c = {};
    G(K,
        function(b) {
          if (! (b.state > L)) {
            var c = b.deps.slice(0),
      d = c.length,
      e = 0,
      h = b.factory;
    "function" == typeof h && (e = Math.min(h.length, d), h.toString().replace(S, "").replace(R,
        function(a, b, d) {
          c.push(d)
        })),
      G(c,
        function(c, f) {
          var g, h, i = A(c),
      j = x(i.module, b.id);
      j && !$[j] ? (i.resource && (h = {
        id: c,
        module: j,
        resource: i.resource
      },
      b.depPMs[j] = 1, b.depRs.push(h)), g = b.depMsIndex[j], g || (g = {
        id: i.module,
      absId: j,
      hard: e > f,
      circular: W
      },
      b.depMs.push(g), b.depMsIndex[j] = g, a(j))) : g = {
        absId: j
      },
      d > f && b.factoryDeps.push(h || g)
        }),
      b.state = M,
      G(b.depMs,
          function(a) {
            f(b.id, a.absId)
          }),
      g(b)
          }
        }),
        r(b)
  }
  function f(a, b) {
    function c() {
      m(a)
    }
    o(b,
        function() {
          var d = J[a];
          d.depPMs[b] && G(d.depRs,
            function(d) {
              d.absId || d.module !== b || (d.absId = x(d.id, a), o(d.absId, c), r([d.absId], null, a))
            }),
            c()
        })
  }
  function g(b) {
    function c() {
      var a = V;
      return G(b.depRs,
          function(b) {
            return b.absId && i(b.absId) ? void 0 : (a = T, !1)
          }),
             a !== V ? a: (G(b.depMs,
                   function(b) {
                     if (!i(b.absId)) switch (b.circular === W && (b.circular = l(f, b.absId)), b.circular) {
                       case Y:
                         b.hard && (a = U);
                         break;
                       case X:
                         a = U;
                         break;
                       case W:
                         return a = T,
             !1
                     }
                   }), a)
    }
    function d() {
      if (! (b.state >= N)) {
        var d = c();
        if (d >= U && e(), !(V > d)) {
          var g = [];
          G(b.factoryDeps,
              function(a) {
                g.push(a.absId)
              });
          var h = k(g, {
            require: b.require,
              exports: b.exports,
              module: b
          });
          try {
            var i = b.factory,
                j = "function" == typeof i ? i.apply(a, h) : i;
            null != j && (b.exports = j)
          } catch(l) {
            if (/^\[MODULE_MISS\]"([^"]+)/.test(l.message)) {
              var m = b.depMsIndex[RegExp.$1];
              return m && (m.hard = 1),
                     void 0
            }
            throw l
          }
          b.state = N,
            b.invokeFactory = null,
            n(f)
        }
      }
    }
    function e() {
      g || (g = 1, G(b.depMs,
            function(a) {
              a.circular === Y && m(a.absId)
            }))
    }
    var f = b.id;
    b.invokeFactory = d,
      d();
    var g
  }
  function h(a) {
    return J[a] && J[a].state >= M
  }
  function i(a) {
    return J[a] && J[a].state >= N
  }
  function j(a, b) {
    var c = J[a];
    if (b = b || {},
        b[a] = 1, !c || c.state < N) return ! 1;
    if (c.state === O) return ! 0;
    for (var d = c.depMs,
        e = d.length; e--;) {
          var f = d[e].absId;
          if (!b[f] && !j(f, b)) return ! 1
        }
    return c.state = O,
           !0
  }
  function k(a, b) {
    var c = [];
    return G(a,
        function(a) {
          c.push(b[a] || p(a))
        }),
           c
  }
  function l(a, b, c) {
    if (!h(b)) return W;
    c = c || {},
      c[b] = 1;
    var d = J[b];
    if (b === a) return Y;
    var e = d && d.depMs;
    if (e) for (var f = e.length; f--;) {
      var g = e[f].absId;
      if (!c[g]) {
        var i = l(a, g, c);
        switch (i) {
          case Y:
          case W:
            return i
        }
      }
    }
    return X
  }
  function m(a) {
    var b = J[a];
    b && b.invokeFactory && b.invokeFactory()
  }
  function n(a) {
    for (var b = Z[a] || [], c = b.length; c--;) {
      var d = b[c];
      d && d()
    }
    b.length = 0,
      delete Z[a]
  }
  function o(a, b, c) {
    if (i(a)) return b(a),
       void 0;
    var d = Z[a];
    d || (d = Z[a] = []),
      c ? d.unshift(b) : d.push(b)
  }
  function p(a) {
    return i(a) ? J[a].exports: null
  }
  function q(a) {
    var b = _.slice(0);
    _.length = 0,
      _ = [],
      G(b,
          function(b) {
            d(b.id || a, b.deps, b.factory)
          }),
      e()
  }
  function r(b, c, d) {
    function e() {
      if (!f) {
        var d = 1;
        G(b,
            function(a) {
              return $[a] ? void 0 : d = j(a)
            }),
          d && (f = 1, "function" == typeof c && c.apply(a, k(b, $)))
      }
    }
    if ("string" == typeof b) {
      if (!i(b)) throw new Error('[MODULE_MISS]"' + b + '" is not exists!');
      return p(b)
    }
    var f = 0;
    F(b) && (e(), !f && G(b,
          function(a) {
            $[a] || (o(a, e, 1), (a.indexOf("!") > 0 ? t: s)(a, d))
          }))
  }
  function s(a) {
    function b() {
      var b = c.readyState; ("undefined" == typeof b || /^(loaded|complete)$/.test(b)) && (c.onload = c.onreadystatechange = null, c = null, q(a))
    }
    if (!ab[a] && !J[a]) {
      ab[a] = 1;
      var c = document.createElement("script");
      c.setAttribute("data-require-id", a),
        c.src = v(a + ".js"),
        c.async = !0,
        c.readyState ? c.onreadystatechange = b: c.onload = b,
        D(c)
    }
  }
  function t(a, b) {
    function d(b) {
      g.state = O,
      g.exports = b || !0,
      n(a)
    }
    function e(e) {
      var g = b ? J[b].require: P;
      e.load(f.resource, g, d, c.call({
        id: a
      }))
    }
    if (!J[a]) {
      var f = A(a),
        g = {
          id: a,
          state: M
        };
      J[a] = g,
        d.fromText = function(a, b) {
          new Function(b)(),
          q(a)
        },
        r([f.module], e)
    }
  }
  function u() {
    bb.baseUrl = bb.baseUrl.replace(/\/$/, "") + "/";
    var a = H();
    cb = B(bb.paths),
       cb.sort(a),
       eb = B(bb.map),
       eb.sort(a),
       G(eb,
           function(b) {
             var c = b.k;
             b.v = B(b.v),
       b.v.sort(a),
       b.reg = "*" === c ? /^/: E(c)
           }),
       db = [],
       G(bb.packages,
           function(a) {
             var b = a;
             "string" == typeof a && (b = {
               name: a.split("/")[0],
               location: a,
               main: "main"
             }),
               b.location = b.location || b.name,
       b.main = (b.main || "main").replace(/\.js$/i, ""),
       db.push(b)
           }),
       db.sort(H("name")),
       gb = B(bb.urlArgs),
       gb.sort(a)
  }
  function v(a) {
    function b(a) {
      j || (i += (i.indexOf("?") > 0 ? "&": "?") + a, j = 1)
    }
    var c = /(\.[a-z0-9]+)$/i,
        d = /(\?[^#]*)$/,
        e = "",
        f = a,
        g = "";
    d.test(a) && (g = RegExp.$1, a = a.replace(d, "")),
      c.test(a) && (e = RegExp.$1, f = a.replace(c, ""));
    var h, i = f;
    G(cb,
        function(a) {
          var b = a.k;
          return E(b).test(f) ? (i = i.replace(b, a.v), h = 1, !1) : void 0
        }),
      h || G(db,
          function(a) {
            var b = a.name;
            return E(b).test(f) ? (i = i.replace(b, a.location), !1) : void 0
          }),
      /^([a-z]{2,10}:\/)?\//i.test(i) || (i = bb.baseUrl + i),
      i += e + g;
    var j;
    return G(gb,
        function(a) {
          return E(a.k).test(f) ? (b(a.v), !1) : void 0
        }),
           fb && b(fb),
           i
  }
  function w(a) {
    function b(b, d) {
      if ("string" == typeof b) {
        var e = c[b];
        return e || (e = c[b] = r(x(b, a))),
               e
      }
      if (F(b)) {
        var f = [];
        G(b,
            function(b) {
              var c = A(b);
              c.resource && f.push(x(c.module, a))
            }),
          r(f,
              function() {
                var c = [];
                G(b,
                  function(b) {
                    c.push(x(b, a))
                  }),
                  r(c, d, a)
              },
              a)
      }
    }
    var c = {};
    return b.toUrl = function(b) {
      return v(x(b, a))
    },
           b
  }
  function x(a, b) {
    if (!a) return "";
    b = b || "";
    var c = A(a);
    if (!c) return a;
    var d = c.resource,
      e = y(c.module, b);
    if (G(db,
          function(a) {
            var b = a.name;
            return b === e ? (e = b + "/" + a.main, !1) : void 0
          }), G(eb,
            function(a) {
              return a.reg.test(b) ? (G(a.v,
                  function(a) {
                    var b = a.k,
              c = E(b);
              return c.test(e) ? (e = e.replace(b, a.v), !1) : void 0
                  }), !1) : void 0
            }), d) {
              var f = p(e);
              d = f.normalize ? f.normalize(d,
                  function(a) {
                    return x(a, b)
                  }) : x(d, b),
              e += "!" + d
            }
    return e
  }
  function y(a, b) {
    if (0 === a.indexOf(".")) {
      var c = b.split("/"),
        d = a.split("/"),
          e = c.length - 1,
          f = d.length,
          g = 0,
          h = 0;
      a: for (var i = 0; f > i; i++) {
        var j = d[i];
        switch (j) {
          case "..":
            if (! (e > g)) break a;
            g++,
              h++;
            break;
          case ".":
            h++;
            break;
          default:
            break a
        }
      }
         return c.length = e - g,
                d = d.slice(h),
                c.concat(d).join("/")
    }
    return a
  }
  function z(a) {
    function b(a) {
      0 === a.indexOf(".") && c.push(a)
    }
    var c = [];
    if ("string" == typeof a ? b(a) : G(a,
          function(a) {
            b(a)
          }), c.length > 0) throw new Error("[REQUIRE_FATAL]Relative ID is not allowed in global require: " + c.join(", "))
  }
  function A(a) {
    var b = a.split("!");
    return jb.test(b[0]) ? {
      module: b[0],
        resource: b[1]
    }: null
  }
  function B(a) {
    var b = [];
    for (var c in a) a.hasOwnProperty(c) && b.push({
      k: c,
        v: a[c]
    });
    return b
  }
  function C() {
    if (hb) return hb;
    if (ib && "interactive" === ib.readyState) return ib;
    for (var a = document.getElementsByTagName("script"), b = a.length; b--;) {
      var c = a[b];
      if ("interactive" === c.readyState) return ib = c,
         c
    }
  }
  function D(a) {
    hb = a,
       lb ? kb.insertBefore(a, lb) : kb.appendChild(a),
       hb = null
  }
  function E(a) {
    return new RegExp("^" + a + "(/|$)")
  }
  function F(a) {
    return a instanceof Array
  }
  function G(a, b) {
    if (F(a)) for (var c = 0,
        d = a.length; d > c && b(a[c], c) !== !1; c++);
  }
  function H(a) {
    return a = a || "k",
           function(b, c) {
             var d = b[a],
             e = c[a];
             return "*" === e ? -1 : "*" === d ? 1 : e.length - d.length
           }
  }
  var I, J = {},
      K = [],
      L = 1,
      M = 2,
      N = 3,
      O = 4,
      P = w();
  require.toUrl = P.toUrl;
  var Q;
  define.amd = {};
  var R = /require\(\s*(['"'])([^'"]+)\1\s*\)/g,
      S = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
      T = 0,
      U = 1,
      V = 2,
      W = 0,
      X = 1,
      Y = 2,
      Z = {},
      $ = {
        require: require,
        exports: 1,
        module: 1
      },
      _ = [],
      ab = {},
      bb = {
        baseUrl: "./",
        paths: {},
        config: {},
        map: {},
        packages: [],
        waitSeconds: 0,
        urlArgs: {}
      };
  require.config = function(a) {
    for (var b in bb) if (a.hasOwnProperty(b)) {
      var c = a[b],
        d = bb[b];
      if ("urlArgs" === b && "string" == typeof c) fb = c;
      else {
        var e = typeof d;
        if ("string" === e || "number" === e) bb[b] = c;
        else if (F(d)) G(c,
            function(a) {
              d.push(a)
            });
        else for (var b in c) d[b] = c[b]
      }
    }
    u()
  },
    u();
  var cb, db, eb, fb, gb, hb, ib, jb = /^[-_a-z0-9\.]+(\/[-_a-z0-9\.]+)*$/i,
      kb = document.getElementsByTagName("head")[0],
      lb = document.getElementsByTagName("base")[0];
  lb && (kb = lb.parentNode),
     a.define = define,
     a.require = require
} (this);
var Anti = function(a) {
  function b(b) {
    var c = window.event || b;
    for (t = c.target || c.srcElement; t && "A" != t.tagName;) if (t = t.parentNode, t === a) return ! 1;
    t && (q = (new Date).getTime(), j = 9999, k = c.clientX, l = c.clientY, o = r ? q - r: 0, e() && f())
  }
  function c() {
    s = (new Date).getTime(),
      j = s - q,
      e() && f()
  }
  function d(a) {
    var b = window.event || a;
    w += 1,
      m || (m = b.clientX),
      n || (n = b.clientY),
      r = (new Date).getTime()
  }
  function e() {
    i = 0;
    try {
      p = /\?url\=([^\.]+)\./.exec(t.href)
    } catch(a) {}
    if (p) {
      for (var b = 0; w * v % 99 + 9 > b; ++b) i += p[1].charCodeAt(j * b % p[1].length);
      return ! 0
    }
    return ! 1
  }
  function f() {
    var a = "&ck=" + [i, w, j, k, l, m, n, o].join(".");
    if (t.href) {
      var b = t.href; - 1 == b.indexOf("&ck=") ? t.href += a: t.href = b.replace(/&ck=[\w.]*/, a)
    }
  }
  function g(b, c) {
    for (var d, e = 0; d = b[e]; e++) window.attachEvent ? a.attachEvent("on" + d, c[e]) : window.addEventListener ? a.addEventListener(d, c[e], !1) : a["on" + d] = c[e],
        x[d] = c[e]
  }
  function h(b) {
    for (var c, d = 0; c = b[d]; d++) window.detachEvent ? a.detachEvent("on" + c, x[c]) : window.addEventListener ? a.removeEventListener(c, x[c], !1) : a["on" + c] = function() {}
  }
  var i, j, k, l, m, n, o, p, q, r, s, t, u = "EC_ZHIXIN",
      v = 0,
      w = 0;
  j = k = l = m = n = o = p = q = r = s = t = 0;
  var x = {};
  return {
    getAntiTag: function() {
      return u
    },
      setTimesign: function(a) {
        v = a
      },
      bind: function() {
        g(["mouseover", "mousedown", "mouseup"], [d, b, c])
      },
      unbind: function() {
        h(["mouseover", "mousedown", "mouseup"])
      }
  }
};
/*@cc_on(function(m,c){var z="abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video";function n(d){for(var a=-1;++a<o;)d.createElement(i[a])}function p(d,a){for(var e=-1,b=d.length,j,q=[];++e<b;){j=d[e];if((a=j.media||a)!="screen")q.push(p(j.imports,a),j.cssText)}return q.join("")}var g=c.createElement("div");g.innerHTML="<z>i</z>";if(g.childNodes.length!==1){var i=z.split("|"),o=i.length,s=RegExp("(^|\\s)("+z+")",
 * "gi"),t=RegExp("<(/*)("+z+")","gi"),u=RegExp("(^|[^\\n]*?\\s)("+z+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),r=c.createDocumentFragment(),k=c.documentElement;g=k.firstChild;var h=c.createElement("body"),l=c.createElement("style"),f;n(c);n(r);g.insertBefore(l,
 * g.firstChild);l.media="print";m.attachEvent("onbeforeprint",function(){var d=-1,a=p(c.styleSheets,"all"),e=[],b;for(f=f||c.body;(b=u.exec(a))!=null;)e.push((b[1]+b[2]+b[3]).replace(s,"$1.iepp_$2")+b[4]);for(l.styleSheet.cssText=e.join("\n");++d<o;){a=c.getElementsByTagName(i[d]);e=a.length;for(b=-1;++b<e;)if(a[b].className.indexOf("iepp_")<0)a[b].className+=" iepp_"+i[d]}r.appendChild(f);k.appendChild(h);h.className=f.className;h.innerHTML=f.innerHTML.replace(t,"<$1font")});m.attachEvent("onafterprint",
 * function(){h.innerHTML="";k.removeChild(h);k.appendChild(f);l.styleSheet.cssText=""})}})(this,document);@*/

