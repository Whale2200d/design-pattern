import EvenBettingPlayer from "./EvenBettingPlayer";
import FairDiceGame from "./FairDiceGame";
import NBettingPlayer from "./NBettingPlayer";
import OddBettingPlayer from "./OddBettingPlayer";

const diceGame = new FairDiceGame();

const players = [
	new OddBettingPlayer("홀쭉이"),
	new EvenBettingPlayer("짝눈이"),
	new NBettingPlayer("점쟁이", [2, 3, 5])
];

players.forEach((player) => diceGame.addPlayer(player));

function updateBoard() {
	const domPlayers = document.querySelector(".players") as HTMLDivElement;
	domPlayers.innerHTML = "";

	players.forEach((player) => {
		const domPlayer = document.createElement("div");
		domPlayer.innerText = player.name;

		if (player.winning) domPlayer.classList.add("win");

		domPlayers?.append(domPlayer);
	});
}

updateBoard();

document.querySelector("button")?.addEventListener("click", () => {
	const diceNumber = diceGame.play();

	const domDice = document.querySelector(".dice") as HTMLDivElement;
	domDice.innerHTML = diceNumber.toString();

	updateBoard();
});
