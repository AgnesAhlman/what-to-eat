"use client";

import AddRecipeForm from "@/components/addRecipeForm/addRecipeForm";
import { useState } from "react";

export default function Profile() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };
  return (
    <>
      <h1>Profile page test</h1>
      <button onClick={handleButtonClick}> Add new recipe</button>
      {isPopupOpen ? <AddRecipeForm onClose={handleClosePopup} /> : ""}
    </>
  );
}
