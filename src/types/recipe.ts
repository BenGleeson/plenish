export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: Ingredient[];
  instructions: string[];
  cookingTime: number;
  servings: number;
  imageUrl?: string;
  sourceUrl?: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Ingredient {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  category: IngredientCategory;
}

export enum IngredientCategory {
  Produce = 'PRODUCE',
  Dairy = 'DAIRY',
  Meat = 'MEAT',
  Pantry = 'PANTRY',
  Spices = 'SPICES',
  Other = 'OTHER'
}

export interface InventoryItem {
  id: string;
  ingredientId: string;
  quantity: number;
  unit: string;
  expirationDate?: Date;
  purchaseDate: Date;
}

export interface ShoppingListItem {
  id: string;
  ingredientId: string;
  quantity: number;
  unit: string;
  recipeId?: string;
  isPurchased: boolean;
  addedAt: Date;
}

export interface MealPlan {
  id: string;
  date: Date;
  recipeId: string;
  mealType: MealType;
  servings: number;
}

export enum MealType {
  Breakfast = 'BREAKFAST',
  Lunch = 'LUNCH',
  Dinner = 'DINNER',
  Snack = 'SNACK'
} 