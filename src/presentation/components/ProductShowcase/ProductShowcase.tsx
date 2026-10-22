import { useId, useState } from "react";
import type { Product } from "../../../domain/entities/Product";
import type { ProductsState } from "../../hooks/useProducts";
import { Carousel } from "../Carousel/Carousel";
import { ProductCard } from "../ProductCard/ProductCard";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { ShowcaseTabs } from "./ShowcaseTabs";
import { tabId } from "./tabId";
import styles from "./ProductShowcase.module.scss";

const TABS = [
  "Celular",
  "Acessórios",
  "Tablets",
  "Notebooks",
  "TVs",
  "Ver todos",
];

type ProductShowcaseProps = {
  title: string;
  state: ProductsState;
  onSelect: (product: Product) => void;
  withTabs?: boolean;
};

export function ProductShowcase({
  title,
  state,
  onSelect,
  withTabs = false,
}: ProductShowcaseProps) {
  const id = useId();
  const titleId = `${id}-titulo`;
  const panelId = `${id}-painel`;
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const products = (
    <>
      {state.status === "loading" && (
        <p role="status" className={styles.feedback}>
          Carregando produtos…
        </p>
      )}
      {state.status === "error" && (
        <p role="alert" className={styles.feedback}>
          Não foi possível carregar os produtos.
        </p>
      )}
      {state.status === "success" && (
        <Carousel label={title}>
          {state.products.map((product) => (
            <li key={product.name}>
              <ProductCard product={product} onSelect={onSelect} />
            </li>
          ))}
        </Carousel>
      )}
    </>
  );

  return (
    <section className={styles.showcase} aria-labelledby={titleId}>
      <SectionTitle id={titleId} withLines>
        {title}
      </SectionTitle>

      {withTabs ? (
        <>
          <ShowcaseTabs
            tabs={TABS}
            active={activeTab}
            onChange={setActiveTab}
            panelId={panelId}
            idPrefix={id}
          />
          <div
            id={panelId}
            role="tabpanel"
            aria-labelledby={tabId(id, TABS.indexOf(activeTab))}
          >
            {products}
          </div>
        </>
      ) : (
        <>
          <a href="#" className={styles.seeAll}>
            Ver todos
          </a>
          {products}
        </>
      )}
    </section>
  );
}
