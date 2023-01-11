import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { Inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import * as snippet from 'app/main/forms/form-layout/form-layout.snippetcode';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';
@Component({
  selector: 'app-broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class BrokerComponent {
  brokerForm!: FormGroup;
  public Submitted = false;
  Status = [
    { id: 1, name: 'ACTIVE' },
    { id: 2, name: 'INACTIVE' },

  ];


  
  public rows: any;
  public selected = [];
  public basicSelectedOption: number = 10;
  public ColumnMode = ColumnMode;
  public SelectionType = SelectionType;
  public exportCSVData;
  datalist:any
  columns:any
  // columns: ({ prop: string; name?: undefined; } | { name: string; prop?: undefined; })[];
  // datalist: { name: string; gender: string; company: string; }[];

 

  constructor(private modalService: NgbModal,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.brokerForm = this.fb.group({
      id: [''],
      firstName: [''],
      lastName: [''],
      mobileNumber:[''],
      email:[''],
      address:[''],
      country:[''],
      state:[''],
      city:[''],
      status:['']
    })
   
    this.datalist = [
      { firstName: 'Austin', lastName:'Mani', mobileNumber:9087656789,email:'prithvi@gmail.com',address:'mmm',country:'India',state:'Tamilnadu',city:'Thanjavur',status:'active'},
      { firstName: 'Austin', lastName:'Mani', mobileNumber:9087656789,email:'prithvi@gmail.com',address:'mmm',country:'India',state:'Tamilnadu',city:'Thanjavur',status:'inactive'},
      { firstName: 'Austin', lastName:'Mani', mobileNumber:9087656789,email:'prithvi@gmail.com',address:'mmm',country:'India',state:'Tamilnadu',city:'Thanjavur',status:'active'},
      { firstName: 'Austin', lastName:'Mani', mobileNumber:9087656789,email:'prithvi@gmail.com',address:'mmm',country:'India',state:'Tamilnadu',city:'Thanjavur',status:'inactive'},
      { firstName: 'Austin', lastName:'Mani', mobileNumber:9087656789,email:'prithvi@gmail.com',address:'mmm',country:'India',state:'Tamilnadu',city:'Thanjavur',status:'inactive'},
      { firstName: 'Austin', lastName:'Mani', mobileNumber:9087656789,email:'prithvi@gmail.com',address:'mmm',country:'India',state:'Tamilnadu',city:'Thanjavur',status:'active'},
      { firstName: 'Austin', lastName:'Mani', mobileNumber:9087656789,email:'prithvi@gmail.com',address:'mmm',country:'India',state:'Tamilnadu',city:'Thanjavur',status:'active'},
      { firstName: 'Austin', lastName:'Mani', mobileNumber:9087656789,email:'prithvi@gmail.com',address:'mmm',country:'India',state:'Tamilnadu',city:'Thanjavur',status:'inactive'},
      { firstName: 'Austin', lastName:'Mani', mobileNumber:9087656789,email:'prithvi@gmail.com',address:'mmm',country:'India',state:'Tamilnadu',city:'Thanjavur',status:'active'},
    ];
    this.columns = [
      { prop: 'name' },
      { name: 'firstName' },
      { name: 'lastName' },
      { name: 'mobileNumber' },
      { name: 'email'},
      { name: 'address'},
      { name: 'country'},
      { name: 'state'},
      { name: 'city'},
      { name: 'status'}
    ];
    this.exportCSVData = this.datalist
  }
  get f(): { [key: string]: AbstractControl } {
    return this.brokerForm.controls;
  }

  modalOpenVC(modalVC) {
    this.modalService.open(modalVC, {
      centered: true
    });
  }

  onSubmit() {
    this.Submitted = true;
    if (this.brokerForm.value.status === true) {
      this.brokerForm.value.status = 'Active'
    } else {
      this.brokerForm.value.status = 'Inactive'
    }

    console.log(this.brokerForm.value);
  }

  filterUpdate(event) {
    const val = event.target.value.toLowerCase();
    console.log(val);
    if (val != '') {
      const temp = this.datalist.filter(function (d) {
        return d.name.toLowerCase().indexOf(val) !== -1 || !val;
      });
      this.datalist = temp;
    } else {
      this.datalist = this.datalist;
    }
  }
}


