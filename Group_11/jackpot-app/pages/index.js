import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to JackPot</h1>
      <p>Use the app to randomize recipes from your fridge ingredients!</p>
      <Link href="/recipes"><button>See All Recipes</button></Link>
      <Link href="/random"><button>Get Random Recipe</button></Link>
    </div>
  );
}
