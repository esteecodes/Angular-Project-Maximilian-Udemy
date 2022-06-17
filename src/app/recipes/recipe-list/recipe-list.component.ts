import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe 1',
      'Test Description 1',
      'https://live.staticflickr.com/65535/51129289518_342ec50c67_h.jpg'
    ),
    new Recipe(
      'Test Recipe 2',
      'Test Description 2',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
    new Recipe(
      'Test Recipe 3',
      'Test Description 3',
      'https://live.staticflickr.com/65535/51561210900_b0decb981a_b.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
