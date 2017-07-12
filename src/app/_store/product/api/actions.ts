import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';

import { IProduct ,IProductList } from '../model';

// Flux-standard-action gives us stronger typing of our actions.
type Payload = IProduct[];

interface MetaData {meta?: any, productIndex? : number}

export type TProductAPIAction = FluxStandardAction<Payload,MetaData>;

@Injectable()
export class ProductApiActions {
    static readonly LIST_PRODUCT = 'LIST_PRODUCT';
    static readonly LIST_PRODUCT_STARTED = 'LIST_PRODUCT_STARTED';
    static readonly LIST_PRODUCT_SUCCEDED = 'LIST_PRODUCT_SUCCEDED';
    static readonly LIST_PRODUCT_FAILED = 'LIST_PRODUCT_FAILED';

    static readonly ADD_PRODUCT = 'ADD_PRODUCT';
    static readonly EDIT_PRODUCT = 'EDIT_PRODUCT';
    static readonly DELETE_PRODUCT = 'DELETE_PRODUCT';

    /**
     * Action: Get and list all product available
     * @actionType : LIST_PRODUCT
     * @memberof ProductApiActions
     */
    @dispatch()
    listProduct = () : TProductAPIAction => ({
        type : ProductApiActions.LIST_PRODUCT,
        meta : null,
        payload : null
    })
    listProductStarted = () : TProductAPIAction => ({
        type :  ProductApiActions.LIST_PRODUCT_STARTED,
        meta : {},
        payload : null
    })
    listProductSucceded = (payload : Payload) : TProductAPIAction => ({
        type : ProductApiActions.LIST_PRODUCT_SUCCEDED,
        meta : {},
        payload
    })
    listProductFailed = ( error ) : TProductAPIAction => ({
        type : ProductApiActions.LIST_PRODUCT_FAILED,
        meta : null,
        payload : null,
        error: error
    })

    /**
     * Action: Add a new product
     * @actionType : ADD_PRODUCT
     * @memberof ProductApiActions
     */
    @dispatch()
    addProduct = ( product : any ) : TProductAPIAction => ({
        type : ProductApiActions.ADD_PRODUCT,
        meta : product,
        payload : null
    })

    /**
     * Action: Edit a product
     * @actionType : EDIT_PRODUCT
     * @memberof ProductApiActions
     */
    @dispatch()
    editProduct = ( meta : any ) : TProductAPIAction => ({
        type : ProductApiActions.EDIT_PRODUCT,
        meta : meta,
        payload : null
    })

    /**
     * Action: Delete a new product
     * @actionType : DELTE_PRODUCT
     * @memberof ProductApiActions
     */
    @dispatch()
    deleteProduct = ( meta : any ) : TProductAPIAction => ({
        type : ProductApiActions.DELETE_PRODUCT,
        meta : meta,
        payload : null
    })
}