import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Cabecalho from "../../componentes/Cabecalho";
import ParteBaixo from "../../componentes/ParteBaixo";
import Link from 'next/link';

function Users({ users }) {
    return (
        <div>
            <Cabecalho />
            <Head>
                <title>animal</title>
            </Head>
            <div className={styles.teste}>
                <h1> Lista de animais </h1>
                {users.map((user, index) => (
                    <Link href='/profile/[id]' as={`/profile/${index}`}>
                        <div key={user._id}> <p> {user.nome} </p> </div>
                    </Link>
                ))}
            </div>
            <ParteBaixo />
        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal')
    const repo = await res.json()
    const users = await repo;
    return {
        props: { users }
    }
})
export default Users;
