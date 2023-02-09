import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbDate, NgbDateStruct,NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Person, DataService } from 'app/main/forms/form-elements/select/data.service';

import Stepper from 'bs-stepper';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class AddUserComponent implements OnInit  {
  public customFooterDPdata: NgbDateStruct;
  public contentHeader: object;
  public selectBasic: Person[] = [];
  public selectBasicLoading = false;
  public today = this.calendar.getToday();

  public TDNameVar;
  public TDEmailVar;
  public TDFirstNameVar;
  public TDLastNameVar;
  public twitterVar;
  public facebookVar;
  public googleVar;
  public linkedinVar;
  public landmarkVar;
  public addressVar;
  public CustomDayDPdata: NgbDateStruct;
  

  isWeekend = (date: NgbDate) => this.calendar.getWeekday(date) >= 6;

  isDisabled = (date: NgbDate, current: { month: number; year: number }) =>
  date.month !== current.month;
  
  

  public selectMulti = [{ name: 'English' }, { name: 'French' }, { name: 'Spanish' }];
  public selectMultiSelected;

  // private
  private horizontalWizardStepper: Stepper;
  
  private bsStepper;
footerTemplate: any;

  /**
   * Horizontal Wizard Stepper Next
   *
   * @param data
   */
  horizontalWizardStepperNext(data) {
    if (data.form.valid === true) {
      this.horizontalWizardStepper.next();
    }
  }
  /**
   * Horizontal Wizard Stepper Previous
   */
  horizontalWizardStepperPrevious() {
    this.horizontalWizardStepper.previous();
  }
  profile=[
    { id: 1, value: 'Myself' },
    { id: 2, value: 'Daughter' },
    { id: 3, value: 'Son' },
    { id: 4, value: 'Sister' },
    { id: 5, value: 'Brother' },
    { id: 5, value: 'Relative' },
    { id: 5, value: 'Friend' },
  ]
  bodyType=[
    { id: 1, value: 'Slim' },
    { id: 2, value: 'Average' },
    { id: 3, value: 'Athletic' },
    { id: 4, value: 'Heavy' } 
  ]
  Dosham=[
    { id: 1, value: 'No' },
    { id: 2, value: 'Yes' },
    { id: 3, value: 'Dont Know' }
    
  ]
  Disability=[
    { id: 1, value: 'None' },
    { id: 2, value: 'Physically Challenged' },
    
  ];
  familyStatus=[
    { id: 1, value: 'Middle Class' },
    { id: 2, value: 'Upper Middle Class' },
    { id: 3, value:'Rich Affluent'}
  ]
  FamilyType=[
    {id: 1, value: 'Joint'},
    {id: 2, value: 'Nuclear'}
  ]
  Status = [
    { id: 1, value: 'ACTIVE' },
    { id: 2, value: 'INACTIVE' },
  
  ];
  MaretailStatus = [
    { id: 1, value: 'Never Married' },
    { id: 2, value: 'Widowed' },
    { id: 3, value: 'Divorced' }, 
    { id: 4, value: 'Awaiting divorce' },
  
  ];
  FamilyValue = [
    { id: 1, value: 'Orthodox' },
    { id: 2, value: 'Traditional' },
    { id: 3, value: 'Moderate' }, 
    { id: 4, value: 'Liberal' },
  
  ];
  HeighestEducation=[
   
  ];

  star = [
      { id: 1, starname: 'Bharani' },
      { id: 2, starname: 'Pushya' },
      { id: 3, starname: 'Mrigashira' },
      { id: 4, starname: 'Purva Ashadha' },
    ];
    Raasi=[
      { id: 1, Raasiname:'mithunam' },
      { id: 2, Raasiname:'meshum'  },
    ]
  drinking=[
    { id: 1, value: 'No' },
    { id: 2, value: 'Yes' },
    
  ];
  EatingHabit=[
    { id: 1, value: 'Vegitarian' },
    { id: 2, value: 'Non-vegitarian' },
    { id: 3, value: 'Egg / vegan' }, 
 
  ];
  Smoking=[
    { id: 1, value: 'Yes' },
    { id: 2, value: 'No' },
   
  ];
  state=[
    { id: 1, value: 'Tamil Nadu' },
    { id: 2, value: 'Kerala' },
  ]
  city=[
    { id: 1, value: 'Thanjavur' },
    { id: 2, value: 'Chennai' },
  ]
  country = [
    { id: 1, value: 'India' },
    { id: 2, value: 'Karanataka' },
  ]
  meridia = [
    { id: 1, value: 'am' },
    { id: 2, value: 'pm' },
  ]
  EmployedIn=[
    { id: 1, value: 'Goverment/Pscr' },
    { id: 2, value: 'Private' },
    { id: 3, value: 'Business' }, 
    { id: 4, value: 'Defence' },
    { id: 5, value: 'SelfEmployed' },
    { id: 6, value: 'NotWorking' },
  
  ];
  Gender = [
    { id: 1, value: 'Male' },
    { id: 2, value: 'Female' },
  
  ];
  onSubmit() {
    alert('Submitted!!');
    return false;
  }

  constructor( private calendar: NgbCalendar) {}


  ngOnInit() {
    this.horizontalWizardStepper = new Stepper(document.querySelector('#stepper1'), {});

   

    this.bsStepper = document.querySelectorAll('.bs-stepper');
  
  
  
    
this.contentHeader = {
  headerTitle: 'User',
  actionButton: true,
  breadcrumb: {
    type: '',
    links: [
      {
        name: 'Home',
        isLink: true,
        link: '/'
      },
      {
        name: 'Broker',
        isLink: true,
        link: '/'
      },
      {
        name: 'User',
        isLink: false
      }
    ]
  }
};

  
  }
  

}
 


