function celsiusToFahrenheit(celsius) {
	return (celsius * 9) / 5 + 32
}

function fahrenheitToCelsius(fahrenheit) {
	return ((fahrenheit - 32) * 5) / 9
}

function convertTemperature() {
	let temp = parseFloat(document.getElementById('temperature').value)
	let unit = document.getElementById('unit').value
	let result = ''

	if (isNaN(temp)) {
		result = 'Please enter a valid temperature.'
	} else {
		if (unit === 'C') {
			let fahrenheit = celsiusToFahrenheit(temp)
			result = `${temp}°C is ${fahrenheit.toFixed(2)}°F`
		} else if (unit === 'F') {
			let celsius = fahrenheitToCelsius(temp)
			result = `${temp}°F is ${celsius.toFixed(2)}°C`
		}
	}

	document.getElementById('result').textContent = result
}
