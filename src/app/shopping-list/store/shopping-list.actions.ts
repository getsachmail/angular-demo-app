import { createAction, props } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.modal';

export const increment = createAction('[Counter Component] Increment');

export const AddIngredient = createAction("[shopping list] Add Ingredient", props<{ payload: Ingredient }>());
export const AddIngredients = createAction("[shopping list] Add Ingredients", props<{ payload: Ingredient[] }>());
export const StartEdit = createAction("[shopping list] Start Edit", props<{ payload: number }>());
export const StopEdit = createAction("[shopping list] Stop Edit");
export const DeleteIngredient = createAction("[shopping list] Delete Ingredient");
export const UpdateIngredient = createAction("[shopping list] Update Ingredient", props<{ payload: Ingredient }>());

// export class AddIngredient implements Action {
//     readonly type = ADD_INGREDIENT;

//     constructor(public payload: Ingredient) { }
// }


// export class AddIngredients implements Action {
//     readonly type = ADD_INGREDIENTS;

//     constructor(public payload: Ingredient[]) { }
// }

// export class UpdateIngredient implements Action {
//     readonly type = UPDATE_INGREDIENT;
//     constructor(public payload: Ingredient) { }
// }

// export class DeleteIngredient implements Action {
//     readonly type = DELETE_INGREDIENT;
//     constructor() { }
// }

// export class StartEdit implements Action {
//     readonly type = START_EDIT;
//     constructor(public payload: number) { }
// }

// export class StopEdit implements Action {
//     readonly type = STOP_EDIT;
// }

// export type ShoppingListActions = AddIngredient
//     | AddIngredients
//     | UpdateIngredient
//     | DeleteIngredient
//     | StartEdit
//     | StopEdit;