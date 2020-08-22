/**
*	Site-specific configuration settings for Highslide JS
*/
hs.graphicsDir = 'highslide/graphics/';
hs.showCredits = false;
hs.creditsPosition = 'bottom left';
hs.outlineType = 'custom';
hs.dimmingOpacity = 0.5;
hs.fadeInOut = true;
hs.align = 'center';
hs.padToMinWidth = true;
hs.useBox = true;
hs.width = 600;
hs.height = 400;
hs.allowMultipleInstances = false;
hs.captionEval = 'this.none';
hs.headingEval = 'this.thumb.title';
hs.registerOverlay({
	html: '<div class="closebutton" onclick="return hs.close(this)" title="Close Gallery"></div>',
	position: 'top right',
	useOnHtml: true,
	fade: 2 // fading the semi-transparent overlay looks bad in IE
});



// Add the slideshow controller
hs.addSlideshow({
	slideshowGroup: 'group1',
	interval: 5000,
	repeat: false,
	useControls: true,
	overlayOptions: {
		className: 'controls-in-heading',
		opacity: '1.00',
		position: 'bottom left',
		offsetX: '0',
		offsetY: '0',
		hideOnMouseOut: false
	},
	thumbstrip: {
		mode: 'vertical',
		position: 'rightpanel',
		relativeTo: 'image'
	}

});

// gallery config object
var config1 = {
	slideshowGroup: 'group1',
	thumbnailId: 'thumb1',
	transitions: ['expand', 'crossfade']
};
