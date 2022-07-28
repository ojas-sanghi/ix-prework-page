import { firestore } from "../firebase/firebase";

import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  query,
  getDocs,
} from "firebase/firestore";
import { Recipe } from "../models/recipe";

class RecipeService {
  async createRecipe(recipe) {

    const collectionRef = collection(firestore, "recipes");
    const docRef = await addDoc(collectionRef, {
      chef: recipe.chef,
      name: recipe.name,
      steps: recipe.steps
    })
    recipe.id = docRef.id;
    return recipe;
  }

  async readRecipes() {
    const collectionRef = collection(firestore, "recipes");
    const q = query(collectionRef);
    const docs = await getDocs(q);

    const recipes = [];

    docs.forEach(doc => {
      const data = doc.data();
      const newRecipe = new Recipe(
        doc.id,
        data.steps,
        data.chef,
        data.name
      );
      recipes.push(newRecipe);
    });
    return recipes;
  }

  async deleteRecipe(recipe) {
    const docRef = doc(firestore, `recipes/${recipe.id}`)
    deleteDoc(docRef);
  }
}

const service = new RecipeService();
export default service;
