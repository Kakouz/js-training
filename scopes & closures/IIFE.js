var a = 2;

(function IIFE () { // wrap the function in parenthesis () and add a extra parethensis at the end () ex. (function({..}))().
  var a = 3
  console.log(a) // 3
})()

console.log(a) // 2
