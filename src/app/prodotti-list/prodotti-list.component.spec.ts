import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottiListComponent } from './prodotti-list.component';

describe('ProdottiListComponent', () => {
  let component: ProdottiListComponent;
  let fixture: ComponentFixture<ProdottiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdottiListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdottiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
