import Participant from "./Participant";

export default interface Mediator {
	participantChanged(participant: Participant): void;
}
