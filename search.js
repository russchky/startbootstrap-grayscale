	var numOne = document.getElementById("num-ones");
	numOne.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    add();
  }
});

function set(){
  	if(region.value === '0') {
  	return 'only search NA';
  } else {
  	return 'Only Search EUW';
  }
}

function add() {
  var one = (numOne.value);
  location.href = "SummPage.html" + one + set();
  return false;
}

	
	