import Bow from "./Bow";
import Factory, { ItemName } from "./Factory";
import Item from "./Item";
import Shield from "./Shield";
import Sword from "./Sword";

class ItemCount {
	private _currentCount = 0;

	constructor(private _maxCount: number) {}

	get maxCount() {
		return this._maxCount;
	}

	isCreatable(): boolean {
		return this._currentCount < this._maxCount;
	}

	increaseCount(): void {
		if (this.isCreatable()) this._currentCount++;
	}
}

export default class ItemFactory extends Factory {
	protected isCreatable(name: ItemName): boolean {
		const itemCount = this.repository.get(name) as ItemCount;
		return itemCount.isCreatable();
	}

	protected createItem(name: ItemName): Item {
		let result: Item = new Sword();

		if (name === "sword") result = new Sword();
		else if (name === "shield") result = new Shield();
		else if (name === "bow") result = new Bow();

		return result;
	}
	protected postprocessItem(name: ItemName): void {
		const itemCount = this.repository.get(name) as ItemCount;
		itemCount.increaseCount();
	}

	private repository = new Map<ItemName, ItemCount>();

	constructor() {
		super();

		this.repository.set("sword", new ItemCount(3)); // sword는 최대 생성 가능 개수가 3개
		this.repository.set("shield", new ItemCount(5)); // shield는 최대 생성 가능 개수가 5개
		this.repository.set("bow", new ItemCount(2)); // bow는 최대 생성 가능 개수가 2개
	}
}
