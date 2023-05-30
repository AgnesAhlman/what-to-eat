import { createRecipe, getRecipes } from "@/db/recipe";
import { Recipe } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async () => {
  const newRecipe = await createRecipe();
  return NextResponse.json({
    recipe: newRecipe,
  });
};

export async function GET(request: Request) {
  const recipes = await getRecipes();
  return NextResponse.json(recipes);
}
