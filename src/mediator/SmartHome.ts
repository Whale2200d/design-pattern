import CoolAircon from "./CoolAircon";
import Door from "./Door";
import HeatBoiler from "./HeatBoiler";
import Mediator from "./Mediator";
import Participant from "./Participant";
import Window from "./Window";

export default class SmartHome implements Mediator {
	door = new Door(this);
	window = new Window(this);
	aircon = new CoolAircon(this);
	boiler = new HeatBoiler(this);

	participantChanged(participant: Participant): void {
		if (participant === this.door && !this.door.isClosed()) {
			this.aircon.off();
			this.boiler.off();
		}

		if (participant === this.window && !this.window.isClosed()) {
			this.aircon.off();
			this.boiler.off();
		}

		if (participant === this.aircon && this.aircon.isRunning()) {
			this.boiler.off();
			this.window.close();
			this.door.close();
		}

		if (participant === this.boiler && this.boiler.isRunning()) {
			this.aircon.off();
			this.window.close();
			this.door.close();
		}
	}

	display() {
		const domDoor = document.querySelector(".door") as HTMLElement;
		const domWindow = document.querySelector(".window") as HTMLElement;
		const domCoolAircon = document.querySelector(".coolaircon") as HTMLElement;
		const domHeatBoiler = document.querySelector(".heatboiler") as HTMLElement;

		this.door.displayState(domDoor);
		this.window.displayState(domWindow);
		this.aircon.displayState(domCoolAircon);
		this.boiler.displayState(domHeatBoiler);
	}

	install() {
		const domDoor = document.querySelector(".door") as HTMLElement;
		const domWindow = document.querySelector(".window") as HTMLElement;
		const domCoolAircon = document.querySelector(".coolaircon") as HTMLElement;
		const domHeatBoiler = document.querySelector(".heatboiler") as HTMLElement;

		domDoor.addEventListener("click", () => {
			if (this.door.isClosed()) this.door.open();
			else this.door.close();

			this.display();
		});

		domWindow.addEventListener("click", () => {
			if (this.window.isClosed()) this.window.open();
			else this.window.close();

			this.display();
		});

		domCoolAircon.addEventListener("click", () => {
			if (this.aircon.isRunning()) this.aircon.off();
			else this.aircon.on();

			this.display();
		});

		domHeatBoiler.addEventListener("click", () => {
			if (this.boiler.isRunning()) this.boiler.off();
			else this.boiler.on();

			this.display();
		});

		this.display();
	}
}
