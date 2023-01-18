
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class StarComponent implements OnInit {

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

 

  constructor() { }

  ngOnInit() {

    this.datalist = [
      { name: 'Austin',gender: 'Male', status: 'Active' },
      { name: 'Dany',gender: 'Male', status: 'Inactive' },
      { name: 'Molly',gender: 'Female', status: 'Active' },
      { name: 'Austin',gender: 'Male', status: 'Active' },
      { name: 'Dany',gender: 'Male', status: 'Inactive' },
      { name: 'Molly',gender: 'Female', status: 'Active' },
      { name: 'Austin',gender: 'Male', status: 'Active' },
      { name: 'Dany',gender: 'Male', status: 'Inactive' },
      { name: 'Molly',gender: 'Female', status: 'Active' },
      { name: 'Austin',gender: 'Male', status: 'Active' },
      { name: 'Dany',gender: 'Male', status: 'Inactive' },
      { name: 'Molly',gender: 'Female', status: 'Active' },
      { name: 'Austin',gender: 'Male', status: 'Active' },
      { name: 'Dany',gender: 'Male', status: 'Inactive' },
      { name: 'Molly',gender: 'Female', status: 'Active' },
      { name: 'Austin',gender: 'Male', status: 'Active' },
      { name: 'Dany',gender: 'Male', status: 'Inactive' },
      { name: 'Molly',gender: 'Female', status: 'Active' },
    ];
    this.columns = [
      { prop: 'name' },
      { name: 'gender' },
      { name: 'status' },
      { name: 'Action' }
    ];

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



