import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertWineCardComponent } from './dessert-wine-card.component';

describe('DessertWineCardComponent', () => {
  let component: DessertWineCardComponent;
  let fixture: ComponentFixture<DessertWineCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DessertWineCardComponent]
    });
    fixture = TestBed.createComponent(DessertWineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
