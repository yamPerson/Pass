//var lOrN = prompt('Do you want a letter or number password? (l/n)');

function random() {
  return Math.floor(Math.random() * 9) + 1;
}         

function enter() {
  var chars = prompt('Enter characters');
  return chars;
}
                  
//if (lOrN === 'n') {
  
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
/*} else { 
  var number = prompt('How many characters do you want to add?');
  var characters = [''];
  
  for (i=0; i<number; i++) {
    enter()
    characters.push(chars);
    document.write('<br>');
    document.write(characters);
  }*/
  
