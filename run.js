// to use methods from other files we simply use `require` with path name
var reader = require( './read' ),
    writer = require( './write' );

// call `read` method from read.js to read `source.txt`
reader.read( './raw_attendees.csv', function( data ){
  // change `I am` to `You are`
  //var changed = data.replace( 'I am', 'You are' );
  var lines=csv.split("\n");

  var result = [];

  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

	  var obj = {};
	  var currentline=lines[i].split(",");

	  for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  }

	  result.push(obj);

  }
  
  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
  
  // print out the data
  reader.print( JSON.stringify(result) );
  
  // save the changes to `changed.txt`
  writer.write( './changed.txt', changed );
});
