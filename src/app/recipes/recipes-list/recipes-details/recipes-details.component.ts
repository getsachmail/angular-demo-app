import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../Recipe.modal';
import { RecipesService } from '../../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  recipe: Recipe;
  id: number; 

  constructor(private recipeService: RecipesService, private route: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param: Params) => {
        this.id = +param['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
    });   
  }

  public addIngredients() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  public editRecipe() {
    this.route.navigate(['edit'], {relativeTo: this.activatedRoute});
  }

}
