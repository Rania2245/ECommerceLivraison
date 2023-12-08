import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedProduitComponent } from './selected-produit.component';

describe('SelectedProduitComponent', () => {
  let component: SelectedProduitComponent;
  let fixture: ComponentFixture<SelectedProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectedProduitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectedProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
