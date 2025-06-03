import { useEffect, useState } from 'react';
import recipes from '../data/recipes.json';
import Link from 'next/link';

export default function RandomRecipePage() {
  const [randomRecipe, setRandomRecipe] = useState(null);

  useEffect(() => {
    const random = recipes[Math.floor(Math.random() * recipes.length)];
    setRandomRecipe(random);
  }, []);

  return (
    <div>
      <h1>Zufälliges Rezept</h1>
      {randomRecipe ? (
        <div>
          <h2>{randomRecipe.title}</h2>
          <img src={randomRecipe.image} width="300" alt={randomRecipe.title} />
          <p>
            <strong>Zutaten:</strong>
            <ul>
              {randomRecipe.ingredients.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </p>
          <p><strong>Anleitung:</strong> {randomRecipe.instructions}</p>
          <Link href={`/recipes/${randomRecipe.id}`}>
            <button>→ Zum Rezept</button>
          </Link>
        </div>
      ) : (
        <p>Loading random recipe…</p>
      )}
    </div>
  );
}
