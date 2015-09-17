document.getElementById("Portrait").onselectstart = function() { return false; }

/// TODO: TimeZone Detection with getTimezoneOffset()
document.getElementsByClassName("chomsky-portrait")[0].classList.add('fade-in');

CountDownTimer('09/29/2015 7:20 PM', 'countdown1');

function CountDownTimer(dt, id)
{
	var end = new Date(dt),
		_second = 1000,
		_minute = _second * 60,
		_hour = _minute * 60,
		_day = _hour * 24,
		timer;
		
	var daysElement = document.getElementById(id + 'days'),
		hrsElement = document.getElementById(id + 'hrs'),
		minsElement =  document.getElementById(id + 'mins'),
		secsElement = document.getElementById(id + 'secs');	

	function showRemaining() {
		var now = new Date();
		var distance = end - now;
		if (distance < 0) {
			clearInterval(timer);
			document.getElementById(id).innerHTML = 'NOW BITCH!';
			return;
		}
		var days = Math.floor(distance / _day);
		var hours = Math.floor((distance % _day) / _hour);
		var minutes = Math.floor((distance % _hour) / _minute);
		var seconds = Math.floor((distance % _minute) / _second);
		
		daysElement.innerHTML = '<time class="cdtime">' + days + '</time>'+ 'days' ;
		hrsElement.innerHTML  = '<time class="cdtime">' + hours + '</time>' + 'hrs';
		minsElement.innerHTML = '<time class="cdtime">' + minutes + '</time>'+ 'mins';
		secsElement.innerHTML = '<time class="cdtime">' + seconds + '</time>' + 'secs';
	}
	timer = setInterval(showRemaining, 1000);
}

document.getElementById("Countdown").classList.add('fade-in');