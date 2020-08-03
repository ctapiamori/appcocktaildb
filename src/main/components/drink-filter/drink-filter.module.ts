import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { DrinkFilterComponent } from './drink-filter.component';

@NgModule({
  declarations: [DrinkFilterComponent],
  exports: [DrinkFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbTypeaheadModule
  ]
})
export class DrinkFilterModule { }
