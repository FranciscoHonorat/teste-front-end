import { useRef, type KeyboardEvent } from "react";
import styles from "./ProductShowcase.module.scss";
import { tabId } from "./tabId";

type ShowcaseTabsProps = {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
  panelId: string;
  idPrefix: string;
};

export function ShowcaseTabs({
  tabs,
  active,
  onChange,
  panelId,
  idPrefix,
}: ShowcaseTabsProps) {
  const listRef = useRef<HTMLDivElement>(null);

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    const step = event.key === "ArrowRight" ? 1 : -1;
    const next =
      tabs[(tabs.indexOf(active) + step + tabs.length) % tabs.length];
    onChange(next);
    listRef.current
      ?.querySelector<HTMLButtonElement>(`[data-tab="${next}"]`)
      ?.focus();
  }

  return (
    <div
      ref={listRef}
      className={styles.tabs}
      role="tablist"
      aria-label="Categorias de produtos"
      onKeyDown={handleKeyDown}
    >
      {tabs.map((tab, index) => (
        <button
          key={tab}
          id={tabId(idPrefix, index)}
          type="button"
          role="tab"
          data-tab={tab}
          aria-selected={tab === active}
          aria-controls={panelId}
          tabIndex={tab === active ? 0 : -1}
          className={styles.tab}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
