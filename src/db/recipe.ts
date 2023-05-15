import { prisma } from ".";

export async function createRecipe() {
  const recipe = await prisma.recipe.create({
    data: {
      name: "Fish-tacos",
      ingridients: "Rotselleri",
      description: "Delicious fish tacos with Rotselleri",
    },
  });
  console.log("Recipe created successfully!");
  return recipe;
}

// TODO: create get
