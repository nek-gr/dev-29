<?php
include "class/func.php";
$get_mod = filter_input(INPUT_GET, 'mod', FILTER_SANITIZE_STRING);
$get_api = filter_input(INPUT_GET, 'api', FILTER_SANITIZE_NUMBER_INT);
if ($get_mod == '') {
	$get_mod = 'main';
}
$str = scripts();

if (($get_api === "1") || ($post_api === "1")) {
	if (isset($_REQUEST[ "mod" ]) && $_REQUEST[ "mod" ] != "") {
		require_once "modules/" . $_REQUEST[ "mod" ] . "/api." . $_REQUEST[ "mod" ] . ".php";
	}
	exit();
}
?>
<html>
    <head>
		<title>NEK</title>
		<link href="css/styleone.css" rel="stylesheet" type="text/css">
		<script type="text/javascript" src="js/jquery.js"></script>
		<script type="text/javascript" src="js/jquery-2.2.2.min.js"></script>
		<script type="text/javascript" src="js/fotorama.js"></script>
		<script type="text/javascript" src="js/jquery-ui.min.js"></script>
		<script type="text/javascript" src="js/swiper.min.js"></script>
		<script type="text/javascript" src="js/script.js"></script>
		<script type="text/javascript" src="js/text.js" ></script>
        <script type="text/javascript" src="js/FixedHeader.js"></script>
        <script type="text/javascript" src="js/myScripts.js"></script>
		<script src="js/underscore-min.js" type="text/javascript"></script>
		<?php echo $str ?>
	</head>
	<body>
		<div id="site">
			<?php
			ShowElement("header");
			ShowElement("lockjava");
			ShowElement("module");
			?>
		</div>
		<?php
		ShowElement("footer");
		?>
	</body>
</html>
