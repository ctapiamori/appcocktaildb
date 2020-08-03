import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IDrinkFilter } from '@shared/models/drink.model';
import { ICategoriesList, IGlassesList, IIngredientsList, IAlcoholicList, IIngredientItem } from '@shared/models/general.model';
import { GeneralService } from 'src/providers/services/general.service';
import { UnsubscribeOnDestroy } from '@shared/helpers';
import { takeUntil, debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { Observable } from 'rxjs';

@Component({
  selector: 'ac-drink-filter',
  templateUrl: './drink-filter.component.html',
  styleUrls: ['./drink-filter.component.scss']
})
export class DrinkFilterComponent extends UnsubscribeOnDestroy implements OnInit {
  @Output() search: EventEmitter<IDrinkFilter>;

  filter: IDrinkFilter;
  showAlert = false;
  dataSourceCategories: ICategoriesList;
  dataSourceGlasess: IGlassesList;
  dataSourceIngredients: Array<string>;
  dataSourceAlcoholic: IAlcoholicList;

  constructor(
    private generalService: GeneralService,
    private activatedRoute: ActivatedRoute
  ) {
    super();
    this.filter = { category: '', glass: '', ingredient: '', alcoholic: '', name: '' }; // Inicialización de datos
    this.search = new EventEmitter<IDrinkFilter>();
    this.dataSourceIngredients = [];
  }

  ngOnInit() {
    this.loadData();

    const params = this.activatedRoute.snapshot.queryParams;
    this.filter.type = params['type'];
    this.filter.valueSearch = params['valueSearch'];
    if (!isNullOrUndefined(params['type'])) {
      this.filter[params['type'].toLocaleLowerCase()] = params['valueSearch'];
    }
  }

  onClickFilter(): void {
    const notFilter = Object.keys(this.filter).filter(prop => !!this.filter[prop] && prop !== 'type' && prop !== 'valueSearch');
    this.showAlert = !notFilter.length;
    if (!!notFilter.length) {
      this.search.next(this.filter);
    }
  }

  loadData(): void {
    this.generalService.getCategories()
      .pipe(takeUntil(this.unsubscribeDestroy$))
      .subscribe((data: ICategoriesList) => (this.dataSourceCategories = data));
    this.generalService.getGlasses()
      .pipe(takeUntil(this.unsubscribeDestroy$))
      .subscribe((data: IGlassesList) => (this.dataSourceGlasess = data));
    this.generalService.getIngredients()
      .pipe(takeUntil(this.unsubscribeDestroy$))
      .subscribe((data: IIngredientsList) => (this.dataSourceIngredients = (data || []).map(i => i.strIngredient1)));
    this.generalService.getAlcoholic()
      .pipe(takeUntil(this.unsubscribeDestroy$))
      .subscribe((data: IAlcoholicList) => (this.dataSourceAlcoholic = data));
  }

  selectedFilter(filterType: string, valueSearch: string) {
    this.showAlert = false;
    this.filter.type = filterType;
    this.filter.valueSearch = valueSearch;
    Object.keys(this.filter)
    .filter(prop => (prop !== 'type' && prop !== 'valueSearch'))
    .map(prop => {
      if (filterType.toLowerCase() !== prop.toLowerCase()) { this.filter[prop] = ''; }
    });
  }

  searchIngredients = (text$: Observable<string>) =>
    text$.pipe(
      takeUntil(this.unsubscribeDestroy$),
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.dataSourceIngredients.filter(item => item.toLowerCase().indexOf(term.toLowerCase()) > -1))
    )

}
