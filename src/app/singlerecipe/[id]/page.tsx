import { getRecipeById } from "@/db/recipe";

export default async function SingleRecipe(props) {
  console.log(props.params.id);
  const recipe = await getRecipeById(props.params.id);
  return (
    <section>
      <h1>Single Recipe</h1>
      <p>{recipe?.name}</p>
      <p>{recipe?.ingridients}</p>
      <p>{recipe?.description}</p>
    </section>
  );
  return <h1>Single Recipe</h1>;
}
