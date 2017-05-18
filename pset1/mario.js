function myJsFunction(){
  var num = document.getElementById('input1').value; //Store the number inputted by user as 'num'

    for(var i = 0; i < num; i++) { //The outer loop controls how many rows it will be
        for(var j = 0; j < num-i-1; j++) { //This loop gives the spaces necessary
              document.write("&nbsp; &nbsp;");
        }
		      for(var k = 0; k < i+2; k++)  { //This loop puts the # symbols
    			     document.write("# ");
		}
		document.write("<br>"); //This part gives it a new line
	 }
}
