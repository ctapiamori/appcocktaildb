import { TestBed, getTestBed } from '@angular/core/testing';

import { CocktailService } from './cocktail.service';
import { ApiModule } from '@shared/helpers';
import { IDrinksList } from '@shared/models/drink.model';
import { Observable, Observer } from 'rxjs';

describe('CocktailService', () => {
  let injector: TestBed;
  let service: CocktailService;

  const dummyDrinksCategory: IDrinksList = [
    {
      'strDrink': '3-Mile Long Island Iced Tea',
      'strDrinkThumb': 'https:\/\/www.thecocktaildb.com\/images\/media\/drink\/rrtssw1472668972.jpg',
      'idDrink': '15300'
    },
    {
      'strDrink': '410 Gone',
      'strDrinkThumb': 'https:\/\/www.thecocktaildb.com\/images\/media\/drink\/xtuyqv1472669026.jpg',
      'idDrink': '13581'
    }
  ];

  const dummyDrinksIngredient: IDrinksList = [
    {
      'strDrink': '3 Wise Men',
      'strDrinkThumb': 'https:\/\/www.thecocktaildb.com\/images\/media\/drink\/wxqpyw1468877677.jpg',
      'idDrink': '13899'
    },
    {
      'strDrink': 'Scottish Highland Liqueur',
      'strDrinkThumb': 'https:\/\/www.thecocktaildb.com\/images\/media\/drink\/upqvvp1441253441.jpg',
      'idDrink': '12854'
    }
  ];

  class MockCocktailService {
    getCocktailByCategory(category: string): Observable<IDrinksList> {
      return Observable.create((observer: Observer<IDrinksList>) => {
        observer.next(dummyDrinksCategory);
      });
    }

    getCocktailByIngredient(ingredient: string): Observable<IDrinksList> {
      return Observable.create((observer: Observer<IDrinksList>) => {
        observer.next(dummyDrinksIngredient);
      });
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApiModule
      ],
      providers: [
        { provide: CocktailService, useClass: MockCocktailService }
      ]
    });

    injector = getTestBed();
    service = injector.get(CocktailService);
  });

  describe('#getCocktailByCategory params: Ordinary Drink', () => {
    it('should return an Observable<IDrinksList>', () => {
      service.getCocktailByCategory('Ordinary Drink').subscribe(drinks => {
        expect(drinks.length).toBe(2);
        expect(drinks).toEqual(dummyDrinksCategory);
      });
    });
  });

  describe('#getCocktailByIngredient params: Johnnie Walker', async () => {
    it('should return an Observable<IDrinksList>', () => {
      service.getCocktailByIngredient('Johnnie Walker').subscribe(drinks => {
        expect(drinks.length).toBe(2);
        expect(drinks).toEqual(dummyDrinksIngredient);
      });
    });
  });
});
