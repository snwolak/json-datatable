import{ TempDatabase, db } from'./temp-database.js';

let firstIndex = 0;
let endIndex = 5;

export class Pagination {
	constructor() {
	}
	static paginationButtons() {
		document.getElementById('previous').addEventListener('click', function() {
			firstIndex === 0 ? firstIndex : firstIndex = firstIndex - 5;
			endIndex === 5 ? endIndex : endIndex = endIndex - 5;
			new TempDatabase(db).tempArray(firstIndex, endIndex);
		});
		document.getElementById('next').addEventListener('click', function() {
			firstIndex === db.length - 5 || firstIndex + 5 > db.length ? firstIndex : firstIndex = firstIndex + 5;
			endIndex === db.length || endIndex > db.length ? endIndex : endIndex = endIndex + 5;
			new TempDatabase(db).tempArray(firstIndex, endIndex);
			document.getElementById('tableSearchButton').innerHTML === 'close' ? document.getElementById('tableSearchButton').innerHTML = 'close' : document.getElementById('tableSearchButton').innerHTML = 'search';
		});
	}

}
