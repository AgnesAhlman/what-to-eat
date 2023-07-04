import React, { useRef } from "react";
import styles from "./addRecipeForm.module.css";
import { create } from "./_actions";

interface AddRecipeFormProps {
  onClose: () => void;
}

const AddRecipeForm: React.FC<AddRecipeFormProps> = ({ onClose }) => {
  const formRef = useRef<HTMLFormElement | null>(null);

  async function action(formData: any) {
    await create(formData);
    if (formRef.current) {
      formRef.current.reset();
    }
  }

  return (
    <div className={styles.container}>
      <h2>Popup Form</h2>
      <form ref={formRef} action={action}>
        <label>
          Name:
          <input type="text" name="title" />
        </label>
        <label>
          Ingredients:
          <input type="text" name="ingredients" />
        </label>
        <label>
          Description:
          <input type="text" name="description" />
        </label>
        <button type="submit">Save Recipe</button>
      </form>

      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default AddRecipeForm;
