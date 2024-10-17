function convertSeconds() {
	var seconds = parseFloat(document.getElementById('secondsInput').value)
	if (!isNaN(seconds)) {
		var minutes = seconds / 60
		var hours = seconds / 3600
		document.getElementById('minutes').innerHTML =
			minutes.toFixed(4) + ' minutes'
		document.getElementById('hours').innerHTML = hours.toFixed(4) + ' hours'
	} else {
		document.getElementById('minutes').innerHTML = 'Invalid input!'
		document.getElementById('hours').innerHTML = ''
	}
}
