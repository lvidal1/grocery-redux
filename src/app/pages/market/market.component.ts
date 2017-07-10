// Angular modules
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs";

import { UUID } from 'angular2-uuid';

// App modules
import { IAppState } from 'app/_store/root/model';
import { ProductApiActions } from 'app/_store/product/api/actions';
import { IProductList , INITIAL_STATE_IProductList} from "app/_store/product/model";
import { animationProductItem } from './market.animations';

@Component({
    selector:'market',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl:'./market.component.html',
    animations: animationProductItem
})
export class MarketComponent{

    @select(['products']) 
    readonly    products$       : Observable<IProductList>;
    public      productForm     : FormGroup;
    private     ngUnsubscribe   : Subject<void> = new Subject<void>();

    constructor(
        public  fb: FormBuilder,
        private aProduct: ProductApiActions
        ) {}

    // -- PUBLIC METHODS

    ngOnInit() {
        // Trigger Action : List Products
        this.aProduct.listProduct();

        // Declare ProductForm to register new product
        this.productForm = this.fb.group({
            name: ['', Validators.required],
        });

        // Unsubscribe when ngOnDestroy();
        this.products$.takeUntil(this.ngUnsubscribe);
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    addProduct({ value, valid }) {
        // Trigger Action : Add new product
        this.aProduct.addProduct(
            Object.assign({},value,{state:'active',id:UUID.UUID()})
        );
        this.productForm.reset();
    }

    deleteProduct( product ) {
        // Trigger Action : Delete product
        this.aProduct.deleteProduct(product.id);
    }

    
    // -- GETTER AND SETTERS

    get name(){ return this.productForm.get('name') };
}


