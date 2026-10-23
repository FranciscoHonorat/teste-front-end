import { useEffect, useId, useRef, useState, type SyntheticEvent } from "react";
import type { Product } from "../../../domain/entities/Product";
import { MIN_QUANTITY } from "../../../domain/rules/quantity";
import { formatPrice } from "../../formatters/formatPrice";
import { QuantityStepper } from "../QuantityStepper/QuantityStepper";
import { Button } from "../Button/Button";
import { CloseIcon } from "../icons/Icons";
import styles from "./ProductModal.module.scss";

type ProductModalProps = {
  product: Product | null;
  onClose: () => void;
};

export function ProductModal({ product, onClose }: ProductModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (product) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [product]);

  function handleCancel(event: SyntheticEvent<HTMLDialogElement>) {
    event.preventDefault();
    onClose();
  }

  return (
    <dialog
      ref={dialogRef}
      className={styles.modal}
      aria-labelledby={titleId}
      onCancel={handleCancel}
    >
      <button
        type="button"
        className={styles.close}
        aria-label="Fechar"
        onClick={onClose}
      >
        <CloseIcon size={20} />
      </button>
      {product && (
        <ProductDetails
          key={product.name}
          product={product}
          titleId={titleId}
        />
      )}
    </dialog>
  );
}

type ProductDetailsProps = {
  product: Product;
  titleId: string;
};

function ProductDetails({ product, titleId }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(MIN_QUANTITY);

  return (
    <div className={styles.content}>
      <img
        className={styles.photo}
        src={product.photoUrl}
        alt={product.name}
        width={247}
        height={192}
      />

      <div className={styles.info}>
        <h2 id={titleId} className={styles.name}>
          {product.name}
        </h2>
        <p className={styles.price}>{formatPrice(product.price)}</p>
        <p className={styles.description}>{product.description}</p>
        <a className={styles.detailsLink} href="#">
          Veja mais detalhes do produto <span aria-hidden="true">&gt;</span>
        </a>

        <div className={styles.actions}>
          <QuantityStepper value={quantity} onChange={setQuantity} />
          <Button variant="yellow" className={styles.buyButton}>
            Comprar
          </Button>
        </div>
      </div>
    </div>
  );
}
