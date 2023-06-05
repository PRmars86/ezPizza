import React from "react";
import Head from 'next/head'
import styles from './Layout.module.css'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Pizza shop</title>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </Head>

            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}>Made by Pengrui</footer>
        </div>
    )
}