import { Logo } from '../Logo/Logo'
import {
  CardIcon,
  CartIcon,
  CrownIcon,
  HeartIcon,
  OrdersIcon,
  SearchIcon,
  ShieldIcon,
  TruckIcon,
  UserIcon,
} from '../icons/Icons'
import styles from './Header.module.scss'

const categories = ['Todas categorias', 'Supermercado', 'Livros', 'Moda', 'Lançamentos', 'Ofertas do dia']

const userLinks = [
  { label: 'Meus pedidos', Icon: OrdersIcon },
  { label: 'Favoritos', Icon: HeartIcon },
  { label: 'Minha conta', Icon: UserIcon },
  { label: 'Carrinho', Icon: CartIcon },
]

export function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.topBar}>
        <li>
          <ShieldIcon size={16} />
          Compra <strong>100% segura</strong>
        </li>
        <li>
          <TruckIcon size={16} />
          <strong>Frete grátis</strong> acima de R$ 200
        </li>
        <li>
          <CardIcon size={16} />
          <strong>Parcele</strong> suas compras
        </li>
      </ul>

      <div className={styles.main}>
        <a href="/" className={styles.logoLink}>
          <Logo />
        </a>

        <form className={styles.search} role="search" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="search" className="visually-hidden">
            Buscar produtos
          </label>
          <input id="search" type="search" placeholder="O que você está buscando?" />
          <button type="submit" aria-label="Buscar">
            <SearchIcon />
          </button>
        </form>

        <ul className={styles.userLinks}>
          {userLinks.map(({ label, Icon }) => (
            <li key={label}>
              <a href="#" aria-label={label}>
                <Icon size={32} strokeWidth={1.3} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <nav className={styles.nav} aria-label="Categorias">
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <a href="#" className={category === 'Ofertas do dia' ? styles.highlight : undefined}>
                {category}
              </a>
            </li>
          ))}
          <li>
            <a href="#" className={styles.subscription}>
              <CrownIcon size={18} />
              Assinatura
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
