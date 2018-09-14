import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./components/home/home.component";
import { TodoEditComponent } from "./components/todo-edit/todo-edit.component";
import { TodoAddComponent } from "./components/todo-add/todo-add.component";
import { MyNgClassDirective } from "./directives/my-ng-class.directive";
import { MyIfDirective } from "./directives/my-if.directive";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HomeComponent,
    TodoEditComponent,
    TodoAddComponent,
    MyNgClassDirective,
    MyIfDirective
  ],
  providers: [],
  exports: [
    HomeComponent,
    TodoEditComponent,
    TodoAddComponent
  ]
})
export class HomeModule { }
