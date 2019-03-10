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

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.contentful.getBrandByTitle(params['id']).subscribe(data => console.log(' data', data));
    });
  }

}
