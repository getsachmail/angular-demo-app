import { ActionReducerMap } from '@ngrx/store';
import * as  fromShoppingList from '../shopping-list/store/shopping-list.reducer';

export interface AppState {
    shoppingList: fromShoppingList.State
}

export const AppReducer: ActionReducerMap<AppState> = {
    shoppingList: fromShoppingList.ShoppingListReducer
}