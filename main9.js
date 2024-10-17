function isLeapYear(year) {
	if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
		return true
	} else {
		return false
	}
}

let year = parseInt(prompt('Enter a year: '))
if (isLeapYear(year)) {
	alert(year + ' is a leap year.')
} else {
	alert(year + ' is not a leap year.')
}
