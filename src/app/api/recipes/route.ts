import { prisma } from "@/db";
import { createRecipe } from "@/db/recipe";
import { NextResponse } from "next/server";

export const POST = async () => {
  const newRecipe = await createRecipe();
  return NextResponse.json({
    recipe: newRecipe,
  });
};

export async function GET(request: Request) {
  const recipes = await prisma.recipe.findMany();
  return NextResponse.json(recipes);
}
