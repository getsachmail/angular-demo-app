import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './Recipe.modal';
import { RecipesService } from './recipes.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  selectedItemSubscription: Subscription;
  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.selectedItemSubscription  = this.recipeService.selectedItem
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        }
      ); 
  }


  ngOnDestroy(): void {
    this.selectedItemSubscription.unsubscribe();
  }
}
