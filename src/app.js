import'babel-polyfill';
require('./app.scss');
//import $ from'jquery';
import{ DataService } from'./services/data-service.js';
//import{ Pagination } from'./services/pagination.js';
//import{ TempDatabase } from'./services/temp-database.js';
//import{ DataTable } from'./ui/data-table.js';
//import moment from'moment';
//LOADING JSON FROM FILE
DataService.getJSON('MOCK_DATA.json');
//document.getElementById('test').innerHTML += moment('2016-01-01');

//Pagination.paginationButtons();
