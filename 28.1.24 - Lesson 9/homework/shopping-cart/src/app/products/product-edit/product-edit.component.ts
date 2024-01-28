import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  @Output() updateProductEmitter = new EventEmitter();
  @Input() editProduct?: Product | null;
  protected editProductForm: FormGroup = this.formBuilder.group({
    id: [null, Validators.required],
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
        Product.customNameValidator,
      ],
    ],
    price: [null, [Validators.required, Validators.min(0.01)]],
  });

  ngOnInit(): void {
    this.editProductForm?.setValue({
      id: this.editProduct?.id,
      name: this.editProduct?.name,
      price: this.editProduct?.price,
    });
  }

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    if (this.editProductForm.valid) {
      this.editProduct!.id = parseInt(this.editProductForm.value.id!);
      this.editProduct!.name = this.editProductForm?.value.name!;
      this.editProduct!.price = parseFloat(this.editProductForm?.value.price!);
      this.updateProductEmitter.emit(this.editProduct);
    }
  }
}
