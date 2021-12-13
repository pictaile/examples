import {
  AfterContentChecked, AfterContentInit,
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input, OnChanges,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.scss']
})
export class CompOneComponent implements OnInit, AfterContentInit {

  @Input() element: any;

  // @Input() dashboard: any;
  constructor( private cdref: ChangeDetectorRef ) {}



  ngOnChanges() {

    debugger;
    console.log(this.element);


  }
  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    debugger;
    console.log(this.element);
  }


}
