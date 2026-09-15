"use client";

import { useEffect, useRef, useState } from "react";
import { siteContent } from "@/content/site";
import { Icon } from "@/components/Icon";
import styles from "./Header.module.css";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#inicio" aria-label="Engenharia Clara, início">
          <span aria-hidden="true" className={styles.brandMark}>
            EC
          </span>
          <span>
            Engenharia <strong>Clara</strong>
          </span>
        </a>

        <button
          ref={menuButtonRef}
          aria-controls="navigation-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className={styles.menuButton}
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          <Icon name={isOpen ? "close" : "menu"} />
        </button>

        <nav
          aria-label="Navegação principal"
          className={`${styles.navigation} ${isOpen ? styles.navigationOpen : ""}`}
          id="navigation-menu"
        >
          {siteContent.navigation.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className={styles.headerCta} href="#contato" onClick={closeMenu}>
            Solicitar conversa
          </a>
        </nav>
      </div>
    </header>
  );
}
