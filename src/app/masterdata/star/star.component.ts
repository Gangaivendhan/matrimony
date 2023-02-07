
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
import { StarserviceService } from './starservice.service';
import { ToastrService, GlobalConfig } from 'ngx-toastr';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class StarComponent implements OnInit {
  starForm!: FormGroup;
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
  public exportCSVData: any = []
  datalist: any
  columns: any
  paramId: any;
  obj: any = {};
  private toastRef: any;
  private options: GlobalConfig;
  timerInterval: NodeJS.Timeout;
  
  

  constructor(private modalService: NgbModal,
    private fb: FormBuilder,
    private service: StarserviceService,
    private route: Router,
    private router: ActivatedRoute,
    private toastr: ToastrService,

  ) {   this.options = this.toastr.toastrConfig;

  }

  ngOnInit() {
    this.starForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required]
    })
    this.columns = [
      { prop: 'name' },
      { name: 'description' },
      { name: 'status' },
      { name: 'Action' }
    ],
      this.get()
  }
  get f(): { [key: string]: AbstractControl } {
    return this.starForm.controls;
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
  modalOpenVC(modalVC: any) {
    this.modalService.open(modalVC, {
      centered: true
    });
  }
  onSubmit(modal: any) {
    this.Submitted = true;
    console.log(this.starForm.value.status)
    if (this.starForm.value.status === true) {
      this.starForm.value.status = 'ACTIVE'
    } else {
      this.starForm.value.status = 'INACTIVE'
    }
    console.log(this.starForm.value);
    if (this.starForm.value.id !="") {
      console.log(this.obj.id);
      this.service.updatedata(this.starForm.value).subscribe((res) => {
        console.log(res);
        this.get();
        this.toastr.success("Updated successfully!");
        this.starForm.reset();

      });
    } else  {
      this.service.postdata(this.starForm.value).subscribe(
        res => {
          console.log(res);
          modal.dismiss('cross click')
          this.toastr.success("Submitted Successfully!")
          this.starForm.reset();
          this.get();
        });
    }
  }



  get(){
    this.service.getdata().subscribe(
      res => {
        console.log(res)
        this.datalist = res.data
       
        // this.exportCSVData = this.datalist;
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
  reject(id: any) {
   
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
  toastrProgressBar() {
    this.toastr.success('Have fun storming the castle!', 'Progress Bar', {
      progressBar: true,
      toastClass: 'toast ngx-toastr',
      closeButton: true
    });
  }

}


