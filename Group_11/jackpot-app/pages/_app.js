import '../public/css/style.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <h1>JackPot</h1>
        <nav>
          <a href="/">Home</a> | 
          <a href="/recipes">Recipes</a> | 
          <a href="/random">Random</a> | 
          <a href="/login">Login</a>
        </nav>
        <hr />
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}