import { Ingredient } from 'src/app/shared/ingredient.modal';

export interface ShoppingListState {
    editItemIndex: number;
    editItem: Ingredient;
    ingrediants: Ingredient[];
}