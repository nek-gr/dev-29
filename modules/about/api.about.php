<?php
$id = filter_input(INPUT_POST, 'id', FILTER_SANITIZE_STRING);

switch ($id) {
	case 'what':
		?>	<table style="padding:20px;">
			<tr>
				<td class="skill">C#, Delphi, Java</td>
				<td class="ins">� ����������� �� ������������ ���������������� �������� �� �������� ��� ���� ����������������, ������� �����</td>
			</tr>
			<tr>
				<td class="skill">PHP, HTML, CSS, JavaScript</td>
				<td class="ins">������������� ����������� ���� � ����������� ��������� ����������, ������� ��������� ������ ����� �������� ���������</td>
			</tr>
			<tr>
				<td class="skill">T-SQL, MySQL, PostgreSQL</td>
				<td class="ins">���� ������ ����� ���������� ��� �������� �������, ��� � �� ���������. � �� ��������� ��������������</td>
			</tr>
		</table> <?php
		break;

	case 'who':
		?>
		<div id="underunder">�� - �������</div>
		<table class="bestvision">
			<tr>
				<td class="persona" id="prib"></td>
				<td class="shadow-none">��������� ������, 21 ���. <ul>
						<li>������� ��������.
						<li>����������� �������� ������������� ��������
						<li>����� ������� ����������
							</td>
							</tr>
						<tr>
							<th colspan=2 id='oneborder'><th>
						</tr>
						<tr>
						<tr>
							<td class="persona" id="shem"></td>
							<td class="shadow-none">������� �������, 21 ���. <ul>
									<li>������� �����������.
									<li>����������� ������������ ������ ��������
									<li>���������������� - ���� ���� �����
										</td>
										</tr>
									<tr>
										<th colspan=2 id='oneborder'><th>
									</tr>
									<tr>
										<td class="persona" id="gri"></td>
										<td class="shadow-none">��������� ������, 20 ���. <ul>
												<li>������� ��������.
												<li>����������� ����� � �������� ����������
												<li>���������� ��������
													</td>
													</tr>
												<tr>
													<th colspan=2 id='oneborder'><th>
												</tr>
												</table> <?php
											default :
												break;
										}

