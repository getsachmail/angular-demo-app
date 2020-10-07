import { Ingredient } from '../../shared/ingredient.modal';
import * as ShoppingListActions from '../store/shopping-list.actions';

export interface State {
  editItemIndex: number;
  editItem: Ingredient;
  ingrediants: Ingredient[];
}

const initialState: State = {
  editItemIndex: -1,
  editItem: null,
  ingrediants: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 5)
  ]
}

export function ShoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {

  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingrediants: [...state.ingrediants, action.payload]
      }

    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingrediants: [...state.ingrediants, ...action.payload]
      }

    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingrediants[state.editItemIndex];
      const updateIngredient = {
        ...ingredient,
        ...action.payload
      }
      const updatedIngredients = [...state.ingrediants];
      updatedIngredients[state.editItemIndex] = updateIngredient;
      return {
        ...state,
        editItemIndex: -1,
        editItem: null,
        ingrediants: updatedIngredients
      }

    case ShoppingListActions.DELETE_INGREDIENT:
      let newIngrediants = state.ingrediants.filter((item, index) => index !== state.editItemIndex);
      return {
        ...state,
        editItemIndex: -1,
        editItem: null,
        ingrediants: newIngrediants
      }

    case ShoppingListActions.START_EDIT:
      return {
        ...state,
        editItemIndex: action.payload,
        editItem: state.ingrediants[action.payload]
      }

    case ShoppingListActions.STOP_EDIT:
      return {
        ...state,
        editItemIndex: -1,
        editItem: null
      }

    default:
      return initialState;
  }

}