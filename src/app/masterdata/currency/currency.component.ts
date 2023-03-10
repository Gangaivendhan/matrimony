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
import { CurrencyserviceService } from './currencyservice.service';
import { ToastrService, GlobalConfig } from 'ngx-toastr';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class CurrencyComponent {
  currencyForm!: FormGroup;
  public Submitted = false;
  status = [
    { id: 1, name: 'ACTIVE' },
    { id: 2, name: 'INACTIVE' },

  ];


  
  public rows: any;
  public selected = [];
  public basicSelectedOption: number = 10;
  public ColumnMode = ColumnMode;
  public SelectionType = SelectionType;
  public exportCSVData = [];
  datalist: any
  columns: any;
  paramId :any;
  obj:any={};
  constructor(private modalService: NgbModal,
    private fb: FormBuilder,
    private service: CurrencyserviceService,
    private route: Router,
    private router: ActivatedRoute,
    private toastr: ToastrService,

) { }

  ngOnInit() {
    this.currencyForm = this.fb.group({
      id: [''],
      name: [''],
      description: [''],
      status:['']
    })
       this.columns = [
      { prop: 'name' },
      { name: 'description' },
      { name: 'status' },
      { name: 'Action' }
    ];
    this.get();

  }
  get f(): { [key: string]: AbstractControl } {
    return this.currencyForm.controls;
  }
  editBranch(id: any, content: any) {
    console.log(id)
    this.service.getId(id).subscribe(res => {
      console.log(res)
      this.obj = res.data
      console.log(this.obj)
      
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
    if (this.currencyForm.value.status === true) {
      this.currencyForm.value.status = 'ACTIVE'
    } else {
      this.currencyForm.value.status = 'INACTIVE'
    }
    console.log(this.currencyForm.value);
    if (this.obj.id !="") {
      // this.currencyForm.value.id = this.obj.id;
      this.service.updatedata(this.currencyForm.value)
        .subscribe(
          (res) => {
            modal.dismiss('cross click');
            this.toastr.success("Updated Successfully!")

            console.log(res)
              this.get();
              this.currencyForm.reset();
            }
        )
    }else {
    
    this.service.postdata(this.currencyForm.value).subscribe(res => {
      console.log(res)
      modal.dismiss('cross click');
      this.toastr.success("Submitted Successfully!")
      this.currencyForm.reset();
      this.get();
    })

  }
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
  get() {
    this.service.getdata().subscribe(
      res => {
        console.log(res)
        this.datalist = res.data
        // this.dataSource = new MatTableDataSource<any>(this.array);
        // this.dataSource.paginator = this.paginator;
        // this.toastr.success(res.message, 'Uom get Successfully!');
        this.exportCSVData = this.datalist
      })
  }

  
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




