import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { environment } from 'app/../environments/environment';
import { IProduct } from '../model';

@Injectable()
export class ProductAPIService {

  constructor( private http: Http ){}

  private productListUrl = environment.assetsUrl + 'json/products.json'; 

  /**
   * List all products from backend
   * @memberof ProductAPIService
   * @returns Observable<IProduct>
   */
  listProducts = (): Observable<IProduct[]> =>
     this.http.get(this.productListUrl)
        // ...and calling .json() on the response to return data
        .map((res:Response) => res.json())
        //...errors if any
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

      
}
