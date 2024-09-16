$(document).ready(function () {
	var bLazy = new Blazy({
		selector: 'img', // all images
		container: '.blazy-container',
		loadInvisible: true,
		breakpoints: [{
			width: 420,// max-width
			src: 'data-src-small'
		},
		{
			width: 768, // max-width
			src: 'data-src-medium'
		}],

	});

});
