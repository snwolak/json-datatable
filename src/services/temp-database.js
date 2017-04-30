import{ DataTable } from'./../ui/data-table.js';
export class TempDatabase {
	constructor(data) {
		this.data = data;
	}
	tempArray(start, end) {
		let headers = 'id,First name, Last name, Date, Language, Job Title'.split(',');
		let test = new DataTable(headers, this.data.slice(start, end));
		document.getElementById('output').innerHTML = test.tableTemplate();
	}
	send() {
		//document.getElementById('output').innerHTML += `<p>${this.data.id} ${this.data.first_name}</p>`;
	}
}

