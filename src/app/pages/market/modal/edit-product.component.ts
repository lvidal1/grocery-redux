import { Component, Inject, Optional } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from "@angular/material";
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ProductApiActions } from "app/_store/product/api/actions";

@Component({
    selector:'modal-edit-product',
    templateUrl:'./edit-product.component.html'
})
export class EditProductComponent{

    public      productForm     : FormGroup;
    
    constructor(
        @Optional() @Inject(MD_DIALOG_DATA) 
        public data: any,
        private dialogRef: MdDialogRef<EditProductComponent>,
        public fb: FormBuilder,
        private aProduct: ProductApiActions,
    ){}

    ngOnInit(){
        // Declare ProductForm to register a editable product
        this.productForm = this.fb.group({
            id  : [this.data.product.id],
            name: [this.data.product.name, Validators.required],
        });
    }

    saveProduct({ value, valid }){
         // Trigger Action : Edit a product
        this.aProduct.editProduct(value);
        this.dialogRef.close();
    }

    // -- GETTER AND SETTERS

    get name(){ return this.productForm.get('name') };
}