import { ModelDetailComponent } from './model-detail/model-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        ModelDetailComponent
    ],
    imports: [
      RouterModule.forChild([
        { path: ':id', component: ModelDetailComponent, pathMatch: 'full'}
      ])
    ]
  })
  export class ModelModule {
  }
