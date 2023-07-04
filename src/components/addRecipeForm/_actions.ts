"use server";

import { createRecipe } from "@/db/recipe";
import { revalidatePath } from "next/cache";

export async function create(formData: any) {
  console.log(formData);

  const title = formData.get("title");
  const ingredients = formData.get("ingredients");
  const description = formData.get("description");

  await createRecipe({
    description,
    ingredients,
    name: title,
    img: null,
    userId: null,
  });

  revalidatePath("/recipes");
}
