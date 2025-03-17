const repeatString = function(str, l) {
	let result= ""
	if (l < 0)
		return "ERROR"
	for (let i = 0; i < l; i++) {
		result += str
	}
	return result
};

// Do not edit below this line
module.exports = repeatString;
