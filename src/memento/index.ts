import BlindMan, { Action, Memento } from "./BlindMan";

const blindMan = new BlindMan(0, 0, 10, 10);
let minDistance = Number.MAX_VALUE;
let memento: Memento | null = null;

while (true) {
	const action: Action = Math.floor(Math.random() * 4) + 1;
	const distance = blindMan.walk(action);

	console.log(Action[action], distance);

	if (distance === 0.0) {
		console.log("도착!");
		break;
	}

	if (minDistance > distance) {
		minDistance = distance;
		memento = blindMan.createMemento();
	} else {
		if (memento != null) {
			blindMan.restoreMemento(memento);
		}
	}
}

console.log(blindMan.resultPath());
