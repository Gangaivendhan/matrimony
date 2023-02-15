import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EcommerceService } from 'app/main/apps/ecommerce/ecommerce.service';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class RequestComponent implements OnInit {

  public relatedProducts;
  public contentHeader: object;
  public shopSidebarToggle = false;
  public shopSidebarReset = false;
  public gridViewRef = true;
  public products;
  public wishlist;
  public cartList;
  public page = 1;
  public pageSize = 9;
  public searchText = '';

  Card = [{
    MatrimonyId: "M9471687",
    age: "22 Yrs",
    brand:"Sony",
    description:"All the greatest, games, TV, music and more. Connect with your friends to broadcast and celebrate your epic moments at the press of the Share button to Twitch, YouTube, Facebook and Twitter.",
    hasFreeShipping:false,
    id:1,
    image:"assets/images/profile/user-uploads/user-02.jpg",
    name: "Kavitha",
    price:339.95,
    rating:4,
    slug:"play-station-4-console-8",
    work:"B.E., Software Professional,Chennai,TamilNadu"
  },{
    MatrimonyId: "M9471687",
    age: "22 Yrs",
    brand:"Sony", description:"All the greatest, games, TV, music and more. Connect with your friends to broadcast and celebrate your epic moments at the press of the Share button to Twitch, YouTube, Facebook and Twitter.",
    hasFreeShipping:false,
    id:2,
    image:"assets/images/profile/user-uploads/user-03.jpg",
    name: "Kavitha",
    price:339.95,
    rating:4,
    slug:"play-station-4-console-8",
    work:"B.E., Software Professional,Chennai,TamilNadu"
  },
  {
    MatrimonyId: "M9471687",
    age: "22 Yrs",
    brand:"Sony", description:"All the greatest, games, TV, music and more. Connect with your friends to broadcast and celebrate your epic moments at the press of the Share button to Twitch, YouTube, Facebook and Twitter.",
    hasFreeShipping:false,
    id:3,
    image:"assets/images/profile/user-uploads/user-04.jpg",
    name: "Kavitha",
    price:339.95,
    rating:4,
    slug:"play-station-4-console-8",
    work:"B.E., Software Professional,Chennai,TamilNadu"
  },
  {
    MatrimonyId: "M9471687",
    age: "22 Yrs",
    brand:"Sony", description:"All the greatest, games, TV, music and more. Connect with your friends to broadcast and celebrate your epic moments at the press of the Share button to Twitch, YouTube, Facebook and Twitter.",
    hasFreeShipping:false,
    id:4,
    image:"assets/images/profile/user-uploads/user-05.jpg",
    name: "Kavitha",
    price:339.95,
    rating:4,
    slug:"play-station-4-console-8",
    work:"B.E., Software Professional,Chennai,TamilNadu"
  },
  {
    MatrimonyId: "M9471687",
    age: "22 Yrs",
    brand:"Sony", description:"All the greatest, games, TV, music and more. Connect with your friends to broadcast and celebrate your epic moments at the press of the Share button to Twitch, YouTube, Facebook and Twitter.",
    hasFreeShipping:false,
    id:5,
    image:"assets/images/profile/user-uploads/user-10.jpg",
    name: "Kavitha",
    price:339.95,
    rating:4,
    slug:"play-station-4-console-8",
    work:"B.E., Software Professional,Chennai,TamilNadu"
  },
  {
    MatrimonyId: "M9471687",
    age: "22 Yrs",
    brand:"Sony", description:"All the greatest, games, TV, music and more. Connect with your friends to broadcast and celebrate your epic moments at the press of the Share button to Twitch, YouTube, Facebook and Twitter.",
    hasFreeShipping:false,
    id:8,
    image:"assets/images/profile/user-uploads/user-11.jpg",
    name: "Kavitha",
    price:339.95,
    rating:4,
    slug:"play-station-4-console-8",
    work:"B.E., Software Professional,Chennai,TamilNadu"
  },
  {
    MatrimonyId: "M9471687",
    age: "22 Yrs",
    brand:"Sony", description:"All the greatest, games, TV, music and more. Connect with your friends to broadcast and celebrate your epic moments at the press of the Share button to Twitch, YouTube, Facebook and Twitter.",
    hasFreeShipping:false,
    id:8,
    image:"assets/images/profile/user-uploads/user-12.jpg",
    name: "Kavitha",
    price:339.95,
    rating:4,
    slug:"play-station-4-console-8",
    work:"B.E., Software Professional,Chennai,TamilNadu"
  },
  {
    MatrimonyId: "M9471687",
    age: "22 Yrs",
    brand:"Sony", description:"All the greatest, games, TV, music and more. Connect with your friends to broadcast and celebrate your epic moments at the press of the Share button to Twitch, YouTube, Facebook and Twitter.",
    hasFreeShipping:false,
    id:8,
    image:"assets/images/profile/user-uploads/user-13.jpg",
    name: "Kavitha",
    price:339.95,
    rating:4,
    slug:"play-station-4-console-8",
    work:"B.E., Software Professional,Chennai,TamilNadu"
  },
  {
    MatrimonyId: "M9471687",
    age: "22 Yrs",
    brand:"Sony", description:"All the greatest, games, TV, music and more. Connect with your friends to broadcast and celebrate your epic moments at the press of the Share button to Twitch, YouTube, Facebook and Twitter.",
    hasFreeShipping:false,
    id:8,
    image:"assets/images/profile/user-uploads/user-03.jpg",
    name: "Kavitha",
    price:339.95,
    rating:4,
    slug:"play-station-4-console-8",
    work:"B.E., Software Professional,Chennai,TamilNadu"
  },
  ]

  ngOnInit(): void {
    this._ecommerceService.getRelatedProducts().then(response => {
      console.log(response)
      this.relatedProducts = response.concat(this.Card);
      console.log(this.relatedProducts);

    });

  }


  constructor(private _ecommerceService: EcommerceService,) { }

}

