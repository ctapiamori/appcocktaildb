import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrinkListComponent } from './drink-list.component';
import { DrinkFilterModule } from 'src/main/components/drink-filter/drink-filter.module';
import { DrinkItemModule } from 'src/main/components/drink-item/drink-item.module';
import { NoSearchModule } from '@shared/components';

@NgModule({
  declarations: [DrinkListComponent],
  imports: [
    CommonModule,
    DrinkFilterModule,
    DrinkItemModule,
    NoSearchModule
  ]
})
export class DrinkListModule { }
