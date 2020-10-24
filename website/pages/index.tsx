import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Pamai</a>
        </h1>

        <p className={styles.description}>
          Ant Design Components
        </p>

        <div className={styles.grid}>
          <a href="/data-table" className={styles.card}>
            <h3>Data Table &rarr;</h3>
            <p>CRUD on Table</p>
          </a>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Test &rarr;</h3>
            {/* <p>CRUD on Table</p> */}
          </a>

        
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
