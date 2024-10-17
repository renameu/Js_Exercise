function countVowelsAndConsonants() {
	var str = document.getElementById('inputString').value.toLowerCase()
	var vowels = 'aeiou'
	var vowelCount = 0
	var consonantCount = 0
	for (var i = 0; i < str.length; i++) {
		var char = str[i]
		if (vowels.includes(char)) {
			vowelCount++
		} else if (char >= 'a' && char <= 'z') {
			consonantCount++
		}
	}
	document.getElementById('vowelCount').innerHTML = vowelCount
	document.getElementById('consonantCount').innerHTML = consonantCount
}
