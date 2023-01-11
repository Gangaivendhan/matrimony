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
  selector: 'app-annual-income',
  templateUrl: './annual-income.component.html',
  styleUrls: ['./annual-income.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class AnnualIncomeComponent {
  annualincomeForm!: FormGroup;
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
    this.annualincomeForm = this.fb.group({
      id: [''],
      name: [''],
      description: [''],
      status:['']
    })
   
    this.datalist = [
      { name: 'Austin',description: 'good', status: 'Active' },
      { name: 'Dany',description: 'nice', status: 'Inactive' },
      { name: 'Molly',description: 'good', status: 'Active' },
      { name: 'Austin',description: 'Bad', status: 'Active' },
      { name: 'Dany',description: 'good', status: 'Inactive' },
      { name: 'Molly',description: 'Bad', status: 'Active' },
      { name: 'Austin',description: 'good', status: 'Active' },
      { name: 'Dany',description: 'good', status: 'Inactive' },
      { name: 'Molly',description: 'Bad', status: 'Active' },
      { name: 'Austin',description: 'good', status: 'Active' },
      { name: 'Dany',description: 'good', status: 'Inactive' },
      { name: 'Molly',description: 'Bad', status: 'Active' },
      { name: 'Austin',description: 'good', status: 'Active' },
      { name: 'Dany',description: 'good', status: 'Inactive' },
      { name: 'Molly',description: 'Bad', status: 'Active' },
      { name: 'Austin',description: 'good', status: 'Active' },
      { name: 'Dany',description: 'good', status: 'Inactive' },
      { name: 'Molly',description: 'Bad', status: 'Active' },
    ];
    this.columns = [
      { prop: 'name' },
      { name: 'description' },
      { name: 'status' },
      { name: 'Action' }
    ];
    this.exportCSVData = this.datalist

  }
  get f(): { [key: string]: AbstractControl } {
    return this.annualincomeForm.controls;
  }

  modalOpenVC(modalVC) {
    this.modalService.open(modalVC, {
      centered: true
    });
  }

  onSubmit() {
    this.Submitted = true;
    if (this.annualincomeForm.value.status === true) {
      this.annualincomeForm.value.status = 'Active'
    } else {
      this.annualincomeForm.value.status = 'Inactive'
    }    console.log(this.annualincomeForm.value);
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

