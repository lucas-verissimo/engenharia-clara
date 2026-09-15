import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <p>ERRO / 404</p>
      <h1>Esta prancheta está vazia.</h1>
      <span>A página procurada não faz parte desta demonstração.</span>
      <Link href="/">Voltar ao início</Link>
    </main>
  );
}
