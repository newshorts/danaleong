/**
 * @copyright 2016 Apple Inc. All rights reserved.
 * @author michael_newell@apple.com
 */

'use strict';

$(document).foundation();

//var $photoFrame = $('.header-title-image');
//var interchange = new Foundation.Interchange($photoFrame, {rules: "[path/to/default.jpg, small], [path/to/medium.jpg, medium], [path/to/large.jpg, large]"});
"use strict";

globalNav();
readMore();
var viewportEmitter = new ViewportEmitter('global-nav-viewport-emitter', onViewportChange);
var et = new EventTiles();

function globalNav() {
	var expanded = false;
	var globalNav = document.querySelector('.section-global-nav');
	var button = globalNav.querySelector('.menu-icon');
	button.addEventListener('click', onClick);

	function onClick(evt) {
		if(!expanded) {
			expanded = true;
			globalNav.classList.add('expanded');
		} else {
			expanded = false;
			globalNav.classList.remove('expanded');
		}

	}
}

function readMore() {
	var description = document.querySelector('.description');
	var readMore = description.querySelector('.read-more');
	var readLess = description.querySelector('.read-less');

	readMore.addEventListener('click', onReadMoreClick);
	readLess.addEventListener('click', onReadLessClick);

	function onReadMoreClick(evt) {
		description.classList.add('show-detail');
	};

	function onReadLessClick(evt) {
		description.classList.remove('show-detail');
	};
}

function onViewportChange(change) {
	console.log(change)
	et.update(change);
}

