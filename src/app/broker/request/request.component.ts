import { Component, OnInit } from '@angular/core';
import { EcommerceService } from 'app/main/apps/ecommerce/ecommerce.service';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  public relatedProducts;

  ngOnInit(): void {
    this._ecommerceService.getRelatedProducts().then(response => {
      this.relatedProducts = response;
      console.log(response)

    }); 
   }

    constructor(private _ecommerceService: EcommerceService,){}

}

