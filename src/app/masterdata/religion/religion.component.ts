import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validator, Validators, AbstractControl } from '@angular/forms';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { ActivatedRoute } from '@angular/router';
import { ReligionService } from '../religion.service';
import { ToastrService, GlobalConfig } from 'ngx-toastr';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-religion',
  templateUrl: './religion.component.html',
  styleUrls: ['./religion.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReligionComponent implements OnInit {
  religionForm!: FormGroup;
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
  paramId: any;
  religionobj: any;
  Status = [
    { id: 1, name: 'ACTIVE' },
    { id: 2, name: 'INACTIVE' },

  ];
 
  constructor(private modalService: NgbModal,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private religionservice: ReligionService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.religionForm = this.fb.group({
      id: [''],
      name: [''],
      description: [''],
      status: ['']
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
    return this.religionForm.controls;
  }
  modalOpenVC(modalVC) {
    this.modalService.open(modalVC, {
      centered: true
    });
  }

  editBranch(id: any, content: any) {
    console.log(id);
    this.religionservice.editreligion(id).subscribe(res => {
      console.log(res);
      this.religionobj = res.data
      console.log(this.religionobj);
      let editvalue = this.religionobj
      this.religionForm.patchValue(editvalue)
    })
    this.modalService.open(content, { size: 'm' });
  }

  onSubmit(modal: any) {
    this.Submitted = true;
    console.log(this.religionForm.value.status)
    if (this.religionForm.value.status === true) {
      this.religionForm.value.status = 'ACTIVE'
    } else {
      this.religionForm.value.status = 'INACTIVE'
    }
    console.log(this.religionForm.value);
    if (this.religionForm.value.id != "") {
      console.log(this.religionobj.id);
      this.religionservice.updatereligion(this.religionForm.value).subscribe((res) => {
        console.log(res);
        modal.dismiss('cross click')
        this.get();
        this.toastr.success("Updated successfully!");
        this.religionForm.reset();

      });
    } else {
      this.religionservice.postreligion(this.religionForm.value).subscribe(
        res => {
          console.log(res);
          modal.dismiss('cross click')
          this.get();
          this.toastr.success("Submitted successfully!");
          this.religionForm.reset();
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
    this.religionservice.getreligion().subscribe(
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
        this.religionservice.deleteData(id).subscribe(
          res => {
            Swal.fire('deleted successfully!', '', 'success')
            this.get()
          })

      }
    })
  }

}


