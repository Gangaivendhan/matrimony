import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validator, Validators, AbstractControl } from '@angular/forms';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

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
  public exportCSVData;
  datalist: any
  columns: any

  Status = [
    { id: 1, name: 'ACTIVE' },
    { id: 2, name: 'INACTIVE' },

  ];



  constructor(private modalService: NgbModal,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.religionForm = this.fb.group({
      id: [''],
      name: [''],
      description: [''],
      status: ['']
    })
    this.datalist = [
      { name: 'Austin', description: 'Good', status: 'Active' },
      { name: 'Dany', description: 'Good', status: 'Inactive' },
      { name: 'Molly', description: 'Bad', status: 'Active' },
      { name: 'Austin', description: 'Good', status: 'Active' },
      { name: 'Dany', description: 'Good', status: 'Inactive' },
      { name: 'Molly', description: 'Bad', status: 'Active' },
      { name: 'Austin', description: 'Good', status: 'Active' },
      { name: 'Dany', description: 'Good', status: 'Inactive' },
      { name: 'Molly', description: 'Bad', status: 'Active' },
      { name: 'Austin', description: 'Good', status: 'Active' },
      { name: 'Dany', description: 'Good', status: 'Inactive' },
      { name: 'Molly', description: 'Bad', status: 'Active' },
      { name: 'Austin', description: 'Good', status: 'Active' },
      { name: 'Dany', description: 'Good', status: 'Inactive' },
      { name: 'Molly', description: 'Bad', status: 'Active' },
      { name: 'Austin', description: 'Good', status: 'Active' },
      { name: 'Dany', description: 'Good', status: 'Inactive' },
      { name: 'Molly', description: 'Bad', status: 'Active' },
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
    return this.religionForm.controls;
  }

  modalOpenVC(modalVC) {
    this.modalService.open(modalVC, {
      centered: true
    });
  }

  onSubmit() {
    this.Submitted = true;
    console.log(this.religionForm.value.status)
    if (this.religionForm.value.status === true) {
      this.religionForm.value.status = 'Active'
    } else {
      this.religionForm.value.status = 'Inactive'
    }
    console.log(this.religionForm.value);
  }

  findstatus(event: any) {
    console.log(event.target.value);

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


