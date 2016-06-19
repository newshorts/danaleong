/**
 * @copyright 2016 Apple Inc. All rights reserved.
 * @author michael_newell@apple.com
 */

'use strict';

function EventTiles() {
	this.elem = new Foundation.Orbit($('#orbit'), {});

	this.orbitContainer = document.querySelector('.orbit-container');
	this.tiles = Array.prototype.slice.call(this.orbitContainer.querySelectorAll(".tile"));

	//setTimeout(function() {
	//	this.tiles.forEach(function(tile) {
	//		tile.style.height = this.orbitContainer.style.height;
	//	}.bind(this));
	//}.bind(this), 100);

	this.update = this.update.bind(this);
}

EventTiles.prototype.update = function(viewportChange) {
	console.log('got the change')
	if(viewportChange.currentViewport === 'small') {
		this.setLayout(2);
	} else if(viewportChange.currentViewport === 'medium') {
		this.setLayout(3);
	} else {
		this.setLayout(4);
	}
};

EventTiles.prototype.setLayout = function(numTilesInView) {

	// remove old
	this.orbitContainer.innerHTML = '';

	// create a new orbit
	var i,j;
	for (i=0,j=this.tiles.length; i<j; i+=numTilesInView) {
		var tilesInView = this.tiles.slice(i,i+numTilesInView);
		// do whatever

		// for each chunk create a template
		var tiles = document.createElement('div');
		tiles.classList.add('tiles');
		for(var k = 0; k < tilesInView.length; k++) {
			tiles.appendChild(tilesInView[k]);
		}
		var slide = document.createElement('li');
		slide.classList.add('is-active', 'orbit-slide');
		var board = document.createElement('div');
		board.classList.add('board');

		board.appendChild(tiles);
		slide.appendChild(board);
		this.orbitContainer.appendChild(slide);
	}

	// destroy and create
	// TODO: find out if this is actually destroying the element
	this.elem = new Foundation.Orbit($('#orbit'), {});

	this.tiles.forEach(function(tile) {
		tile.style.height = this.orbitContainer.style.height;
	}.bind(this));
};