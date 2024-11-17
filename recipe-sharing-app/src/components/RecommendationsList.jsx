import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  // Fetch recommendations from the store
  const recommendations = useRecipeStore((state) => state.recommendations);
  
  // Fetch the generateRecommendations function to trigger the action
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  // Trigger recommendation generation whenever the component mounts or favorites change
  React.useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recipe Recommendations</h2>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations available at the moment.</p>
      )}
    </div>
  );
};

export default RecommendationsList;
