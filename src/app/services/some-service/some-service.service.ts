import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SomeServiceService {
  private count = 0;
  constructor() { }

  public add() {
    this.count = this.count + 1;
  }

  public test() {
    alert( this.count);
  }
}
