import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
  <h1> this is the model page</h1>
    <h3>{{ message }} {{ modelId}}</h3>
  `
})
export class ModelDetailComponent {
  public message = `Model id: `;
  public modelId;

  constructor( private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( data => {
      this.modelId = data['id'];
    });
  }
}
