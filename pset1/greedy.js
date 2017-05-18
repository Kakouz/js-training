function greedy() {
  var num = document.getElementById('num').value; //Get the total to return to the client
  var coins = 0;  //Calculate the amount of coins to return

while (num > 0) {
  if (num >= 0.25) {
    coins++;
    num - 0.25;
  } else if (num >= 0.10) {
    coins++;
    num - 0.10;
  } else if (num >= 0.05) {
    coins++;
    num - 0.05;
  } else if (num >= 0.01) {
    coins++;
    num - 0.01;
  }
}
  document.write("I gave you " + coins + " coins!");
}
