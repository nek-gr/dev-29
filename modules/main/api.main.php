<?php
$id = filter_input(INPUT_POST, 'id', FILTER_SANITIZE_STRING);

switch ($id) {
	case 'ws':
		?>
		<div class="treesug">
			<div id="onepage">
				<table>
					<tr><th colspan="2">��������������</th></tr>
					<tr><td colspan="2" class="demimg" id="imonpa"></td></tr>
					<tr><td>����</td><td>1500�</td></tr>
					<tr><td>������������ ������</td><td>+1000�</td></tr>
					<tr><td>�������</td><td>+1000�</td></tr>
					<tr><td colspan="2"><input type="button" value="��������" class="button" onclick="onpage()"></td></tr>
				</table>
			</div>
			<div id="visitka">
				<table>
					<tr><th colspan="2">�������</th></tr>
					<tr><td colspan="2" class="demimg" id="imvisi"></td></tr>
					<tr><td>����</td><td>�� 5500�</td></tr>
					<tr><td>������������ ������</td><td>+2000�</td></tr>
					<tr><td>�������</td><td>+1000�</td></tr>
					<tr><td colspan="2"><input type="button" value="��������" class="button" onclick="visit()"></td></tr>
				</table>
			</div>
			<div id="intershop">
				<table>
					<tr><th colspan="2">��������-�������</th></tr>
					<tr><td colspan="2" class="demimg" id="imintershop"></td></tr>
					<tr><td>����</td><td>�� 30000�</td></tr>
					<tr><td>������������ ������</td><td>+10000�</td></tr>
					<tr><td>�������</td><td>+1000�</td></tr>
					<tr><td colspan="2"><input type="button" value="��������" class="button" onclick="inter()"></td></tr>
				</table>
			</div>
		</div>
		<?php
		break;
	case 'po':
		?>
		<div class="treesug">
			<div id="onlypo">
				<table>
					<tr><th colspan="3">���������� ��</th></tr>
					<tr><td colspan="3" class="demimg" id="impo"></td></tr>
					<tr><td class="poimg" id="ruble"></td><td id="postimg">����</td><td id="void">�� 5000�</td></tr>
					<tr><td class="poimg" id="mandb"></td><td id="postimg">���������� �����</td><td id="void">�� +10000�</td></tr>
					<tr><td class="poimg" id="users"></td><td id="postimg">������� ������</td><td id="void">+5000�</td></tr>
					<tr><td class="poimg" id="reports"></td><td id="postimg">������</td><td id="void">+3000� �� ������</td></tr>
					<tr><td class="poimg" id="hosting"></td><td id="postimg">�������</td><td id="void">+3000�</td></tr>
					<tr><td colspan="3"><input type="button" value="��������" class="button" onclick="ppo()"></td></tr>
				</table>
			</div>
		</div>
		<?php
		break;
}