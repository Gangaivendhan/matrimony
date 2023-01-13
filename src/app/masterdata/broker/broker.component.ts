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
import { BrokerserviceService } from './brokerservice.service';

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
  columns:any;
  paramId :any;
  obj:any={};

  // columns: ({ prop: string; name?: undefined; } | { name: string; prop?: undefined; })[];
  // datalist: { name: string; gender: string; company: string; }[];

 

  constructor(private modalService: NgbModal,
    private fb: FormBuilder,
    private service: BrokerserviceService,
    private route: Router,
    private router: ActivatedRoute,

) { }

  ngOnInit() {
    this.brokerForm = this.fb.group({
      // id: [''],
      firstName: [''],
      lastName: [''],
      mobileNumber:[''],
      email:[''],
      addressLine1:[''],
      addressLine2:[''],
      country:[''],
      state:[''],
      city:[''],
      status:['']
    })
   
    // this.datalist = [
    //   { firstName: 'Austin', lastName:'Mani', mobileNumber:9087656789,email:'prithvi@gmail.com',address:'mmm',country:'India',state:'Tamilnadu',city:'Thanjavur',status:'active'},
    //   { firstName: 'Austin', lastName:'Mani', mobileNumber:9087656789,email:'prithvi@gmail.com',address:'mmm',country:'India',state:'Tamilnadu',city:'Thanjavur',status:'inactive'},
    //   { firstName: 'Austin', lastName:'Mani', mobileNumber:9087656789,email:'prithvi@gmail.com',address:'mmm',country:'India',state:'Tamilnadu',city:'Thanjavur',status:'active'},
    //   { firstName: 'Austin', lastName:'Mani', mobileNumber:9087656789,email:'prithvi@gmail.com',address:'mmm',country:'India',state:'Tamilnadu',city:'Thanjavur',status:'inactive'},
    //   { firstName: 'Austin', lastName:'Mani', mobileNumber:9087656789,email:'prithvi@gmail.com',address:'mmm',country:'India',state:'Tamilnadu',city:'Thanjavur',status:'inactive'},
    //   { firstName: 'Austin', lastName:'Mani', mobileNumber:9087656789,email:'prithvi@gmail.com',address:'mmm',country:'India',state:'Tamilnadu',city:'Thanjavur',status:'active'},
    //   { firstName: 'Austin', lastName:'Mani', mobileNumber:9087656789,email:'prithvi@gmail.com',address:'mmm',country:'India',state:'Tamilnadu',city:'Thanjavur',status:'active'},
    //   { firstName: 'Austin', lastName:'Mani', mobileNumber:9087656789,email:'prithvi@gmail.com',address:'mmm',country:'India',state:'Tamilnadu',city:'Thanjavur',status:'inactive'},
    //   { firstName: 'Austin', lastName:'Mani', mobileNumber:9087656789,email:'prithvi@gmail.com',address:'mmm',country:'India',state:'Tamilnadu',city:'Thanjavur',status:'active'},
    // ];
    this.columns = [
      { prop: 'firstName' },
      { name: 'lastName' },
      { name: 'mobileNumber' },
      { name: 'email' },
      { name: 'addressLine1'},
      { name: 'addressLine2'},
      { name: 'country'},
      { name: 'state'},
      { name: 'city'},
      { name: 'status'}
    ];
this.get();
  }
  get f(): { [key: string]: AbstractControl } {
    return this.brokerForm.controls;
  }
  editBranch(id: any, content: any) {
    // for (let i = 0; i < element.length; i++) {
    //   var id = element[i].id;
    //   console.log(id);
      
    // }
  this.service.getId(id).subscribe(res => {
    console.log(res)
    this.obj = res.data
    console.log(this.obj)
    // this.toastr.success(res.message, 'GetId Successfully!');

    
  })
  this.modalService.open(content, { size: 'm' });
}
modalOpenVC(modalVC) {
  this.modalService.open(modalVC, {
    centered: true
  });
}
onSubmit(modal:any) {
  this.Submitted = true;
  if (this.brokerForm.value.status === true) {
    this.brokerForm.value.status = 'ACTIVE'
  } else {
    this.brokerForm.value.status = 'INACTIVE'
  }
  console.log(this.brokerForm.value);
  if (this.obj.id) {
    this.brokerForm.value.id = this.obj.id;
    this.service.updatedata(this.brokerForm.value)
      .subscribe(
        (res) => {
          modal.dismiss('cross click');
          console.log(res)
            this.get();
          }
      )
  }else{
  
  this.service.postdata(this.brokerForm.value).subscribe(res => {
    console.log(res)
    // this.toastr.success(res.message, 'Posted Successfully!');
    // this.route.navigate(['/masterdata/currency']);
    modal.dismiss('cross click')
  })

}
}
get() {
  this.service.getdata().subscribe(
    res => {
      console.log(res)
      this.datalist = res.data
      // this.dataSource = new MatTableDataSource<any>(this.array);
      // this.dataSource.paginator = this.paginator;
      // this.toastr.success(res.message, 'Get Successfully!');
      this.exportCSVData = this.datalist
    })
}
// getIds(id: any) {
//   console.log(id);
//   this.service.getId(id).subscribe((res) => {
//     console.log(res);
//   });
// }


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
rejected(id:any){
  alert("data is deleted")
  this.service.deleteData(id).subscribe(
    res => {
      this.get()
      console.log(res)
    
    })

}
}
