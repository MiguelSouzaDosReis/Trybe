const math = require('./math');
jest.mock("./math");

test("somar", () => {
    math.somar.mockImplementation((a, b) => a + b);
    math.somar(1, 2);
  
    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledTimes(1);
    expect(math.somar).toHaveBeenCalledWith(1, 2);
    expect(math.somar(1, 2)).toBe(3);
});