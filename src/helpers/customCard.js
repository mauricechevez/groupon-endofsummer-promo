module.exports = function(data){
var str = '<table>';
  for (var i = 0; i < data.length; i++ ) {
    str += '<tr>';
    for (var key in data[i]) {
      str += '<td>' + data[i][key] + '</td>';
    };
    str += '</tr>';
  };
  str += '</table>';

  return (str);
};


// for each item in the object, I want to 
// create column (tr and td)
// Then add each key value pair from the object into a paragraph tag
