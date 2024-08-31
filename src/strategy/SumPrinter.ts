import SumStrategy from "./SumStrategy";

export default class SumPrinter {
	print(strategy: SumStrategy, N: number, domOutput: Element): void {
		const value = strategy.get(N);
		domOutput.innerHTML = `1~${N}까지의 총합 = ${value}`;
	}
}
