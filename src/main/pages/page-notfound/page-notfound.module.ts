import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotfoundComponent } from './page-notfound.component';
import { PageNotfoundRoutingModule } from './page-notfound.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PageNotfoundComponent],
  imports: [
    CommonModule,
    PageNotfoundRoutingModule
  ]
})
export class PageNotfoundModule { }
