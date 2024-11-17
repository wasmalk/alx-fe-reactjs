import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // All recipes
  favorites: [], // User's favorite recipes
  recommendations: [], // Recommended recipes based on favorites

  // Action to add a recipe to favorites
  addFavorite: (recipeId) => set((state) => {
    // Add the recipeId to the favorites list if it doesn't already exist
    if (!state.favorites.includes(recipeId)) {
      return { favorites: [...state.favorites, recipeId] };
    }
  }),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId),
  })),

  // Action to generate recommendations based on favorites
  generateRecommendations: () => set((state) => {
    // Here, we mock recommendations based on favorites and random logic
    const recommended = state.recipes.filter((recipe) =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  // Action to initialize or set recipes
  setRecipes: (recipes) => set({ recipes }),
}));

export { useRecipeStore };
