<?php
$id = filter_input(INPUT_POST, 'id', FILTER_SANITIZE_STRING);

switch ($id) {
	case 'ws':
		?>
		<div class="treesug">
			<div id="onepage">
				<table>
					<tr><th colspan="2">Одностраничник</th></tr>
					<tr><td colspan="2" class="demimg" id="imonpa"></td></tr>
					<tr><td>Цена</td><td>1500р</td></tr>
					<tr><td>Эксклюзивный дизайн</td><td>+1000р</td></tr>
					<tr><td>Хостинг</td><td>+1000р</td></tr>
					<tr><td colspan="2"><input type="button" value="Заказать" class="button" onclick="onpage()"></td></tr>
				</table>
			</div>
			<div id="visitka">
				<table>
					<tr><th colspan="2">Визитка</th></tr>
					<tr><td colspan="2" class="demimg" id="imvisi"></td></tr>
					<tr><td>Цена</td><td>от 5500р</td></tr>
					<tr><td>Эксклюзивный дизайн</td><td>+2000р</td></tr>
					<tr><td>Хостинг</td><td>+1000р</td></tr>
					<tr><td colspan="2"><input type="button" value="Заказать" class="button" onclick="visit()"></td></tr>
				</table>
			</div>
			<div id="intershop">
				<table>
					<tr><th colspan="2">Интернет-магазин</th></tr>
					<tr><td colspan="2" class="demimg" id="imintershop"></td></tr>
					<tr><td>Цена</td><td>от 30000р</td></tr>
					<tr><td>Эксклюзивный дизайн</td><td>+10000р</td></tr>
					<tr><td>Хостинг</td><td>+1000р</td></tr>
					<tr><td colspan="2"><input type="button" value="Заказать" class="button" onclick="inter()"></td></tr>
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
					<tr><th colspan="3">Прикладное ПО</th></tr>
					<tr><td colspan="3" class="demimg" id="impo"></td></tr>
					<tr><td class="poimg" id="ruble"></td><td id="postimg">Цена</td><td id="void">от 5000р</td></tr>
					<tr><td class="poimg" id="mandb"></td><td id="postimg">Управление базой</td><td id="void">от +10000р</td></tr>
					<tr><td class="poimg" id="users"></td><td id="postimg">Учётный записи</td><td id="void">+5000р</td></tr>
					<tr><td class="poimg" id="reports"></td><td id="postimg">Отчёты</td><td id="void">+3000р за каждый</td></tr>
					<tr><td class="poimg" id="hosting"></td><td id="postimg">Хостинг</td><td id="void">+3000р</td></tr>
					<tr><td colspan="3"><input type="button" value="Заказать" class="button" onclick="ppo()"></td></tr>
				</table>
			</div>
		</div>
		<?php
		break;
}