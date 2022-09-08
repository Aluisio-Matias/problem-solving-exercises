describe("constructNote", function () {
  it("should return false for empty letters string", () => {
    expect(constructNote("abcd", "")).toBe(false);
  });

  it("should return true for empty message", () => {
    expect(constructNote("", "abc")).toBe(true);
  });

  it("should account for duplicates", () => {
    expect(constructNote("aa", "abcd")).toBe(false);
  });

  it("should handle large cases", () => {
    expect(
      constructNote("skbjjjvnnd", "fdjlkjfeburevjvnfnsjckjncjdnchbechbadhsd")
    ).toBe(true);
  });

  it("should return true if all letters contained", () => {
    expect(constructNote("abc", "abcd")).toBe(true);
  });

  it("should return true if all letters from message is contained", () => {
    expect(constructNote("hello", "asdfhadefdladladfop")).toBe(true);
  });
});
