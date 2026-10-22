import {
  BottleIcon,
  DevicesIcon,
  FashionIcon,
  FitnessIcon,
  HealthIcon,
  StoreIcon,
  ToolsIcon,
} from '../icons/Icons'
import styles from './CategoryList.module.scss'

const categories = [
  { label: 'Tecnologia', Icon: DevicesIcon },
  { label: 'Supermercado', Icon: StoreIcon },
  { label: 'Bebidas', Icon: BottleIcon },
  { label: 'Ferramentas', Icon: ToolsIcon },
  { label: 'Saúde', Icon: HealthIcon },
  { label: 'Esportes e Fitness', Icon: FitnessIcon },
  { label: 'Moda', Icon: FashionIcon },
]

const ACTIVE_CATEGORY = 'Tecnologia'

export function CategoryList() {
  return (
    <section className={styles.section} aria-labelledby="categorias-titulo">
      <h2 id="categorias-titulo" className="visually-hidden">
        Compre por categoria
      </h2>
      <ul className={styles.list}>
        {categories.map(({ label, Icon }) => (
          <li key={label}>
            <a
              href="#"
              className={styles.item}
              aria-current={label === ACTIVE_CATEGORY ? 'true' : undefined}
            >
              <span className={styles.card}>
                <Icon size={61} strokeWidth={1.1} />
              </span>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
