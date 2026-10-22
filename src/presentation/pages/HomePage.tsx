import { useState } from "react";
import type { ListProducts } from "../../application/usecases/ListProducts";
import type { Product } from "../../domain/entities/Product";
import { BrandList } from "../components/BrandList/BrandList";
import { CategoryList } from "../components/CategoryList/CategoryList";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Newsletter } from "../components/Newsletter/Newsletter";
import { PartnerBanners } from "../components/PartnerBanners/PartnerBanners";
import { ProductModal } from "../components/ProductModal/ProductModal";
import { ProductShowcase } from "../components/ProductShowcase/ProductShowcase";
import { PromoBanner } from "../components/PromoBanner/PromoBanner";
import { useProducts } from "../hooks/useProducts";

type HomePageProps = {
  listProducts: Pick<ListProducts, "execute">;
};

export function HomePage({ listProducts }: HomePageProps) {
  const products = useProducts(listProducts);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <Header />

      <main>
        <PromoBanner
          variant="hero"
          title="Venha conhecer nossas promoções"
          text={
            <>
              <strong>50% Off</strong> nos produtos
            </>
          }
          ctaLabel="Ver produto"
          ctaHref="#"
        />
        <CategoryList />
        <ProductShowcase
          title="Produtos relacionados"
          state={products}
          onSelect={setSelectedProduct}
          withTabs
        />
        <PartnerBanners />
        <ProductShowcase
          title="Produtos relacionados"
          state={products}
          onSelect={setSelectedProduct}
        />
        <PartnerBanners />
        <BrandList />
        <ProductShowcase
          title="Produtos relacionados"
          state={products}
          onSelect={setSelectedProduct}
        />
      </main>

      <Newsletter />
      <Footer />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
