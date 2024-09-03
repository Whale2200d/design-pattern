import Item from "./Item";

export default class Shield implements Item {
	use(): string {
		return "You raise the shield!";
	}
}
