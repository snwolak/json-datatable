import{ TempDatabase } from'./temp-database.js';
export let tempDB = [];
export class DataService {
	constructor(url) {
	}
	static getJSON(url, tableId) {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.onload = function() {
			let data = JSON.parse(xhr.responseText);
			tempDB = data;
			new TempDatabase(data, tableId).renderTable(0, 5);
		};
		xhr.send();
	}
}

