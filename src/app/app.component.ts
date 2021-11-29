import { Component } from '@angular/core';
import {SomeServiceService} from "./services/some-service/some-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'examples';

  constructor(private someServiceService: SomeServiceService) {
    this.someServiceService.add();
  }
}
