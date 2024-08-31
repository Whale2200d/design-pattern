import Display from "./Display";
import Draft from "./Draft";

export default class CaptionDisplay implements Display {
	title(draft: Draft): void {
		console.log(`제목: ${draft.getTitle()}`);
	}
	author(draft: Draft): void {
		console.log(`저자: ${draft.getAuthor()}`);
	}
	content(draft: Draft): void {
		console.log("내용:");
		const content = draft.getContent();
		content.forEach((item) => {
			console.log(item);
		});
	}
}
