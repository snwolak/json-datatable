import{ TempDatabase } from'./temp-database.js';
export class DataService {
	constructor(url) {
	}
	static getJSON(url) {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.onload = function() {
			let data = JSON.parse(xhr.responseText);
			data.map(x => {
				return new TempDatabase(x).tempArray();
			});
		};
		xhr.send();
	}
}
