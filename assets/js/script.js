$(document).ready(function () {
	var currentDate = $('#currentDay');
	var containerEl = $('.container');
	var hours = {
		am: [8, 9, 10, 11],
		pm: [12, 13, 14, 15, 16, 17, 18],
	};
	var timeSymbol = '';
	var settedTime = '';
	var currentRowId = '';

	for (var i = 8; i <= 18; i++) {
		timeSymbol = hours.am.includes(i) ? 'am' : 'pm';
		settedTime = i >= 13 && i <= 18 ? i - 12 : i;
		currentId = `hour${i}`;

		getLocalStorage = localStorage.getItem(currentId);
		// console.log(getLocalStorage);

		if (getLocalStorage === null) {
			getLocalStorage = '';
		}

		$(`<div id="${currentId}" class="row mt-2 time-block"></div>`).appendTo(
			containerEl
		);

		$(
			`<div class="d-flex align-items-center col-md-1"> ${settedTime} ${timeSymbol} </div>`
		).appendTo($(`#${currentId}`));

		$(
			`<textarea class="col-md-10 input-text">${getLocalStorage}</textarea>`
		).appendTo($(`#${currentId}`));

		$(
			'<button class="btn saveBtn d-flex justify-content-center align-items-center col-md-1">' +
				'<i class="fas fa-save"></i></button>'
		).appendTo(`#${currentId}`);
	}
	// console.log(containerEl);

	// handle displaying the date and time
	function displayTime() {
		var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
		currentDate.text(rightNow);
	}

	setInterval(displayTime, 1000);

	function hourTracker() {
		//get current number of hours.
		var currentHour = moment().hour();

		// test to see if the if statement is working
		// currentHour = 10;

		// loop over time blocks
		$('.time-block').each(function () {
			var blockHour = parseInt($(this).attr('id').split('hour')[1]);
			//console.log(blockHour, currentHour);

			//check if currentHour is passed the blockHour then change the bootstrap class
			if (blockHour < currentHour) {
				$(this).addClass('bg-danger text-white');
				$(this).children('.input-text').addClass('text-white');
			} else if (blockHour === currentHour) {
				$(this).addClass('bg-success text-white');
				$(this).children('.input-text').addClass('text-white');
			} else {
				$(this).addClass('bg-light');
			}
		});
	}

	// call hourTracker function
	hourTracker();

	$('.saveBtn').on('click', function () {
		var input = $(this).siblings('.input-text').val();
		var time = $(this).parent().attr('id');
		// console.log(this);
		// console.log(input);
		// console.log(time);

		localStorage.setItem(time, input);
	});
});
