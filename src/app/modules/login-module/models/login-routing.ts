import { Routes } from "@angular/router";
import { LoginComponent } from "../components/login/login.component";
import { SignupComponent } from "../components/signup/signup.component";


export const loginRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];
