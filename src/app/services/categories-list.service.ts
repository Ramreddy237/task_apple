import { Injectable } from '@angular/core';
import { Category } from 'src/models/type';

@Injectable({
  providedIn: 'root'
})
export class CategoriesListService {

  categoryList: Category = [];

  constructor() { }
}
