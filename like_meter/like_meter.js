function like_count(args) {
	function addCommas(nStr) {
	  nStr += '';
	  x = nStr.split('.');
	  x1 = x[0];
	  x2 = x.length > 1 ? '.' + x[1] : '';
	  var rgx = /(\d+)(\d{3})/;
	  while (rgx.test(x1)) {
	    x1 = x1.replace(rgx, '$1' + ',' + '$2');
	  }
	  return x1 + x2;
	}

	var curr_fans = 0;
	var output = '';
	var percent = 0;
	var starting_fans = args.starting || 0;
	var goal = args.goal || 0;
	var url = 'http://graph.facebook.com/' + args.fbpage + '&callback=?';
	var target = document.getElementById(args.element);
	var meter = document.getElementById(args.meter);

	$.getJSON(url, function(json) {
		if (json && json.likes) {
			curr_fans = json.likes;
			
			var fans_to_goal = curr_fans - starting_fans;
			var adjusted_goal = goal - starting_fans;
			percent = fans_to_goal / adjusted_goal * 100;
			
			if (percent >= 100) {
				percent = 100;
				meter.style.height = percent + '%';
			} else {
				meter.style.height = percent + '%';
			}
			
			output = addCommas(fans_to_goal);
			target.innerHTML = output;
		} else {
			console.log('Unable to get like count.')
		}
	});
};