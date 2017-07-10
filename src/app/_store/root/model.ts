import { IProductList , INITIAL_STATE_IProductList} from './../product/model';

// -- INTERFACES

/**
 * Interface to handle AppState generally
 * @export
 * @interface IAppState
 */
export interface IAppState {
  products ?: IProductList
}

// -- INITIAL_STATE

/**
 * Constant to initialize APP state
 * @export
 * @const INITIAL_STATE_AppState
 * @interface {IAppState}
 */
export const INITIAL_STATE_AppState : IAppState = {
  products: INITIAL_STATE_IProductList
}
