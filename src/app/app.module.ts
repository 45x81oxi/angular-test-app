import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RoutingModule } from "./routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from "@angular/forms";
import { BgDirective } from "./directives/bg.directive";
import { JoinPipe } from "./pipes/join.pipe";
import { MySlicePipes } from "./pipes/mySlice.pipes";
import { MyLoopDirective } from "./directives/my-loop.directive";

// My custom modules
import { HomeModule } from "./modules/home-module/home.module";
import { LoginModule } from "./modules/login-module/models/login.module";
import { AboutModule } from "./modules/about-module/models/about.module";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MySlicePipes,
    JoinPipe,
    BgDirective,
    MyLoopDirective
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    ReactiveFormsModule,
    HomeModule,
    LoginModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
