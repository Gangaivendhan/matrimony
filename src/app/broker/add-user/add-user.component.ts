import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit  {
  public customFooterDPdata: NgbDateStruct;
  public contentHeader: object;

  ngOnInit(): void {
    
  
  }
  


  // this.contentHeader = {
  //   headerTitle: 'Form Wizard',
  //   actionButton: true,
  //   breadcrumb: {
  //     type: '',
  //     links: [
  //       {
  //         name: 'Home',
  //         isLink: true,
  //         link: '/'
  //       },
  //       {
  //         name: 'Forms',
  //         isLink: true,
  //         link: '/'
  //       },
  //       {
  //         name: 'Form Wizard',
  //         isLink: false
  //       }
  //     ]
  //   }
  // };
}

