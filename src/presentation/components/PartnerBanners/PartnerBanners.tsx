import partnerImage from "../../../assets/banners/parceiros.webp";
import { PromoBanner } from "../PromoBanner/PromoBanner";
import styles from "./PartnerBanners.module.scss";

export function PartnerBanners() {
  return (
    <section className={styles.section} aria-label="Parceiros">
      {[1, 2].map((n) => (
        <PromoBanner
          key={n}
          variant="partner"
          title="Parceiros"
          text="Lorem ipsum dolor sit amet, consectetur"
          ctaLabel="Confira"
          ctaHref="#"
          imageUrl={partnerImage}
        />
      ))}
    </section>
  );
}
