function onReady(){

	var button = document.getElementById("newPomo");
	button.addEventListener("click", function() {
		var box = new Box;
	});

}

var backgroundImages = [
  "url(css/images/smallerApple.png)"
];

function Timer() {
	this.start_time = "00:00";
	this.target_id = "#timer";
}

Timer.prototype.init = function() {
	this.reset();
	setInterval(this.name + '.tick()', 1000);
}

Timer.prototype.reset = function() {
	time = this.start_time.split(":");
	this.minutes = parseInt(time_ary[0]);
	this.seconds = parseInt(time_ary[1]);
	this.update_target();
}

Timer.prototype.tick = function() {
	if(this.seconds < 59 && this.minutes < 25) {
			this.seconds += 1;
			if(this.seconds == 59) {
				this.minutes += 1;
				this.seconds = 0;
		}
	}
	this.update_target();
}

Timer.prototype.update_target = function() {
	seconds = this.seconds;
	if(seconds < 10) seconds = "0" + seconds;
	$(this.target_id).val(this.minutes + ":" + seconds);
}

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
	box.style.backgroundColor = "#fff";
	boxes.appendChild(box);

	var timer = document.createElement('div')
	timer.className = "timer";
	timer.innerHTML = "00:00"
	box.appendChild(timer);

}

window.onload = onReady;
