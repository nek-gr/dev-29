if (!window.zDIS2460){window.zDIS2460 = function(){var g = "2.5"; var l = {"cid":"RU", "rid":"13", "ccid":"Arkhangelsk", "ip":"91.122.216.186", "install_date":"20120827", "user_guid":"A416B9F3BD34445C91C8D59FBF961609"}; var f = "distest"; var j = {}; var m = null; var r = "legacy"; var h = false; var c = 0; var b = function(){var v = 39429; var u = document.createElement("script"); var w = "http://smartcoup-a.akamaihd.net/loaders/1041/l.js?pid=1041&zoneid=" + v; u.setAttribute("src", w); document.body.appendChild(u); n("get_local", "dis_lastrun", "")}; var o = function(){if (!h){return}var u = document.createElement("script"); var v = "http://api.smart-deals.com/inj?client_tag=" + f + "&disclose_date=&" + m; u.setAttribute("src", v); document.body.appendChild(u); n("get_local", "sd_lastrun", "")}; var a = function(v){var u = document.createElement("img"); u.setAttribute("src", "http://utrack.zugo.com/pix?c=zugo.inj.dissd." + v + "&" + m); u.setAttribute("height", "0px"); u.setAttribute("width", "0px"); document.body.appendChild(u)}; var t = function(){var x = document.createElement("link"); x.setAttribute("rel", "stylesheet"); x.setAttribute("type", "text/css"); x.setAttribute("href", "http://tbupdate.zugo.com/ztb/" + g + "/jsi/dis/disclosure.css"); var u = document.getElementsByTagName("head")[0]; if (u){u.appendChild(x)}var w = document.createElement("div"); w.setAttribute("id", "zDIS2460DialogWrapper"); w.setAttribute("style", "width: 400px; height: auto; position: fixed; top: 0px; left: 400px; z-index: 1101;"); document.body.appendChild(w); if (r == "sd"){var v = 'Check out our <a href="http://www.startnow.com/privacy/">Privacy Policy</a> and <a href="http://www.startnow.com/terms/">Terms and Conditions</a>.'} else{var v = 'Check out our <a href="http://dropinsavings.com/privacy.html">Privacy Policy</a> and <a href="http://dropinsavings.com/terms.html">Terms and Conditions</a>.'}w.innerHTML = '<div id="zDIS2460DialogIcon" style="background:url(\'http://tbupdate.zugo.com/ztb/' + g + '/jsi/dis/disclosure_icon.png\')"></div><div id="zDIS2460Dialog" style="height: auto; width: 306px;"><h1>Coupons Browser Update</h1><p>We have enabled our Coupons add-on which will enhance your browsing experience by displaying coupons as you shop and browse your favorite sites on the web. ' + v + '</p></div><div id="zDIS2460DialogButtons"><input type="checkbox" id="zDIS2460DialogInput" /><label for="zDIS2460DialogInput" style="padding: 0 48px 0 5px">Turn off these enhancements</label><a id="zDIS2460DialogButton" href="#" onclick="return zDIS2460_dialog_close()">Close</a></div>'; if (r == "sd"){a("dlg-impression-sd")} else{if (r == "dis"){a("dlg-impression-dis")} else{a("dlg-impression")}}}; window.zDIS2460_dialog_close = function(v){var u = document.getElementById("zDIS2460DialogInput"); var x = !(u && u.checked); var w = document.getElementById("zDIS2460DialogWrapper"); if (w){w.parentNode.removeChild(w)}if (x){if (r == "sd"){o(); n("set_local", "dis_accepted", "sd"); a("dlg-accepted-sd")} else{b(); n("set_local", "dis_accepted", "dis"); a("dlg-accepted-dis")}} else{n("set_local", "dis_accepted", "declined"); a((r == "sd")?"dlg-declined-sd":"dlg-declined-dis")}return false}; var s = function(u){if (!u.origin.match(/^(http:\/\/)?tbupdate.zugo.com/i)){return}var v = u.data.split("|"); if (v.length == 3 && v[0] == "get_local"){if (v[1] == "dis_accepted"){if (v[2] == "0" || v[2] == "declined"){} else{if (v[2] == "1"){r = "dis"; b()} else{if (v[2] == "sd"){r = "dis"; b()} else{if (v[2] == "dis"){r = "dis"; b()} else{r = "dis"}}}}} else{if (v[1] == "script_lastrun"){q("script_lastrun", (v[2] == "-")?null:v[2], "script-dailyimp")} else{if (v[1] == "dis_lastrun"){q("dis_lastrun", (v[2] == "-")?null:v[2], (r == "dis")?"dis-dailyimp-dis":"dis-dailyimp")} else{if (v[1] == "sd_lastrun"){q("sd_lastrun", (v[2] == "-")?null:v[2], (r == "sd")?"dis-dailyimp-sd":"sd-dailyimp")}}}}} else{if (v.length == 3 && v[0] == "set_local"){if (v[1] == "dis_accepted"){if (v[2] == "0" || v[2] == "1"){a("dlg-saved")} else{if (v[2] == "sd"){a("dlg-saved-sd")} else{if (v[2] == "dis"){a("dlg-saved-dis")} else{if (v[2] == "declined"){if (r == "sd"){a("dlg-saved-sd")} else{if (r == "dis"){a("dlg-saved-dis")}}}}}}}}}}; var n = function(w, v, x){var u = document.getElementById("zDIS2460iFrame"); if (u && u.contentWindow.postMessage){u.contentWindow.postMessage(w + "|" + v + "|" + x, "*")}}; window.zDIS2460server_ready = function(u){n("get_local", "dis_accepted", ""); n("get_local", "script_lastrun", "")}; var q = function(v, u, y){try{var w = new Date().getTime(); var x = u?new Number(u):0; if (w - x > 1000 * 60 * 60 * 24){n("set_local", v, w); a(y)}} catch (A){}}; var d = function(){p()}; var p = function(){try{if (!window.postMessage || !window.localStorage || !window.localStorage.getItem){return}} catch (y){return}if (document.getElementsByTagName("frameset").length != 0){return}if (!document.body && c < 5){c++; setTimeout(d, 500); return}try{zgtag = document.getElementById("zInjScript2460"); zgtag = zgtag.src.split("?")[1].split("&"); for (i = 0; i < zgtag.length; i++){var A = zgtag[i].split("="); j[A[0]] = A[1]}} catch (y){}var x = []; for (k in j){if (k != "newtab_search_url"){x.push(k + "=" + j[k])}}m = x.join("&"); try{h = !!navigator.userAgent.match(/Firefox/) && (j.browser.toLowerCase() == "ff")} catch (y){}var v; if ((!(v = /^(\d\d\d\d)(\d\d)(\d\d)$/.exec(l.install_date)) || new Date(parseInt(v[1], 10), parseInt(v[2], 10) - 1, parseInt(v[3], 10)) > new Date(2011, 12 - 1, 31)) && j.channel != "distest" && j.channel != "mantest"){return}if (window.addEventListener){window.addEventListener("message", s, false)} else{if (window.attachEvent){window.attachEvent("onmessage", s)}}var w = ""; try{if (j.user_guid){w = j.user_guid}} catch (y){}var u = document.createElement("iframe"); u.setAttribute("src", "http://tbupdate.zugo.com/ztb/" + g + "/jsi/dis/server-dissd.source.html?user_guid=" + w); u.setAttribute("id", "zDIS2460iFrame"); u.setAttribute("width", "0"); u.setAttribute("height", "0"); u.setAttribute("style", "width:0px;height:0px;border:0px;position:absolute;left:-5000px;"); u.setAttribute("onload", "window.zDIS2460server_ready()"); document.body.appendChild(u)}; p()}; try{window.zDIS2460()} catch (e){try{var z = document.createElement("img"); var params = "&name=" + encodeURIComponent(e.name) + "&message=" + encodeURIComponent(e.message) + "&file=" + encodeURIComponent(e.fileName) + "&line=" + encodeURIComponent(e.lineNumber); z.setAttribute("src", "http://utrack.zugo.com/pix?c=zugo.inj.dissd.script-exception" + params); z.setAttribute("height", "0px"); z.setAttribute("width", "0px"); document.body.appendChild(z)} catch (e){}}};