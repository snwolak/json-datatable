import moment from'moment/src/moment';
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
			<table class="centered responsive-table striped">
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
			`;
	}

}

