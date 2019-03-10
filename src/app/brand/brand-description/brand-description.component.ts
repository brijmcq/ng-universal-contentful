import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-description',
  templateUrl: './brand-description.component.html',
  styleUrls: ['./brand-description.component.scss']
})
export class BrandDescriptionComponent implements OnInit {
  collapseText = 'Tampilkan lebih sedikit';
  showText = 'Tampilkan lainnya';
  public isCollapsed = true;
  public buttonText = this.showText;
  constructor() { }
  ngOnInit() {
  }
  toggleButton() {
    this.isCollapsed = !this.isCollapsed;
    this.buttonText = this.isCollapsed ? this.showText : this.collapseText;
  }
}
