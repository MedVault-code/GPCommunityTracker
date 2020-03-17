function $d(e) {
    return document.getElementById(e)
}
var addeventatc = function() {
    var v, m, l, t, e = !1,
        s = 1,
        r = !1,
        p = !0,
        u = !1,
        f = !1,
        g = !1,
        E = 1,
        h = "",
        w = !0,
        x = !0,
        b = !0,
        k = !0,
        y = !0,
        _ = !0,
        T = !0,
        N = "Apple",
        z = "Google <em>(online)</em>",
        I = "Office 365 <em>(online)</em>",
        C = "Outlook",
        $ = "Outlook.com <em>(online)</em>",
        A = "Yahoo <em>(online)</em>",
        L = "Facebook Event",
        S = null,
        H = null,
        a = null,
        R = null,
        M = null,
        O = null;
    return {
        initialize: function() {
            if (!e) {
                e = !0;
                try {
                    addeventasync()
                } catch (e) {}
                addeventatc.trycss(), addeventatc.generate()
            }
        },
        generate: function() {
            for (var c = document.getElementsByTagName("*"), i = 0; i < c.length; i += 1) addeventatc.hasclass(c[i], "addeventatc") && function() {
                var a = "addeventatc" + s;
                c[i].id = a, addeventatc.hasclass(c[i], "keeptitle") || (c[i].title = ""), c[i].style.visibility = "visible", c[i].setAttribute("aria-haspopup", "true"), c[i].setAttribute("aria-expanded", "false"), c[i].setAttribute("tabindex", "0"), c[i].setAttribute("translate", "no"), c[i].setAttribute("data-loaded", "true"), r ? (c[i].onclick = function() {
                    return !1
                }, c[i].onmouseover = function() {
                    clearTimeout(l), addeventatc.toogle(this, {
                        type: "mouseover",
                        id: a
                    })
                }, c[i].onmouseout = function() {
                    l = setTimeout(function() {
                        addeventatc.mouseout(this, {
                            type: "mouseout",
                            id: a
                        })
                    }, 100)
                }) : (c[i].onclick = function() {
                    return addeventatc.toogle(this, {
                        type: "click",
                        id: a
                    }), !1
                }, c[i].onmouseover = function() {}, c[i].onmouseout = function() {}), c[i].onkeydown = function(e) {
                    var t = e.which || e.keyCode;
                    "13" != t && "32" != t && "27" != t && "38" != t && "40" != t || e.preventDefault(), "13" != t && "32" != t || (addeventatc.keyboardclick(this, {
                        type: "click",
                        id: a
                    }), addeventatc.toogle(this, {
                        type: "click",
                        id: a,
                        keynav: !0
                    })), "27" == t && addeventatc.hideandreset(), "9" == t && addeventatc.hideandreset(), "38" == t && addeventatc.keyboard(this, {
                        type: "keyboard",
                        id: a,
                        key: "up"
                    }), "40" == t && addeventatc.keyboard(this, {
                        type: "keyboard",
                        id: a,
                        key: "down"
                    }), !0
                }, c[i].onblur = function() {};
                var e = c[i];
                if ("none" != c[i].getAttribute("data-styling") && "inline-buttons" != c[i].getAttribute("data-render") || (p = !1), p) {
                    var t = document.createElement("span");
                    t.className = "addeventatc_icon", e.appendChild(t)
                }
                s++, u = !0;
                for (var n = c[i].getElementsByTagName("*"), o = 0; o < n.length; o += 1) addeventatc.hasclass(n[o], "atc_node") || ("" != n[o].className ? n[o].className += " atc_node notranslate" : n[o].className += "atc_node");
                if ("inline-buttons" == c[i].getAttribute("data-render")) {
                    c[i].onclick = function() {}, addeventatc.toogle(c[i], {
                        type: "render",
                        id: a
                    }), c[i].setAttribute("aria-expanded", "true"), c[i].removeAttribute("tabindex"), c[i].onkeydown = function() {}, c[i].blur = function() {};
                    var d = document.getElementById(a + "-drop");
                    if (d) {
                        d.setAttribute("aria-hidden", "false");
                        for (n = d.getElementsByTagName("SPAN"), o = 0; o < n.length; o += 1) {
                            n[o];
                            n[o].tabIndex = "0", n[o].onkeydown = function(e) {
                                var t = e.which || e.keyCode;
                                "13" != t && "32" != t || e.target.click()
                            }
                        }
                    }
                }
            }();
            p ? addeventatc.applycss() : (addeventatc.removeelement($d("ate_css")), addeventatc.removeelement($d("ate_tmp_css")), addeventatc.helpercss()), u && !f && (f = !0, addeventatc.track({
                typ: "exposure",
                cal: ""
            }))
        },
        toogle: function(e, t) {
            var a, n, o, d = !1,
                c = "",
                i = !1;
            if (n = $d(a = e.id)) {
                o = n.getAttribute("data-direct");
                var l = n.getAttribute("data-intel"),
                    s = n.getAttribute("data-intel-apple");
                "ios" == addeventatc.agent() && "click" == t.type && "true" !== s && "false" !== l && (o = "appleical", n.setAttribute("data-intel-apple", "true"));
                try {
                    "" != $d(a).querySelector(".recurring").innerHTML && (i = !0)
                } catch (e) {}
                if ("outlook" == o || "google" == o || "yahoo" == o || "hotmail" == o || "outlookcom" == o || "appleical" == o || "apple" == o || "facebook" == o) "click" == t.type && (addeventatc.click({
                    button: a,
                    service: o,
                    id: t.id
                }), null != S && addeventatc.trigger("button_click", {
                    id: a
                }));
                else if ("mouseover" == t.type && m != n && (g = !1), "click" == t.type || "render" == t.type || "mouseover" == t.type && !g) {
                    "mouseover" == t.type && (g = !0, null != H && addeventatc.trigger("button_mouseover", {
                        id: a
                    })), d = addeventatc.getburl({
                        id: a,
                        facebook: !0
                    }), "" == h && (h = "appleical,google,office365,outlook,outlookcom,yahoo,facebook");
                    for (var r = (h = (h += ",").replace(/ /gi, "")).split(","), p = 0; p < r.length; p += 1)(w && "ical" == r[p] || w && "appleical" == r[p]) && (c += '<span class="ateappleical" id="' + a + '-appleical" role="menuitem" tabindex="-1">' + N + "</span>"), x && "google" == r[p] && (c += '<span class="ategoogle" id="' + a + '-google" role="menuitem" tabindex="-1">' + z + "</span>"), b && "office365" == r[p] && (c += '<span class="ateoffice365" id="' + a + '-office365" role="menuitem" tabindex="-1">' + I + "</span>"), k && "outlook" == r[p] && (c += '<span class="ateoutlook" id="' + a + '-outlook" role="menuitem" tabindex="-1">' + C + "</span>"), (y && "hotmail" == r[p] || y && "outlookcom" == r[p]) && (c += '<span class="ateoutlookcom" id="' + a + '-outlookcom" role="menuitem" tabindex="-1">' + $ + "</span>"), _ && "yahoo" == r[p] && !i && (c += '<span class="ateyahoo" id="' + a + '-yahoo" role="menuitem" tabindex="-1">' + A + "</span>"), d && "facebook" == r[p] && T && "facebook" == r[p] && (c += '<span class="atefacebook" id="' + a + '-facebook" role="menuitem" tabindex="-1">' + L + "</span>");
                    if (addeventatc.getlicense(v) || (c += ''), !$d(a + "-drop")) {
                        var u = document.createElement("span");
                        u.id = a + "-drop", u.className = "addeventatc_dropdown", u.setAttribute("aria-hidden", "true"), u.setAttribute("aria-labelledby", a), u.innerHTML = c, n.appendChild(u)
                    }
                    $d(a + "-appleical") && ($d(a + "-appleical").onclick = function() {
                        addeventatc.click({
                            button: a,
                            service: "appleical",
                            id: t.id
                        })
                    }), $d(a + "-google") && ($d(a + "-google").onclick = function() {
                        addeventatc.click({
                            button: a,
                            service: "google",
                            id: t.id
                        })
                    }), $d(a + "-office365") && ($d(a + "-office365").onclick = function() {
                        addeventatc.click({
                            button: a,
                            service: "office365",
                            id: t.id
                        })
                    }), $d(a + "-outlook") && ($d(a + "-outlook").onclick = function() {
                        addeventatc.click({
                            button: a,
                            service: "outlook",
                            id: t.id
                        })
                    }), $d(a + "-outlookcom") && ($d(a + "-outlookcom").onclick = function() {
                        addeventatc.click({
                            button: a,
                            service: "outlookcom",
                            id: t.id
                        })
                    }), $d(a + "-yahoo") && ($d(a + "-yahoo").onclick = function() {
                        addeventatc.click({
                            button: a,
                            service: "yahoo",
                            id: t.id
                        })
                    }), $d(a + "-facebook") && ($d(a + "-facebook").onclick = function() {
                        addeventatc.click({
                            button: a,
                            service: "facebook",
                            id: t.id
                        })
                    }), $d(a + "-home") && ($d(a + "-home").onclick = function() {
                        addeventatc.click({
                            button: a,
                            service: "home",
                            id: t.id
                        })
                    }), addeventatc.show(a, t)
                }
                return m = n, !1
            }
        },
        click: function(e) {
            var t, a, n, o = !0,
                d = window.location.href;
            if (t = $d(e.button)) {
                if ("home" == e.service) n = "https://www.addevent.com";
                else {
                    a = addeventatc.getburl({
                        id: e.button,
                        facebook: !1
                    }), n = "https://www.addevent.com/create/?service=" + e.service + a + "&reference=" + "http://localhost:5000", "outlook" != e.service && "appleical" != e.service || (o = !1, addeventatc.usewebcal() && (n = "webcal://www.addevent.com/create/?uwc=on&service=" + e.service + a + "&reference=" + "http://localhost:5000"));
                    var c = t.getAttribute("data-id");
                    null !== c && (n = "https://www.addevent.com/event/" + c + "+" + e.service)
                }
                if (!$d("atecllink")) {
                    var i = document.createElement("a");
                    i.id = "atecllink", i.rel = "external", i.setAttribute("data-role", "none"), i.innerHTML = "{addeventatc-ghost-link}", i.style.display = "none", document.body.appendChild(i)
                }
                var l = $d("atecllink");
                if (l.target = o ? "_blank" : "_self", l.href = n, addeventatc.eclick("atecllink"), addeventatc.track({
                        typ: "click",
                        cal: e.service
                    }), null != O) {
                    addeventatc.trigger("button_dropdown_click", {
                        id: e.button,
                        service: e.service
                    });
                    try {
                        (event || window.event).stopPropagation()
                    } catch (e) {}
                }
            }
        },
        mouseout: function(e, t) {
            g = !1, addeventatc.hideandreset(), null != a && addeventatc.trigger("button_mouseout", {
                id: t.id
            })
        },
        show: function(e, t) {
            var a = $d(e),
                n = $d(e + "-drop");
            if (a && n)
                if ("block" == addeventatc.getstyle(n, "display")) addeventatc.hideandreset();
                else {
                    addeventatc.hideandreset(!0), n.style.display = "block", a.style.outline = "0", E = addeventatc.topzindex(), a.style.zIndex = E + 1, a.className = a.className.replace(/\s+/g, " "), a.setAttribute("aria-expanded", "true"), n.setAttribute("aria-hidden", "false"), t.keynav && addeventatc.keyboard(this, {
                        type: "keyboard",
                        id: e,
                        key: "down"
                    });
                    var o = a.getAttribute("data-dropdown-x"),
                        d = a.getAttribute("data-dropdown-y"),
                        c = "auto",
                        i = "auto";
                    null != o && (i = o), null != d && (c = d), n.style.left = "0px", n.style.top = "0px", n.style.display = "block";
                    var l = parseInt(a.offsetHeight),
                        s = parseInt(a.offsetWidth),
                        r = parseInt(n.offsetHeight),
                        p = parseInt(n.offsetWidth),
                        u = addeventatc.viewport(),
                        v = parseInt(u.w),
                        m = parseInt(u.h),
                        f = parseInt(u.x),
                        g = parseInt(u.y),
                        h = addeventatc.elementposition(n),
                        w = parseInt(h.x),
                        x = (parseInt(h.y), addeventatc.elementposition(a)),
                        b = (x.x, w + p),
                        k = v + f,
                        y = 0,
                        _ = 0,
                        T = "",
                        N = x.y - (r / 2 - l);
                    "down" == c && "left" == i ? (_ = y = "-2px", T = "topdown") : "up" == c && "left" == i ? (y = "0px", _ = -(r - l - 2) + "px") : "down" == c && "right" == i ? (y = -(p - s - 2) + "px", _ = "-2px", T = "topdown") : "up" == c && "right" == i ? (y = -(p - s - 2) + "px", _ = -(r - l - 2) + "px") : "auto" == c && "left" == i ? (y = "0px", N < g ? (_ = "-2px", T = "topdown") : _ = g + m < N + r ? -(r - l - 2) + "px" : -(r / 2 - l) + "px") : "auto" == c && "right" == i ? (y = -(p - s - 2) + "px", N < g ? (_ = "-2px", T = "topdown") : _ = g + m < N + r ? -(r - l - 2) + "px" : -(r / 2 - l) + "px") : "down" == c && "auto" == i ? (y = k < b ? -(p - s - 2) + "px" : "-2px", _ = "-2px", T = "topdown") : "up" == c && "auto" == i ? (y = k < b ? -(p - s - 2) + "px" : "-2px", _ = -(r - l - 2) + "px") : (N < g ? (_ = "-2px", T = "topdown") : _ = g + m < N + r ? -(r - l - 2) + "px" : -(r / 2 - l) + "px", y = k < b ? -(p - s - 2) + "px" : "-2px"), n.style.left = y, n.style.top = _, "" != T && (n.className = n.className + " " + T), setTimeout(function() {
                        n.className = n.className + " addeventatc-selected"
                    }, 1), "click" == t.type && null != S && addeventatc.trigger("button_click", {
                        id: e
                    }), null != R && addeventatc.trigger("button_dropdown_show", {
                        id: e
                    })
                }
        },
        hide: function(e) {
            var t = !1;
            ("string" == typeof e && "" !== e || e instanceof String && "" !== e) && (-1 < e.indexOf("addeventatc") || -1 < e.indexOf("atc_node")) && (t = !0), t || addeventatc.hideandreset()
        },
        hideandreset: function(e) {
            for (var t = "", a = document.getElementsByTagName("*"), n = 0; n < a.length; n += 1)
                if (addeventatc.hasclass(a[n], "addeventatc")) {
                    a[n].className = a[n].className.replace(/addeventatc-selected/gi, ""), a[n].className = a[n].className.replace(/\s+$/, ""), a[n].style.outline = "";
                    var o = $d(a[n].id + "-drop");
                    if (o) {
                        var d = addeventatc.getstyle(o, "display");
                        "block" == d && (t = a[n].id), o.style.display = "none", "block" !== (d = addeventatc.getstyle(o, "display")) && (a[n].setAttribute("aria-expanded", "false"), o.setAttribute("aria-hidden", "true"), o.className = o.className.replace(/addeventatc-selected/gi, ""), o.className = o.className.replace(/topdown/gi, ""), o.removeAttribute("style"));
                        for (var c = o.getElementsByTagName("SPAN"), i = 0; i < c.length; i += 1) {
                            var l = new RegExp("(\\s|^)drop_markup(\\s|$)");
                            c[i].className = c[i].className.replace(l, " "), c[i].className = c[i].className.replace(/\s+$/, ""), c[i].tabIndex = "-1"
                        }
                    }
                } e || null != M && addeventatc.trigger("button_dropdown_hide", {
                id: t
            })
        },
        getburl: function(e) {
            var t = $d(e.id),
                a = "",
                n = !1;
            if (t) {
                for (var o = t.getElementsByTagName("*"), d = 0; d < o.length; d += 1)(addeventatc.hasclass(o[d], "_start") || addeventatc.hasclass(o[d], "start")) && (a += "&dstart=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_end") || addeventatc.hasclass(o[d], "end")) && (a += "&dend=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_zonecode") || addeventatc.hasclass(o[d], "zonecode")) && (a += "&dzone=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_timezone") || addeventatc.hasclass(o[d], "timezone")) && (a += "&dtime=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_summary") || addeventatc.hasclass(o[d], "summary") || addeventatc.hasclass(o[d], "title")) && (a += "&dsum=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_description") || addeventatc.hasclass(o[d], "description")) && (a += "&ddesc=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_location") || addeventatc.hasclass(o[d], "location")) && (a += "&dloca=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_organizer") || addeventatc.hasclass(o[d], "organizer")) && (a += "&dorga=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_organizer_email") || addeventatc.hasclass(o[d], "organizer_email")) && (a += "&dorgaem=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_attendees") || addeventatc.hasclass(o[d], "attendees")) && (a += "&datte=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_all_day_event") || addeventatc.hasclass(o[d], "all_day_event")) && (a += "&dallday=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_date_format") || addeventatc.hasclass(o[d], "date_format")) && (a += "&dateformat=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_alarm_reminder") || addeventatc.hasclass(o[d], "alarm_reminder")) && (a += "&alarm=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_recurring") || addeventatc.hasclass(o[d], "recurring")) && (a += "&drule=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_facebook_event") || addeventatc.hasclass(o[d], "facebook_event")) && (a += "&fbevent=" + encodeURIComponent(o[d].innerHTML), n = !0), (addeventatc.hasclass(o[d], "_client") || addeventatc.hasclass(o[d], "client")) && (a += "&client=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_calname") || addeventatc.hasclass(o[d], "calname")) && (a += "&calname=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_uid") || addeventatc.hasclass(o[d], "uid")) && (a += "&uid=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_sequence") || addeventatc.hasclass(o[d], "sequence")) && (a += "&seq=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_status") || addeventatc.hasclass(o[d], "status")) && (a += "&status=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_method") || addeventatc.hasclass(o[d], "method")) && (a += "&method=" + encodeURIComponent(o[d].innerHTML)), (addeventatc.hasclass(o[d], "_transp") || addeventatc.hasclass(o[d], "transp")) && (a += "&transp=" + encodeURIComponent(o[d].innerHTML));
                "true" == t.getAttribute("data-google-api") && (a += "&gapi=true"), "true" == t.getAttribute("data-outlook-api") && (a += "&oapi=true")
            }
            return e.facebook && (a = n), a
        },
        trycss: function() {
            if (!$d("ate_tmp_css")) {
                try {
                    var e = "";
                    e = ".addeventatc {visibility:hidden;}", e += ".addeventatc .data {display:none!important;}", e += ".addeventatc .start, .addeventatc .end, .addeventatc .timezone, .addeventatc .title, .addeventatc .description, .addeventatc .location, .addeventatc .organizer, .addeventatc .organizer_email, .addeventatc .facebook_event, .addeventatc .all_day_event, .addeventatc .date_format, .addeventatc .alarm_reminder, .addeventatc .recurring, .addeventatc .attendees, .addeventatc .client, .addeventatc .calname, .addeventatc .uid, .addeventatc .sequence, .addeventatc .status, .addeventatc .method, .addeventatc .transp {display:none!important;}", p && (e += ".addeventatc {background-image:url(https://www.addevent.com/gfx/icon-calendar-t5.png), url(https://www.addevent.com/gfx/icon-calendar-t1.svg), url(https://www.addevent.com/gfx/icon-apple-t5.svg), url(https://www.addevent.com/gfx/icon-facebook-t5.svg), url(https://www.addevent.com/gfx/icon-google-t5.svg), url(https://www.addevent.com/gfx/icon-office365-t5.svg), url(https://www.addevent.com/gfx/icon-outlook-t5.svg),  url(https://www.addevent.com/gfx/icon-outlookcom-t5.svg), url(https://www.addevent.com/gfx/icon-yahoo-t5.svg);background-position:-9999px -9999px;background-repeat:no-repeat;}");
                    var t = document.createElement("style");
                    t.type = "text/css", t.id = "ate_tmp_css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.getElementsByTagName("head")[0].appendChild(t)
                } catch (e) {}
                addeventatc.track({
                    typ: "jsinit",
                    cal: ""
                })
            }
        },
        applycss: function() {
            if ($d("ate_css") && !$d("ate_css_plv") && ($d("ate_css").id = $d("ate_css").id.replace(/ate_css/gi, "ate_css_plv")), !$d("ate_css")) {
                var e = "";
                var t = document.createElement("style");
                t.type = "text/css", t.id = "ate_css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.getElementsByTagName("head")[0].appendChild(t), addeventatc.removeelement($d("ate_tmp_css"))
            }
        },
        helpercss: function() {
            if (!$d("ate_helper_css")) {
                var e = "";
                e += ".addeventatc_dropdown .drop_markup {background-color:#f4f4f4;}", e += ".addeventatc_dropdown .frs a {margin:0!important;padding:0!important;font-style:normal!important;font-weight:normal!important;line-height:110%!important;;text-decoration:none;font-size:9px!important;color:#cacaca!important;display:inline-block;}", e += ".addeventatc_dropdown .frs a:hover {color:#999!important;}", e += ".addeventatc .start, .addeventatc .end, .addeventatc .timezone, .addeventatc .title, .addeventatc .description, .addeventatc .location, .addeventatc .organizer, .addeventatc .organizer_email, .addeventatc .facebook_event, .addeventatc .all_day_event, .addeventatc .date_format, .addeventatc .alarm_reminder, .addeventatc .recurring, .addeventatc .attendees, .addeventatc .client, .addeventatc .calname, .addeventatc .uid, .addeventatc .sequence, .addeventatc .status, .addeventatc .method, .addeventatc .transp {display:none!important;}";
                var t = document.createElement("style");
                t.type = "text/css", t.id = "ate_helper_css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.getElementsByTagName("head")[0].appendChild(t)
            }
        },
        removeelement: function(e) {
            try {
                return !!(hdx = e) && hdx.parentNode.removeChild(hdx)
            } catch (e) {}
        },
        topzindex: function() {
            for (var e = 1, t = document.getElementsByTagName("*"), a = 0; a < t.length; a += 1)
                if (addeventatc.hasclass(t[a], "addeventatc") || addeventatc.hasclass(t[a], "addeventstc")) {
                    var n = addeventatc.getstyle(t[a], "z-index");
                    !isNaN(parseFloat(n)) && isFinite(n) && e < (n = parseInt(n)) && (e = n)
                } return e
        },
        viewport: function() {
            var e = 0,
                t = 0,
                a = 0,
                n = 0;
            return "number" == typeof window.innerWidth ? (e = window.innerWidth, t = window.innerHeight) : document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight) ? (e = document.documentElement.clientWidth, t = document.documentElement.clientHeight) : document.body && (document.body.clientWidth || document.body.clientHeight) && (e = document.body.clientWidth, t = document.body.clientHeight), a = document.all ? (n = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft, document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) : (n = window.pageXOffset, window.pageYOffset), {
                w: e,
                h: t,
                x: n,
                y: a
            }
        },
        elementposition: function(e) {
            var t = 0,
                a = 0;
            if (e.offsetParent)
                for (t = e.offsetLeft, a = e.offsetTop; e = e.offsetParent;) t += e.offsetLeft, a += e.offsetTop;
            return {
                x: t,
                y: a
            }
        },
        getstyle: function(e, t) {
            var a;
            return e.currentStyle ? a = e.currentStyle[t] : window.getComputedStyle && (a = document.defaultView.getComputedStyle(e, null).getPropertyValue(t)), a
        },
        getlicense: function(e) {
            var t = location.origin,
                a = !1;
            if (void 0 === location.origin && (t = location.protocol + "//" + location.host), e) {
                var n = e.substring(0, 1),
                    o = e.substring(9, 10),
                    d = e.substring(17, 18);
                "a" == n && "z" == o && "m" == d && (a = !0)
            }
            return (-1 == t.indexOf("addevent.com") && "aao8iuet5zp9iqw5sm9z" == e || -1 == t.indexOf("addevent.to") && "aao8iuet5zp9iqw5sm9z" == e || -1 == t.indexOf("addevent.com") && "aao8iuet5zp9iqw5sm9z" == e) && (a = !0), a
        },
        refresh: function() {
            for (var e = document.getElementsByTagName("*"), t = [], a = 0; a < e.length; a += 1)
                if (addeventatc.hasclass(e[a], "addeventatc")) {
                    e[a].className = e[a].className.replace(/addeventatc-selected/gi, ""), e[a].id = "";
                    for (var n = e[a].getElementsByTagName("*"), o = 0; o < n.length; o += 1)(addeventatc.hasclass(n[o], "addeventatc_icon") || addeventatc.hasclass(n[o], "addeventatc_dropdown")) && t.push(n[o])
                } for (var d = 0; d < t.length; d += 1) addeventatc.removeelement(t[d]);
            addeventatc.removeelement($d("ate_css")), f = !(s = 1), addeventatc.generate()
        },
        hasclass: function(e, t) {
            return new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className)
        },
        eclick: function(e) {
            var t = document.getElementById(e);
            if (t.click) t.click();
            else if (document.createEvent) {
                var a = document.createEvent("MouseEvents");
                a.initEvent("click", !0, !0), t.dispatchEvent(a)
            }
        },
        track: function(e) {
            new Image, (new Date).getTime(), encodeURIComponent(window.location.origin)
        },
        getguid: function() {
            for (var e = "addevent_track_cookie=", t = "", a = document.cookie.split(";"), n = 0; n < a.length; n++) {
                for (var o = a[n];
                    " " == o.charAt(0);) o = o.substring(1, o.length);
                0 == o.indexOf(e) && (t = o.substring(e.length, o.length))
            }
            if ("" == t) {
                var d = (addeventatc.s4() + addeventatc.s4() + "-" + addeventatc.s4() + "-4" + addeventatc.s4().substr(0, 3) + "-" + addeventatc.s4() + "-" + addeventatc.s4() + addeventatc.s4() + addeventatc.s4()).toLowerCase(),
                    c = new Date;
                c.setTime(c.getTime() + 31536e6);
                var i = "expires=" + c.toUTCString();
                document.cookie = "addevent_track_cookie=" + d + "; " + i, t = d
            }
            return t
        },
        s4: function() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
        },
        documentclick: function(e) {
            e = (e = e || window.event).target || e.srcElement, ate_touch_capable ? (clearTimeout(t), t = setTimeout(function() {
                addeventatc.hide(e.className)
            }, 200)) : addeventatc.hide(e.className)
        },
        trigger: function(e, t) {
            if ("button_click" == e) try {
                S(t)
            } catch (e) {}
            if ("button_mouseover" == e) try {
                H(t)
            } catch (e) {}
            if ("button_mouseout" == e) try {
                a(t)
            } catch (e) {}
            if ("button_dropdown_show" == e) try {
                R(t)
            } catch (e) {}
            if ("button_dropdown_hide" == e) try {
                M(t)
            } catch (e) {}
            if ("button_dropdown_click" == e) try {
                O(t)
            } catch (e) {}
        },
        register: function(e, t) {
            "button-click" == e && (S = t), "button-mouseover" == e && (H = t), "button-mouseout" == e && (a = t), "button-dropdown-show" == e && (R = t), "button-dropdown-hide" == e && (M = t), "button-dropdown-click" == e && (O = t)
        },
        settings: function(e) {
            null != e.license && (v = e.license), null != e.css && (e.css ? p = !0 : (p = !1, addeventatc.removeelement($d("ate_css")))), null != e.mouse && (r = e.mouse), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (r = !1), null != e.outlook && null != e.outlook.show && (k = e.outlook.show), null != e.google && null != e.google.show && (x = e.google.show), null != e.office365 && null != e.office365.show && (b = e.office365.show), null != e.yahoo && null != e.yahoo.show && (_ = e.yahoo.show), null != e.hotmail && null != e.hotmail.show && (y = e.hotmail.show), null != e.outlookcom && null != e.outlookcom.show && (y = e.outlookcom.show), null != e.ical && null != e.ical.show && (w = e.ical.show), null != e.appleical && null != e.appleical.show && (w = e.appleical.show), null != e.facebook && null != e.facebook.show && (T = e.facebook.show), null != e.outlook && null != e.outlook.text && (C = e.outlook.text), null != e.google && null != e.google.text && (z = e.google.text), null != e.office365 && null != e.office365.text && (I = e.office365.text), null != e.yahoo && null != e.yahoo.text && (A = e.yahoo.text), null != e.hotmail && null != e.hotmail.text && ($ = e.hotmail.text), null != e.outlookcom && null != e.outlookcom.text && ($ = e.outlookcom.text), null != e.ical && null != e.ical.text && (N = e.ical.text), null != e.appleical && null != e.appleical.text && (N = e.appleical.text), null != e.facebook && null != e.facebook.text && (L = e.facebook.text), null != e.dropdown && null != e.dropdown.order && (h = e.dropdown.order)
        },
        keyboard: function(e, t) {
            var a = document.getElementById(t.id + "-drop");
            if (a && "block" == addeventatc.getstyle(a, "display")) {
                for (var n = a.getElementsByTagName("SPAN"), o = null, d = 0, c = 0, i = 0; i < n.length; i += 1) d++, addeventatc.hasclass(n[i], "drop_markup") && (o = n[i], c = d);
                null === o ? c = 1 : "down" == t.key ? d <= c ? c = 1 : c++ : 1 == c ? c = d : c--;
                for (i = d = 0; i < n.length; i += 1)
                    if (++d == c) {
                        n[i].className += " drop_markup", n[i].tabIndex = "0", n[i].focus()
                    } else {
                        var l = new RegExp("(\\s|^)drop_markup(\\s|$)");
                        n[i].className = n[i].className.replace(l, " "), n[i].className = n[i].className.replace(/\s+$/, ""), n[i].tabIndex = "-1"
                    }
            }
        },
        keyboardclick: function(e, t) {
            var a = document.getElementById(t.id + "-drop");
            if (a) {
                for (var n = a.getElementsByTagName("SPAN"), o = null, d = 0; d < n.length; d += 1) addeventatc.hasclass(n[d], "drop_markup") && (o = n[d]);
                if (null !== o) {
                    o.click();
                    for (d = 0; d < n.length; d += 1) {
                        var c = new RegExp("(\\s|^)drop_markup(\\s|$)");
                        n[d].className = n[d].className.replace(c, " "), n[d].className = n[d].className.replace(/\s+$/, "")
                    }
                }
            }
        },
        usewebcal: function() {
            var e = !1,
                t = !1,
                a = window.navigator.userAgent.toLowerCase();
            navigator.userAgent.match(/CriOS|FxiOS|OPiOS|mercury|gsa/i) && (t = !0);
            var n = /iphone|ipod|ipad/.test(a);
            (-1 < a.indexOf("fban") || -1 < a.indexOf("fbav") && n) && (t = !0);
            var o = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            return (n && o || n && t) && (alert('If the event fails to load please \n"Open the page in Safari".'), e = !0), e
        },
        agent: function() {
            var e = navigator.userAgent || navigator.vendor || window.opera;
            return /windows phone/i.test(e) ? "windows_phone" : /android/i.test(e) ? "android" : /iPad|iPhone|iPod/.test(e) && !window.MSStream ? "ios" : "unknown"
        },
        isloaded: function() {
            return !!e
        },
        notloadedcnt: function() {
            for (var e = document.getElementsByClassName("addeventatc"), t = 0, a = 0; a < e.length; a += 1) "true" == e[a].getAttribute("data-loaded") && t++;
            e.length > t && addeventatc.refresh()
        }
    }
}();
! function(e, t) {
    "use strict";
    e = e || "docReady", t = t || window;
    var a = [],
        n = !1,
        o = !1;

    function d() {
        if (!n) {
            n = !0;
            for (var e = 0; e < a.length; e++) a[e].fn.call(window, a[e].ctx);
            a = []
        }
    }

    function c() {
        "complete" === document.readyState && d()
    }
    t[e] = function(e, t) {
        if ("function" != typeof e) throw new TypeError("callback for docReady(fn) must be a function");
        n ? setTimeout(function() {
            e(t)
        }, 1) : (a.push({
            fn: e,
            ctx: t
        }), "complete" === document.readyState || !document.attachEvent && "interactive" === document.readyState ? setTimeout(d, 1) : o || (document.addEventListener ? (document.addEventListener("DOMContentLoaded", d, !1), window.addEventListener("load", d, !1)) : (document.attachEvent("onreadystatechange", c), window.attachEvent("onload", d)), o = !0))
    }
}("addeventReady", window);
var ate_touch_capable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch || 0 < navigator.maxTouchPoints || 0 < window.navigator.msMaxTouchPoints;
window.addEventListener ? (document.addEventListener("click", addeventatc.documentclick, !1), ate_touch_capable && document.addEventListener("touchend", addeventatc.documentclick, !1)) : window.attachEvent ? (document.attachEvent("onclick", addeventatc.documentclick), ate_touch_capable && document.attachEvent("ontouchend", addeventatc.documentclick)) : document.onclick = function() {
    addeventatc.documentclick(event)
}, addeventReady(function() {
    addeventatc.initialize()
});
var flbckcnt = 0,
    flbckint = setInterval(function() {
        15 <= ++flbckcnt || addeventatc.isloaded() ? clearInterval(flbckint) : addeventatc.initialize()
    }, 300),
    nlbckcnt = 0,
    nlbckint = setInterval(function() {
        15 <= ++nlbckcnt ? clearInterval(nlbckint) : addeventatc.notloadedcnt()
    }, 300);