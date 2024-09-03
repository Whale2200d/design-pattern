import DigitFactory from "./DigitFactory";
import Number from "./Number";

const factory = new DigitFactory();

const domTarget = document.querySelector("#tmp") as Element;

let value = 434331;

setInterval(() => {
	const number = new Number(factory, value++);
	number.put(domTarget);
}, 100);
