import { Component, OnInit, Inject, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { FormServices } from '../../services/form';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ProductService } from '../../services/product.service';
import { first } from 'rxjs/operators';
import { Product } from '../../models/product';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product = new Product();

  discounts: string[] = [
   '0', '5', '6', '7', '8', '9', '10', '12', '14', '15', '16', '18', '20', '25',
    '30', '35', '40', '45','50', '60' 
  ];

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
    public formService: FormServices,
    public snackbar: MatSnackBar,

  ) { 
    this.createForm();
  }

  
  createForm() {
    this.productForm = this.formBuilder.group({
      productTitle: [""],
      image: [""],
      originalPrice: [""],
      discount: [""],
    })


    
  }

  // checkBoxClicked(){
  //   this.productForm.controls.discount.disable();
  // }
  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
    setTimeout(() => {

    }, 30);
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
  // clearForm = function () {
  //   this.productForm.reset();
  //   this.service.initializeFormGroup();
    
  // };

  onSubmit() {
    this.formService.markFormGroupTouched(this.productForm);
    const productTitle = this.productForm.value.productTitle;
    const discount = this.productForm.value.discount;
    const originalPrice = this.productForm.value.originalPrice;
    const formData = new FormData();
    formData.append('productTitle', productTitle);
    formData.append('discount', discount);
    formData.append('originalPrice', originalPrice);
    formData.append('image', this.fileData);
    this.service.AddNewProduct(formData)
     .pipe(first())
     .subscribe(
       data => {
         this.productForm.reset();
         this.previewUrl = null;
         this.snackbar.open('Product has been Added', 'Close', {
           duration: 3000,
         })
       }, error => {
         this.loading = false;
         this.snackbar.open('Unsuccessful', 'Close', {
           duration: 3000
         })
       }
     );
    }
}
