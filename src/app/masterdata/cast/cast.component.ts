import { Component, OnInit, ViewChild } from '@angular/core';
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
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss']
})
export class CastComponent {
  userfilterform!: FormGroup;
  public submitted = false;
  array: any
  loopstatus: any
  loopname: any;
  obj: any = {}
  result: any = [{}]
  productlist: any;
  productolelist: any;
  productcategoryForm!: FormGroup;
  public Submitted = false;
  prodObj: any
  paramId: any;

  selectCategory: any = [
    { id: 1, name: 'convenience goods' },
    { id: 2, name: 'shopping goods' },
    { id: 2, name: 'specialty products' },]
  status = [
    { id: 1, status: 'Active' },
    { id: 1, status: 'Inactive' }
  ]

  Status = [
    { id: 1, name: 'ACTIVE' },
    { id: 2, name: 'INACTIVE' },

  ];

  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private fb: FormBuilder,
    private MatDialog:MatDialog,
    private route: Router,
    private router: ActivatedRoute,
    private modalService: NgbModal) { } 
    displayedColumns: string[] = ['index', 'categoryName', 'category', 'status', 'action'];
    ngOnInit(): void {
      this.productcategoryForm = this.fb.group({
        categoryName: ['', Validators.required],
        selectCategory: ['', Validators.required],
        status: ['', Validators.required],
        description: ['']
      })
      this.userfilterform = this.fb.group({
        status: [''],
        categoryName: ['']
  
      });
      this.obj.categoryName = ""
      this.obj.status = ""
      this.array = this.dataSource.filteredData;
      console.log(this.array);
}
open(Subject:any) {
  this.modalService.open(Subject, { size: 'sm' });
}
ngAfterViewInit(): void {
  this.dataSource.paginator = this.paginator;
}

applyFilter(event: any) {
  const dataArray = this.array.filter((res: any) => {
    console.log(res)
    return res.categoryName === event
  })
  this.dataSource = new MatTableDataSource<any>(dataArray);
  console.log(this.dataSource)

}
applyFilterstatus(event: any) {
  console.log(event);
  const dataArray = this.array.filter((res: any) => {
    return res.status === event
  })
  this.dataSource = new MatTableDataSource<any>(dataArray);

}
totalFilter(data: any, event: any) {
  console.log(data, event);
  const dataArray = this.array.filter((res: any) => {
    console.log(res)
    return res.status === data && res.categoryName === event
  })
  this.dataSource = new MatTableDataSource<any>(dataArray);

}
search() {
  console.log(this.userfilterform.value)
  console.log(this.userfilterform.value.status);

  if (this.userfilterform.value.status != '' && this.userfilterform.value.categoryName == '') {
    this.applyFilterstatus(this.userfilterform.value.status);
  } else if (this.userfilterform.value.categoryName != '' && this.userfilterform.value.status == '') {
    this.applyFilter(this.userfilterform.value.categoryName);
  } else if (this.userfilterform.value.categoryName != ''
    && this.userfilterform.value.status != '') {
    this.totalFilter(this.userfilterform.value.status, this.userfilterform.value.categoryName);
  } else {
    this.dataSource
  }
}

}

