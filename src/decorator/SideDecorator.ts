import Decorator from "./Decorator";
import Item from "./Item";

export default class SideDecorator extends Decorator {
	getLinesCount(): number {
		return this.targetItem.getLinesCount();
	}

	getLength(i: number): number {
		return this.targetItem.getLength(i) + this.ch.length * 2;
	}

	getMaxLength(): number {
		return this.targetItem.getMaxLength() + this.ch.length * 2;
	}

	getString(i: number): string {
		return (
			`<span style='color:gray'>${this.ch}</span>` +
			`${this.targetItem.getString(i)}` +
			`<span style='color:gray'>${this.ch}</span>`
		);
	}

	constructor(targetItem: Item, private ch: string) {
		super(targetItem);
	}
}
