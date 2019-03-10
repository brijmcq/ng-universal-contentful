import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from '../../core/contentful.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  constructor(private route: ActivatedRoute, private contentful: ContentfulService) { }
  public models:any;
  ngOnInit() {
    this.route.params.subscribe( params => {
      console.log('the params', params['id']);
      this.contentful.getBrandByTitle(params['id']).subscribe(data => console.log(' data', data));
    });
  }

}
