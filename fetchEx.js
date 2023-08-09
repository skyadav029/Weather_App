
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'pnr-status-indian-railway.p.rapidapi.com'
	}
};

fetch('https://pnr-status-indian-railway.p.rapidapi.com/pnr-check/8531575878', )
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));