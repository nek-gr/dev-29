<div class="trueoffer">
	<div class="white">�������� � ������ ����������������!</div>
	<div>�������� ������, �������� ������ ��� � ����������</div>
	<div id="right"><form action="">
			<table>
				<tr><td>���:</td><td> <input type="text" required id="name"></td></tr>
				<tr><td>�������:</td><td> <input type="text" required id="number" maxlength="11"></td></tr>
				<tr><td>���������:</td><td> <textarea id="text"></textarea></td></tr>
				<tr><td></td><td><input type="submit" value="���������" class="button"></td></tr>
			</table>
			<div>�� �������� � ���� � ������� �����.</div>
		</form></div>
</div>
<script>
	$("#number").keydown(function (event) {
		// ���������: backspace, delete, tab � escape
		if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
				// ���������: Ctrl+A
						(event.keyCode == 65 && event.ctrlKey === true) ||
						// ���������: home, end, �����, ������
								(event.keyCode >= 35 && event.keyCode <= 39)) {
					// ������ �� ������
					return;
				} else {
					// ����������, ��� ��� �����, � ������������� ������� keypress
					if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
						event.preventDefault();
					}
				}
			});
</script>