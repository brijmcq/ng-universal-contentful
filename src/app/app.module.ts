import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { BrandsComponent } from './containers/brands/brands.component';
import { BrandComponent } from './containers/brand/brand.component';
import { BrandListComponent } from './brand/brand-list/brand-list.component';
import { BrandDescriptionComponent } from './brand/brand-description/brand-description.component';
import { ModelListComponent } from './model/model-list/model-list.component';
import { ContentfulService } from './core/contentful.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrandsComponent,
    BrandComponent,
    BrandListComponent,
    BrandDescriptionComponent,
    ModelListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'merek/:id', component: BrandComponent},
      { path: 'merek', component: BrandsComponent },
      { path: 'model', loadChildren: './models/models.module#ModelModule'},
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
      { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
    ]),
    TransferHttpCacheModule,
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
