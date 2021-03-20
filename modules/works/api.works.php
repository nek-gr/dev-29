<?php
$id = filter_input(INPUT_POST, 'id', FILTER_SANITIZE_STRING);

switch ($id) {
	case 'ck':
		?>
		<div class="content"><p>Автоматизация рабочих мест - важнейшая задача руководства.</p><p> Мы выполняем работы не только для коммерческих организаций. Одно из учреждений среднего проффесионального образования Архангельска использует АС «Электронная цикловая комиссия».</p>
			<p>Составление отчётов довольно сложная и ответственная работа. Данная организация возложила эту ответственность на безошибочную систему, которая позволяет распределить учебную преподавательскую нагрузку и составлять разнообразные отчёты на основании введённых данных.</p>
		</div>
		<div class="forimg">
			<div  onClick = "javascript: left_arrow()" id="trueallow" disabled>&DoubleLeftArrow;</div><div id="arrow">&gt;</div>
			<img src = "" id = "img" onClick = "javascript: right_arrow()"/>
			<div  onClick = "javascript: right_arrow()" id="truearrow" disabled>&DoubleRightArrow;</div>
		</div>

		<!--				Позволяет:
						распределить учебную преподавательскую нагрузку;
						составлять рейтинги преподавателей;
						составлять разнообразные отчёты на основании введённых данных-->
		<?php
		break;
//----------------------------------------------------------------------------
	case 'sorman':
		?>
		<div class="content"><p>Что может быть важнее для предприятия, чем клиентская база? Разве что качество и время оказываемых услуг.</p>
			<p>Система, позволяющая контролировать и то, и другое. Благодаря этой программе одно из рекламных агентств региона повысила показатели эффективности производства.</p>
		</div>
		<div class="forimg">
			<div  onClick = "javascript: left_arrow()" id="trueallow" disabled>&DoubleLeftArrow;</div><div id="arrow">&gt;</div>
			<img src = "" id = "img" onClick = "javascript: right_arrow()"/>
			<div  onClick = "javascript: right_arrow()" id="truearrow" disabled>&DoubleRightArrow;</div>
		</div>

		<?php
		break;
//-----------------------------------------------------------------------
	case 'dev':
		?>
		<div class="content"><p>На создание нашего сайта мы потратили <strong>меньше недели</strong>.</p></div>
		<div class="forimg"><div id="arrow">&gt;</div>
			<img src = "" id = "img" />
		</div>
		<?php
		break;
//--------------------------------------------------------------------------------
	case 'your':
		ShowElement("offer");
		break;
	default :
		break;
}

