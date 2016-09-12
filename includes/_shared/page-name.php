<?php
	include "config.php";

	global $PAGE_NAME;
	global $DS, $ROOT, $INCLUDES, $SHARED;
	$PAGE_NAME = 'overview';

	$DS = DIRECTORY_SEPARATOR;
	$ROOT = $_SERVER['DOCUMENT_ROOT'];
	$CWD = getcwd();
	$INCLUDES = $CWD . $DS . "includes" . $DS;
	$SHARED = $INCLUDES . "_shared" . $DS;

	$uri = getURI();

	switch($uri) {
		case web_link(''):
			$PAGE_NAME = 'overview';
			break;
		case web_link('tektonik/'):
			$PAGE_NAME = 'tektonik';
			break;
		case web_link('one-eyed-orange/'):
			$PAGE_NAME = 'one-eyed-orange';
			break;
		case web_link('dl-trio/'):
			$PAGE_NAME = 'dl-trio';
			break;
		case web_link('contact/'):
			$PAGE_NAME = 'contact';
			break;
	}

	function getURI() {
		if(isset($_SERVER["REQUEST_URI"])) {
			return $_SERVER["REQUEST_URI"];
		} else if(isset($_SERVER["DOCUMENT_URI"])) {
			return $_SERVER["DOCUMENT_URI"];
		} else {
			return "/";
		}
	}

	function web_link($uri) {
		global $SUBDIR;
		return $SUBDIR . $uri;
	}
?>


