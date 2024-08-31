import Animal from "./Animal";

export default class Dog extends Animal {
	constructor(public name: string) {
		super(name);
	}

	sound(): void {
		console.log(`${this.name}는 멍멍`);
	}
}
