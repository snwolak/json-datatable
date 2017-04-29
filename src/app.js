require('./app.scss');
//import $ from'jquery';
import{ DataService } from'./services/data-service.js';
//import{ TempDatabase } from'./services/temp-database.js';
//import{ DataTable } from'./ui/data-table.js';

//let temp = 'test1,test2'.split(',');
DataService.getJSON('MOCK_DATA.json');
//let test = new DataTable(temp);
//document.getElementById('output').innerHTML = test.tableTemplate();
