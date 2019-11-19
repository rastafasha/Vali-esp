import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Product } from '../models/product';

@Injectable()
export class ResultadosService {

    ServerUrl = environment.baseUrl;
    errorData: {};

  productos: any[] = [];
  productosFiltrado: any [] = [];
  cargando: boolean ;
  products: Product;

  constructor(handler: HttpBackend, private http: HttpClient) {
    this.http = new HttpClient(handler);
}


get_products(text: string) {
    return this.http.get<Product>(this.ServerUrl + 'api/search/' + text)
    .pipe(
      catchError(this.handleError)
    );
  }


  public cargar_producto( cod: string ) {

    return this.http.get(`this.ServerUrl`);
  }

  public buscar_producto( termino: string ) {

    // console.log( "Buscando productos" );
    // console.log( this.productos.length );
      this.filtrar_productos( termino );
  }

  private filtrar_productos( termino: string ) {

    this.productosFiltrado = [];
    termino = termino.toLowerCase();

    this.productos.forEach( prod => {

      if ( prod.categoria.indexOf( termino ) >= 0 || prod.titulo.toLowerCase().indexOf( termino ) >= 0  ) {
        this.productosFiltrado.push( prod );
        // console.log( prod );
      }

      // console.log( prod );

    } );

  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }

}
