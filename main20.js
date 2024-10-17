function calculateDaysUntilNewYear() {
	var today = new Date()
	var nextYear = today.getFullYear() + 1
	var newYear = new Date(nextYear, 0, 1)
	var timeDiff = newYear - today
	var daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
	document.getElementById('daysLeft').innerHTML = daysLeft + ' days'
}
