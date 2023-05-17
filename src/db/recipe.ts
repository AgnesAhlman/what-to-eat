import { NextResponse } from "next/server";
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

export async function GET(request: Request) {
  const recipes = await prisma.recipe.findMany();
  return NextResponse.json(recipes);
}
