import styles from "./Logo.module.scss";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`${styles.logo} ${className}`}
      viewBox="0 0 170 44"
      role="img"
      aria-label="Econverse"
    >
      <circle cx="22" cy="22" r="20" fill="#f7ca11" />
      <text
        x="8"
        y="30"
        fontFamily="Poppins, sans-serif"
        fontSize="25"
        fontWeight="600"
        letterSpacing="-0.5"
      >
        <tspan fill="#ffffff">ec</tspan>
        <tspan fill="#271c47">onverse</tspan>
      </text>
    </svg>
  );
}
