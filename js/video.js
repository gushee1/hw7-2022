const vid = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	vid.autoplay = false;
	vid.loop = false;
	vid.load();
});

const playButton = document.getElementById("play");
playButton.addEventListener("click", function() {
	vid.play();
	document.getElementById("volume").innerHTML = document.getElementById("slider").value;
});

const pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click", function() {
	console.log("Pause Video");
	vid.pause();
})

const slowButton = document.getElementById("slower")
slowButton.addEventListener("click", function() {
	vid.playbackRate = vid.playbackRate - .1;
	console.log(vid.playbackRate);
})

const fastButton = document.getElementById("faster")
fastButton.addEventListener("click", function() {
	vid.playbackRate = vid.playbackRate + .1;
	console.log(vid.playbackRate);
})

const skipButton = document.getElementById("skip")
skipButton.addEventListener("click", function() {
	vid.currentTime += 10;
	console.log(vid.currentTime)
})

const muteButton = document.getElementById("mute")
muteButton.addEventListener("click", function() {
	vid.muted = !vid.muted;
	muteButton.innerHTML = vid.muted ? "Unmute" : "Mute";
})

const volSlider = document.getElementById("slider")
volSlider.addEventListener("click", function() {
	vid.volume = volSlider.value / 100;
	document.getElementById("volume").innerHTML = volSlider.value;
})

const oldStyleButton = document.getElementById("vintage")
oldStyleButton.addEventListener("click", function() {
	vid.classList.add("oldSchool");
})

const newStyleButton = document.getElementById("orig")
newStyleButton.addEventListener("click", function() {
	vid.classList.remove("oldSchool")
})