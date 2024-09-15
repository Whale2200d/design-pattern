import Mediator from "./Mediator";
import Participant from "./Participant";

export default class HeatBoiler extends Participant {
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
		dom.innerHTML = this.bOff ? "난방기 OFF" : "난방기 ON";

		if (this.bOff) dom.classList.remove("hilighting");
		else dom.classList.add("hilighting");
	}
}
