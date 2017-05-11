import{ TempDatabase, db } from'./../services/temp-database.js';
import{ Pagination } from'./../components/pagination.js';
export class Sorting {
	constructor() {

	}
	static add(headers) {
		headers.map((x, i) => {
			function sort() {
				db.sort(function(a, b) {
					if(a[headers[i]] < b[headers[i]]) {
						return -1;
					}
					if(a[headers[i]] > b[headers[i]]) {
						return 1;
					}
					return 0;
				});
				let firstIndex = 0;
				let endIndex = Number(document.getElementById('tableSelect').value);
				new TempDatabase(db).renderTable(firstIndex, endIndex);
				Pagination.add(firstIndex, endIndex);
				document.getElementById('tableHeader' + i).onclick = reverseSort;
			}
			function reverseSort() {
				db.sort(function(a, b) {
					if(a[headers[i]] < b[headers[i]]) {
						return 1;
					}
					if(a[headers[i]] > b[headers[i]]) {
						return -1;
					}
					return 0;
				});
				let firstIndex = 0;
				let endIndex = Number(document.getElementById('tableSelect').value);
				new TempDatabase(db).renderTable(firstIndex, endIndex);
				Pagination.add(firstIndex, endIndex);
				document.getElementById('tableHeader' + i).onclick = sort;
			}
			return document.getElementById('tableHeader' + i).onclick = reverseSort;
		});
	}
}
