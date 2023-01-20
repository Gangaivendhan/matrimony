
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
  import { StarserviceService } from './starservice.service';
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
  public exportCSVData;
  datalist:any
  columns:any
  paramId :any;
  obj:any={};

  // columns: ({ prop: string; name?: undefined; } | { name: string; prop?: undefined; })[];
  // datalist: { name: string; gender: string; company: string; }[];

 

  constructor(private modalService: NgbModal,
    private fb: FormBuilder,
    private service: StarserviceService,
    private route: Router,
    private router: ActivatedRoute,
) { }

  ngOnInit() {
    this.starForm = this.fb.group({
      id: [''],
      name: ['',Validators.required],
      description: ['',Validators.required],
      status:['',Validators.required]
    })
   
    // this.datalist = [
    //   { name: 'Austin',description: 'good', status: 'Active' },
    //   { name: 'Dany',description: 'nice', status: 'Inactive' },
    //   { name: 'Molly',description: 'good', status: 'Active' },
    //   { name: 'Austin',description: 'Bad', status: 'Active' },
    //   { name: 'Dany',description: 'good', status: 'Inactive' },
    //   { name: 'Molly',description: 'Bad', status: 'Active' },
    //   { name: 'Austin',description: 'good', status: 'Active' },
    //   { name: 'Dany',description: 'good', status: 'Inactive' },
    //   { name: 'Molly',description: 'Bad', status: 'Active' },
    //   { name: 'Austin',description: 'good', status: 'Active' },
    //   { name: 'Dany',description: 'good', status: 'Inactive' },
    //   { name: 'Molly',description: 'Bad', status: 'Active' },
    //   { name: 'Austin',description: 'good', status: 'Active' },
    //   { name: 'Dany',description: 'good', status: 'Inactive' },
    //   { name: 'Molly',description: 'Bad', status: 'Active' },
    //   { name: 'Austin',description: 'good', status: 'Active' },
    //   { name: 'Dany',description: 'good', status: 'Inactive' },
    //   { name: 'Molly',description: 'Bad', status: 'Active' },
    // ];
    this.columns = [
      { prop: 'name' },
      { name: 'description' },
      { name: 'status' },
      { name: 'Action' }
    ];
    this.get();
  }
  get f(): { [key: string]: AbstractControl } {
    return this.starForm.controls;
  }
  editBranch(id: any, content: any) {
    console.log(id)
      // for (let i = 0; i < element.length; i++) {
      //   var id = element[i].id;
      //   console.log(id);
        
      // }
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
    if (this.starForm.value.status === true) {
      this.starForm.value.status = 'ACTIVE'
    } else {
      this.starForm.value.status = 'INACTIVE'
    }
    console.log(this.starForm.value);
    if (this.obj.id) {
      this.starForm.value.id = this.obj.id;
      this.service.updatedata(this.starForm.value)
        .subscribe(
          (res) => {
            modal.dismiss('cross click');
            console.log(res)
              this.get();
            }
        )
    }else{
    
    this.service.postdata(this.starForm.value).subscribe(res => {
      console.log(res)
      // this.toastr.success(res.message, ' Posted Successfully!');
      // this.route.navigate(['/masterdata/currency']);
      modal.dismiss('cross click')
      this.starForm.reset();
      this.get();
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
        // this.toastr.success(res.message, 'Uom get Successfully!');
        this.exportCSVData = this.datalist;
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
    alert("data is deleted")
    this.service.deleteData(id).subscribe(
      res => {
        this.get()
        console.log(res)
      
      })
  
  }

}


