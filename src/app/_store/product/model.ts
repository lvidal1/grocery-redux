// -- INTERFACES

/**
 * Interface to handle Product generally
 * @export
 * @interface IProduct
 */
export interface IProduct{
    id: string,
    name: string,
    state : string
}

/**
 * Interface to handle ProductList generally
 * @export
 * @interface IProductList
 */
export interface IProductList{
    list: IProduct[],
    _isLoading : boolean,
    _hasError  : null,
    _updatedAt : Date
}

// -- INITIAL_STATE

/**
 * Constant to initialize state Product
 * @export
 * @const INITIAL_STATE_IProduct
 * @interface {IProduct}
 */
export const INITIAL_STATE_IProduct : IProduct = {
    id : '',
    name : '',
    state : 'active'
}

/**
 * Constant to initialize state ProductList
 * @export
 * @const INITIAL_STATE_IProduct
 * @interface {IProductList}
 */
export const INITIAL_STATE_IProductList : IProductList = {
    list : [],
    _isLoading : false,
    _hasError  : null,
    _updatedAt : null,
}