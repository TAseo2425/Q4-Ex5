function getSignal() {
	var signalInput = document.getElementById("color").value.toLowerCase();

	switch (signalInput){
	case "yellow":
		document.getElementById("signal").innerHTML = "CAUTION! AT YOUR OWN RISK!";
		break;
	case "red":
		document.getElementById("signal").innerHTML = "STOP!";
		break;
	case "green":
		document.getElementById("signal").innerHTML = "GO!";
		break;

	default:
		document.getElementById("signal").innerHTML = "Error. Invalid color.";
		break;
	}
}