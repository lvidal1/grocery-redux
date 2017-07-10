import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { HttpModule } from '@angular/http';
import { NgReduxModule } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';

// Module Core : TODO: Wrap components in a Core Module
import { StoreModule } from './_store/store.module';
import { MarketModule } from './pages/market/market.module';

import { AppComponent } from './app.component';
import { AppRouting }   from './app.routing';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    MarketModule,
    HttpModule,
    NgReduxModule,
    NgReduxRouterModule,
    StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
