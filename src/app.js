require('./app.scss');
//import $ from'jquery';
import{ DataService, tempDB } from'./services/data-service.js';
import{ TempDatabase } from'./services/temp-database.js';
//import{ DataTable } from'./ui/data-table.js';

//LOADING JSON FROM FILE
DataService.getJSON('MOCK_DATA_FULL.json');


//PAGINATION PROTOTYPE
let next = document.getElementById('next');
let start = 0;
let end = 5;
next.addEventListener('click', function() {
	start = start + 5;
	end = end + 5;
	console.log(start);
	new TempDatabase(tempDB).tempArray(start, end);
});
