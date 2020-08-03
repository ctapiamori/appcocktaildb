import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServicesModule } from 'src/providers/services/services.module';
import { RoutesModule } from 'src/routes/routes.module';
import { MainLayoutModule } from 'src/main/layouts';
import { BlankLayoutModule } from 'src/main/layouts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BlankLayoutModule,
    MainLayoutModule,
    RoutesModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
