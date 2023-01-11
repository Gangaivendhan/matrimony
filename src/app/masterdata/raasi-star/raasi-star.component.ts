import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validator, Validators, AbstractControl } from '@angular/forms';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
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
  public exportCSVData;
  datalist:any
  columns:any

  Star = [
    { id: 1, starname: 'Bharani' },
    { id: 2, starname: 'Pushya' },
    { id: 3, starname: 'Mrigashira' },
    { id: 4, starname: 'Purva Ashadha' },
  ];

  constructor(private modalService: NgbModal,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.raasiFrom = this.fb.group({
      id: [''],
      star:[''],
      name: [''],
      description: [''],
      status:[''],
      
    })
    this.datalist = [
      { name: 'Austin',description: 'Good', status: 'Active' },
      { name: 'Dany',description: 'Good', status: 'Inactive' },
      { name: 'Molly',description: 'Bad', status: 'Active' },
      { name: 'Austin',description: 'Good', status: 'Active' },
      { name: 'Dany',description: 'Good', status: 'Inactive' },
      { name: 'Molly',description: 'Bad', status: 'Active' },
      { name: 'Austin',description: 'Good', status: 'Active' },
      { name: 'Dany',description: 'Good', status: 'Inactive' },
      { name: 'Molly',description: 'Bad', status: 'Active' },
      { name: 'Austin',description: 'Good', status: 'Active' },
      { name: 'Dany',description: 'Good', status: 'Inactive' },
      { name: 'Molly',description: 'Bad', status: 'Active' },
      { name: 'Austin',description: 'Good', status: 'Active' },
      { name: 'Dany',description: 'Good', status: 'Inactive' },
      { name: 'Molly',description: 'Bad', status: 'Active' },
      { name: 'Austin',description: 'Good', status: 'Active' },
      { name: 'Dany',description: 'Good', status: 'Inactive' },
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
    return this.raasiFrom.controls;
  }

  modalOpenVC(modalVC) {
    this.modalService.open(modalVC, {
      centered: true
    });
  }

  onSubmit() {
    this.Submitted = true;
    if (this.raasiFrom.value.status === true) {
      this.raasiFrom.value.status = 'Active'
    } else {
      this.raasiFrom.value.status = 'Inactive'
    }
    console.log(this.raasiFrom.value);
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
