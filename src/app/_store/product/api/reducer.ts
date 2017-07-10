import { TProductAPIAction , ProductApiActions } from './actions';
import { IProductList, INITIAL_STATE_IProductList } from '../model';

/**
 * A higher-order reducer: accepts an Product type action and returns a reducer
 * that only responds to actions for that particular Product type.
 * @export createProductAPIReducer
 * @returns ProductReducer : <IProduct>
 */
export function createProductAPIReducer() {
  
  return function ProyectoReducer(
    state: IProductList = INITIAL_STATE_IProductList,
    action: TProductAPIAction): any {
    if (!action || !action.type) {
      return state;
    }

    switch (action.type) {
      case ProductApiActions.LIST_PRODUCT:
        return {
          ...state,
          list: [],
          _isLoading : true,
        };
      case ProductApiActions.LIST_PRODUCT_SUCCEDED:
        return {
          ...state,
          list: Object.assign([],state.list, action.payload),
          _isLoading : false,
          _updatedAt : new Date()
        };
      case ProductApiActions.LIST_PRODUCT_FAILED:
        return {
          ...state,
          _isLoading : false,
          _hasError : action.error
        };
      case ProductApiActions.ADD_PRODUCT:
        return {
          ...state,
          list: [ ...state.list, action.meta ],
          _isLoading : false,
          _updatedAt : new Date()
        };
      case ProductApiActions.DELETE_PRODUCT:
      console.log(action.meta);
        return {
          ...state,
          list:  state.list.filter(item => {
            console.log( action.meta )
            console.log( item.id +" !== "+ action.meta )
            return item.id !== action.meta // return all the items not matching the action.id
          }),
          _isLoading : false,
          _updatedAt : new Date()
        };
    }


    return state;
  };
}