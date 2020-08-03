import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { DrinkViewComponent } from './drink-view/drink-view.component';

const routes: Routes = [
  {
    path: '',
    component: DrinkListComponent
  },
  {
    path: ':id',
    component: DrinkViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrinkRoutingModule {}
