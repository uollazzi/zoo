import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimaliListComponent } from './animali-list.component';

describe('AnimaliListComponent', () => {
  let component: AnimaliListComponent;
  let fixture: ComponentFixture<AnimaliListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimaliListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimaliListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
