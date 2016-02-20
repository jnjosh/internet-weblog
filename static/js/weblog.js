var iweblog = {};
iweblog.application = function() {

	// @sumamary: format flickr results for display
	function _display_images(data, count) {
		var htmlString = "", cnt = 0;

		$.each(data.items, function(i,item){
			if (cnt == count) return;

			var image = item.media.m;
      var smallImage = image.replace("_m.jpg", "_s.jpg");
      var largeImage = image.replace("_m.jpg", ".jpg");
			htmlString += "<a class=\"photo-item\" href=\"" + largeImage + "\">";
			htmlString += "<img src=\"" + smallImage + "\" />";
			htmlString += "</a>";
			cnt++;
		});

    $('#photos').html(htmlString);
		$('#photos').lightGallery();
	}

	return {
		displayImages: function(data, count) { _display_images(data, count); }
	}
}();
