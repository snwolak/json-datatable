export class Test {
	constructor(imie, nazwisko) {
		this.imie = imie;
		this.nazwisko = nazwisko;
	}
	logThis() {
		console.log(this.imie + ' ' + this.nazwisko);
	}
}
