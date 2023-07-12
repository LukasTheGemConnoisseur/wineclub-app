import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteWineProductsComponent } from './white-wine-products.component';

describe('WhiteWineProductsComponent', () => {
  let component: WhiteWineProductsComponent;
  let fixture: ComponentFixture<WhiteWineProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhiteWineProductsComponent]
    });
    fixture = TestBed.createComponent(WhiteWineProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
