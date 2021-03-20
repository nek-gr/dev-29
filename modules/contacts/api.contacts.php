<?php
$id = filter_input(INPUT_POST, 'id', FILTER_SANITIZE_STRING);

switch ($id) {
	case 'cont':
		?>
		<div class="div-info" id="phone"><br>+79021947450</div>
		<div class="div-info" id="email"><br>developer29<br>@yandex.ru</div>
		<?php
		break;

	case 'off':
		ShowElement("offer");
		break;
}
?>
