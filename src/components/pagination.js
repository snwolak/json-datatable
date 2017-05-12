import{ TempDatabase, db } from'./../services/temp-database.js';

export class Pagination {
	constructor(firstIndex, lastIndex) {
		this.firstIndex = firstIndex;
		this.lastIndex = lastIndex;
	}
	static HTML() {
		return `<div class="row">
					<div id="paginationResults" class="center col m12 xl4 l4 s12 ">
					</div>
				<div class="center col m12 xl4 l4 s12">
					<ul class="pagination ">
						<li class="waves-effect"><a href="#" id="previous"><i class="material-icons">chevron_left</i></a></li>
						<li class="waves-effect"><a href="#"><i class="material-icons" id="next">chevron_right</i></a></li>
					</ul>
				</div>
					<div class="input-field col m12 xl4 l4 s12">
						<select id="tableSelect">
							<option value="5">5</option>
							<option value="10">10</option>
							<option value="25">25</option>
							<option value="50">50</option>
						</select>
						<label>Entries</label>
					</div> 
           		</div>`;
	}
	static add(firstIndex, lastIndex) {
		let numOfPages = Number(document.getElementById('tableSelect').value);
		document.getElementById('previous').addEventListener('click', function() {
			firstIndex === 0 ? firstIndex : firstIndex = firstIndex - numOfPages;
			lastIndex === numOfPages ? lastIndex : lastIndex = lastIndex - numOfPages;
			new TempDatabase(db).renderTable(firstIndex, lastIndex);
			Pagination.paginationResults(firstIndex, lastIndex, db.length);
		});
		document.getElementById('next').addEventListener('click', function() {
			firstIndex === db.length - numOfPages || firstIndex + numOfPages > db.length ? firstIndex : firstIndex = firstIndex + numOfPages;
			lastIndex === db.length || lastIndex > db.length ? lastIndex : lastIndex = lastIndex + numOfPages;
			new TempDatabase(db).renderTable(firstIndex, lastIndex);
			Pagination.paginationResults(firstIndex, lastIndex, db.length);
		});
	}
	static paginationResults(firstIndex, lastIndex, results) {
		document.getElementById('paginationResults').innerHTML = `<p class="center-align"><h6>Showing ${firstIndex} to ${lastIndex > results ? results : lastIndex} of ${results} entries </h6></p>`;
	}
}
