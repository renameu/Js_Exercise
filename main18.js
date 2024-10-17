function findMostFrequent() {
	var input = document.getElementById('numberArray').value
	var numbers = input.split(',').map(Number) 
	var frequency = {}
	var maxFreq = 0
	var mostFrequent
	for (var i = 0; i < numbers.length; i++) {
		var num = numbers[i]
		if (frequency[num]) {
			frequency[num]++
		} else {
			frequency[num] = 1
		}
		if (frequency[num] > maxFreq) {
			maxFreq = frequency[num]
			mostFrequent = num
		}
	}
	if (isNaN(mostFrequent)) {
		document.getElementById('result18').innerHTML =
			'Invalid input! Please enter valid numbers.'
	} else {
		document.getElementById('result18').innerHTML =
			mostFrequent + ' (appears ' + maxFreq + ' times)'
	}
}
