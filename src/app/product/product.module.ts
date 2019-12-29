import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AddProductComponent,
        ListProductComponent
    ],
    imports: [
        ProductRoutingModule
    ],
    providers: []
})

export class ProductModule { }