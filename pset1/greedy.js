function check() {
  var num = document.getElementById("num").value; //Get the change owed to the client

  var c1 = .25; //All coins that will be used
  var c2 = .10;
  var c3 = .05;
  var c4 = .01;

  var coins = 0; //Total coins to return

  while(num > 0.00) {
    if (num >=c1) {
      coins++;
      num = num - c1;
    }
    else if (num >= c2) {
      coins++;
      num = num - c2;
    }
    else if (num >= c3) {
      coins++;
      num = num - c3;
    }
    else {
      coins++;
      num = num - c4;
    }
  }
  document.write("I gave you " + coins + " coins!");
}
