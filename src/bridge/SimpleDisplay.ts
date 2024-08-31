import Display from "./Display";
import Draft from "./Draft";

export default class SimpleDisplay implements Display {
	title(draft: Draft): void {
		console.log(`Title: ${draft.getTitle()}`);
	}
	author(draft: Draft): void {
		console.log(`Author: ${draft.getAuthor()}`);
	}
	content(draft: Draft): void {
		console.log("Content:");
		const content = draft.getContent();
		content.forEach((item) => {
			console.log(item);
		});
	}
}
