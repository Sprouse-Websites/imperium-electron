function snackbar() {
	var snackbar = document.getElementById("snackbar");
	snackbar.classList.add("show");
	setTimeout(function(){ snackbar.classList.remove("show"); }, 4000);
}

function ErrorSnackbar() {
	var errsnackbar = document.getElementById("ErrorSnackbar");
	errsnackbar.classList.add("show");
	setTimeout(function(){ errsnackbar.classList.remove("show"); }, 4000);
}

function offline() {
	var offlineSnackbar = document.getElementById("offlineSnackbar");
	offlineSnackbar.classList.add("show");
	onlineSnackbar.classList.remove("show");
}

function online() {
	var onlineSnackbar = document.getElementById("onlineSnackbar");
	onlineSnackbar.classList.add("show");
	offlineSnackbar.classList.remove("show");
}

/*
onError: function(error) {
console.log(':(', error.type, error.info);
}
*/
