function updateClock() {
	let localDate = new Date();

	let hours = localDate.getHours();
	let minutes = localDate.getMinutes();
	let seconds = localDate.getSeconds();

	let ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12 || 12;

	hours = hours.toString().padStart(2, '0');
	minutes = minutes.toString().padStart(2, '0');
	seconds = seconds.toString().padStart(2, '0');

	let formattedTimeString = `${hours} : ${minutes} : ${seconds} ${ampm}`;

	let options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};
	let dateString = localDate.toLocaleDateString(undefined, options);

	document.getElementById('lol').innerText = formattedTimeString;
	document.getElementById('pol').innerText = dateString;
}

setInterval(updateClock, 1000);
