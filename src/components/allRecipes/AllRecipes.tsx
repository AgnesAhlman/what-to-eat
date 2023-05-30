import React from "react";
import styles from "./AllRecipes.module.css";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { getRecipes } from "@/db/recipe";
import Link from "next/link";

// solution 1 (using API)
// const getApiRecipes = async () => {
//   console.log("fetch");
//   const res = await fetch("http://localhost:3000/api/recipes");

//   console.log(res);

//   if (!res.ok) {
//     throw new Error("could not retrive recipes");
//   }
//   return res.json();
// };

const AllRecipes = async () => {
  // Solution 1 (using API)
  // const recipes = await getApiRecipes();

  // Solution 2 (Calling Prisma Directly)
  const recipes = await getRecipes();
  console.log("hej", recipes);

  return (
    <>
      <p>All recipeeees:</p>
      <div className={styles.gridParent}>
        {recipes.map((recipe) => (
          <Link key={recipe.id} href={`/singlerecipe/${recipe.id}`}>
            <div className={styles.gridCell}>
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
          </Link>
        ))}
      </div>
    </>
  );
};

export default AllRecipes;
