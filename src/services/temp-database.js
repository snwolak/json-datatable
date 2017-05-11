import{ DataTable } from'./../components/data-table.js';
import{ Sorting } from'./sorting.js';
import{ Search } from'./../components/search.js';
import{ passingTableId } from'./../table.js';

export let temp = [];
export let db;
export class TempDatabase {
	constructor(data) {
		this.data = data;
		//this.tableId = tableId;
	}
	renderTable(start, end) {
		let headers = Object.keys(this.data[0]);
		let render = new DataTable(headers, this.data.slice(start, end));
		document.getElementById(passingTableId).innerHTML = render.tableTemplate();
		temp = [];
		temp.length === 0 ? db = this.data : db = temp;
		Sorting.add(headers);
		Search.add();
	}
}
