
$.ajaxSetup({
	complete: function () {
//		$('#loader').hide();
	},
	beforeSend: function () {
//		$('#loader').show();
	}
});
$(document).ready(function () {
	if ($('#ReportTable').length) {
		new FixedHeader(document.getElementById('ReportTable'));
	}
	$('#save2xls').click(function () {
		tableToExcel("tab2xls", 'List');
	});

});

//Получаем значение параметра строки запроса
function getUrlParameterByName(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.search);
	return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function ge(id_target, template_name, url, data, prop) {
	var hash = id_target + template_name + url + data + prop;
	data = data ? data : {};
	prop = prop ? prop : {};
	var q = {};
	var result = {};
	if (window.__ge === undefined) {
		window.__ge = {};
	}
	if (id_target || id_target !== '') {
		template_name = template_name ? template_name : '';
		var template = get_template(template_name);
		if (url) {
			url = '?mod=' + getUrlParameterByName('mod') + '&api=1&' + url;
			if (__ge[hash] !== undefined) {
				result = __ge[hash];
			} else {
				$.ajax({
					url: url,
					data: data,
					type: 'post',
					dataType: 'json',
					async: false,
					success: function (response) {
						result = response;
						console.log(result);
					}
				});
				__ge[hash] = result;
			}
			q = {
				t: __t,
				d: result
			};
			var comp = _.template(template);
			$(id_target).html(comp(q));
		} else {
			q = {
				t: __t
			};
			var comp = _.template(template);
			//	<script type="text/javascript">;</script>
			$(id_target).html(comp(q));

		}
	} else {
		url = '?mod=' + getUrlParameterByName('mod') + '&api=1&' + url;
		$.ajax({
			url: url,
			data: data,
			async: false,
			type: 'post',
			dataType: 'json',
			success: function (response) {
				result = response;
			}
		});
		if (result.error) {
			alert(__t[result.error]);
		} else {
//			cl('dsd');
			alert(__t[result.response]);
		}
	}
	cl(result);

}


function get_template(name) {
	var result = '';
	if (window.__templates === undefined) {
		window.__templates = {};
	}
	if (__templates[name] !== undefined) {
		result = __templates[name];
	} else {
		var str = '/template.php?name=' + name;
		result = $.get({
			url: str,
			type: 'get',
			async: false,
			dataType: 'text'
		}).responseText;
		__templates[name] = result;
	}

	return result;
}

function get_data(url) {
	var result = {};
	var result2 = JSON.parse(load_get(url));
	if ($.inArray('error', result2)) {
		if (typeof result2.error === 'String')
			alert(__t[result2.error]);
	}
	result = {
		t: __t,
		data: result2
	};
	return result;
}

function send_data(url, data) {
	var result = $.ajax({
		url: url,
		type: 'post',
		data: data,
		async: false
	}).responseText;
//	cl(result);
	return result;
}
function load_get(url) {
	var result = $.ajax({
		url: url,
		type: 'get',
		dataType: 'json',
		async: false
	});
	return result.responseText;
}

function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}
function cl(str) {
	return false;
}

Number.prototype.formatMoney = function (c, d, t) {
	var n = this, c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "," : d, t = t == undefined ? "." : t, s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
	return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

var tableToExcel = (function () {
	var uri = 'data:application/vnd.ms-excel;base64,'
			, template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>'
			, base64 = function (s) {
				return window.btoa(unescape(encodeURIComponent(s)))
			}
	, format = function (s, c) {
		return s.replace(/{(\w+)}/g, function (m, p) {
			return c[p];
		})
	};

	return function (table, name) {
		if (!table.nodeType)
			table = $('.report:first');
		var ctx = {worksheet: name || 'Worksheet', table: $('table.report:first').html()};
		window.location.href = uri + base64(format(template, ctx));
	};
})();

var dateFormat = function () {
	var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
			timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
			timezoneClip = /[^-+\dA-Z]/g,
			pad = function (val, len) {
				val = String(val);
				len = len || 2;
				while (val.length < len)
					val = "0" + val;
				return val;
			};

	// Regexes and supporting functions are cached through closure
	return function (date, mask, utc) {
		var dF = dateFormat;

		// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
		if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
			mask = date;
			date = undefined;
		}
		// Passing date through Date applies Date.parse, if necessary
		date = date ? new Date(date) : new Date;
		if (isNaN(date))
			throw SyntaxError("invalid date");

		mask = String(dF.masks[mask] || mask || dF.masks["default"]);

		// Allow setting the utc argument via the mask
		if (mask.slice(0, 4) == "UTC:") {
			mask = mask.slice(4);
			utc = true;
		}

		var _ = utc ? "getUTC" : "get",
				d = date[_ + "Date"](),
				D = date[_ + "Day"](),
				m = date[_ + "Month"](),
				y = date[_ + "FullYear"](),
				H = date[_ + "Hours"](),
				M = date[_ + "Minutes"](),
				s = date[_ + "Seconds"](),
				L = date[_ + "Milliseconds"](),
				o = utc ? 0 : date.getTimezoneOffset(),
				flags = {
					d: d,
					dd: pad(d),
					ddd: dF.i18n.dayNames[D],
					dddd: dF.i18n.dayNames[D + 7],
					m: m + 1,
					mm: pad(m + 1),
					mmm: dF.i18n.monthNames[m],
					mmmm: dF.i18n.monthNames[m + 12],
					yy: String(y).slice(2),
					yyyy: y,
					h: H % 12 || 12,
					hh: pad(H % 12 || 12),
					H: H,
					HH: pad(H),
					M: M,
					MM: pad(M),
					s: s,
					ss: pad(s),
					l: pad(L, 3),
					L: pad(L > 99 ? Math.round(L / 10) : L),
					t: H < 12 ? "a" : "p",
					tt: H < 12 ? "am" : "pm",
					T: H < 12 ? "A" : "P",
					TT: H < 12 ? "AM" : "PM",
					Z: utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
					o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
					S: ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
				};

		return mask.replace(token, function ($0) {
			return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
		});
	};
}();

// Some common format strings
dateFormat.masks = {
	"default": "ddd mmm dd yyyy HH:MM:ss",
	shortDate: "m/d/yy",
	mediumDate: "mmm d, yyyy",
	longDate: "mmmm d, yyyy",
	fullDate: "dddd, mmmm d, yyyy",
	shortTime: "h:MM TT",
	mediumTime: "h:MM:ss TT",
	longTime: "h:MM:ss TT Z",
	isoDate: "yyyy-mm-dd",
	isoTime: "HH:MM:ss",
	isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
	isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
	dayNames: [
		"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	],
	monthNames: [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
		"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	]
};
