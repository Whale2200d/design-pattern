import Article from "./Article";
import EditableDisplayArticle from "./EditableDisplayArticle";
import SimpleDisplayArticle from "./SimpleDisplayArticle";

const article = new Article(
	"GIS 분야의 업무",
	[
		"공간 DB 구축 및 가공",
		"위치기반서비스 개발",
		"지도 기반 업무 시스템 설계 및 개발",
		"공간 정보 3차원 시각화",
		"영상 판독을 위한 딥러닝 학습 및 서비스 개발"
	],
	"GIS Developer"
);

const display = new SimpleDisplayArticle(article);
document.querySelector(".content").innerHTML = display.displayHtml();

document.querySelector(".edit-mode").addEventListener("change", (event) => {
	let display;

	if ((<HTMLInputElement>event.target).checked) {
		display = new EditableDisplayArticle(article);
	} else {
		display = new SimpleDisplayArticle(article);
	}
});
