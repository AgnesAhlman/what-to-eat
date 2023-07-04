import { getRecipeById } from "@/db/recipe";

type SingleRecipeProps = {
  params: {
    id: string;
  };
};

export default async function SingleRecipe(props: SingleRecipeProps) {
  console.log(props.params.id);
  const recipe = await getRecipeById(props.params.id);
  return (
    <section>
      <h1>Single Recipe</h1>
      <p>{recipe.name}</p>
      <p>{recipe.ingredients}</p>
      <p>{recipe.description}</p>
    </section>
  );
}
