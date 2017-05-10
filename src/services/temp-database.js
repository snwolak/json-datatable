import{ DataTable } from'./../ui/data-table.js';
import{ tempDB } from'./data-service.js';
//import moment from'moment';
let firstIndex = 0;
let endIndex = 5;
export class TempDatabase {
	constructor(data) {
		this.data = data;
	}
	tempArray(start, end) {
		let headers = Object.keys(this.data[0]);
		let render = new DataTable(headers, this.data.slice(start, end));
		document.getElementById('output').innerHTML = render.tableTemplate();
		//Pagination prototype
		document.getElementById('previous').addEventListener('click', function() {
			firstIndex === 0 ? firstIndex : firstIndex = firstIndex - 5;
			endIndex === 5 ? endIndex : endIndex = endIndex - 5;
			new TempDatabase(tempDB).tempArray(firstIndex, endIndex);
		});
		document.getElementById('next').addEventListener('click', function() {
			firstIndex === tempDB.length - 5 || firstIndex + 5 > tempDB.length ? firstIndex : firstIndex = firstIndex + 5;
			endIndex === tempDB.length || endIndex > tempDB.length ? endIndex : endIndex = endIndex + 5;
			new TempDatabase(tempDB).tempArray(firstIndex, endIndex);
		});
		//Search prototype
		function search() {
			let temp = [];
			tempDB.map(x => {
				let string = Object.values(x).join(' ').toLowerCase();
				let input = document.getElementById('tableSearch').value.toLowerCase().replace(/ /g, '[^]*');
				if(string.match(input)) {
					temp.push(x);
					console.log(JSON.stringify(x));
				}
			});
			firstIndex = 0;
			endIndex = 5;
			new TempDatabase(temp).tempArray(firstIndex, endIndex);
		}
		document.getElementById('tableSearchButton').onclick = search;
		//Adds Event Listener to table headers
		headers.map((x, i) => {
		//Sorting ProtoType
			function sort() {
				let tempSort = tempDB.sort(function(a, b) {
					if(a[headers[i]] < b[headers[i]]) {
						return -1;
					}
					if(a[headers[i]] > b[headers[i]]) {
						return 1;
					}
					return 0;
				});
				firstIndex = 0;
				endIndex = 5;
				new TempDatabase(tempSort).tempArray(firstIndex, endIndex);
				document.getElementById('tableHeader' + i).onclick = reverseSort;

			}
			function reverseSort() {
				let tempSort = tempDB.sort(function(a, b) {
					if(a[headers[i]] < b[headers[i]]) {
						return 1;
					}
					if(a[headers[i]] > b[headers[i]]) {
						return -1;
					}
					return 0;
				});
				firstIndex = 0;
				endIndex = 5;
				new TempDatabase(tempSort).tempArray(firstIndex, endIndex);
				document.getElementById('tableHeader' + i).onclick = sort;
			}
			return document.getElementById('tableHeader' + i).onclick = sort;
		});
	}
	send() {
		//document.getElementById('output').innerHTML += `<p>${this.data.id} ${this.data.first_name}</p>`;
	}
}

