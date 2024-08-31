import Animal from "./Animal";
import Cat from "./Cat";
import Dog from "./Dog";
import Tiger from "./Tiger";
import TigerAdapter from "./TigerAdapter";

const list = Array<Animal>();

list.push(new Dog("멍멍이"));
list.push(new Cat("야옹이"));

// const tiger = new Tiger();
// tiger.name = "호돌이";
// list.push(tiger)

list.push(new TigerAdapter("호돌이"));

const tiger = list.forEach((animal) => {
	animal.sound();
});
