import { Injectable } from '@angular/core';
import { ApiService } from '@shared/helpers';
import { Observable } from 'rxjs';
import {
  IResponseCategories,
  IResponseGlasses,
  IResponseIngredients,
  IResponseAlcoholic,
  ICategoriesList,
  IGlassesList,
  IIngredientsList,
  IAlcoholicList
} from '@shared/models/general.model';
import { GeneralEnpoint } from '../endpoint';
import { map } from 'rxjs/operators';

@Injectable()
export class GeneralService {
  constructor(
    private apiService: ApiService
  ) { }

  getCategories(): Observable<ICategoriesList> {
    return this.apiService.get<IResponseCategories>(GeneralEnpoint.listCategory)
      .pipe(map((response: IResponseCategories) => (response && response.drinks)));
  }

  getGlasses(): Observable<IGlassesList> {
    return this.apiService.get(GeneralEnpoint.listGlass)
      .pipe(map((response: IResponseGlasses) => (response && response.drinks)));
  }

  getIngredients(): Observable<IIngredientsList> {
    return this.apiService.get<IResponseIngredients>(GeneralEnpoint.listIngredient)
      .pipe(map((response: IResponseIngredients) => (response && response.drinks)));
  }

  getAlcoholic(): Observable<IAlcoholicList> {
    return this.apiService.get<IResponseAlcoholic>(GeneralEnpoint.listAlcoholic)
      .pipe(map((response: IResponseAlcoholic) => (response && response.drinks)));
  }
}
