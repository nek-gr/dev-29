<div class="trueoffer">
	<div class="white">Добавьте в бизнес программирование!</div>
	<div>Оставьте заявку, сделайте первый шаг к инновациям</div>
	<div id="right"><form action="">
			<table>
				<tr><td>Имя:</td><td> <input type="text" required id="name"></td></tr>
				<tr><td>Телефон:</td><td> <input type="text" required id="number" maxlength="11"></td></tr>
				<tr><td>Сообщение:</td><td> <textarea id="text"></textarea></td></tr>
				<tr><td></td><td><input type="submit" value="Отправить" class="button"></td></tr>
			</table>
			<div>Мы свяжемся с вами в течение суток.</div>
		</form></div>
</div>
<script>
	$("#number").keydown(function (event) {
		// Разрешаем: backspace, delete, tab и escape
		if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
				// Разрешаем: Ctrl+A
						(event.keyCode == 65 && event.ctrlKey === true) ||
						// Разрешаем: home, end, влево, вправо
								(event.keyCode >= 35 && event.keyCode <= 39)) {
					// Ничего не делаем
					return;
				} else {
					// Обеждаемся, что это цифра, и останавливаем событие keypress
					if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
						event.preventDefault();
					}
				}
			});
</script>