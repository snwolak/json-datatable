import{ DataTable } from'./../ui/data-table.js';
let array = [];
export class TempDatabase {
	constructor(data) {
		this.data = data;
	}
	tempArray() {
		let temp = 'id,First name, Last name, Date, Language, Job Title'.split(',');
		array.push(this.data);
		let test = new DataTable(temp, array);
		document.getElementById('output').innerHTML = test.tableTemplate();
	}
	send() {
		//document.getElementById('output').innerHTML += `<p>${this.data.id} ${this.data.first_name}</p>`;
	}
}

