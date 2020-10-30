import { createReducer, on } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.modal';
import { AddIngredient, AddIngredients, UpdateIngredient, DeleteIngredient, StartEdit, StopEdit } from '../store/shopping-list.actions';
import { ShoppingListState } from './shopping-list.state';

const initialState: ShoppingListState = {
  editItemIndex: -1,
  editItem: null,
  ingrediants: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 5)
  ]
}

function handleAddIngredient(state, action) {
  return {
    ...state,
    ingrediants: [...state.ingrediants, action.payload]
  }
}


function handleAddIngredients(state, action) {
  return {
    ...state,
    ingrediants: [...state.ingrediants, ...action.payload]
  }
}

function handleUpdateIngredient(state, action) {
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
}

function handleDeleteIngredient(state, action) {
  let newIngrediants = state.ingrediants.filter((item, index) => index !== state.editItemIndex);
  return {
    ...state,
    editItemIndex: -1,
    editItem: null,
    ingrediants: newIngrediants
  }
}

function handleStartEdit(state, action) {
  return {
    ...state,
    editItemIndex: action.payload,
    editItem: state.ingrediants[action.payload]
  }
}


function handleStopEdit(state, action) {
  return {
    ...state,
    editItemIndex: -1,
    editItem: null
  }
}

const _createShoppingListReducer = createReducer(
  initialState,
  on(AddIngredient, handleAddIngredient),
  on(AddIngredients, handleAddIngredients),
  on(UpdateIngredient, handleUpdateIngredient),
  on(DeleteIngredient, handleDeleteIngredient),
  on(StartEdit, handleStartEdit),
  on(StopEdit, handleStopEdit)
);


export function ShoppingListReducer(state, action) {
  return _createShoppingListReducer(state, action);
}