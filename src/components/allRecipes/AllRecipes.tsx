import React from "react";
import styles from "./AllRecipes.module.css";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";

const getRecipes = async () => {
  console.log("fetch");
  const res = await fetch("http://localhost:3000/api/recipes");

  console.log(res);

  if (!res.ok) {
    throw new Error("could not retrive recipes");
  }
  return res.json();
};

const AllRecipes = async () => {
  console.log("ALL Recipes");
  const recipes = await getRecipes();

  console.log("daaata", recipes);

  return (
    <>
      <p>All recipeeees:</p>
      <div className={styles.gridParent}>
        {recipes.map((recipe: { name: string; id: number }) => (
          <div className={styles.gridCell} key={recipe.id}>
            <Image
              src="/default-test-img.png"
              width={100}
              height={100}
              alt="Picture of an orange"
            />
            {recipe.name}
            <button className={styles.likeBtn}>
              <AiOutlineHeart />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllRecipes;
