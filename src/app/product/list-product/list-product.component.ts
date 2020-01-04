import { Component, OnInit } from '@angular/core';
import { DigiiService } from '../../services/test.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(
    private service: DigiiService
  ) { }
  ngOnInit() {
  }
  
  onSubmit() {
    return this.service.RunTest()
    .subscribe(res => {
      console.log(res);
      alert('SUCCESS !!');
    })
  }
  }