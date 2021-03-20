$(document).ready(function () {
	$.ajax({
		type: "POST",
		url: "?mod=contacts&api=1",
		data: "id=cont",
		async: false,
		success: function (data) {
			$("#bgk").html(data);
		}
	});
	$('#bgk').css('display', 'none');
	$("#bgk").show(600);
	$.ajax({
		type: "POST",
		url: "?mod=contacts&api=1",
		data: "id=off",
		async: false,
		success: function (data) {
			$("#content").html(data);
		}
	});
	$('#content').css('display', 'none');
	$("#content").delay(600).fadeIn(600);
});