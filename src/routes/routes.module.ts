import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent, MainLayoutComponent } from 'src/main/layouts';
import { AuthGuard } from 'src/providers/guards/auth.guard';
import { GuardsModule } from 'src/providers/guards/guards.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/cocktail',
    pathMatch: 'full'
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'page-error',
        loadChildren: '../main/pages/page-error/page-error.module#PageErrorModule'
      },
      {
        path: 'not-found',
        loadChildren: '../main/pages/page-notfound/page-notfound.module#PageNotfoundModule'
      }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'cocktail',
        loadChildren: '../main/views/drink/drink.module#DrinkModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    GuardsModule
  ],
  exports: [
    RouterModule
  ]
})
export class RoutesModule { }
