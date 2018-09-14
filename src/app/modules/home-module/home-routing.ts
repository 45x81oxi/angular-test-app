import { Routes} from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { TodoEditComponent } from "./components/todo-edit/todo-edit.component";
import { TodoAddComponent } from "./components/todo-add/todo-add.component";

export const homeRoutes: Routes = [
      {path: '', component: HomeComponent},
      {path: 'todo/:id', component: TodoEditComponent},
      {path: 'todo-add', component: TodoAddComponent}
];
