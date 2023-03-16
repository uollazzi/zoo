import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimaliTotaleComponent } from './animali-totale.component';

describe('AnimaliTotaleComponent', () => {
  let component: AnimaliTotaleComponent;
  let fixture: ComponentFixture<AnimaliTotaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimaliTotaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimaliTotaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
