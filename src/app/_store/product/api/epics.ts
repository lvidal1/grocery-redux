import { Injectable } from '@angular/core';
import { Epic, createEpicMiddleware } from 'redux-observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';
import { concat } from "ramda";

import { IAppState } from '../../root/model';
import { TProductAPIAction, ProductApiActions } from './actions';
import { ProductAPIService } from './service';
import { IProduct } from "app/_store/product/model";
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";

type Predicate = (any) => boolean;


@Injectable()
export class ProductAPIEpics {
  constructor(
    private service: ProductAPIService,
    private actions: ProductApiActions,
    private _router: Router
  ) {}

  /**
   * Enable the epic orchestator in Product Actions
   * @param {string} orchestate 
   * @returns 
   * @memberof ProductAPIEpics
   */
  public createEpic(orchestate:string) {
    switch(orchestate){
      case 'list':
         return createEpicMiddleware(this.createListProductEpic());
    }
  }

  /**
   * Orchestate actions for loading productList's data
   * @private
   * @returns {Epic<TProductAPIAction, IAppState>} 
   * @memberof ProductAPIEpics
   */
  private createListProductEpic(): Epic<TProductAPIAction, IAppState> {
    return (action$, store) => action$
      // Intercept when is triggered 'LIST_PRODUCT' action
      .ofType(ProductApiActions.LIST_PRODUCT)
      // Get data
      .switchMap(action =>  
        // Get product's list
        this.service.listProducts()
        // Map response and trigger 'LIST_PRODUCT_SUCCEDED'
        .map(response => this.actions.listProductSucceded(response))
        // If any error, trigger 'LIST_PRODUCT_FAILED'
        .catch(response => of(this.actions.listProductFailed( {
          status: response,
        })))
        // Begin stream of actions wih 'LIST_PRODUCT_STARTED'
        .startWith(this.actions.listProductStarted())
      );
  }

}
