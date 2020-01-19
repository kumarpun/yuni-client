import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../services/image.service';
import {ToastrService} from "ngx-toastr";
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  Products: any = [];

  constructor(public fileUploadService: RestApiService) {
    this.getUsers();
  }

  ngOnInit() { }

  getUsers() {
    this.fileUploadService.getUsers().subscribe((res) => {
      this.Products = res['products'];
    })
  }

}

