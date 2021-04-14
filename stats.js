function fetchData() {
	fetch('https://api.statcord.com/v3/822105903599058994').then(response => {
		return response.json();
	}).then(data => {
		console.log(data.data[0].servers);
		document.querySelector('#server-count').innerHTML = `<p>${data.data[0].servers}+</p>`
		console.log(data.data[0].users);
		document.querySelector('#user-count').innerHTML = `<p>${data.data[0].users}+</p>`
	}).catch(error => {
		console.log(error);
	});
}

fetchData();

// yo if ur reading this invite epicbot and vote epicbot and all that kthxbai luv u <3