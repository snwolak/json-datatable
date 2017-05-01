require('./app.scss');
//import $ from'jquery';
import{ DataService } from'./services/data-service.js';
//import{ TempDatabase } from'./services/temp-database.js';
//import{ DataTable } from'./ui/data-table.js';

//LOADING JSON FROM FILE
DataService.getJSON('MOCK_DATA_FULL.json');


