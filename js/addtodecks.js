function AddToA".$row['id']."() {
	try {
		document.getElementById('DeckAAudioDiv').innerHTML = ".$smarks.$sourcea.$smarks.";
		document.getElementById('DeckAArtistText').innerHTML = Artists".$row['id'].";
		document.getElementById('DeckASongText').innerHTML = '".$row['Song']."';
		document.getElementById('DeckAAlbumText').innerHTML = '".$row['Album']."';
		document.getElementById('DeckAPlay').disabled = false;
		document.getElementById('DeckAEject').disabled = false;
		document.getElementById('DeckAAudioEl').volume = volANew;
		document.getElementById('DeckALengthRange').disabled = false;
		document.getElementById('pictureA').src = 'https://sprousewebsitestest.com/imperium/songs/".$row['MainArtist']."/".$row['Album']."/".$row['Album'].".jpg';
		DeckAPause()
		getDeckTimes();
		document.getElementById('DeckAAudioEl').load();
	} catch (e) {
		console.error(e.name);
		console.error(e.message);
		document.getElementById("snackbar").innerHTML = e.name + e.message + "Unable to add song to Deck A";
		snackbar();
	}
}

function AddToB".$row['id']."() {
	try {
		document.getElementById('DeckBAudioDiv').innerHTML = ".$smarks.$sourceb.$smarks.";
		document.getElementById('DeckBArtistText').innerHTML = '".$row['MainArtist'].$row['OtherArtist1'].$row['OtherArtist2'].$row['OtherArtist3'].$row['OtherArtist4']."';
		document.getElementById('DeckBSongText').innerHTML = '".$row['Song']."';
		document.getElementById('DeckBAlbumText').innerHTML = '".$row['Album']."';
		document.getElementById('DeckBPlay').disabled = false;
		document.getElementById('DeckBEject').disabled = false;
		document.getElementById('DeckBAudioEl').volume = volBNew;
		document.getElementById('DeckBLengthRange').disabled = false;
		document.getElementById('pictureB').src = 'https://sprousewebsitestest.com/imperium/songs/".$row['MainArtist']."/".$row['Album']."/".$row['Album'].".jpg';
		DeckBPause()
		getDeckTimes();
		document.getElementById('DeckBAudioEl').load();
	} catch (e) {
		console.error(e.name);
		console.error(e.message);
		document.getElementById("snackbar").innerHTML = e.name + e.message + "Unable to add song to Deck B";
		snackbar();
	}
}
