//import{ TempDatabase } from'./../services/temp-database.js';
export class DataTable {
	constructor(headers, data) {
		this.headers = headers;
		this.data = data;
	}
	tableTemplate() {
		let thHeaders = '';
		this.headers.map(h => {
			thHeaders += `<th class="hoverable" id="${'tableHeader' + this.headers.indexOf(h)}">${h}</th>`;
		});
		let tableContent = '';
		this.data.map(d => {
			tableContent += `
			 <tr>`;
			for(let i of this.headers) {
				tableContent += `<td>${d[i]}</td>`;
			}
			tableContent += `
			</tr>`;
		});
		return `
			<table class="centered striped">
			<thead>
				<tr>
				${thHeaders}
				</tr>
			</thead>
			<tbody>
				${tableContent}
			</tbody>
			</table>
			<div class="center"> 
				<ul class="pagination">
   					<li class="waves-effect"><a href="#" id="previous"><i class="material-icons">chevron_left</i></a></li>
    				<li class="waves-effect"><a href="#"><i class="material-icons" id="next">chevron_right</i></a></li>
  				</ul>
           </div>
			
		`;
	}

}

