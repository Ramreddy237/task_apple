import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category, ListItem } from 'src/models/type';
import { CategoriesListService } from '../services/categories-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  private _list!: ListItem[];

  get list(): ListItem[] {
    return this._list;
  }

  @Input() set list(list) {
    this._list = list;
    this.todoListGetter$.next(list);
    this.toDoList = list;
  }

  private _categoryItemNumber!: number;

  get categoryItemNumber(): number {
    return this._categoryItemNumber;
  }

  @Input() set categoryItemNumber(itemNumber: number) {
    this._categoryItemNumber = itemNumber;
  }

  showInputDialog = false;

  inputModel!: string;

  toDoList: ListItem[] = [];

  todoListGetter$ = new BehaviorSubject<ListItem[]>([]);

  constructor(private readonly categoryService: CategoriesListService) {}

  ngOnInit(): void {}

  updateToDoList() {
    const alreadyExists = this.toDoList.find(
      (item) => item?.value === this.inputModel
    );

    if (alreadyExists) {
      return alert('category already exists!!');
    }

    this.showInputDialog = false;
    this.toDoList = [
      ...this.toDoList,
      { value: this.inputModel, status: false },
    ];

    this.categoryService.categoryList.map((item, index) => {
      if (index === this._categoryItemNumber) {
        item.list = this.toDoList;
      }
    });

    this.inputModel = '';
    this.todoListGetter$.next(
      this.categoryService.categoryList[this._categoryItemNumber].list
    );
  }
}
