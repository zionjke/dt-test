import Head from "next/head";
import Link from "next/link";
import styles from '../styles/Wrapper.module.scss'

type MainLayoutProps = {
    title: string
    children: any
}

export default function Wrapper({title = 'DevelopsToday', children}: MainLayoutProps) {
    return (
        <>
            <Head>
                <title>{title} | DevelopsToday</title>
                <meta name="keywords" content="HTML, CSS, JavaScript, NextJS, React, Redux"/>
                <meta charSet="utf-8"/>
            </Head>
            <nav className={styles.nav}>
                <ul className={styles.nav__menu}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/posts/new">Create Post</Link>
                    </li>
                </ul>
            </nav>
            <hr/>
            <main className={styles.content}>
                {children}
            </main>
        </>
    )
}
