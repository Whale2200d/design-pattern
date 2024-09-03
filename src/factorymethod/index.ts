import { ItemName } from "./Factory";
import ItemFactory from "./ItemFactory";

const factory = new ItemFactory();

const domOutput = document.getElementById("textarea") as HTMLTextAreaElement;
const buttons = document.querySelectorAll("button");

buttons.forEach((button) =>
	button.addEventListener("click", (event) => {
		const itemName = (event.target as HTMLElement).innerText;

		const item = factory.create(itemName as ItemName);
		if (item) {
			domOutput.value += `\n${item.use()}`;
		} else {
			domOutput.value += `\n${itemName} cannot be created.`;
		}

		domOutput.scrollTop = domOutput.scrollHeight;
	})
);
