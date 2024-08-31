// Tiger 클래스는 Private 접근자로 지정된 _name이라는 필드를 제공한다.
// Tiger 클래스는 예시를 위해 Animal 클래스와 형태가 완전히 다르다.
export default class Tiger {
	private _name: string | null = null;

	set name(v: string) {
		this._name = v;
	}

	get name(): string | null {
		return this._name;
	}

	// 울음소리를 문자열로 반환하는 메서드를 제공한다.
	roar(): string {
		return "어흥";
	}
}
