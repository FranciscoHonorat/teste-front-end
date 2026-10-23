# Teste Front-End Econverse

Página de e-commerce desenvolvida em **React + TypeScript + Sass** para o [teste técnico da Econverse](https://github.com/EconverseAG/teste-front-end), seguindo o [layout do Figma](https://www.figma.com/file/rWnzPeoxgynuNPsJjV0VmV/Teste-Front-End-Jr?node-id=0%3A1).

A vitrine é montada a partir do [JSON de produtos](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json) e, ao clicar em **Comprar**, abre um modal com as informações do produto escolhido.

🔗 **Deploy:** [teste-front-end-rho-three.vercel.app](https://teste-front-end-rho-three.vercel.app/)

## Tecnologias

- **React 19** e **TypeScript**
- **Vite** para desenvolvimento e build
- **Sass (SCSS)** com CSS Modules, sem bibliotecas de UI
- **Vitest** e **Testing Library** para os testes
- **oxlint** como linter
- **Docker** e **nginx** para servir a versão de produção

## Como rodar

Pré-requisito: **Node.js 20.19+ ou 22.12+** (recomendado: 24).

```bash
npm install       # instala as dependências
npm run dev       # servidor de desenvolvimento em http://localhost:5173
```

### Testes e qualidade

```bash
npm test          # testes em modo observação
npm run test:run  # roda os testes uma vez
npm run lint      # linter
npm run typecheck # checagem de tipos
```

### Build de produção

```bash
npm run build     # gera os arquivos estáticos em dist/
npm run preview   # serve o build em http://localhost:4173
```

### Com Docker

```bash
docker compose up -d --build web          # produção em http://localhost:8080
docker compose --profile dev up dev       # desenvolvimento em http://localhost:5173
```

O build da imagem roda lint e testes antes de gerar os arquivos: se algum falhar, a imagem não é criada.

### Com Make

Há atalhos para os comandos acima. Rode `make` para ver a lista (`make dev`, `make test`, `make check`, `make up`...).

## Estrutura do projeto

O código é separado em camadas, de modo que as regras de negócio não dependem de React nem de como os dados são buscados:

```
src/
├── domain/          Regras de negócio puras: entidade Product, contrato do repositório,
│                    frete grátis, parcelamento e quantidade
├── application/     Casos de uso (ListProducts)
├── infra/           Busca e conversão do JSON (JsonProductRepository)
├── main/            Monta as peças: liga o caso de uso ao repositório real
└── presentation/    React: página, componentes, hooks, formatadores e estilos
```

```
presentation ──→ application ──→ domain ←── infra
```

O domínio não importa nada das outras camadas. A infraestrutura implementa o contrato definido por ele, então trocar a origem dos dados (por exemplo, para uma API) exige apenas um novo repositório em `infra/`.

Cada componente tem sua pasta, com o `.tsx`, o `.module.scss` e, quando há comportamento, o teste.

## Decisões

**Dados servidos localmente.** O servidor do JSON remoto não envia o cabeçalho `Access-Control-Allow-Origin`, então o navegador bloquearia a requisição feita a partir de outro domínio (CORS). Por isso uma cópia do arquivo fica em `public/produtos.json` e é buscada com `fetch`. O formato e a lógica de leitura são os mesmos do arquivo original.

**Preço em centavos.** O JSON traz valores como `15000` e `14990`, e o layout mostra preços com centavos. Os valores são tratados como centavos (`14990` → R$ 149,90), o que também evita erros de arredondamento com números decimais em JavaScript.

**Regras de arredondamento.** O valor da parcela é arredondado para cima (`Math.ceil`), para que a soma das parcelas nunca fique abaixo do preço do produto.

**Abas da vitrine.** O JSON não informa a categoria dos produtos, então as abas (Celular, Acessórios...) trocam a aba ativa, mas mostram os mesmos produtos.

**Modal com `<dialog>` nativo.** O elemento já oferece fechamento com Esc, foco preso dentro do modal e fundo escurecido, sem biblioteca.

**Mobile first.** O layout do Figma é só desktop (1440px). Os estilos partem do celular e se adaptam em 768px (tablet) e 1280px (desktop), sem rolagem horizontal a partir de 320px.

## Acessibilidade e SEO

- HTML semântico: `header`, `main`, `section`, `article`, `nav` e `footer`, com um único `h1` e hierarquia de títulos
- `lang="pt-BR"`, `title` e `meta description`
- Imagens com `alt` e dimensões definidas, para evitar saltos no layout
- Navegação por teclado nas abas (setas ← →) e no modal
- Rótulos acessíveis em botões que só têm ícone
- Fontes servidas pelo próprio projeto, apenas com os pesos usados
