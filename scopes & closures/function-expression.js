var a = 2;

(function foo () { // <-- insert this
  var a = 3
  console.log(a + ' inside the scope') // 3
})() // <-- and this

console.log(a + ' outside the scope') // 2
