import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { Inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { CasteserviceService } from './casteservice.service';
import { ToastrService, GlobalConfig } from 'ngx-toastr';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CastComponent {
  castForm!: FormGroup;
  public Submitted = false;
  status = [
    { id: 1, name: 'ACTIVE' },
    { id: 2, name: 'INACTIVE' },

  ];
  

  public contentHeader: object;

  // private
  private toastRef: any;
  private options: GlobalConfig;
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
    private service: CasteserviceService,
    private route: Router,
    private router: ActivatedRoute,
    private toastr: ToastrService,
    ) { this.options = this.toastr.toastrConfig; }

  ngOnInit() {
    this.castForm = this.fb.group({
      id: [''],
      casteName: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required]
    })
    this.columns = [
      { prop: 'casteName' },
      { name: 'description' },
      { name: 'status' },
      { name: 'Action' }
    ];
  
    this.get();
   
  }
  get f(): { [key: string]: AbstractControl } {
    return this.castForm.controls;
  }
  editBranch(id: any, content: any) {
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
    if (this.castForm.value.status === true) {
      this.castForm.value.status = 'ACTIVE'
    } else {
      this.castForm.value.status = 'INACTIVE'
    }
    console.log(this.castForm.value);
    if (this.obj.id) {
      this.castForm.value.id = this.obj.id;
      this.service.updatedata(this.castForm.value)
        .subscribe(
          (res) => {
            modal.dismiss('cross click');
            this.toastr.success("Updated Successfully!")
            console.log(res)
              this.get();
            }
        )
    }else{
    
    this.service.postdata(this.castForm.value).subscribe(res => {
      console.log(res)
      modal.dismiss('cross click');
      this.toastr.success("Submitted Successfully!")
      this.castForm.reset();
      this.get();
    })

  }
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

