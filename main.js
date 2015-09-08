function onReady(){
	console.log('Hello Chapter 2');


	var button = document.getElementById("newPomo");
	button.addEventListener("click", function() {
		var box = new Box;
	});

}

var backgroundImages = [
  "url(css/images/smallerApple.png)"
];

function Box() {
	var wrapper = document.getElementById("wrapper");
	var boxes = document.createElement('div');
	boxes.className = "boxes";
	boxes.style.width = 500 + 'px';
	boxes.style.height = 500 + 'px';
	boxes.style.backgroundImage = backgroundImages[0];
	wrapper.appendChild(boxes);

	var box = document.createElement('div');
	box.style.height = 200 + 'px';
	box.style.width = 300 + 'px';
	box.className = "box";


	box.style.backgroundColor = "#000";
	boxes.appendChild(box);




}



window.onload = onReady;
