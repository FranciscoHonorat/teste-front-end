import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

type Variant = "yellow" | "blue";

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: Variant;
  href?: undefined;
};
type ButtonAsLink = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant: Variant;
  href: string;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant, className = "", ...rest } = props;
  const classes = `${styles.button} ${styles[variant]} ${className}`;

  if (rest.href !== undefined) {
    return (
      <a
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }
  return (
    <button
      type="button"
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
}
