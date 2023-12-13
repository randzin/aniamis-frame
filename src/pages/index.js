import Head from "next/head";
import Cabecalho from "../../componentes/Cabecalho";
import ParteBaixo from "../../componentes/ParteBaixo";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title> animais do bocaweb</title>
      </Head>
      <Cabecalho />
      <div className={styles.teste}>
        <h1>animais do bocaweb</h1>
        <p>Olá, está é a lista de animais oficial do bocaweb aqui você vera todos os animais no site </p>
         <a href='\tela2' className={styles.aB}> animais </a>
      </div>
      <ParteBaixo />
    </div >
  )
}
