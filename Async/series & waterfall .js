
let async = require('async');
//------------Execute All function and then get result of all function in arrray
async.series([
	function (callback) {
		// do something...
		callback(null, 'one');
	},
	function (callback) {
		// do something...
		callback(null, 'two');
	}],
	// callback(optional)
	function (err, results) {
		console.log(results)
	});

//------------Execute one by one and throw callback to next function and lasty get one result 
async.waterfall([
	function (callback) {
		callback(null, 10) //throw callback to next function 
	},

	function (data,callback) { //throw callback to next function 
		data=data+1
		callback(null, data)
	},

	function (data2, callback) { //finally throw callback to next function 
		data2 = data2+1
		callback(null, data2)
	}]

	, (err, result) => {
		console.log(result)
	})
