import ProxyImage from "./ProxyImage";
import RealImage from "./RealImage";

const items = [
	["설산야경", "https://cdn.bhdw.net/im/snow-mountain..."],
	["외로운늑대", "https://cdn.bhdw.net/im/fantasy-world..."],
	["강변황혼", "https://cdn.bhdw.net/im/sunset-minima..."],
	["일출", "https://cdn.bhdw.net/im/sunset-scener..."],
	["지구탈출", "https://cdn.bhdw.net/im/mountain-scen..."],
	["고양이", "https://wallpapers.com/images/hd/cute..."],
	["사마귀", "https://wallpapers.com/images/high/sp..."],
	["앵무새", "https://wallpapers.com/images/high/go..."],
	["비둘기", "https://wallpapers.com/images/high/fl..."],
	["벌", "https://wallpapers.com/images/high/be..."],
	["닭", "https://wallpapers.com/images/high/ro..."],
	["도마뱀", "https://wallpapers.com/images/high/gr..."],
	["노란앵무새", "https://wallpapers.com/images/high/tw..."],
	["하얀비둘기", "https://wallpapers.com/images/high/el..."],
	["부엉이", "https://wallpapers.com/images/high/li..."],
	["무지개비둘기", "https://wallpapers.com/images/high/co..."],
	["뱀", "https://wallpapers.com/images/high/co..."]
];

const domList = document.querySelector(".list") as Element;

items.forEach((item) => {
	const title = item[0];
	const url = item[1];

	// const img = new RealImage(title, url, domList);
	const img = new ProxyImage(title, url, domList);
	img.append();
});
