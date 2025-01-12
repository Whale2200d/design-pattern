import Player from "./Player";

export default class EvenBettingPlayer extends Player {
	update(diceNumber: number): void {
		this._winning = diceNumber % 2 === 0;
	}

	constructor(name: string) {
		super(name);
	}
}
