function calculateArea() {
	let a = parseFloat(document.getElementById('side1').value)
	let b = parseFloat(document.getElementById('side2').value)
	let c = parseFloat(document.getElementById('side3').value)

	let result = ''
	let sResult = '' 

	if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
		result = 'Please enter valid positive numbers for all sides.'
		sResult = ''
	} else {
		
		let s = (a + b + c) / 2
		sResult = `The semi-perimeter is ${s.toFixed(2)} units.`

		
		let area = Math.sqrt(s * (s - a) * (s - b) * (s - c))

		if (isNaN(area) || area <= 0) {
			result = 'The sides do not form a valid triangle.'
		} else {
			result = `The area of the triangle is ${area.toFixed(2)} square units.`
		}
	}

	document.getElementById('semiPerimeter').textContent = sResult 
	document.getElementById('resul').textContent = result 
}
