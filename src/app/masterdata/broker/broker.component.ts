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
import { ToastrService, GlobalConfig } from 'ngx-toastr';
import Swal from 'sweetalert2';
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
  public exportCSVData = [];
  datalist:any
  columns:any;
  paramId :any;
  countryobj: any = {}
  stateObj: any = {}
  cityObj: any = {}
  id: any;
  cities: any = []
  state: any = []
  country: any = []
  city: any;
  obj:any={};
  constructor(private modalService: NgbModal,
    private fb: FormBuilder,
    private service: BrokerserviceService,
    private route: Router,
    private router: ActivatedRoute,
    private toastr: ToastrService,
) { }
  ngOnInit() {
    this.brokerForm = this.fb.group({
      id: [''],
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
this.getallcountry();

  }
  get f(): { [key: string]: AbstractControl } {
    return this.brokerForm.controls;
  }
  editBranch(id: any, content: any) { 
  this.service.getId(id).subscribe(res => {
    console.log(res)
    this.obj = res.data
    console.log(this.obj) 
    this.getstate(this.getallcountry);

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
          this.toastr.success("Updated Successfully!")
          console.log(res)
            this.get();
            this.brokerForm.reset();
          }
      )
  }else{
  
  this.service.postdata(this.brokerForm.value).subscribe(res => {
    console.log(res)
    modal.dismiss('cross click');
    this.toastr.success("submitted Successfully!")

    this.brokerForm.reset();
    this.get();
  })}
}
get() {
  this.service.getdata().subscribe(
    res => {
      console.log(res)
      this.datalist = res.data
      this.exportCSVData = this.datalist
    })
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
getallcountry() {

  this.service.getalldatacountry().subscribe(
    res => {
      console.log(res)
      this.obj = res
      this.datalist = res.data
      this.country = this.countryobj.data
      
      this.countryobj = res
      console.log(this.countryobj)
      this.country = this.countryobj.data
      console.log(this.country)


    })
 }
getstate(id: any) {
  this.service.getcountryiddetails(id).subscribe(
    res => {
      console.log(res)
      this.toastr.success(res.message, 'Fetched successfully!');
      this.stateObj = res
      this.state = this.stateObj.data
      console.log(this.state);
      
    })
}


// getcity(id: any) {
//   this.service.getcityId(id).subscribe(
//     res => {
//       console.log(res)
//       this.cityObj = res
//       this.cities = this.cityObj.data
//       console.log(this.cityObj);
      
//     })
// }

// changeCountry(event: any) {
//   console.log(event.target.value);
//   this.state = event.target.value;
//   this.getstate(this.state);
// }
// changeState(event: any) {
//   console.log(event.target.value);
//   this.city = event.target.value;
//   this.getcity(this.city);
// }
rejected(id:any){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#7367F0',
    cancelButtonColor: '#E42728',
    confirmButtonText: 'Yes, delete it!',
    customClass: {
      confirmButton: 'btn btn-primary',
      cancelButton: 'btn btn-danger ml-1'
    }
  }).then((result) => {
    if (result.isConfirmed) {
      this.service.deleteData(id).subscribe(
        res => {
          Swal.fire('deleted successfully!', '', 'success')
          this.get()
        })
    }
  })
}
}

