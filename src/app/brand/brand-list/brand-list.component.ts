import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent {
  // todo: add path property.
  // using just a name can be problematic in the future.
  @Input() brands;
  @Output() link = new EventEmitter<string>();
  constructor() {}

  onClick(link: string) {
    this.link.emit(link.toLowerCase());
  }
}
