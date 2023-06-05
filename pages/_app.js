import "../components/globals.css"
import Link from 'next/link';
import styles from '../components/MyApp.module.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <nav className={styles.navbar}>
                <ul className={styles.navbarContactBox}>
                    <Link href="/" >
                        <div className={styles.brandPizza}>
                            <img src='/assets/images/pizza-slice.png' alt='brand'></img>
                            <p>Pizza shop</p>
                        </div>
                    </Link>
                    <Link href="/" className={styles.navbarContact}>
                        Home
                    </Link>
                    <Link href="/about" className={styles.navbarContact}>
                        About
                    </Link>
                </ul>
            </nav>
            <div>
                <Component {...pageProps} />
            </div>
        </div>
    )
}