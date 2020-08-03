import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageErrorComponent } from './page-error.component';
import { PageErrorRoutingModule } from './page-error.routing';

@NgModule({
  declarations: [PageErrorComponent],
  imports: [
    CommonModule,
    PageErrorRoutingModule
  ]
})
export class PageErrorModule { }
