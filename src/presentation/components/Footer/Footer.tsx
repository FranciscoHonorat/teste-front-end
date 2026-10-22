import { Logo } from "../Logo/Logo";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "../icons/Icons";
import styles from "./Footer.module.scss";

const columns = [
  {
    title: "Institucional",
    links: ["Sobre Nós", "Movimento", "Trabalhe conosco"],
  },
  {
    title: "Ajuda",
    links: ["Suporte", "Fale Conosco", "Perguntas Frequentes"],
  },
  {
    title: "Termos",
    links: [
      "Termos e Condições",
      "Política de Privacidade",
      "Troca e Devolução",
    ],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

const socials = [
  { label: "Instagram", Icon: InstagramIcon },
  { label: "Facebook", Icon: FacebookIcon },
  { label: "LinkedIn", Icon: LinkedinIcon },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.about}>
          <Logo className={styles.logo} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <ul className={styles.socials}>
            {socials.map(({ label, Icon }) => (
              <li key={label}>
                <a href="#" aria-label={label}>
                  <Icon size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.columns}>
          {columns.map((column) => (
            <nav key={column.title} aria-labelledby={`rodape-${column.title}`}>
              <h2 id={`rodape-${column.title}`} className={styles.columnTitle}>
                {column.title}
              </h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <p className={styles.bottomBar}>
        © {CURRENT_YEAR} Econverse. Todos os direitos reservados.
      </p>
    </footer>
  );
}
