import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from 'src/providers/services/cocktail.service';
import { UnsubscribeOnDestroy } from '@shared/helpers';
import { takeUntil } from 'rxjs/operators';
import { IDrink } from '@shared/models/drink.model';

@Component({
  selector: 'ac-drink-view',
  templateUrl: './drink-view.component.html',
  styleUrls: ['./drink-view.component.scss']
})
export class DrinkViewComponent extends UnsubscribeOnDestroy implements OnInit {
  drink: IDrink;
  langSelected = '';

  constructor(
    private cocktailService: CocktailService,
    private activatedRoute: ActivatedRoute
  ) {
    super();
  }

  ngOnInit() {
    this.loadDrink();
  }

  loadDrink() {
    const params = this.activatedRoute.snapshot.params;
    this.cocktailService.getCocktabilById(params.id)
      .pipe(takeUntil(this.unsubscribeDestroy$))
      .subscribe((drink: IDrink) => {
        this.drink = drink;
      });
  }

  getInstructions() {
    return this.drink && this.drink[`strInstructions${this.langSelected}`];
  }

  getIngredients(): Array<string> {
    return this.drink && Object.keys(this.drink)
      .filter(prop => (!!this.drink[prop] && prop.includes('strIngredient')))
      .map(prop => (this.drink[prop]));
  }


}
