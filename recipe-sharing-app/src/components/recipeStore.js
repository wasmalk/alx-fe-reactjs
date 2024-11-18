import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // All recipes
  favorites: [], // User's favorite recipes
  recommendations: [], // Recommended recipes based on favorites
  searchTerm: '', // The current search term

  // Action to add a recipe
  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, recipe],
  })),

  // Action to update a recipe
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),

  // Action to delete a recipe
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
  })),

  // Action to set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Action to add a recipe to favorites
  addFavorite: (recipeId) => set((state) => {
    if (!state.favorites.includes(recipeId)) {
      return { favorites: [...state.favorites, recipeId] };
    }
  }),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId),
  })),

  // Action to generate recommendations based on favorites
  generateRecommendations: () => set((state) => {
    const recommended = state.recipes.filter((recipe) =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  // Action to initialize or set recipes
  setRecipes: (recipes) => set({ recipes }),
}));

export { useRecipeStore };
