import { Component, OnInit } from '@angular/core';
import { EcommerceService } from 'app/main/apps/ecommerce/ecommerce.service';

@Component({
  selector: 'app-top-matches',
  templateUrl: './top-matches.component.html',
  styleUrls: ['./top-matches.component.scss']
})
export class TopMatchesComponent implements OnInit {
  public relatedProducts;

  ngOnInit(): void {
    this._ecommerceService.getRelatedProducts().then(response => {
      this.relatedProducts = response;
    });  }

    constructor(private _ecommerceService: EcommerceService,){}

}
