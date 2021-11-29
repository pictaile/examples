import {Component, Host, OnInit, Optional, Self, SkipSelf} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs/operators";
import {SomeServiceService} from "../services/some-service/some-service.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [SomeServiceService]
})
export class TestComponent implements OnInit {
  public count = 0;
  public data: any;

  constructor(private http:  HttpClient,   @Self() @Optional() private service: SomeServiceService) { }

  ngOnInit(): void {
    this.service.test();
    this.http.get('assets/some.json').pipe(delay(2000)).subscribe({
      next: (res) => {
          this.data = res
      }
    });
  }

  public run() {
    this.add();

  }

  private add() {
    this.count = this.count + 1;
  }



}
