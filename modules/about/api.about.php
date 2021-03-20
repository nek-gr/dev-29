<?php
$id = filter_input(INPUT_POST, 'id', FILTER_SANITIZE_STRING);

switch ($id) {
	case 'what':
		?>	<table style="padding:20px;">
			<tr>
				<td class="skill">C#, Delphi, Java</td>
				<td class="ins">В зависимости от уникальности разрабатываемого продукта мы выбираем тот язык программирования, который нужен</td>
			</tr>
			<tr>
				<td class="skill">PHP, HTML, CSS, JavaScript</td>
				<td class="ins">Сайтостроение выполняется нами с применением различный технологий, которые обеспечат вашему сайту приятный интерфейс</td>
			</tr>
			<tr>
				<td class="skill">T-SQL, MySQL, PostgreSQL</td>
				<td class="ins">База данных может находиться как удалённом сервере, так и на локальном. А мы обеспечим взаимодействие</td>
			</tr>
		</table> <?php
		break;

	case 'who':
		?>
		<div id="underunder">Мы - команда</div>
		<table class="bestvision">
			<tr>
				<td class="persona" id="prib"></td>
				<td class="shadow-none">Прибытков Никита, 21 год. <ul>
						<li>Главный дизайнер.
						<li>Гарантирует удобство использования продукта
						<li>Любит дорогие автомобили
							</td>
							</tr>
						<tr>
							<th colspan=2 id='oneborder'><th>
						</tr>
						<tr>
						<tr>
							<td class="persona" id="shem"></td>
							<td class="shadow-none">Шемелин Алексей, 21 год. <ul>
									<li>Главный разработчик.
									<li>Гарантирует безошибочную работу продукта
									<li>Программирование - дело всей жизни
										</td>
										</tr>
									<tr>
										<th colspan=2 id='oneborder'><th>
									</tr>
									<tr>
										<td class="persona" id="gri"></td>
										<td class="shadow-none">Грищенков Никита, 20 лет. <ul>
												<li>Главный менеджер.
												<li>Гарантирует сроки и качество выполнения
												<li>Увлекается футболом
													</td>
													</tr>
												<tr>
													<th colspan=2 id='oneborder'><th>
												</tr>
												</table> <?php
											default :
												break;
										}

