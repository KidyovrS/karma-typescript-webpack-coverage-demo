export class HelloClass {
	constructor(hello?: string) {
		this.helloProperty = hello || "hello";
	}

	public helloProperty: string;

	public helloMethod(): string {
		return this.helloProperty;
	}
}

export const helloConstant = "hello";
