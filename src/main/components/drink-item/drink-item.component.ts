import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDrinkItem } from '@shared/models/drink.model';
import { ImagePreviewPipe } from 'src/providers/pipes';

@Component({
  selector: 'ac-drink-item',
  templateUrl: './drink-item.component.html',
  styleUrls: ['./drink-item.component.scss']
})
export class DrinkItemComponent implements OnInit {
  @Input() drink: IDrinkItem;
  @Output() view: EventEmitter<string>;

  constructor(
    private imagePreview: ImagePreviewPipe
  ) {
    this.view = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  onClickView(): void {
    this.view.next(this.drink.idDrink);
  }

  getUrlPreview(): string {
    return this.drink && this.imagePreview.transform(this.drink.strDrinkThumb);
  }

}
