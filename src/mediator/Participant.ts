import Mediator from "./Mediator";

export default abstract class Participant {
	constructor(protected mediator: Mediator) {}

	abstract displayState(dom: HTMLElement): void;
}
