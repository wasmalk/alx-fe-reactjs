
import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // Initial state for recipes
  

  // Action to add a new recipe
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Action to initialize or reset the list of recipes
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
