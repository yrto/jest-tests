jest.mock("axios", () => {
  return {
    get: jest.fn().mockReturnValue({
      data: {
        cep: "03183-001",
        uf: "SP",
      },
    }),
  };
});

const getAddress = require("./getAddress");

describe("verifica se o CEP é do estado informado", () => {
  it("testa de CEP e estado corretos", async () => {
    const postalCode = "03183-001";
    const address = await getAddress(postalCode, "VIACEP", "SP");
    expect(address).toHaveProperty("cep", postalCode);
  });
  it("mock da função", async () => {
    const state = "SP";
    const enpointKey = "VIACEP";
    const postalCode = "03183-001";
    const response = { state, postalCode };
    // const getAddress = jest
    //   .fn()
    //   .mockImplementation(() => Promise.resolve(response))
    const getAddress = jest.fn().mockResolvedValue(response);
    const address = await getAddress(postalCode, enpointKey, state);
    expect(getAddress).toHaveBeenCalled();
    expect(getAddress).toHaveBeenCalledWith(postalCode, enpointKey, state);
    expect(getAddress).toHaveReturned();
    await expect(getAddress(postalCode, enpointKey, state)).resolves.toBe(
      response
    );
  });
});

describe.skip("consultando CEPs usando API do ViaCEP", () => {
  it("busca o endereço a partir de um CEP válido", async () => {
    const postalCode = "03183-001";
    const address = await getAddress(postalCode, "VIACEP");
    expect(address).toHaveProperty("cep", postalCode);
    expect(address.cep).toEqual(postalCode);
    expect.assertions(2);
  });

  it("tenta buscar o endereço a partir de um CEP inválido", async () => {
    const postalCode = "000";
    const address = await getAddress(postalCode, "VIACEP");
    expect(address).not.toHaveProperty("cep");
    expect(address).toHaveProperty("errorMessage");
    expect(address.errorMessage).toContain("not found");
    expect.assertions(3);
  });
});

describe.skip("consultando CEPs usando API do Api CEP", () => {
  it("busca o endereço a partir de um CEP válido", async () => {
    const postalCode = "03183-001";
    const address = await getAddress(postalCode, "APICEP");
    expect(address).toHaveProperty("status", 200);
    expect(address).toHaveProperty("code", postalCode);
    expect(address.code).toEqual(postalCode);
    expect.assertions(3);
  });

  it("tenta buscar o endereço a partir de um CEP inválido", async () => {
    const postalCode = "000";
    const address = await getAddress(postalCode, "APICEP");
    expect(address).toHaveProperty("status", 400);
    expect(address).toHaveProperty("message");
    expect(address.message).toContain("inválido");
    expect.assertions(3);
  });
});
