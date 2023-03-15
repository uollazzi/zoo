import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimaleDetailComponent } from './animale-detail.component';

describe('AnimaleDetailComponent', () => {
  let component: AnimaleDetailComponent;
  let fixture: ComponentFixture<AnimaleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimaleDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimaleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
