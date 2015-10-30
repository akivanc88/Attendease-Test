// to use methods from other files we simply use `require` with path name
var reader = require( './read' ),
    writer = require( './write' );
	analyzer = require( './analyze' );

reader.read( './raw_attendees.csv', function( data ){
  var lines=data.split("\n");

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
//validate email using regex  
 function validateEmail(email) { 
  
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

//phone validation regex
var regexObj =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//var subst = '$1 $2-$3'; 

var uniqueNames = [];
	nonuniqueNames = [];
for(i = 0; i< result.length; i++){
	
	if (result[i].phone!=undefined) {
		if(result[i].phone.indexOf("+")==0){
		console.log(result[i].phone);
		result[i].phone = result[i].phone.slice(3);
		}
		result[i].phone = result[i].phone.replace(regexObj, "($1) $2-$3");
		
	} else {
    // Invalid phone number
	}
		
    if(uniqueNames.indexOf(result[i].email) === -1){
		if (validateEmail(result[i].email)){
        uniqueNames.push(result[i]);
		
		} else {
			nonuniqueNames.push(result[i]);
		}        
    } else {
			nonuniqueNames.push(result[i]);
		}         
}
 writer.write( './valid_attendees.json', JSON.stringify(uniqueNames));
writer.write( './invalid_attendees.json', JSON.stringify(nonuniqueNames));

});
