function findLargestAndSmallest() {
	let num1 = parseFloat(document.getElementById('num4').value)
	let num2 = parseFloat(document.getElementById('num5').value)
	let num3 = parseFloat(document.getElementById('num3').value)

	let result = ''

	if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
		result = 'Please enter valid numbers.'
	} else {
		let largest = Math.max(num1, num2, num3)
		let smallest = Math.min(num1, num2, num3)
		result = `The largest number is ${largest}, and the smallest number is ${smallest}.`
	}

	document.getElementById('resu').textContent = result
}
