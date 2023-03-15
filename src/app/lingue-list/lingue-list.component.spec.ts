import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LingueListComponent } from './lingue-list.component';

describe('LingueListComponent', () => {
  let component: LingueListComponent;
  let fixture: ComponentFixture<LingueListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LingueListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LingueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
