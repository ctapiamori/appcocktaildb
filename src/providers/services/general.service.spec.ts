import { TestBed, getTestBed } from '@angular/core/testing';
import { GeneralService } from './general.service';
import { ApiModule } from '@shared/helpers';
import { ICategoriesList, IGlassesList } from '@shared/models/general.model';
import { Observable, Observer } from 'rxjs';

describe('GeneralService', () => {
  let injector: TestBed;
  let service: GeneralService;

  const dummyCategories: ICategoriesList = [
    { 'strCategory': 'Ordinary Drink' },
    { 'strCategory': 'Cocktail' }
  ];

  const dummyGlasses: IGlassesList = [
    { 'strGlass': 'Highball glass' },
    { 'strGlass': 'Cocktail glass' }
  ];

  class GeneralServiceMock {
    getCategories(): Observable<ICategoriesList> {
      return Observable.create((observer: Observer<ICategoriesList>) => {
        observer.next(dummyCategories);
      });
    }

    getGlasses(): Observable<IGlassesList> {
      return Observable.create((observer: Observer<IGlassesList>) => {
        observer.next(dummyGlasses);
      });
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApiModule
      ],
      providers: [
        { provide: GeneralService, useClass: GeneralServiceMock }
      ]
    });

    injector = getTestBed();
    service = injector.get(GeneralService);
  });

  describe('#getCategories', () => {
    it('should return an Observable<ICategoriesList>', () => {
      service.getCategories()
        .subscribe(categories => {
          expect(categories.length).toBe(2);
          expect(categories).toEqual(dummyCategories);
        });
    });
  });

  describe('#getGlasses', () => {
    it('should return an Observable<IGlassesList>', async () => {
      service.getGlasses().subscribe(glasess => {
        expect(glasess.length).toBe(2);
        expect(glasess).toEqual(dummyGlasses);
      });
    });
  });
});
