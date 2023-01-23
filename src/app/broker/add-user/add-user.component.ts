import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import Stepper from 'bs-stepper';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class AddUserComponent implements OnInit  {
  public customFooterDPdata: NgbDateStruct;
  public contentHeader: object;
  constructor(

  ) { }
  ngOnInit(): void {
    
this.contentHeader = {
  headerTitle: 'User',
  actionButton: true,
  breadcrumb: {
    type: '',
    links: [
      {
        name: 'Home',
        isLink: true,
        link: '/'
      },
      {
        name: 'Broker',
        isLink: true,
        link: '/'
      },
      {
        name: 'User',
        isLink: false
      }
    ]
  }
};

  
  }
  


 

}
