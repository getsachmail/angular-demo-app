import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.modal';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromAppReducer from '../../store/app.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('f', { static: false }) slForm: NgForm;

  editMode = false;
  editedItem: Ingredient;

  constructor(private store: Store<fromAppReducer.AppState>) { }

  ngOnInit() {
    this.store.select('shoppingList').subscribe(data => {
      if (data.editItemIndex !== -1) {
        this.editMode = true;
        this.editedItem = data.editItem;
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    });
  }

  public onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.store.dispatch(new ShoppingListActions.UpdateIngredient(newIngredient));
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }

    this.editMode = false;
    form.reset();
    return false;
  }

  onDelete() {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
  }

  onClear() {
    this.editMode = false;
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }

}
