$(document).ready(function () {
	var currentDate = $('#currentDay');
	var containerEl = $('.container');

	for (var i = 8; i <= 18; i++) {
		$('<div id="hour' + [i] + '"' + ' class="row mt-2"></div>').appendTo(
			containerEl
		);
		if (i <= 11) {
			$(
				'<div class="d-flex align-items-center bg-light col-md-1">' +
					[i] +
					' AM</div>'
			).appendTo($('#hour' + [i]));
		}
		if (i === 12) {
			$(
				'<div class="d-flex align-items-center bg-light col-md-1">' +
					[i] +
					' PM</div>'
			).appendTo($('#hour' + [i]));
		}
		if (i >= 13 && i <= 18) {
			$(
				'<div class="d-flex align-items-center bg-light col-md-1">' +
					[i - 12] +
					' PM</div>'
			).appendTo($('#hour' + [i]));
		}
		$('<textarea class="col-md-10 bg-light input-text"> </textarea>').appendTo(
			$('#hour' + [i])
		);
		$(
			'<button class="btn saveBtn d-flex justify-content-center align-items-center col-md-1">' +
				'<i class="fas fa-save"></i></button>'
		).appendTo('#hour' + [i]);
	}
	console.log(containerEl);

	// handle displaying the date and time
	function displayTime() {
		var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
		currentDate.text(rightNow);
	}

	setInterval(displayTime, 1000);

	$('.saveBtn').on('click', function () {
		var input = $(this).siblings('.input-text').val();
		var time = $(this).parent().attr('id');
		console.log(this);
		console.log(input);
		console.log(time);

		localStorage.setItem(time, input);
	});
});
