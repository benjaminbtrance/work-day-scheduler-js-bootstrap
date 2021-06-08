$(document).ready(function () {
	var currentDate = $('#currentDay');

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
