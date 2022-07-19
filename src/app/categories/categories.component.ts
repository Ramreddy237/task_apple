import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category, CategoryListItemWithIndex, ListItem } from 'src/models/type';
import { CategoriesListService } from '../services/categories-list.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categoriesList$: BehaviorSubject<Category> = new BehaviorSubject<Category>(
    []
  );

  @Output() emitTodoList = new EventEmitter<CategoryListItemWithIndex>();

  showInputDialog = false;

  inputModel!: string;

  constructor(private readonly categoryService: CategoriesListService) {}

  ngOnInit(): void {}

  showToDoList(itemIndex: number, item: ListItem[]): void {
    this.emitTodoList.emit({ itemIndex, item });
  }

  updateCategory() {
    const alreadyExists = this.categoryService.categoryList.find(
      ({ name }) => name === this.inputModel
    );

    if (alreadyExists) {
      return alert('category already exists!!');
    }

    this.showInputDialog = false;
    this.categoryService.categoryList = [
      ...this.categoryService.categoryList,
      { name: this.inputModel, list: [] },
    ];
    this.inputModel = '';
    this.categoriesList$.next(this.categoryService.categoryList);
    this.showToDoList(
      this.categoryService.categoryList.length - 1,
      this.categoryService.categoryList[
        this.categoryService.categoryList.length - 1
      ].list
    );
  }
}
