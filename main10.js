function Divided() {
	let a = parseFloat(document.getElementById('num1').value)
	let b = parseFloat(document.getElementById('num2').value)
	if (!isNaN(a) && !isNaN(b)) {
		let div = a / b
		document.getElementById('div').innerText = 'Divided: ' + div
	} else {
		document.getElementById('div').innerText = 'Please enter valid numbers.'
	}
}

function Multiply() {
	let a = parseFloat(document.getElementById('num1').value)
	let b = parseFloat(document.getElementById('num2').value)
	if (!isNaN(a) && !isNaN(b)) {
		let mul = a * b
		document.getElementById('mul').innerText = 'Multiplication: ' + mul
	} else {
		document.getElementById('mul').innerText = 'Please enter valid numbers.'
	}
}
