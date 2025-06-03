import recipes from '../data/recipes.json';

export default function RandomRecipe() {
  const random = recipes[Math.floor(Math.random() * recipes.length)];

  return (
    <div>
      <h1>Random Recipe: {random.title}</h1>
      <p>{random.description}</p>
    </div>
  );
}
