var captions = [];
var id;
var ck = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
var sorman = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
var dev = ["1.jpg"];
$(document).ready(function () {
	$(".po").click(function ()
	{
		$("#" + id).offset({top: $("#slot" + id).offset().top, left: $("#slot" + id).offset().left});
		id = $(this).attr("id");
		switch (id) {
			case "ck":
				mas = ck.slice(0);
				break;
			case "sorman":
				mas = sorman.slice(0);
				break;
			case "dev":
				mas = dev.slice(0);
				break;
		}

		to = -1;
		$(this).offset(function (i, coord) {
			var newCoord = {};
			newCoord.top = $("#cell").offset().top - 8;
			newCoord.left = $("#cell").offset().left + 200;
			return newCoord;
		});
		$("#underunder").html(captions[id]);
		$('#underunder').css('display', 'none');
		$("#underunder").show(600);
		$.ajax({
			type: "POST",
			url: "?mod=works&api=1",
			data: "id=" + id,
			async: false,
			success: function (data) {
				$("#content").html(data);
			}
		});
		$('#content').css('display', 'none');
		$("#content").fadeIn(600);
		if (id != "your")
			right_arrow();
		else
			$("html,body").delay(600).animate({"scrollTop": $(".white").offset().top - 100}, "slow");

		truear();
	});
//	--------------------------start---------------------------------
	$("#underunder").css("text-align", "left");
	captions["ck"] = "Электронная цикловая комиссия";
	captions["sorman"] = "Автоматизированная система \"Менеджер\"";
	captions["dev"] = "веб-сайт develop29.ru";
	captions["your"] = "А какой продукт нужен именно Вам?";
	for (var key in captions) {
		$("#" + key).offset({top: $("#slot" + key).offset().top, left: $("#slot" + key).offset().left});
	}
	id = "ck";
	$("#" + id).click();
	$(".forimg").css("min-height", 1 / 2 * $(".forimg").width());
});
var mas = [];// массив картинок
var to = -1;  // Счетчик, указывающий на текущую картинки

function right_arrow() // Открытие следующей картинки(движение вправо)
{
	var obj = document.getElementById("img");
	if (to < mas.length - 1)
		to++;
	else
		to = 0;
	obj.src = "./images/" + id + "/" + mas[to];
	$('#img').css('display', 'none');
	$("#img").fadeIn(600);
	$("#arrow").html((to + 1) + " из " + mas.length);
}
function left_arrow() // Открытие предыдущей картинки(движение влево)
{
	var obj = document.getElementById("img");
	if (to > 0)
		to--;
	else
		to = mas.length - 1;
	obj.src = "./images/" + id + "/" + mas[to];
	$('#img').css('display', 'none');
	$("#img").fadeIn(600);
	$("#arrow").html((to + 1) + " из " + mas.length);
}

function truear()
{
	$("#trueallow").offset({top: $("#arrow").offset().top + 50, left: $("#arrow").offset().left - 70});
	$("#truearrow").offset({top: $("#arrow").offset().top + 50, left: $("#arrow").offset().left + $(".forimg").width() + 10});
}
$(window).resize(function () {
	$("#" + id).offset(function (i, coord) {
		var newCoord = {};
		newCoord.top = $("#cell").offset().top - 8;
		newCoord.left = $("#cell").offset().left + 200;
		return newCoord;
	});
	truear();
});


