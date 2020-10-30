import { ActionReducerMap } from '@ngrx/store';
import { ShoppingListReducer } from '../shopping-list/store/shopping-list.reducer';
import { ShoppingListState } from '../shopping-list/store/shopping-list.state';

export interface AppState {
    shoppingList: ShoppingListState
}

export const AppReducer: ActionReducerMap<AppState> = {
    shoppingList: ShoppingListReducer
}