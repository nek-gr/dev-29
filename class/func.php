<?php

function ShowElement($comName) {
	$php = "./elements/" . $comName . "/" . $comName . ".php";
	if (file_exists($php)) {
		require_once $php;
	}
}

function scripts() {
	global $get_mod;
	$str = '';
	$file = "modules/" . $get_mod . "/" . $get_mod . ".js";
	if (file_exists($file)) {
		$str .= "<script type='text/javascript' src='" . $file . "'></script>";
	}
	$file = "modules/" . $get_mod . "/" . $get_mod . ".css";
	if (file_exists($file)) {
		$str .= "<link href='" . $file . "' rel='stylesheet' type='text/css'>";
	}
	return $str;
}
