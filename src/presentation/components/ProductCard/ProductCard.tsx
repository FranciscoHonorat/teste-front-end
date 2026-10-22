import type { Product } from "../../../domain/entities/Product";
import {
  hasFreeShipping,
  installmentValue,
} from "../../../domain/rules/pricing";
import { formatPrice } from "../../formatters/formatPrice";
import { Button } from "../Button/Button";
import styles from "./ProductCard.module.scss";

const INSTALLMENTS = 2;

type ProductCardProps = {
  product: Product;
  onSelect: (product: Product) => void;
};

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <figure className={styles.photo}>
        <img
          src={product.photoUrl}
          alt={product.name}
          width={270}
          height={240}
          loading="lazy"
        />
      </figure>

      <h3 className={styles.name}>{product.name}</h3>

      <div className={styles.prices}>
        <strong className={styles.price}>{formatPrice(product.price)}</strong>
        <p className={styles.installments}>
          ou {INSTALLMENTS}x de{" "}
          {formatPrice(installmentValue(product.price, INSTALLMENTS))} sem juros
        </p>
        {hasFreeShipping(product.price) && (
          <p className={styles.freeShipping}>Frete grátis</p>
        )}
      </div>

      <Button
        variant="blue"
        className={styles.buyButton}
        onClick={() => onSelect(product)}
      >
        Comprar
      </Button>
    </article>
  );
}
