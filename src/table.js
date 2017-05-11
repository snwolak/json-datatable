import'babel-polyfill';
require('./table.scss');
import $ from'jquery';
import{ DataService } from'./services/data-service.js';
import{ Pagination } from'./components/pagination.js';
import{ TempDatabase, db } from'./services/temp-database.js';
import{ Search } from'./components/search.js';

export let passingTableId;
export class Table {
	constructor(url, searchBarId, tableId, footerId) {
		this.url = url;
		this.searchBarId = searchBarId;
		this.tableId = tableId;
		this.footerId = footerId;
	}
	create() {
		DataService.getJSON(this.url, this.tableId);
		document.getElementById(this.searchBarId).innerHTML = Search.HTML();
		document.getElementById(this.footerId).innerHTML = Pagination.HTML(0, 5, 5);
		passingTableId = this.tableId;
		$(document).ready(function() {
			let start = 0;
			let end = Number(document.getElementById('tableSelect').value);
			Pagination.add(start, end);
			$('select').material_select();
			$('#tableSelect').change(function() {
				end = Number(document.getElementById('tableSelect').value);
				new TempDatabase(db).renderTable(start, end);
				Pagination.add(start, end);
			});
		});
	}
}


