jest.mock("axios", () => {
  return {
    get: jest.fn().mockReturnValue("banana"),
  };
});

const { errorHandler } = require("./errorHandler");

test("Gerenciador de erros funcionando", () => {
  const errMock = {};
  const resMock = {};

  resMock.status = jest.fn().mockReturnValue(resMock);
  resMock.send = jest.fn();

  errorHandler(errMock, resMock);

  expect(resMock.status.mock.calls.length).toBe(1);
  expect(resMock.status.mock.calls[0][0]).toBe(400);
  expect(resMock.send.mock.calls.length).toBe(1);
});
