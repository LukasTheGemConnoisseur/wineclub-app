import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineGlassesProductsComponent } from './wine-glasses-products.component';

describe('WineGlassesProductsComponent', () => {
  let component: WineGlassesProductsComponent;
  let fixture: ComponentFixture<WineGlassesProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WineGlassesProductsComponent]
    });
    fixture = TestBed.createComponent(WineGlassesProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
