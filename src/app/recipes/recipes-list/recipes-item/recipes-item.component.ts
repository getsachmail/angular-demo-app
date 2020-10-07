import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../Recipe.modal';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() item: Recipe;  
  @Input() index: number;

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
  }

  public onClick() {
    this.recipeService.selectedItem.next(this.item);
  }

}
