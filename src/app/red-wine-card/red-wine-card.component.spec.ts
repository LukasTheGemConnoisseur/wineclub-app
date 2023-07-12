import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedWineCardComponent } from './red-wine-card.component';

describe('RedWineCardComponent', () => {
  let component: RedWineCardComponent;
  let fixture: ComponentFixture<RedWineCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedWineCardComponent]
    });
    fixture = TestBed.createComponent(RedWineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
