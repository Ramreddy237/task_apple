import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  CategoryInterface,
  CategoryListItemWithIndex,
  ListItem,
} from 'src/models/type';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent implements OnInit {
  list$ = new BehaviorSubject<CategoryListItemWithIndex | null>(null);
  constructor() {}

  ngOnInit(): void {}

  listToDoGetter(categoryListItem: CategoryListItemWithIndex): void {
    this.list$.next(categoryListItem);
  }
}
