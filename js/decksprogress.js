var aud1 = document.getElementById("DeckAAudioEl");
var dur1 = document.getElementById("DeckALengthRange");
function mDur1() {
	document.getElementById("DeckALengthRange").max = document.getElementById("DeckAAudioEl").duration;
}

function mPlay1() {
	document.getElementById("DeckALengthRange").value = document.getElementById("DeckAAudioEl").currentTime;
}

function mSet1() {
	document.getElementById("DeckAAudioEl").currentTime = document.getElementById("DeckALengthRange").value;
}

var aud2 = document.getElementById("DeckBAudioEl");
var dur2 = document.getElementById("DeckBLengthRange");
function mDur2() {
	document.getElementById("DeckBLengthRange").max= document.getElementById("DeckBAudioEl").duration;
}

function mPlay2() {
	document.getElementById("DeckBLengthRange").value=document.getElementById("DeckBAudioEl").currentTime;
}

function mSet2() {
	document.getElementById("DeckBAudioEl").currentTime=document.getElementById("DeckBLengthRange").value;
}
