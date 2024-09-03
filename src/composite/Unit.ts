export default abstract class Unit {
	constructor(private name: string) {}

	getName(): string {
		return this.name;
	}

	/**
	 * 추상 메서드인 이유는 파일과 폴더에 대한 용량을 얻는 방법이 다르기 때문이다.
	 * 파일은 용량이 있지만, 폴더는 용량이 없기 때문이다.
	 * 파일의 경우 자신의 크기를 포함하는 파일들의 용량과 포함하는 폴더에 용량을 모두 구해 합해서 단언하기 때문이다.
	 */
	abstract getSize(): number;
}
