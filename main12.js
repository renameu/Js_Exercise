function checkEvenOrOdd() {
	let number = parseInt(document.getElementById('numberInput').value)
	let result = ''

	if (isNaN(number)) {
		result = 'Please enter a valid number.'
	} else {
		if (number % 2 === 0) {
			result = `${number} is even.`
		} else {
			result = `${number} is odd.`
		}
	}

	document.getElementById('res').textContent = result
}
