import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FormServices } from '../../services/form';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ProductService } from '../../services/product.service';
import { first } from 'rxjs/operators';
import { Product } from '../../models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();

fileData: File = null;
previewUrl: any = null;
fileUploadProgress: string = null;
uploadedFilePath: string = null;
productForm: FormGroup;
public loading = false;
public submitted = false;
public image: any = this.service.form.value.image;
fileToUpload: File ;


  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    public service: ProductService,
    public formService: FormServices
  ) { 
    this.createForm();
  }

  
  createForm() {
    this.productForm = this.formBuilder.group({
      productTitle: [""],
      image: [""]

    })
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
  }

  preview() {
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    }
  }
  ngOnInit() {
  }

  onSubmit() {
    this.formService.markFormGroupTouched(this.productForm);
    const productTitle = this.productForm.value.productTitle;
    const formData = new FormData();
    formData.append('productTitle', productTitle);
    formData.append('image', this.fileData);
    this.http.post('http://localhost:3000/api/product/addProduct', formData)
      .subscribe(res => {
        console.log(res);
        alert('SUCCESS !!');
      }) 
    }
}
