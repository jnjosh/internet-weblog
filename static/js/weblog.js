var iweblog = {};
iweblog.application = function() {

	// @sumamary: format flickr results for display
	function _display_images(data, count) {
		var htmlString = "", cnt = 0;

		$.each(data.items, function(i,item){
			if (cnt == count) return;

			var title = item.title;
			var image = item.media.m;
      		var smallImage = image.replace("_m.jpg", "_s.jpg");
      		var largeImage = image.replace("_m.jpg", "_b.jpg");
			htmlString += "<a data-lightbox=\"lightbox\" data-title=\"" + title + "\" class=\"photo-item\" href=\"" + largeImage + "\">";
			htmlString += "<img loading=\"lazy\" src=\"" + smallImage + "\" />";
			htmlString += "</a>";
			cnt++;
		});

    	$('#photos').html(htmlString);
	}

	return {
		displayImages: function(data, count) { _display_images(data, count); }
	}
}();

/// configure lightbox
lightbox.option({
	'resizeDuration': 400,
	'wrapAround': true
})
