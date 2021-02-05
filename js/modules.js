function updateShowModules() {
	var timeBox = document.getElementById("ShowTimeModule");
	var datetime = document.getElementById("datetime");
	var weatherBox = document.getElementById("ShowWeatherModule");
	var weatherforecast = document.getElementById("weather-forecast");
	var jinglesBox = document.getElementById("ShowJinglesModule");
	var jingles = document.getElementById("jinglesModules");
	var decks = document.getElementById("Decks");
	var decksBox = document.getElementById("ShowDecksModule");
	var playlists = document.getElementById("playlistModule");
	var midi = document.getElementById("midiModule");
	var midiBox = document.getElementById("ShowMidiModule");
	var decka = document.getElementById("DeckA");
	var deckb = document.getElementById("DeckB");
	var deckabuts = document.getElementsByClassName("AddToAButton");
	var deckbbuts = document.getElementsByClassName("AddToBButton");
	var DeckAVol = document.getElementById("DeckAVol");
	var DeckBVol = document.getElementById("DeckBVol");
	var DeckALengthRange = document.getElementById("DeckALengthRange");
	var DeckBLengthRange = document.getElementById("DeckBLengthRange");
	if (timeBox.checked == true){
		datetime.style.display = "block";
	} else {
		datetime.style.display = "none";
	}
	if (weatherBox.checked == true){
		weatherforecast.style.display = "block";
	} else {
		weatherforecast.style.display = "none";
	}
	if (jinglesBox.checked == true){
		jingles.style.display = "block";
	} else {
		jingles.style.display = "none";
	}
	if (midiBox.checked == true){
		midi.style.display = "block";
	} else {
		midi.style.display = "none";
	}
	if (decksBox.value == "0") {
		decks.style.display = "none";
		// deckabuts.style.display = "none";
		// deckbbuts.style.display = "none";
		playlists.style.display = "none";
	}
	if (decksBox.value == "1") {
		decka.style.display = "inline-block";
		deckb.style.display = "none";
		decks.style.display = "block";
		deckabuts.style.display = "inline";
		deckbbuts.style.display = "none";
		DeckBVol.style.display = "none";
		DeckBLengthRange.style.display = "none";
		shoveB();
	}
	if (decksBox.value == "2") {
		decks.style.display = "block";
		// deckabuts.style.display = "inline";
		// deckbbuts.style.display = "inline";
		// decka.style.display = "inline-block";
		// deckb.style.display = "inline-block";
		// DeckBVol.style.display = "inline-block";
		playlists.style.display = "block";
	}
}
