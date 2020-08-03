import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { DrinkViewComponent } from './drink-view.component';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ServicesModule, CocktailService } from '@providers/services';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { CocktailEnpoint } from '@providers/endpoint';
import { Observable, Observer } from 'rxjs';
import { IDrink } from '@shared/models/drink.model';



describe('DrinkViewComponent', () => {
  let component: DrinkViewComponent;
  let fixture: ComponentFixture<DrinkViewComponent>;

  const drinkMock = {
    'idDrink': '13581',
    'strDrink': '410 Gone',
    'strCategory': 'Ordinary Drink',
    'strAlcoholic': 'Alcoholic',
    'strGlass': 'Collins Glass',
    'strInstructions': '', 'strInstructionsES': null, 'strInstructionsDE': '', 'strInstructionsFR': null,
    'strDrinkThumb': 'https://www.thecocktaildb.com/images/media/drink/xtuyqv1472669026.jpg',
    'strIngredient1': 'Peach Vodka',
    'strIngredient2': 'Coca-Cola'
  };

  const activatedRouteMock = {
    snapshot: {
      params: {
        id: '13581',
      },
    },
  };

  class MockCocktailService {
    getCocktabilById(id: string): Observable<IDrink> {
      return Observable.create((observer: Observer<IDrink>) => {
        observer.next(drinkMock);
      });
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DrinkViewComponent],
      imports: [
        CommonModule,
        RouterModule.forRoot([]),
        ServicesModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: CocktailService, useClass: MockCocktailService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have as h1 '410 Gone'`, () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h1').innerText).toEqual('410 Gone');
  });
});
