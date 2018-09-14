import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "../components/login/login.component";
import { SignupComponent } from "../components/signup/signup.component";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { MyNgStyleDirective } from "../directives/my-ng-style.directive";



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    MyNgStyleDirective
  ],
  providers: [],
  exports: [
    LoginComponent,
    SignupComponent,
    NavbarComponent
  ]
})
export class LoginModule { }

