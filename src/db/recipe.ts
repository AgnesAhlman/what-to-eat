import { NextResponse } from "next/server";
import { prisma } from ".";
import { notFound } from "next/navigation";
import { Recipe } from "@prisma/client";

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

export async function getRecipes() {
  const recipes = await prisma.recipe.findMany();
  return recipes;
}

export async function getRecipeById(id: string): Promise<Recipe> {
  try {
    const recipe = await prisma.recipe.findUnique({
      where: {
        id,
      },
    });

    if (!recipe) {
      notFound();
    }
    return recipe;
  } catch (error) {
    console.error("Error retrieving recipe by ID:", error);

    // IF we don't find the item return

    // If db is down? Do what?
    //
    throw error;
  }
}
