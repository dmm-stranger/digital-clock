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

	let formattedTimeString = `${hours} : ${minutes} : ${seconds}`;
	const dayName = localDate.toLocaleDateString(undefined, { weekday: 'long' });
	const day = String(localDate.getDate()).padStart(2, '0');
	const month = String(localDate.getMonth() + 1).padStart(2, '0'); // Month starts from 0
	const year = localDate.getFullYear();

	let formattedDate = `${day} / ${month} / ${year}`;

	document.getElementById('clock').innerHTML = formattedTimeString;
	document.getElementById('ampm').innerHTML = ampm;
	document.getElementById('day').innerHTML = dayName;
	document.getElementById('date').innerHTML = formattedDate;
}

setInterval(updateClock, 1000);
updateClock();
