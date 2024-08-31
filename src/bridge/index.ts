import CaptionDisplay from "./CaptionDisplay";
import CharactersCount from "./CharactersCount";
import Draft from "./Draft";
import SimpleDisplay from "./SimpleDisplay";

const title = "복원된 지구";
const author = "김형준";
const content = ["플라스틱 사용의 감소와", "바다 생물 어획량 감소로 인하여", "지구는 복원되었다."];

// const draft = new Draft(title, author, content);
const draft = new CharactersCount(title, author, content);

// const display = new SimpleDisplay();
const display = new CaptionDisplay();
draft.print(display);
