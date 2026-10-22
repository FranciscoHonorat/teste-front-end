import { makeListProducts } from "./main/factories/makeListProducts";
import { HomePage } from "./presentation/pages/HomePage";

const listProducts = makeListProducts();

function App() {
  return <HomePage listProducts={listProducts} />;
}

export default App;
