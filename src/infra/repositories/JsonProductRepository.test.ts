import { afterEach, describe, it, expect, vi } from "vitest";
import { JsonProductRepository } from "./JsonProductRepository";

function stubFetch(response: Response) {
  vi.stubGlobal(
    "fetch",
    vi.fn(async () => response),
  );
}

function jsonResponse(body: unknown) {
  return new Response(JSON.stringify(body));
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("JsonProductRepository", () => {
  const repository = new JsonProductRepository("/produtos.json");

  it("converte os produtos do JSON para a entidade Product", async () => {
    stubFetch(
      jsonResponse({
        success: true,
        products: [
          {
            productName: "Iphone 11 PRO MAX BRANCO 1",
            descriptionShort: "Descrição curta",
            photo: "https://exemplo.com/foto.png",
            price: 15000,
          },
        ],
      }),
    );

    await expect(repository.getAll()).resolves.toEqual([
      {
        name: "Iphone 11 PRO MAX BRANCO 1",
        description: "Descrição curta",
        photoUrl: "https://exemplo.com/foto.png",
        price: 15000,
      },
    ]);
  });

  it("lança erro quando a resposta HTTP não é ok", async () => {
    stubFetch(new Response("Not Found", { status: 404 }));

    await expect(repository.getAll()).rejects.toThrow(
      "Falha ao carregar produtos (HTTP 404)",
    );
  });

  it("lança erro quando o JSON indica success: false", async () => {
    stubFetch(jsonResponse({ success: false, products: [] }));

    await expect(repository.getAll()).rejects.toThrow(
      "Falha ao carregar produtos",
    );
  });
});
