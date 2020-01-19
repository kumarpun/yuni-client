import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomMaterialModule } from '../core/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AddProductComponent,
        ListProductComponent
    ],
    imports: [
        ProductRoutingModule,
        HttpClientModule,
        CustomMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule
    ],
    providers: []
})

export class ProductModule { }