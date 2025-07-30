import '../public/css/style.css';
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <nav>
          <Link href="/">Home</Link> | 
          <Link href="/recipes">Rezepte</Link> | 
          <Link href="/random">Zufallsrezept</Link> | 
          <Link href="/login">Login</Link>
        </nav>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}