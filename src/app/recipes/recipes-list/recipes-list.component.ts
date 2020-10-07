import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Recipe } from '../Recipe.modal';
import { RecipesService } from '../recipes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] ;

  
  constructor(private recipesService: RecipesService, private route: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }

  public toNewRecipe() {
    this.route.navigate(['new'], {relativeTo: this.activatedRoute});
  }

}
