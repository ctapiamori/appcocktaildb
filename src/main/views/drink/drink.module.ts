import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrinkRoutingModule } from './drink.routing.module';
import { DrinkListModule } from './drink-list/drink-list.module';
import { DrinkViewModule } from './drink-view/drink-view.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DrinkRoutingModule,
    DrinkListModule,
    DrinkViewModule
  ]
})
export class DrinkModule { }
