// src/components/DeleteRecipeButton.jsx
import useRecipeStore from '../stores/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    alert('Recipe deleted successfully'); // Optional: Feedback for user
  };

  return (
    <button onClick={handleDelete} style={{ color: 'red' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
