import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCommandeComponent } from './selected-commande.component';

describe('SelectedCommandeComponent', () => {
  let component: SelectedCommandeComponent;
  let fixture: ComponentFixture<SelectedCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectedCommandeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectedCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
