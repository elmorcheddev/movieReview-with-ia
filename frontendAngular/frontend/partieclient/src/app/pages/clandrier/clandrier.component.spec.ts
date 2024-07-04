import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClandrierComponent } from './clandrier.component';

describe('ClandrierComponent', () => {
  let component: ClandrierComponent;
  let fixture: ComponentFixture<ClandrierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClandrierComponent]
    });
    fixture = TestBed.createComponent(ClandrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
