function calculateFibonacci() {
	var numTerms = parseInt(document.getElementById('terms').value)
	var fibSequence = []
	if (isNaN(numTerms) || numTerms <= 0) {
		document.getElementById('result19').innerHTML =
			'Please enter a positive integer.'
	} else {
		var a = 0,
			b = 1,
			nextTerm
		for (var i = 1; i <= numTerms; i++) {
			fibSequence.push(a) 
			nextTerm = a + b 
			a = b 
			b = nextTerm 
		}
		document.getElementById('result19').innerHTML = fibSequence.join(', ')
	}
}
