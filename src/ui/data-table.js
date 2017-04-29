export class DataTable {
	constructor(headers, data) {
		this.headers = headers;
		this.data = data;
	}
	tableTemplate() {
		let thHeaders = '';
		for(let h of this.headers) {
			thHeaders += `<th>${h}</th>`;
		}
		let tableContent = '';
		for(let d of this.data) {
			tableContent += `
			 <tr>`;
			tableContent += `<td>${d.id}</td>
							 <td>${d.first_name}</td>
							 <td>${d.last_name}</td>
							 <td>${d.date}</td>
							 <td>${d.language}</td>
							 <td>${d.job_title}</td>`;
			tableContent += `
			 </tr>`;
		}
		return `
			<table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
			<thead>
				<tr>
				${thHeaders}
				</tr>
			</thead>
			<tbody>
				${tableContent}
			</tbody>
			</table>
		`;
	}
}
