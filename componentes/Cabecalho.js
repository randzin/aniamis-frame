import styles from '../src/styles/Home.module.css';

export default function Cabecalho() {
    return (
        <div className={styles.cabecalho}>
            <h1 className={styles.titulo}> animais do bocaweb</h1>
            <a href='\' className={styles.aA}> menu </a>
       
        </div>
    )
}