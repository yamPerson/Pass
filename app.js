function random() {
  return Math.floor(Math.random() * 9) + 1;
}

for (i=0; i<100; i++) {
  document.getElementsByClassName('password')[0].innerHTML = random();
}
