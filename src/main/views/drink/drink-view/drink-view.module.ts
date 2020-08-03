import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrinkViewComponent } from './drink-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DrinkViewComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DrinkViewModule { }
