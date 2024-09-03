import Item from "./Item";

export default class Sword implements Item {
	use(): string {
		return "You swing the sword!";
	}
}
