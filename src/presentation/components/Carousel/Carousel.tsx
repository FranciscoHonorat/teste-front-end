import { useRef, type ReactNode } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "../icons/Icons";
import styles from "./Carousel.module.scss";

type CarouselProps = {
  label: string;
  children: ReactNode;
};

export function Carousel({ label, children }: CarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);

  function scrollPage(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth, behavior: "smooth" });
  }

  return (
    <div className={styles.carousel}>
      <button
        type="button"
        className={`${styles.arrow} ${styles.previous}`}
        aria-label="Anterior"
        onClick={() => scrollPage(-1)}
      >
        <ChevronLeftIcon size={20} />
      </button>
      <ul ref={trackRef} className={styles.track} aria-label={label}>
        {children}
      </ul>
      <button
        type="button"
        className={`${styles.arrow} ${styles.next}`}
        aria-label="Próximo"
        onClick={() => scrollPage(1)}
      >
        <ChevronRightIcon size={20} />
      </button>
    </div>
  );
}
