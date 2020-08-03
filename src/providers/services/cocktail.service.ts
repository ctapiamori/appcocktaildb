import { Injectable } from '@angular/core';
import { ApiService } from '@shared/helpers';
import { Observable } from 'rxjs';
import { CocktailEnpoint } from '../endpoint';
import { IResponseDrinkFilter, IDrinksList, IResponseDrink, IDrink } from '@shared/models/drink.model';
import { map } from 'rxjs/operators';

@Injectable()
export class CocktailService {

  constructor(
    private apiService: ApiService
  ) { }

  getCocktabilById(id: string): Observable<IDrink> {
    return this.apiService.get(CocktailEnpoint.getByID, { params: { idCocktail: id } })
      .pipe(map((response: IResponseDrink) => (response && response.drinks[0])));
  }

  getSearchCocktail(name: string): Observable<any> {
    return this.apiService.get(CocktailEnpoint.searchName, { params: { name } });
  }

  getCocktailByCategory(category: string): Observable<IDrinksList> {
    return this.apiService.get<IResponseDrinkFilter>(CocktailEnpoint.filterByCategory, { params: { category } })
      .pipe(map((response: IResponseDrinkFilter) => (response && response.drinks)));
  }

  getCocktailByGlass(glass: string): Observable<IDrinksList> {
    return this.apiService.get<IResponseDrinkFilter>(CocktailEnpoint.filterByGlass, { params: { glass } })
      .pipe(map((response: IResponseDrinkFilter) => (response && response.drinks)));
  }

  getCocktailByIngredient(ingredient: string): Observable<IDrinksList> {
    return this.apiService.get<IResponseDrinkFilter>(CocktailEnpoint.filterByIngredient, { params: { ingredient } })
      .pipe(map((response: IResponseDrinkFilter) => (response && response.drinks)));
  }

  getCocktailByAlcoholic(alcoholic: string): Observable<IDrinksList> {
    return this.apiService.get<IResponseDrinkFilter>(CocktailEnpoint.filterByAlcoholic, { params: { alcoholic } })
      .pipe(map((response: IResponseDrinkFilter) => (response && response.drinks)));
  }

}
