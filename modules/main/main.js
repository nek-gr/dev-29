var id = "";
var captions = [];
var about = [];
$(document).ready(function () {
	$(".half").click(function ()
	{
		$('.trueoffer').css('display', 'none');
		id = $(this).attr("id");
		$(".half").css("width", "18%");
		$("#" + id).css("width", "78%");
		$(".top").html("");
		$("#" + id).html(captions[id]);
		$.ajax({
			type: "POST",
			url: "?mod=main&api=1",
			data: "id=" + id,
			async: false,
			success: function (data) {
				$("#content").html(data);
			}
		});
		$('#content').css('display', 'none');
		$("#content").fadeIn(600);
	});
	captions["po"] = "<div class=\"top\">Прикладное ПО</div>";
	captions["ws"] = "<div class=\"top\">Веб-сайт</div>";
	about["projects"] = "Мы начинаем не с пустыми руками, у нас уже <a href=\"?mod=works\">3 готовых проекта</a>";
	about["years"] = "Каждый в команде программирует <a href=\"?mod=about\">более 4х лет</a>";
	about["business"] = "Мы нацелены на взаимовыгодное сотрудничество";
	$("#first").css('opacity', '1');
	$("#bluender").css('opacity', '1');
	$(".tret").mouseover(function ()
	{
		var tretid = $(this).attr("id");

		$(".tret").css('background-color', 'rgba(0,0,0,0.4)');
		$("#" + tretid).css('background-color', 'rgba(0,0,0,0.7)');
		$("#small").html(about[tretid]);
		$('#small').css('display', 'none');
		$("#small").fadeIn("slow");
	});
	$("#projects").mouseover();
	$('.trueoffer').css('display', 'none');
});

function beauti() {
	$('.trueoffer').css('display', 'none');
	$(".trueoffer").fadeIn(600);
	$("html,body").delay(600).animate({"scrollTop": $(".white").offset().top - 100}, "slow");
}
function onpage()
{
	$("#text").text("Здравствуйте, Разработка29. Я хочу рассказать о себе всем пользователям Интернета. В этом мне поможет сайт-одностраничник. Жду от Вас звонка.");
	beauti();
}
function visit()
{
	$("#text").text("Здравствуйте, Разработка29. Сайт-визитка позволит мне увеличить мои продажи. Позвоните мне для обсуждения всех деталей сделки.");
	beauti();
}
function inter()
{
	$("#text").text("Здравствуйте, Разработка29. Моё предприятие идёт в ногу со временем. Мы просим Вас создать для нас интернет магазин.");
	beauti();
}
function ppo()
{
	$("#text").text("Здравствуйте, Разработка29. Оставляю заявку на ответный звонок, чтобы рассказать вам, какое ПО мне нужно.");
	beauti();
}