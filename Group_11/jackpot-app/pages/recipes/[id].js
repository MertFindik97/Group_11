import recipes from '../../data/recipes.json';
import Image from 'next/image';

export default function RecipeDetail({ recipe }) {
  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <Image src={recipe.image} alt={recipe.title} width="300" />
      <p><strong>Ingredients:</strong></p>
      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = recipes.map(recipe => ({
    params: { id: recipe.id.toString() }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const recipe = recipes.find(r => r.id.toString() === params.id);
  return {
    props: { recipe }
  };
}
