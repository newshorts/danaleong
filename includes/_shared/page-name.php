<?php
	global $PAGE_NAME;
	global $DS;
	$PAGE_NAME = 'overview';
	$DS = '';

	//echo "<pre>";
	//var_dump($_SERVER['REQUEST_URI']);

	$uri = getURI();

	switch($uri) {
		case '/':
			$PAGE_NAME = 'overview';
			$DS = '';
			break;
		case '/tektonik/':
			$PAGE_NAME = 'tektonik';
			$DS = '../';
			break;
		case '/one-eyed-orange/':
			$PAGE_NAME = 'one-eyed-orange';
			$DS = '../';
			break;
		case '/dl-trio/':
			$PAGE_NAME = 'dl-trio';
			$DS = '../';
			break;
		case '/contact/':
			$PAGE_NAME = 'contact';
			$DS = '../';
			break;
	}

	//echo $PAGE_NAME;

	function getURI() {
		if(isset($_SERVER["REQUEST_URI"])) {
			return $_SERVER["REQUEST_URI"];
		} else if(isset($_SERVER["DOCUMENT_URI"])) {
			return $_SERVER["DOCUMENT_URI"];
		} else {
			return "/";
		}
	}
?>


