import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { Jsonp, Response } from '@angular/http';
import {Headers} from '@angular/http';
import { InfoProducto } from '../interfaces/info-producto.interface';
import {Observable} from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  ServerUrl = environment.baseUrl;
  errorData: {};
  text: {};
  products:any[] = [];

  public http: HttpClient;
  public url: string;

  times:any;

  constructor(handler: HttpBackend, private jsonp: Jsonp) {
      this.http = new HttpClient(handler);
      this.times=0;
  }

  getProducts() {
    return this.http.get<Product>(this.ServerUrl + 'api/search?text=').pipe(
      catchError(this.handleError)
    );
  }


  getProduct(text: any) {
    //return this.http.get<Product>(this.ServerUrl + 'api/search?text=' + text ).map(res => res.json(text))

    return this.http.get(this.ServerUrl + 'api/search?text=' + text )
      .toPromise()
      .then(data=>{
        let res = {'results': JSON.stringify(data),
        'json': ()=>{return data;}
      };
       return res; 
      })
      .catch(error => {
        return Promise.reject(error);
      });
    
  }

  loadP(text: any){
    let URI = `${ this.ServerUrl }api/search?text=${ text }`;
    return this.http.get<{products: Product[]}>(URI)
      .map(res => res.products)
  }

  

  getJson(text:any){

    let url = this.ServerUrl + 'api/search?=' + text;
    return this.http.get( url )
      .map((resp: any) => resp.directorios);

    /*let url = `${ this.ServerUrl }api/search?text=${ text }&callback=JSONP_CALLBACK`; 
    
    return this.jsonp.get( url )
    .map( res=> res.json().results );*/


    //return this.http.get(url)
      //.map( response => response.json());
  }



  /*
  buscarProductos( text: any ){

    return this.http.get<Product>(this.ServerUrl+'api/search/'+text)
    .map(res => res );

    

  }
  
  
  buscarProductos(text: string) {
    let url = this.ServerUrl + 'api/search/' + text;
    return this.http.get(url)
      .pipe(
        map((resp: any) => resp.text)
      )

      

  }*/


  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
}
}
