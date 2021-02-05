
function DeckAPlay() {
	document.getElementById("DeckAAudioEl").play();
	document.getElementById('DeckAPlay').style.display = "none";
	document.getElementById('DeckAPause').style.display = "inline-block";
}

function DeckAPause() {
	document.getElementById('DeckAAudioEl').pause();
	document.getElementById('DeckAPlay').style.display = "inline-block";
	document.getElementById('DeckAPause').style.display = "none";
}

function DeckACue() {
	document.getElementById('DeckAAudioEl').currentTime = 0;
}

function shoveA() {
	document.getElementById('DeckAAudioDiv').innerHTML = '<audio id="DeckAAudioEl" src="" style="width:100%;">Your browser does not support audio elements</audio>';
	document.getElementById('DeckAPlay').style.display = "inline-block";
	document.getElementById('DeckAPause').style.display = "none";
	document.getElementById('DeckAPlay').disabled = true;
	document.getElementById('DeckAEject').disabled = true;
	document.getElementById('DeckALengthRange').disabled = true;
	document.getElementById("DeckARedLight").style.display = "block";
	document.getElementById("DeckAGreenLight").style.display = "none";
	document.getElementById("DeckAAmberLight").style.display = "none";
}

function DeckAEject() {
	var AEjectBox = confirm("Are you sure you want to eject Deck A?");
	if (AEjectBox == true) {
		shoveA();
	}
	else {
		var fafddgaj = "3";
	}
}

function DeckAMute() {
	var DeckAMuted = document.getElementById("DeckAAudioEl").muted;
	if (DeckAMuted == true) {
		document.getElementById('DeckAAudioEl').muted = false;
		document.getElementById("DeckAVol").value = PreAVol;
	} else {
		var PreAVol = document.getElementById("DeckAVol").value;
		document.getElementById('DeckAAudioEl').muted = true;
		document.getElementById("DeckAVol").value = "0";
	}
}

function DeckAVol() {
	var volA = document.getElementById("DeckAVol").value;
	var volANew = volA / 100;
	document.getElementById('DeckAAudioEl').volume = volANew;
	// console.log("Volume for Deck A set to " + volA);
	if (volA == "0") {
		document.getElementById("DeckAMute").style.display = "inline";
		document.getElementById("DeckAVolLow").style.display = "none";
		document.getElementById("DeckAVolUp").style.display = "none";
	}
	else if (volA < "45") {
		document.getElementById("DeckAMute").style.display = "none";
		document.getElementById("DeckAVolLow").style.display = "inline";
		document.getElementById("DeckAVolUp").style.display = "none";
	}
	else if (volA == "100") {
		document.getElementById("DeckAMute").style.display = "none";
		document.getElementById("DeckAVolLow").style.display = "none";
		document.getElementById("DeckAVolUp").style.display = "inline";
	}
	else {
		document.getElementById("DeckAMute").style.display = "none";
		document.getElementById("DeckAVolLow").style.display = "none";
		document.getElementById("DeckAVolUp").style.display = "inline";
	}
}


function DeckBPlay() {
	document.getElementById('DeckBAudioEl').play();
	document.getElementById('DeckBPlay').style.display = "none";
	document.getElementById('DeckBPause').style.display = "inline-block";
}

function DeckBPause() {
	document.getElementById('DeckBAudioEl').pause();
	document.getElementById('DeckBPlay').style.display = "inline-block";
	document.getElementById('DeckBPause').style.display = "none";
}

function DeckBCue() {
	document.getElementById('DeckBAudioEl').currentTime = 0;
}

function shoveB() {
	document.getElementById('DeckBAudioDiv').innerHTML = '<audio id="DeckBAudioEl" src="" style="width:100%;">Your browser does not support audio elements</audio>';
	document.getElementById('DeckBPlay').style.display = "inline-block";
	document.getElementById('DeckBPause').style.display = "none";
	document.getElementById('DeckBPlay').disabled = true;
	document.getElementById('DeckBEject').disabled = true;
	document.getElementById('DeckALengthRange').disabled = true;
}

function DeckBEject() {
	var BEjectBox = confirm("Are you sure you want to eject Deck B?");
	if (BEjectBox == true) {
		shoveB();
	}
	else {
		var fafddgaj = "3";
	}
}

function DeckBMute() {
	var DeckBMuted = document.getElementById("DeckBAudioEl").muted;
	if (DeckBMuted == true) {
		document.getElementById('DeckBAudioEl').muted = false;
		document.getElementById("DeckBVol").value = PreBVol;
	} else {
		var PreBVol = document.getElementById("DeckBVol").value;
		document.getElementById('DeckBAudioEl').muted = true;
		document.getElementById("DeckBVol").value = "0";
	}
}

function DeckBVol() {
	var volB = document.getElementById("DeckBVol").value;
	// var volBNew = volB / 100;
	document.getElementById('DeckBAudioEl').volume = volBNew;
	console.log("Volume for Deck B set to " + volB);
	if (volB == "0") {
		document.getElementById("DeckBMute").style.display = "inline";
		document.getElementById("DeckBVolLow").style.display = "none";
		document.getElementById("DeckBVolUp").style.display = "none";
	}
	else if (volB < "45") {
		document.getElementById("DeckBMute").style.display = "none";
		document.getElementById("DeckBVolLow").style.display = "inline";
		document.getElementById("DeckBVolUp").style.display = "none";
	}
	else {
		document.getElementById("DeckBMute").style.display = "none";
		document.getElementById("DeckBVolLow").style.display = "none";
		document.getElementById("DeckBVolUp").style.display = "inline";
	}
}


function getDeckTimes() {
	var DeckBDuration = document.getElementById("DeckBAudioEl").duration;
	var DeckBCurrent = document.getElementById("DeckBAudioEl").currentTime;
	var DeckBRemaining = DeckBDuration - DeckBCurrent;

	var DeckBDurationH = Math.floor(DeckBDuration / 60 / 60);
	var DeckBDurationM = Math.floor(DeckBDuration / 60) - (DeckBDurationH * 60);
	var DeckBDurationS = DeckBDuration % 60;
	var DeckBDurationS = DeckBDurationS.toFixed(2);
	var DeckBDurationF = DeckBDurationH.toString().padStart(2, '0') + ':' + DeckBDurationM.toString().padStart(2, '0') + ':' + DeckBDurationS.toString().padStart(2, '0');

	var DeckBCurrentH = Math.floor(DeckBCurrent / 60 / 60);
	var DeckBCurrentM = Math.floor(DeckBCurrent / 60) - (DeckBCurrentH * 60);
	var DeckBCurrentS = DeckBCurrent % 60;
	var DeckBCurrentS = DeckBCurrentS.toFixed(2);
	var DeckBCurrentF = DeckBCurrentH.toString().padStart(2, '0') + ':' + DeckBCurrentM.toString().padStart(2, '0') + ':' + DeckBCurrentS.toString().padStart(2, '0');

	var DeckBRemainingH = Math.floor(DeckBRemaining / 60 / 60);
	var DeckBRemainingM = Math.floor(DeckBRemaining / 60) - (DeckBRemainingH * 60);
	var DeckBRemainingS = DeckBRemaining % 60;
	var DeckBRemainingS = DeckBRemainingS.toFixed(2);
	var DeckBRemainingF = DeckBRemainingH.toString().padStart(2, '0') + ':' + DeckBRemainingM.toString().padStart(2, '0') + ':' + DeckBRemainingS.toString().padStart(2, '0');


	var DeckADuration = document.getElementById("DeckAAudioEl").duration;
	var DeckACurrent = document.getElementById("DeckAAudioEl").currentTime;
	var DeckARemaining = DeckADuration - DeckACurrent;

	var DeckADurationH = Math.floor(DeckADuration / 60 / 60);
	var DeckADurationM = Math.floor(DeckADuration / 60) - (DeckADurationH * 60);
	var DeckADurationS = DeckADuration % 60;
	var DeckADurationS = DeckADurationS.toFixed(2);
	var DeckADurationM = DeckADurationM.toFixed(2);
	var DeckADurationF = DeckADurationH.toString().padStart(2, '0') + ':' + DeckADurationM.toString().padStart(2, '0') + ':' + DeckADurationS.toString().padStart(2, '0');

	var DeckACurrentH = Math.floor(DeckACurrent / 60 / 60);
	var DeckACurrentM = Math.floor(DeckACurrent / 60) - (DeckACurrentH * 60);
	var DeckACurrentS = DeckACurrent % 60;
	var DeckACurrentS = DeckACurrentS.toFixed(2);
	var DeckACurrentM = DeckACurrentM.toFixed(2);
	var DeckACurrentF = DeckACurrentH.toString().padStart(2, '0') + ':' + DeckACurrentM.toString().padStart(2, '0') + ':' + DeckACurrentS.toString().padStart(4, '0');

	var DeckARemainingH = Math.floor(DeckARemaining / 60 / 60);
	var DeckARemainingM = Math.floor(DeckARemaining / 60) - (DeckARemainingH * 60);
	var DeckARemainingS = DeckARemaining % 60;
	var DeckARemainingM = DeckARemainingM.toFixed(2);
	var DeckARemainingS = DeckARemainingS.toFixed(2);
	var DeckARemainingF = DeckARemainingH.toString().padStart(2, '0') + ':' + DeckARemainingM.toString().padStart(2, '0') + ':' + DeckARemainingS.toString().padStart(2, '0');

	document.getElementById("DeckACurrentText").innerHTML = DeckACurrentF;
	document.getElementById("DeckADurationText").innerHTML = DeckADurationF;
	document.getElementById("DeckARemainingText").innerHTML = DeckARemainingF;



var DeckACurrentTextHTML = document.getElementById("DeckACurrentText");
var DeckADurationTextHTML = document.getElementById("DeckADurationText");
var DeckARemainingTextHTML = document.getElementById("DeckARemainingText");
var DeckBCurrentTextHTML = document.getElementById("DeckBCurrentText");
var DeckBDurationTextHTML = document.getElementById("DeckBDurationText");
var DeckBRemainingTextHTML = document.getElementById("DeckBRemainingText");

if (DeckACurrentF == "NaN:NaN:NaN") {
	document.getElementById("DeckACurrentText").innerHTML = "--:--";
} else {
	document.getElementById("DeckACurrentText").innerHTML = DeckACurrentF;
}
if (DeckADurationF == "NaN:NaN:NaN") {
	document.getElementById("DeckADurationText").innerHTML = "--:--";
} else {
	document.getElementById("DeckADurationText").innerHTML = DeckADurationF;
}
if (DeckARemainingF == "NaN:NaN:NaN") {
	document.getElementById("DeckARemainingText").innerHTML = "--:--";
} else {
	document.getElementById("DeckARemainingText").innerHTML = DeckARemainingF;
}
if (DeckBCurrentF == "NaN:NaN:NaN") {
	document.getElementById("DeckBCurrentText").innerHTML = "--:--";
} else {
	document.getElementById("DeckBCurrentText").innerHTML = DeckBCurrentF;
}
if (DeckBDurationF == "NaN:NaN:NaN") {
	document.getElementById("DeckBDurationText").innerHTML = "--:--";
} else {
	document.getElementById("DeckBDurationText").innerHTML = DeckBDurationF;
}
if (DeckBRemainingF == "NaN:NaN:NaN") {
	document.getElementById("DeckBRemainingText").innerHTML = "--:--";
} else {
	document.getElementById("DeckBRemainingText").innerHTML = DeckBRemainingF;
}

	setTimeout(getDeckTimes, 50);
}

function DeckANotPlay() {
	document.getElementById("DeckARedLight").style.display = "inline";
	document.getElementById("DeckAAmberLight").style.display = "none";
	document.getElementById("DeckAGreenLight").style.display = "none";
}

function DeckACanPlay() {
	document.getElementById("DeckARedLight").style.display = "none";
	document.getElementById("DeckAAmberLight").style.display = "inline";
	document.getElementById("DeckAGreenLight").style.display = "none";
}

function DeckACanPlayThrough() {
	document.getElementById("DeckARedLight").style.display = "none";
	document.getElementById("DeckAAmberLight").style.display = "none";
	document.getElementById("DeckAGreenLight").style.display = "inline";
}

function DeckBNotPlay() {
	document.getElementById("DeckBRedLight").style.display = "inline";
	document.getElementById("DeckBAmberLight").style.display = "none";
	document.getElementById("DeckBGreenLight").style.display = "none";
}

function DeckBCanPlay() {
	document.getElementById("DeckBRedLight").style.display = "none";
	document.getElementById("DeckBAmberLight").style.display = "inline";
	document.getElementById("DeckBGreenLight").style.display = "none";
}

function DeckBCanPlayThrough() {
	document.getElementById("DeckBRedLight").style.display = "none";
	document.getElementById("DeckBAmberLight").style.display = "none";
	document.getElementById("DeckBGreenLight").style.display = "inline";
}


function DecksCheckStatus() {
	var DeckAReadyState = document.getElementById("DeckAAudioEl").readyState;
	if (DeckAReadyState == 0) {
		DeckANotPlay();
	} else if (DeckAReadyState == 3) {
		DeckACanPlay();
	} else {
		DeckACanPlayThrough();
	}
	var DeckBReadyState = document.getElementById("DeckBAudioEl").readyState;
	if (DeckBReadyState == 0) {
		DeckBNotPlay();
	} else if (DeckBReadyState == 3) {
		DeckBCanPlay();
	} else {
		DeckBCanPlayThrough();
	}
	setTimeout(DecksCheckStatus, 1000);
}
