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
	captions["po"] = "<div class=\"top\">���������� ��</div>";
	captions["ws"] = "<div class=\"top\">���-����</div>";
	about["projects"] = "�� �������� �� � ������� ������, � ��� ��� <a href=\"?mod=works\">3 ������� �������</a>";
	about["years"] = "������ � ������� ������������� <a href=\"?mod=about\">����� 4� ���</a>";
	about["business"] = "�� �������� �� �������������� ��������������";
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
	$("#text").text("������������, ����������29. � ���� ���������� � ���� ���� ������������� ���������. � ���� ��� ������� ����-��������������. ��� �� ��� ������.");
	beauti();
}
function visit()
{
	$("#text").text("������������, ����������29. ����-������� �������� ��� ��������� ��� �������. ��������� ��� ��� ���������� ���� ������� ������.");
	beauti();
}
function inter()
{
	$("#text").text("������������, ����������29. �� ����������� ��� � ���� �� ��������. �� ������ ��� ������� ��� ��� �������� �������.");
	beauti();
}
function ppo()
{
	$("#text").text("������������, ����������29. �������� ������ �� �������� ������, ����� ���������� ���, ����� �� ��� �����.");
	beauti();
}