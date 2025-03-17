const sumAll = function (start, end) {
	if (!(Number.isInteger(start) && Number.isInteger(end)) || !(start >= 0 && end >= 0)) {
		return "ERROR"
	}
	if (start > end) {
		let tmp = start;
		start = end;
		end = tmp
	}
	return ((end - start + 1) * (start + end)) / 2
};


// Do not edit below this line
module.exports = sumAll;
