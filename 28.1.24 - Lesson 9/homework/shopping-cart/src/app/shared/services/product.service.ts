import { Injectable, OnInit } from '@angular/core';
import { ApiProduct, Product } from '../models/product';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private static apiProductsURL: string = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ApiProduct[]> {
    // return this.productSubject.asObservable();
    return this.http
      .get<ApiProduct[]>(ProductService.apiProductsURL)
      .pipe(
        map((apiProducts) =>
          apiProducts.map(
            (apiProduct) =>
              new Product(apiProduct.id, apiProduct.title, apiProduct.price)
          )
        )
      );
  }

  addProduct(product: Product) {
    // this.productSubject.next([...this.productSubject.value, product]);
  }
  updateProduct(product: Product) {
    // const newProdList: Product[] = this.productSubject.value.map((p) => {
    //   if (p.id === product.id) {
    //     p.id = product.id;
    //     p.name = product.name;
    //     p.price = product.price;
    //   }
    //   return p;
    // });
    // this.productSubject.next([...newProdList]);
  }
}
