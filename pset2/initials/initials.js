function initials() {
  var name = document.getElementById("name").value;
  var arr = name.split(/\s+/);

  for (var i = 0; i < arr.length; i++) {
    document.write(arr[i][0]);
    document.write(" ");
  }
}
