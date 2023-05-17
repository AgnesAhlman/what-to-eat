import { NextResponse } from "next/server";
import { prisma } from ".";

export async function createRecipe() {
  const recipe = await prisma.recipe.create({
    data: {
      name: "Tomtatsoppa",
      ingridients: "tomat",
      description: "Krämig och god tomatsoppa!",
    },
  });
  console.log("Recipe created successfully!");
  return recipe;
}

// TODO: create get
