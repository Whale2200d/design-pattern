import Decorator from "./Decorator";
import Item from "./Item";

export default class LineNumberDecorator extends Decorator {
	getLinesCount(): number {
		return this.targetItem.getLinesCount();
	}

	getLength(i: number): number {
		return this.targetItem.getLength(i) + 6;
	}

	getMaxLength(): number {
		return this.targetItem.getMaxLength() + 6;
	}

	getString(i: number): string {
		return (
			`<span style='color:green'>` +
			`${i}`.padStart(4, "0") +
			`</span><span style='color:gray'>: </span>${this.targetItem.getString(i)}`
		);
	}

	constructor(targetItem: Item) {
		super(targetItem);
	}
}
