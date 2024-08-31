// Animal 클래스는 추상 클래스이므로, abstract를 클래스 키워드 앞에 붙여준다.
export default abstract class Animal {
	constructor(public name: string) {}

	abstract sound(): void;
}
