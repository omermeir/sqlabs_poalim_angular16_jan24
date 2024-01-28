import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentChildComponent } from './learning/parent-child/parent-child.component';
import { Child1Component } from './learning/parent-child/child1/child1.component';
import { Child2Component } from './learning/parent-child/child2/child2.component';
import { Child3Component } from './learning/parent-child/child3/child3.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductNewComponent } from './products/product-new/product-new.component';
import { PlusMinusComponent } from './learning/plus-minus/plus-minus.component';
import { PlusComponent } from './learning/plus-minus/plus/plus.component';
import { MinusComponent } from './learning/plus-minus/minus/minus.component';
import { ObservableComponent } from './learning/observable/observable.component';

import { provideRouter } from '@angular/router';
import { routes } from './app-routing.module';
import { StatsComponent } from './products/stats/stats.component';
import { FormComponent } from './learning/form/form.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MainComponent } from './learning/main/main.component';
import { FormClassComponent } from './learning/form-class/form-class.component';
import { ManageProductsComponent } from './products/manage-products/manage-products.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ParentChildComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    ProductListComponent,
    ProductDetailsComponent,
    ProductNewComponent,
    PlusMinusComponent,
    PlusComponent,
    MinusComponent,
    ObservableComponent,
    StatsComponent,
    FormComponent,
    PagenotfoundComponent,
    MainComponent,
    FormClassComponent,
    ManageProductsComponent,
    ProductEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
