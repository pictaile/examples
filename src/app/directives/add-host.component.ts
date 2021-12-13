import {
  AfterViewChecked,
  AfterViewInit,
  Component, ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';


@Component({
  selector: 'app-add-host',
  template: `<ng-container #test></ng-container>`
})
export class AddHostComponent implements OnInit {
  @Input() component: any;
  @ViewChild('test', { read: ViewContainerRef, static: true }) public container: ViewContainerRef;

  constructor( private resolver: ComponentFactoryResolver) { }


  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent() {
    this.container.clear();
    const componentRef = this.container.createComponent<any>(this.component.component);

    const data = Object.keys(this.component);
    for(const item of data) {
      componentRef.instance[item] = this.component.data[item];
    }
  }
}
