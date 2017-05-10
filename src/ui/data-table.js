import moment from'moment';
import{ temp } from'../services/temp-database.js';
export class DataTable {
	constructor(headers, data) {
		this.headers = headers;
		this.data = data;
	}
	tableTemplate() {
		let thHeaders = '';
		this.headers.map(h => {
			let headToUpper = h.toString().replace(/[^A-Z0-9]/gi, ' ');
			thHeaders += `<th class="hoverable" id="${'tableHeader' + this.headers.indexOf(h)}">${headToUpper.slice(0, 1).toUpperCase() + headToUpper.slice(1)}</th>`;
		});
		let tableContent = '';
		this.data.map(d => {
			tableContent += `
			 <tr>`;
			for(let i of this.headers) {
				i.includes('date') === true ? tableContent += `<td>${moment(d[i]).format('LL')}</td>` : tableContent += `<td>${d[i]}</td>`;
			}
			tableContent += `
			</tr>`;
		});
		return `
			
				<div class="row">
					<div class="col s4 search-wrapper card">
						<input id="tableSearch">
						<i id="tableSearchButton" class="material-icons">${temp.length === 0 ? 'search' : 'close'}</i>
					</div>
				</div>
			
			<table class="centered responsive-table">
			<thead>
				<tr>
					${thHeaders}
				</tr>
				<tr>
					
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

