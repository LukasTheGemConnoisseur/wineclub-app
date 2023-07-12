import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedWineProductsComponent } from './red-wine-products.component';

describe('RedWineProductsComponent', () => {
  let component: RedWineProductsComponent;
  let fixture: ComponentFixture<RedWineProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedWineProductsComponent]
    });
    fixture = TestBed.createComponent(RedWineProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
