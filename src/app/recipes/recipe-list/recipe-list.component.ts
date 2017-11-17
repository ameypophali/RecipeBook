import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe','Test Description','https://media.mnn.com/assets/images/2015/06/baking-ingredients-on-table.jpg.560x0_q80_crop-smart.jpg'),
    new Recipe('Test Recipe','Test Description','https://media.mnn.com/assets/images/2015/06/baking-ingredients-on-table.jpg.560x0_q80_crop-smart.jpg')
  ]; 
  constructor() { }

  ngOnInit() {
  }

}
