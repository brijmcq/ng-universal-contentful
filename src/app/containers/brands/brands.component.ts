import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../../core/contentful.service';
import { Observable, from, of } from 'rxjs';
import brandsJSON from '../../../assets/data/brands.json';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  constructor(private router: Router,
    private contentful: ContentfulService
    ) { }
  brands$: Observable<any>;
  ngOnInit() {
    console.log('the brands', brandsJSON.brands);
    this.brands$ = of(brandsJSON.brands) ;
  // this.brands$ = this.contentful.getBrandsPage();
  }
  goToBrand(path: any): void {
    console.log('path', path);
    this.router.navigate(['/merek', path]);
  }

}
