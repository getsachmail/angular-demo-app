import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.modal';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromAppReducer from '../store/app.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingrediants: Observable<{ ingrediants: Ingredient[] }>;

  constructor(private store: Store<fromAppReducer.AppState>) { }

  ngOnInit() {
    this.ingrediants = this.store.select('shoppingList');
  }

  onEdit(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

  ngOnDestroy(): void {

  }

}
