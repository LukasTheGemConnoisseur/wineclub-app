import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteWineCardComponent } from './white-wine-card.component';

describe('WhiteWineCardComponent', () => {
  let component: WhiteWineCardComponent;
  let fixture: ComponentFixture<WhiteWineCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhiteWineCardComponent]
    });
    fixture = TestBed.createComponent(WhiteWineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
