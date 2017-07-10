import { Injectable } from '@angular/core';
import { combineEpics } from 'redux-observable';

import { ProductAPIEpics }  from './../product/api/epics';

/**
 * Handles all supported EPIC(stream of actions) in stores
 * @export
 * @class RootEpics
 */
@Injectable()
export class RootEpics {
  constructor(
    private productEpics: ProductAPIEpics
  ) {}

  /**
   * Register EPIC functions in children stores
   * @returns 
   * @memberof RootEpics
   */
  public createEpics() {
    return [
      this.productEpics.createEpic('list')
    ];
  }
}
