<?php
$id = filter_input(INPUT_POST, 'id', FILTER_SANITIZE_STRING);

switch ($id) {
	case 'ck':
		?>
		<div class="content"><p>������������� ������� ���� - ��������� ������ �����������.</p><p> �� ��������� ������ �� ������ ��� ������������ �����������. ���� �� ���������� �������� ����������������� ����������� ������������ ���������� �� ������������ �������� ���������.</p>
			<p>����������� ������� �������� ������� � ������������� ������. ������ ����������� ��������� ��� ��������������� �� ������������ �������, ������� ��������� ������������ ������� ����������������� �������� � ���������� ������������� ������ �� ��������� �������� ������.</p>
		</div>
		<div class="forimg">
			<div  onClick = "javascript: left_arrow()" id="trueallow" disabled>&DoubleLeftArrow;</div><div id="arrow">&gt;</div>
			<img src = "" id = "img" onClick = "javascript: right_arrow()"/>
			<div  onClick = "javascript: right_arrow()" id="truearrow" disabled>&DoubleRightArrow;</div>
		</div>

		<!--				���������:
						������������ ������� ����������������� ��������;
						���������� �������� ��������������;
						���������� ������������� ������ �� ��������� �������� ������-->
		<?php
		break;
//----------------------------------------------------------------------------
	case 'sorman':
		?>
		<div class="content"><p>��� ����� ���� ������ ��� �����������, ��� ���������� ����? ����� ��� �������� � ����� ����������� �����.</p>
			<p>�������, ����������� �������������� � ��, � ������. ��������� ���� ��������� ���� �� ��������� �������� ������� �������� ���������� ������������� ������������.</p>
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
		<div class="content"><p>�� �������� ������ ����� �� ��������� <strong>������ ������</strong>.</p></div>
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

