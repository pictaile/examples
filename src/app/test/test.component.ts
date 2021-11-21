import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  public count = 0;
  constructor() { }

  ngOnInit(): void {
  }

  public run() {
    this.add();
  }

  private add() {
    this.count = this.count + 1;
  }

}
