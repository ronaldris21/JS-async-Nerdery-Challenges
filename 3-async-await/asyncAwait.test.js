// const { describe, it, expect } = require("@jest/globals");
const { describe, it, expect } = require("@jest/globals");
const solution = require("./solution");

describe("3. AsyncAwait:", () => {
  it("74", async () => {
    expect(await solution(74)).toEqual({
      id: 74,
      price: 1.5,
      product: "sugar",
    });
  });
  it("19", async () => {
    expect(await solution(19)).toEqual({
      id: 19,
      price: 1.5,
      product: "sugar",
    });
  });

  it("88", async () => {
    expect(await solution(88)).toContain("This is a forced internal error");
  });

  it("1", async () => {
    expect(await solution(1)).toEqual({ id: 1, price: 0.5, product: "salt" });
  });
});
