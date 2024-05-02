import mongoose from "mongoose";
const recipeSchema = new mongoose.Schema({
    id: Number,
    name: String,
    ingredients: [String],
    instructions: [String],
    prepTimeMinutes: Number,
    cookTimeMinutes: Number,
    servings: Number,
    difficulty: String,
    cuisine: String,
    caloriesPerServing: Number,
    tags: [String],
    userId: Number,
    image: String,
    rating: Number,
    reviewCount: Number,
    mealType: [String]
  });

  
  const dataModel =mongoose.model("recipes",recipeSchema)
  export default dataModel