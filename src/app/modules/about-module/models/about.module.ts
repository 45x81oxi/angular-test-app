import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { AboutComponent } from "../components/about/about.component";
import { MyDatePipe } from "../pipes/myDate.pipe";
import { MySumPipe } from "../pipes/mySum.pipe";


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
   AboutComponent,
    MyDatePipe,
    MySumPipe
  ],
  providers: [],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
