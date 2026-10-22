import { Logo } from "../Logo/Logo";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import styles from "./BrandList.module.scss";

const brands = [
  "Econverse 1",
  "Econverse 2",
  "Econverse 3",
  "Econverse 4",
  "Econverse 5",
];

export function BrandList() {
  return (
    <section className={styles.section} aria-labelledby="marcas-titulo">
      <SectionTitle id="marcas-titulo">Navegue por marcas</SectionTitle>
      <ul className={styles.list}>
        {brands.map((brand) => (
          <li key={brand}>
            <a href="#" className={styles.brand} aria-label={brand}>
              <Logo />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
