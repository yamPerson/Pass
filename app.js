var random = Math.floor(Math.random() * 9)+1;
var text = prompt('How many digits is your password? (Number between 4 and 6)');
var num = parseInt(text);

if (num === 6) {
  for(i = 0; i < 7; i++) {
    document.getElementByClassName('password').innerHTML = random;
  };
};
