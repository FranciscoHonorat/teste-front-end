import { afterEach, describe, it, expect, vi } from "vitest";
import { makeListProducts } from "./makeListProducts";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("makeListProducts", () => {
  it("monta o caso de uso lendo /produtos.json", async () => {
    const fetchMock = vi.fn(
      async () =>
        new Response(
          JSON.stringify({
            success: true,
            products: [
              {
                productName: "Iphone",
                descriptionShort: "Iphone",
                photo: "foto.png",
                price: 100,
              },
            ],
          }),
        ),
    );
    vi.stubGlobal("fetch", fetchMock);

    const products = await makeListProducts().execute();

    expect(fetchMock).toHaveBeenCalledWith("/produtos.json");
    expect(products).toEqual([
      {
        name: "Iphone",
        description: "Iphone",
        photoUrl: "foto.png",
        price: 100,
      },
    ]);
  });
});
