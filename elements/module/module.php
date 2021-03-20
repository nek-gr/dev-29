<?php

global $get_mod;
$modir = "modules/";
$file = $modir . $get_mod . "/" . $get_mod . ".php";
if ($get_mod != "" && file_exists($file)) {
	require_once $file;
} else {
	require_once "modules/main/main.php";
}
