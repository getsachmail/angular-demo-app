import { Injectable, EventEmitter } from '@angular/core';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import { Store } from '@ngrx/store';
import { Recipe } from './Recipe.modal';
import { Ingredient } from '../shared/ingredient.modal';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  public selectedItem = new Subject<Recipe>();

  private recipes = [
    new Recipe("Tea Recipe", "This is the Tea recipe", "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg",
      [
        new Ingredient("Sugar", 3),
        new Ingredient("Tea Powder", 1),
        new Ingredient("Milk", 1),
      ]
    ),
    new Recipe("Recipe-2", "This is second recipe", "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg",
      [
        new Ingredient("Ingredient-1", 12),
        new Ingredient("Ingredient-2", 2),
        new Ingredient("Ingredient-3", 5),
      ])
  ];

  constructor(private store: Store<{
    shoppingList: { ingrediants: Ingredient[] }
  }>) { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }

  public getRecipe(index: number) {
    return this.recipes.slice()[index];
  }




}
