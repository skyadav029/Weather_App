const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f0122d5660mshe60637236592900p19f905jsn3487dbe59f44',
		'X-RapidAPI-Host': 'indian-railway-irctc.p.rapidapi.com'
	}
};

fetch('https://indian-railway-irctc.p.rapidapi.com/getTrainId?trainno=1205', options)
	.then(response => response.json())
	.then(response => console.log(data))
	.catch(err => console.error(err));