import { useState, type FormEvent } from "react";
import { Button } from "../Button/Button";
import styles from "./Newsletter.module.scss";

export function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSubscribed(true);
  }

  return (
    <section className={styles.newsletter} aria-labelledby="newsletter-titulo">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 id="newsletter-titulo" className={styles.title}>
            Inscreva-se na nossa newsletter
          </h2>
          <p className={styles.text}>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>

        {subscribed ? (
          <p role="status" className={styles.success}>
            Inscrição realizada! Em breve você recebe nossas novidades.
          </p>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fields}>
              <label htmlFor="newsletter-nome" className="visually-hidden">
                Nome
              </label>
              <input
                id="newsletter-nome"
                name="nome"
                type="text"
                placeholder="Digite seu nome"
                autoComplete="name"
                required
              />
              <label htmlFor="newsletter-email" className="visually-hidden">
                E-mail
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                placeholder="Digite seu e-mail"
                autoComplete="email"
                required
              />
              <Button variant="yellow" type="submit" className={styles.submit}>
                Inscrever
              </Button>
            </div>
            <label className={styles.terms}>
              <input type="checkbox" name="termos" required />
              Aceito os termos e condições
            </label>
          </form>
        )}
      </div>
    </section>
  );
}
