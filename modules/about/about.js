$(document).ready(function () {
	$("#who").click(function ()
	{
		if ($("#who").attr("class") == "disabled")
		{
			$("#who").removeClass();
			$("#what").toggleClass("disabled");
			$.ajax({
				type: "POST",
				url: "?mod=about&api=1",
				data: "id=who",
				async: false,
				success: function (data) {
					$("#content").html(data);
				}
			});
			$('#content').css('display', 'none');
			$("#content").fadeIn(600);
		}
	});
	$("#what").click(function ()
	{
		if ($("#what").attr("class") == "disabled")
		{
			$("#what").removeClass();
			$("#who").toggleClass("disabled");
			$.ajax({
				type: "POST",
				url: "?mod=about&api=1",
				data: "id=what",
				async: false,
				success: function (data) {
					$("#content").html(data);
				}
			});
			$('#content').css('display', 'none');
			$("#content").fadeIn(600);
		}
	});
//		if (button.indexOf(this.id) > -1) {
//			$("#" + a).toggleClass("active");
//			a = this.id;
//			$.ajax({
//				type: "POST",
//				url: "?mod=payment&api=1",
//				data: "id=" + a,
//				async: false,
//				success: function (data) {
//					$("#view").html(data);
//				}
//			});
//			$('#view').css('display', 'none');
//			$("#view").fadeIn(600);
//			$("#" + a).toggleClass("active");
//		}
//	}
	$("#who").click();
});


