import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@shared/helpers';
import { CocktailService } from './cocktail.service';
import { GeneralService } from './general.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ApiModule
  ],
  providers: [CocktailService, GeneralService]
})
export class ServicesModule { }
