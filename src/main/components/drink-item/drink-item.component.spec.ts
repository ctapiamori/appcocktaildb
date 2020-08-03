import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkItemComponent } from './drink-item.component';
import { CommonModule } from '@angular/common';
import { PipesModule } from '@providers/pipes';

describe('DrinkItemComponent', () => {
  let component: DrinkItemComponent;
  let fixture: ComponentFixture<DrinkItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DrinkItemComponent],
      imports: [
        CommonModule,
        PipesModule
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title \'57 Chevy with a White License Plate'`, () => {
    component.drink = {
      idDrink: '14029',
      strDrink: '\'57 Chevy with a White License Plate',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg'
    };
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h5').innerText).toEqual('\'57 Chevy with a White License Plate');
  });
});
