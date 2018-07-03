import { assert } from "chai";
import { HelloModule } from "../src/Index";

describe("HelloModule", function () {
	describe("call HelloMethod", function () {
		it("should return \"hello\"", function () {
			let o = new HelloModule.HelloClass();
			assert.equal(o.helloMethod(), "hello");
		})
	})
})