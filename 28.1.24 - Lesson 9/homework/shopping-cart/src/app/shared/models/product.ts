import { AbstractControl, ValidationErrors } from '@angular/forms';

export class Product {
  public id?: number;
  public name?: string;
  public price?: number;

  constructor(id?: number, name?: string, price?: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  static customNameValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const name: string = control.value || '';
    if (name === 'xxx') {
      return { name: true };
    }
    return null;
  }
}
export class ApiProduct {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
}
