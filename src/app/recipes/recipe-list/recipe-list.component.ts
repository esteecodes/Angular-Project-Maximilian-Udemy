import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output () recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Spaghetti Recipe',
      'Spaghetti Recipe Description, Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, eum.',
      'https://live.staticflickr.com/65535/51129289518_342ec50c67_h.jpg'
    ),
    new Recipe(
      'Beef Recipe',
      'Beef Recipe Description, Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, eum.',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
    new Recipe(
      'Pancakes Recipe',
      'Pancakes Recipe Description, Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, eum.',
      'https://live.staticflickr.com/65535/51561210900_b0decb981a_b.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
