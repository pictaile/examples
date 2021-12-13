import {AfterViewInit, Component, Host, OnInit, Optional, Self, SkipSelf, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs/operators";
import {SomeServiceService} from "../services/some-service/some-service.service";

import {CompOneComponent} from "../dynamic/comp-one/comp-one.component";
import {CompTwoComponent} from "../dynamic/comp-two/comp-two.component";
import {Schema} from "./Schema";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [SomeServiceService]
})
export class TestComponent implements OnInit {

  componentItems = Schema;


  constructor(private http:  HttpClient,   @Self() @Optional() private service: SomeServiceService) { }




  ngOnInit(): void {

  }





}
