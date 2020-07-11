import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddFormsComponent } from './product-add-forms.component';

describe('ProductAddFormsComponent', () => {
  let component: ProductAddFormsComponent;
  let fixture: ComponentFixture<ProductAddFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAddFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
