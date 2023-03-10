import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validator, Validators, AbstractControl } from '@angular/forms';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { ActivatedRoute } from '@angular/router';
import { RasiStarService } from './rasi-star.service';
import { ToastrService, GlobalConfig } from 'ngx-toastr';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-raasi-star',
  templateUrl: './raasi-star.component.html',
  styleUrls: ['./raasi-star.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class RaasiStarComponent implements OnInit {
  raasiFrom!: FormGroup;
  isChecked = true;
  public Submitted = false;
  public rows: any;
  public selected = [];
  public basicSelectedOption: number = 10;
  public ColumnMode = ColumnMode;
  public SelectionType = SelectionType;
  public exportCSVData: any = [];
  datalist: any
  columns: any
  raasiobj: any;
  Star = [
    { id: 1, starname: 'Bharani' },
    { id: 2, starname: 'Pushya' },
    { id: 3, starname: 'Mrigashira' },
    { id: 4, starname: 'Purva Ashadha' },
  ];
  constructor(private modalService: NgbModal,
    private fb: FormBuilder,
    private raasiservice: RasiStarService,
    private toastr: ToastrService,
  ) { }
  ngOnInit(): void {
    this.raasiFrom = this.fb.group({
      id: [''],
      star: [''],
      name: [''],
      description: [''],
      status: [''],
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
    return this.raasiFrom.controls;
  }
  modalOpenVC(modalVC) {
    this.modalService.open(modalVC, {
      centered: true
    });
  }
  onSubmit(modal: any) {
    this.Submitted = true;
    if (this.raasiFrom.value.status === true) {
      this.raasiFrom.value.status = 'ACTIVE'
    } else {
      this.raasiFrom.value.status = 'INACTIVE'
    }
    console.log(this.raasiFrom.value);
    if (this.raasiFrom.value.id != '') {
      console.log(this.raasiobj.id);
      this.raasiservice.updateraasi(this.raasiFrom.value).subscribe((res) => {
        console.log(res);
        this.get();
        modal.dismiss('cross click');
        this.toastr.success("Updated Successfully!")
        this.raasiFrom.reset();
      });
    }
    else {
      this.raasiservice.postraasi(this.raasiFrom.value).subscribe(
        res => {
          console.log(res);
          this.get();
          modal.dismiss('cross click');
          this.toastr.success("Submitted Successfully!")
          this.raasiFrom.reset();
        });
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
    this.raasiservice.getraasi().subscribe(
      res => {
        console.log(res)
        this.datalist = res.data
        this.exportCSVData = this.datalist
      })
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
        this.raasiservice.deleteData(id).subscribe(
          res => {
            Swal.fire('deleted successfully!', '', 'success')
            this.get()
          })

      }
    })
  }

  editBranch(id: any, content: any) {
    console.log(id);
    this.raasiservice.editraasi(id).subscribe(res => {
      console.log(res);
      this.raasiobj = res.data
      console.log(this.raasiobj);
      let editvalue = this.raasiobj
      this.raasiFrom.patchValue(editvalue)
    })
    this.modalService.open(content, { size: 'm' });
  }
}
