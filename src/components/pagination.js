import{ TempDatabase, db } from'./../services/temp-database.js';

export class Pagination {
	constructor(firstIndex, lastIndex) {
		this.firstIndex = firstIndex;
		this.lastIndex = lastIndex;
	}
	static HTML() {
		return `<div class="row center card">
				<div class="col s4">
					<p><h6>Results placeholder</h6></p>
					</div>
				<div class="col s4">
					<ul class="pagination">
						<li class="waves-effect"><a href="#" id="previous"><i class="material-icons">chevron_left</i></a></li>
						<li class="waves-effect"><a href="#"><i class="material-icons" id="next">chevron_right</i></a></li>
					</ul>
				</div>
					<div class="input-field col s2 right">
						<select id="tableSelect">
							<option value="5">5</option>
							<option value="10">10</option>
							<option value="25">25</option>
							<option value="50">50</option>
						</select>
						<label>Entries on page</label>
					</div> 
           		</div>`;
	}
	static add(firstIndex, lastIndex) {
		let numOfPages = Number(document.getElementById('tableSelect').value);
		document.getElementById('previous').addEventListener('click', function() {
			firstIndex === 0 ? firstIndex : firstIndex = firstIndex - numOfPages;
			lastIndex === numOfPages ? lastIndex : lastIndex = lastIndex - numOfPages;
			new TempDatabase(db).renderTable(firstIndex, lastIndex);
		});
		document.getElementById('next').addEventListener('click', function() {
			firstIndex === db.length - numOfPages || firstIndex + numOfPages > db.length ? firstIndex : firstIndex = firstIndex + numOfPages;
			lastIndex === db.length || lastIndex > db.length ? lastIndex : lastIndex = lastIndex + numOfPages;
			new TempDatabase(db).renderTable(firstIndex, lastIndex);
			console.log('firstIndex: ' + firstIndex);
			console.log('lastIndex: ' + lastIndex);
		});
	}

	static numOfPages(num) {

	}

}
