import Mediator from "./Mediator";
import Participant from "./Participant";

export default class CoolAircon extends Participant {
	private bOff = true;

	constructor(mediator: Mediator) {
		super(mediator);
	}

	on(): void {
		if (!this.bOff) return;
		this.bOff = false;
		this.mediator.participantChanged(this);
	}

	off(): void {
		if (this.bOff) return;
		this.bOff = true;
		this.mediator.participantChanged(this);
	}

	isRunning(): boolean {
		return !this.bOff;
	}

	displayState(dom: HTMLElement): void {
		dom.innerHTML = this.bOff ? "에어컨 OFF" : "에어컨 ON";

		if (this.bOff) dom.classList.remove("hilighting");
		else dom.classList.add("hilighting");
	}
}
