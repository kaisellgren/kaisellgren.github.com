/**
 * Template Monster Screenshot Viewer
 *
 * @author Kai Sellgren <kaisellgren@gmail.com>
 */

$(function() {
	var types = [
		'b',
		'bcss',
		'osc',
		'bswi',
		'wp',
		'm',
		'z',
		'vm',
		'joom',
		'facebook',
		'prestashop'
	];

	function generateUrl(id, i) {
		return 'http://scr.templatemonster.com/' + (Math.floor(id / 100) * 100) + '/' + id + '-' + types[i] + '.jpg';
	}

	var $screenshots = $('#screenshots');

	$('#watch').click(function() {
		var input = $('#templates').val();
		var results = input.match(/(\d{4,5})/g);

		$screenshots.empty();

		results.forEach(function(id) {
			var templateUrl = 'http://www.templatemonster.com/website-templates/' + id + '.html';

			(function() {
				var i = 0;
				var $image = $('<img/>').attr('src', generateUrl(id, i));

				$image.bind('error', function() {
					i++;
					if (i > types.length - 1) {
						$image.remove();
					} else {
						$image.attr('src', generateUrl(id, i));
					}
				});

				var $div = $('<div/>').append($image);
				$div.append($('<p/>').html('<a href="' + templateUrl + '">' + id + '</a>'));
				$screenshots.append($div);
			})();
		});
	});
});