import { Injectable } from '@angular/core';
// import { Ingredient } from '../shared/ingredient.modal';
// import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  // private ingrediants = [
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 5)
  // ];

  // newIngredient = new Subject<Ingredient[]>();

  constructor() { }

  // public getIngrediants() {
  //   return this.ingrediants.slice();
  // }

  // public addItem(item: Ingredient) {  
  //   this.ingrediants.push(item);
  //   this.newIngredient.next(this.ingrediants.slice());
  // }

  // public addItems(items: Ingredient[]) {
  //   this.ingrediants.push(...items);
  //   this.newIngredient.next(this.ingrediants.slice());
  // }
}
