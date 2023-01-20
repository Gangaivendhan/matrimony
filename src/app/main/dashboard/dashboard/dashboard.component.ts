import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { EcommerceService } from 'app/main/apps/ecommerce/ecommerce.service';
import { ProfileService } from 'app/main/pages/profile/profile.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'ecommerce-application' }
})
export class DashboardComponent implements OnInit {
  private _unsubscribeAll: Subject <any>;
  ngOnInit(): void {
    this._ecommerceService.getRelatedProducts().then(response => {
      this.relatedProducts = response;
    });
    this._pricingService.onPricingChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.data = response;
    });
  }
  constructor(private _ecommerceService: EcommerceService,private _pricingService:ProfileService) {
    this._unsubscribeAll = new Subject();

  }
  public data:any;
  public relatedProducts;

  public swiperResponsive: SwiperConfigInterface = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  };
}
