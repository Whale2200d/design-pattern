export enum Action {
	UP = 1,
	DOWN,
	LEFT,
	RIGHT
}

export class Memento {
	private _actions = new Array<Action>();
	get actions() {
		return this._actions;
	}

	constructor(private _x: number, private _y: number, actions: Array<Action>) {
		this._actions = structuredClone(actions); // 인자로 받은 actions 값에 대해 깊은 복사 수행
		/**
		 * this._actions = actions;
		 * 주석처럼 인자로 받은 actions 값에 대해 얕은 복사 수행할 경우,
		 * BlindMan에서 이 Actions Field를 변경하게 되면
		 * Memento에 Actions도 변경되기 때문에 이를 방지하기 위함 (외부에서의 변경을 방지하기 위함)
		 */
		// this._actions = JSON.parse(JSON.stringify(actions));
	}

	/**
	 * 현재 x, y의 위치를 얻기 위한 Property를 추가
	 */
	get x() {
		return this._x;
	}
	get y() {
		return this._y;
	}
}

export default class BlindMan {
	private actions = new Array<Action>();

	constructor(
		private currentX: number, // BlindMan의 현재 위치에 대한 X 좌표
		private currentY: number, // BlindMan의 현재 위치에 대한 Y 좌표
		private targetX: number, // BlindMan이 도달해야 할 X 좌표
		private targetY: number // BlindMan이 도달해야 할 Y 좌표
	) {}

	walk(action: Action): number {
		this.actions.push(action);

		if (action === Action.UP) this.currentY += 1;
		else if (action === Action.RIGHT) this.currentX += 1;
		else if (action === Action.DOWN) this.currentY -= 1;
		else if (action === Action.LEFT) this.currentX -= 1;

		return Math.sqrt(
			Math.pow(this.currentX - this.targetX, 2) + Math.pow(this.currentY - this.targetY, 2)
		);
	}

	createMemento(): Memento {
		const memento = new Memento(this.currentX, this.currentY, this.actions);
		return memento;
	}

	restoreMemento(memento: Memento): void {
		this.currentX = memento.x;
		this.currentY = memento.y;
		this.actions = structuredClone(memento.actions);
	}

	resultPath(): string {
		return this.actions.map((action) => Action[action]).join(" -> ");
	}
}
