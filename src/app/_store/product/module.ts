import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Product Store
import { ProductApiActions } from './api/actions';
import { ProductAPIEpics } from './api/epics';
import { ProductAPIService } from './api/service';
// Store Module
import { StoreModule } from '../store.module';

@NgModule({
  declarations: [],
  exports: [],
  imports: [ 
    // Connect with
    StoreModule, 
    CommonModule
  ],
  providers: [
    // Provide Product Store components
    ProductApiActions, 
    ProductAPIEpics, 
    ProductAPIService
  ],
})
export class ProductStoreModule {}
