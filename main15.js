function calculateFactorial() {
	var num = parseInt(document.getElementById('number').value)
	if (num < 0) {
		document.getElementById('result15').innerHTML =
			'Factorial is not defined for negative numbers.'
	} else {
		var factorial = 1
		for (var i = 1; i <= num; i++) {
			factorial *= i
		}
		document.getElementById('result15').innerHTML = factorial
	}
}
