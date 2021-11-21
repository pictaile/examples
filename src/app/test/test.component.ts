import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  public count = 0;
  public data: any;
  constructor(private http:  HttpClient) { }

  ngOnInit(): void {
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
