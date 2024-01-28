import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css'],
})
export class ProductNewComponent {
  @Output() newProductEmitter = new EventEmitter();
  newProduct?: Product;
  newProductFrom = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
    ]),
    price: new FormControl(null, [Validators.required, Validators.min(0.01)]),
  });

  constructor() {}

  onSubmit() {
    if (this.newProductFrom.valid) {
      this.newProduct = new Product(
        this.newProductFrom.value.id!,
        this.newProductFrom.value.name!,
        this.newProductFrom.value.price!
      );
      this.newProductEmitter.emit(this.newProduct);
    }
    console.log(this.newProduct);
  }

  saveNewProduct() {}
}
