import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { CategoriesComponent } from '../categories/categories.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FeatureComponent,
    CategoriesComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
  ]
})
export class FeatureModule { }
