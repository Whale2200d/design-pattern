import Image from "./Image";
import RealImage from "./RealImage";

export default class ProxyImage implements Image {
	private image: RealImage | null = null;
	private domLayout: HTMLDivElement = document.createElement("div");
	private domTitle: HTMLDivElement = document.createElement("div");

	constructor(private title: string, private url: string, private parent: Element) {
		this.domLayout = document.createElement("div");
		this.domLayout.classList.add("layout");
		this.parent.append(this.domLayout);

		this.domTitle = document.createElement("div");
		this.domTitle.classList.add("title-proxy");
		this.domTitle.innerHTML = `<span>${this.title}</span><br/><span>Click to load</span>`;
		this.domLayout.append(this.domTitle);
	}

	append() {
		if (this.image) return;

		this.domLayout.addEventListener("click", () => {
			this.domLayout.style.border = "none";
			this.domLayout.innerHTML = "";
			this.image = new RealImage(this.title, this.url, this.domLayout);
			this.image.append();
		});
	}
}
