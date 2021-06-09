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

		getLocalStorage = localStorage.getItem('hour' + i);
		console.log(getLocalStorage);

		if (getLocalStorage === null) {
			getLocalStorage = '';
		}

		$(`<div id="${currentId}" class="row mt-2"></div>`).appendTo(containerEl);

		$(
			`<div class="d-flex align-items-center bg-light col-md-1"> ${settedTime} ${timeSymbol} </div>`
		).appendTo($('#hour' + i));

		$(
			`<textarea class="col-md-10 bg-light input-text">${getLocalStorage}</textarea>`
		).appendTo($('#hour' + i));

		$(
			'<button class="btn saveBtn d-flex justify-content-center align-items-center col-md-1">' +
				'<i class="fas fa-save"></i></button>'
		).appendTo('#hour' + i);
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
