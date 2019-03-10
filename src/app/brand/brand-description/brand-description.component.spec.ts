import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandDescriptionComponent } from './brand-description.component';

describe('BrandDescriptionComponent', () => {
  let component: BrandDescriptionComponent;
  let fixture: ComponentFixture<BrandDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
