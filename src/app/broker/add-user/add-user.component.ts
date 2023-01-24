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
 


