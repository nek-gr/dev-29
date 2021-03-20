function calculator(form)
{
	// ------------- КОНСТАНТЫ -------------------------------------
	var ProzgMin = new Array();
	ProzgMin[1] = 13988; //13360; // мужчины от 16 до 59 лет включительно
	ProzgMin[2] = 13988; //13360; // женщины от 16 до 54 лет включительно
	ProzgMin[3] = 10929; //10442; // граждане пенсионного возраста и неработающие инвалиды I и II групп
	ProzgMin[4] = 12622; //11880; // дети 7 – 15 лет
	ProzgMin[5] = 12622; //11880; // дети 0 – 6 лет
//Мужчины 13988 Женщины 13988 Пенсионеры 10929 Дети (7-15) 12622 Дети (0-6) 12622

	// Стандарт стоимости ЖКУ (Благоустроеенное жилье)
	var Standart = new Array();
	Standart[1] = 4436.20;
	Standart[2] = 3159.11;
	Standart[3] = 2777.20;

	// Стандарт стоимости ЖКУ (Неблагоустроеенное жилье)
	var Standart1 = new Array();
	Standart1[1] = 3455.72;
	Standart1[2] = 2627.34;
	Standart1[3] = 2240.96;

//	// Стандарт стоимости ЖКУ (Благоустроеенное жилье)
//	var Standart = new Array();
//	Standart[1] = 4436.20;//4297.64;
//	Standart[2] = 3159.11// 3045.00;
//	Standart[3] = 2673.40;
//
//	// Стандарт стоимости ЖКУ (Неблагоустроеенное жилье)
//	var Standart1 = new Array();
//	Standart1[1] = 3405.68;
//	Standart1[2] = 2550.26;
//	Standart1[3] = 2169.16;
	// Максимально допустимая доля на оплату жилья
	var D = 0.22;

	var cnt1 = 0;
	var cnt2 = 0;
	var cnt3 = 0;
	var cnt4 = 0;
	var cnt5 = 0;

	if (typeof (eval(form.cnt1.value)) == 'undefined' || form.cnt1.value == null)
		cnt1 = 0;
	else
		cnt1 = parseInt(form.cnt1.value, 10);

	if (typeof (eval(form.cnt2.value)) == 'undefined' || form.cnt2.value == null)
		cnt2 = 0;
	else
		cnt2 = parseInt(form.cnt2.value, 10);

	if (typeof (eval(form.cnt3.value)) == 'undefined' || form.cnt3.value == null)
		cnt3 = 0;
	else
		cnt3 = parseInt(form.cnt3.value, 10);

	if (typeof (eval(form.cnt4.value)) == 'undefined' || form.cnt4.value == null)
		cnt4 = 0;
	else
		cnt4 = parseInt(form.cnt4.value, 10);

	if (typeof (eval(form.cnt5.value)) == 'undefined' || form.cnt5.value == null)
		cnt5 = 0;
	else
		cnt5 = parseInt(form.cnt5.value, 10);

	var dohod = 0;
	if (typeof (eval(form.sumDohod.value)) == 'undefined' || form.sumDohod.value == null)
		dohod = 0;
	else
		dohod = parseInt(form.sumDohod.value, 10);

	var oplat = 0;
	if (typeof (eval(form.summOplat.value)) == 'undefined' || form.summOplat.value == null)
		oplat = 0;
	else
		oplat = parseInt(form.summOplat.value, 10);


	// ------------- РАСЧЕТНЫЙ ДАННЫЕ ------------------------------
	// Количество человек
	var Cnt = 0;
	//Cnt = eval(form.cnt1.value) + eval(form.cnt2.value) + eval(form.cnt3.value) + eval(form.cnt4.value) + eval(form.cnt5.value);
	Cnt = cnt1 + cnt2 + cnt3 + cnt4 + cnt5;

	// Среднедушевой доход
	var S = 0;
	S = dohod / Cnt

	// Поправочный коэффициент
	var K = 1;
	var minDohod = cnt1 * ProzgMin[1] + cnt2 * ProzgMin[2] + cnt3 * ProzgMin[3] + cnt4 * ProzgMin[4] + cnt5 * ProzgMin[5];

	if (dohod < minDohod)
		K = dohod / minDohod;
	else
		K = 1;

	// Благоустройство
	var B = eval(getCheckedValue(form.hr));

	// Стоимость ЖКУ на семью
	var St = 0;
	switch (B)
	{
		case 1:
			switch (Cnt)
			{
				case 1:
					St = Standart[1];
					break;

				case 2:
					St = 2 * Standart[2];
					break;

				default:
					St = Cnt * Standart[3];
			}
			break;

		case 2:
			switch (Cnt)
			{
				case 1:
					St = Standart1[1];
					break;
				case 2:
					St = 2 * Standart1[2];
					break;
				default:
					St = Cnt * Standart1[3];
			}
			break;

		default:
			break;
	}

	// Размер субсидии
	var Subs = St - (D * dohod * K);

	dv = document.getElementById("result");
	dv.className = "unhidden";

	// Конечный результат

	var Ts = 0;
	if (Subs > oplat)
		Ts = oplat;
	else if (Subs < 0)
		Ts = 0.00;
	else
		Ts = Subs.toFixed(2);

	var Element = document.getElementById("TotalSubs");
	if (Element.firstChild)
		Element.firstChild.nodeValue = Ts;
	else
		Element.appendChild(document.createTextNode(Ts));
	//document.all.TotalSubs.innerText = Ts;

	Element = document.getElementById("stgku");
	if (Element.firstChild)
		Element.firstChild.nodeValue = St.toFixed(2);
	else
		Element.appendChild(document.createTextNode(St.toFixed(2)));
	//document.all.stgku.innerText = St.toFixed(2);

	Element = document.getElementById("maxgku");
	if (Element.firstChild)
		Element.firstChild.nodeValue = (D * dohod).toFixed(2);
	else
		Element.appendChild(document.createTextNode((D * dohod).toFixed(2)));
	//document.all.maxgku.innerText = (D * eval(form.sumDohod.value)).toFixed(2);

}

function getCheckedValue(radioObj)
{
	if (!radioObj)
		return "";
	var radioLength = radioObj.length;
	if (radioLength == undefined)
		if (radioObj.checked)
			return radioObj.value;
		else
			return "";
	for (var i = 0; i < radioLength; i++) {
		if (radioObj[i].checked) {
			return radioObj[i].value;
		}
	}
	return "";
}

function unhide(objID)
{
	var item = document.getElementById(objID);
	if (item)
	{
		item.className = (item.className == 'hidden') ? 'unhidden' : 'hidden';
	}
}