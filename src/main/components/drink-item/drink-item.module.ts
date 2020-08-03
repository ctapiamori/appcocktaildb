import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrinkItemComponent } from './drink-item.component';
import { PipesModule } from 'src/providers/pipes';

@NgModule({
  declarations: [DrinkItemComponent],
  exports: [DrinkItemComponent],
  imports: [
    CommonModule,
    PipesModule
  ]
})
export class DrinkItemModule { }
