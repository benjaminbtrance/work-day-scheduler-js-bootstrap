var currentDate = $('#currentDay');

// handle displaying the date and time
function displayTime() {
	var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
	currentDate.text(rightNow);
}

setInterval(displayTime, 1000);
