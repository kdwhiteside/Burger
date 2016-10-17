var connection = require('./connection.js');
function questionMarks (num) {
	var array = [];
	for (var i = 0; i < num; i++) {
		array.push('?');
		return arr.toString();
	}
};
function objToSql(ob){
  //column1=value, column2=value2,...
  var arr = [];

  for (var key in ob) {
    arr.push(key + '=' + ob[key]);
};
var orm = {
	selectAll: function (cb) {
		var queryString = 'SELECT * FROM burgers';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		})
	},
	insertOne: function(cols, vals, cb) {
		var queryString = 'INSERT INTO burgers (' + cols.toString() + ') VALUES (' + questionMarks(vals.length) + ') ';
		connection.query(queryString, vals, function(err, result) {
        if (err) throw err;
        cb(result);
      });
	},
	update: function(table, objColVals, condition, cb) {
      var queryString = 'UPDATE ' + table;

      queryString = queryString + ' SET ' + objToSql(objColVals) + ' WHERE ' + condition;

      console.log(queryString)
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    }
};

module.exports = orm;