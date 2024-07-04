import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonProfilsComponent } from './mon-profils.component';

describe('MonProfilsComponent', () => {
  let component: MonProfilsComponent;
  let fixture: ComponentFixture<MonProfilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonProfilsComponent]
    });
    fixture = TestBed.createComponent(MonProfilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
