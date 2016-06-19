/**
 * @copyright 2016 Apple Inc. All rights reserved.
 * @author michael_newell@apple.com
 */

'use strict';

function ViewportEmitter(id, viewportChangeCallback) {
	this._el = document.getElementById(id);
	this.psuedoSelector = ':after';
	this.viewport = '';

	// events
	this.viewportChangeCallback = viewportChangeCallback.bind(this);
	this.updateViewport = this.updateViewport.bind(this);
	window.addEventListener('load', this.updateViewport);
	window.addEventListener('resize', this.updateViewport);
	window.addEventListener('orientationchange', this.updateViewport);
};

var proto = ViewportEmitter.prototype;

proto.updateViewport = function(evt) {
	console.log('updating')
	var lastViewport = this.viewport;
	this.viewport = this.getContent();
	if(this.viewport !== lastViewport) {
		var viewportChange = {
			lastViewport: lastViewport,
			currentViewport: this.viewport
		};
		this.viewportChangeCallback(viewportChange);
	}
};

proto.invalidateStyles = function() {
	document.documentElement.clientWidth;
	this._el.innerHTML = (this._el.innerHTML === ' ') ? ' ' : ' ';
	document.documentElement.clientWidth;
};

proto.getContent = function() {
	this.invalidateStyles();
	var content = window.getComputedStyle(this._el, this.psuedoSelector).content.replace(/["']/g, '');
	return (content) ? content : false;
};
