function random() {
  return Math.floor(Math.random() * 11);
}         
 
var digit = prompt('How many digits is your password?');
var num = parseInt(digit);
var times = prompt('How many do you want to see?');
var time = parseInt(times);

  for (i=0; i<times; i++) {
    document.write('<br>')
    for (a=0; a<num; a++) {
      document.write(random());
    }
  }
  
