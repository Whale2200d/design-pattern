import Unit from "./Unit";

export default class Folder extends Unit {
	private units: Array<Unit> = [];

	constructor(name: string) {
		super(name);
	}

	getSize(): number {
		return this.units.reduce(
			(accumulator, currentValue) => accumulator + currentValue.getSize(),
			0
		);
	}

	add(unit: Unit) {
		this.units.push(unit);
	}

	/**
	 * 자신이 포함하고 있는 Unit 객체들을 보기좋은 트리 형식으로 출력해주는 메서드 추가
	 */
	private createUnit(unit: Unit, dom: Element) {
		const domUnit = document.createElement("div");
		domUnit.classList.add("unit");
		domUnit.innerHTML = `<div><span>${unit.getName()}</span><span>(${unit.getSize()})</span></div>`;
		dom.append(domUnit);
		return domUnit;
	}

	list(dom: Element) {
		const domUnit = this.createUnit(this, dom);
		const bFolder = this instanceof Folder;

		// Composite 패턴은 단일체와 집합체를 동일한 개념으로 처리하기 때문에 재귀문이 필요하다.
		if (bFolder) {
			domUnit.classList.add("folder");
			this.units.forEach((unit) => {
				if (unit instanceof Folder) {
					unit.list(domUnit);
				} else {
					this.createUnit(unit, domUnit);
				}
			});
		}
	}
}
