import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BycatComponent } from './bycat.component';

describe('BycatComponent', () => {
  let component: BycatComponent;
  let fixture: ComponentFixture<BycatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BycatComponent]
    });
    fixture = TestBed.createComponent(BycatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
