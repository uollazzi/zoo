import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupazioniListComponent } from './occupazioni-list.component';

describe('OccupazioniListComponent', () => {
  let component: OccupazioniListComponent;
  let fixture: ComponentFixture<OccupazioniListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccupazioniListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OccupazioniListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
