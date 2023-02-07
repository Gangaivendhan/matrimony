import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-userlist',
  templateUrl: './add-userlist.component.html',
  styleUrls: ['./add-userlist.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class AddUserlistComponent implements OnInit {
  public rows: any;
  public selected = [];
  public basicSelectedOption: number = 10;
  public ColumnMode = ColumnMode;
  public SelectionType = SelectionType;
  public exportCSVData = [];
  datalist:any
  columns:any;
  paramId :any;
  obj:any={};

  constructor(private modalService: NgbModal,
    private fb: FormBuilder,
   

) { }

  ngOnInit(): void {
  

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
