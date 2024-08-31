import King from "./King";

// const king = new King(); // 에러 발생
const king1 = King.getInstance();
king1.sayHello();

const king2 = King.getInstance();
if (king1 === king2) {
	console.log("king1과 king2는 같은 인스턴스입니다."); // 여기가 출력됨
} else {
	console.log("king1과 king2는 다른 인스턴스입니다.");
}
