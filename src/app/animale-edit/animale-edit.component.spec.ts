import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimaleEditComponent } from './animale-edit.component';

describe('AnimaleEditComponent', () => {
  let component: AnimaleEditComponent;
  let fixture: ComponentFixture<AnimaleEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimaleEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimaleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
