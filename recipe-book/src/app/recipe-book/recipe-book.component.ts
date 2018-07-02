import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe;

  constructor() { }

  ngOnInit() {
  }

  selectRecipe(recipe) {
    this.selectedRecipe = recipe;
  }
}
