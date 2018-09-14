import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AuthGuard } from "./guards/auth.guard";


import { homeRoutes } from "./modules/home-module/home-routing";
import { loginRoutes } from "./modules/login-module/models/login-routing";
import { aboutRoutes } from "./modules/about-module/models/about-routing";


const routes: Routes =[
  { path: 'login', children:[...loginRoutes]},
  { path: 'signup', children:[...loginRoutes]},
  { path: '', children:[...homeRoutes], canActivate: [AuthGuard] },
  { path: 'about',children:[...aboutRoutes], canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class RoutingModule {
}
