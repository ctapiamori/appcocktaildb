import { Component, OnInit } from '@angular/core';
import { IDrinksList, IDrinkFilter } from '@shared/models/drink.model';
import { CocktailService } from 'src/providers/services/cocktail.service';
import { UnsubscribeOnDestroy } from '@shared/helpers';
import { takeUntil } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'ac-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent extends UnsubscribeOnDestroy implements OnInit {

  drinksList: IDrinksList;

  constructor(
    private cocktailService: CocktailService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.queryParams;
    if (!isNullOrUndefined(params['type']) && !isNullOrUndefined(params['valueSearch'])) {
      this.searchDrink({ type: params['type'], valueSearch: params['valueSearch'] });
    }
  }

  searchDrink(filter: IDrinkFilter): void {
    if (filter && !!filter.type) {
      this.cocktailService[`getCocktailBy${filter.type}`](filter.valueSearch)
        .pipe(takeUntil(this.unsubscribeDestroy$))
        .subscribe((drinks: IDrinksList) => (this.drinksList = drinks));
    }

  }

  viewDrink(idDrink: string): void {
    this.router.navigate(['/cocktail', idDrink]);
  }

}
