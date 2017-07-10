import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MdButtonModule, MdInputModule, MdListModule, MD_PLACEHOLDER_GLOBAL_OPTIONS } from '@angular/material';
import { MdlModule } from 'angular2-mdl';

// Module: Store
import { StoreModule } from 'app/_store/store.module';
import { ProductStoreModule } from 'app/_store/product/module';

import { MarketComponent } from './market.component';
import { ReversePipe } from 'app/_shared/pipe/reverse.pipe';

@NgModule({
  declarations: [
    MarketComponent,
    ReversePipe
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule, 
    MdInputModule,
    MdListModule,
    MdlModule,
    ProductStoreModule, FormsModule, ReactiveFormsModule
  ],
  providers: [
    {provide: MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: { float: 'always' }}
  ],
  exports: [   
    MarketComponent 
  ],
})
export class MarketModule {
}