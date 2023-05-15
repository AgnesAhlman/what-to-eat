import { createRecipe } from "@/db/recipe";
import { NextResponse } from "next/server";

export const POST = async () => {
  const newRecipe = await createRecipe();
  return NextResponse.json({
    recipe: newRecipe,
  });
};
