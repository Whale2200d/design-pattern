import Digit from "./Digit";

/**
 * 원하는 수자에 대한 Digit 객체를 요청받으면
 * 해당 객체를 전달해주는 기능을 담당한다.
 * */
export default class DigitFactory {
	private pool: Array<Digit | null> = [null, null, null, null, null, null, null, null, null, null];

	getDigit(n: number): Digit {
		if (!this.pool[n]) this.pool[n] = new Digit(`./data/${n}.json`);
		return this.pool[n];
	}
}
