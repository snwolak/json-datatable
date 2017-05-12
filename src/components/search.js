import{ TempDatabase, db, temp } from'./../services/temp-database.js';
import{ tempDB } from'./../services/data-service.js';
import{ Pagination } from'./../components/pagination.js';

export class Search {
	constructor() {

	}
	static HTML() {
		return `<div class="row card">
					<div class="col s12 search-wrapper right">
						<input placeholder="search" id="tableSearch">
						<i id="tableSearchButton" class="material-icons">search</i>
					</div>
				</div>`;
	}
	static add() {
		document.getElementById('tableSearchButton').onclick = Search.search;
	}
	static search() {

		if(document.getElementById('tableSearch').value.length === 0) {
			let firstIndex = 0;
			let lastIndex = Number(document.getElementById('tableSelect').value);
			new TempDatabase(tempDB).renderTable(firstIndex, lastIndex);
			Pagination.add(firstIndex, lastIndex);
			Pagination.paginationResults(firstIndex, lastIndex, db.length);
			document.getElementById('tableSearchButton').innerHTML = 'search';
		} else {
			db.map(x => {
				let string = Object.values(x).join(' ').toLowerCase();
				let input = document.getElementById('tableSearch').value.toLowerCase().replace(/ /g, '[^]*');
				if(string.match(input)) {
					temp.push(x);
				}
			});
			let firstIndex = 0;
			let lastIndex = Number(document.getElementById('tableSelect').value);
			document.getElementById('tableSearch').value = '';
			new TempDatabase(temp).renderTable(firstIndex, lastIndex);
			Pagination.add(firstIndex, lastIndex);
			Pagination.paginationResults(firstIndex, lastIndex, db.length);
			document.getElementById('tableSearchButton').innerHTML = 'close';
		}

	}
}
