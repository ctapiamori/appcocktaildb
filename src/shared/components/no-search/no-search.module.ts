import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoSearchComponent } from './no-search.component';

@NgModule({
  declarations: [NoSearchComponent],
  exports: [NoSearchComponent],
  imports: [
    CommonModule
  ]
})
export class NoSearchModule { }
