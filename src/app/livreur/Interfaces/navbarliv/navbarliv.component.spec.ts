import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarlivComponent } from './navbarliv.component';

describe('NavbarlivComponent', () => {
  let component: NavbarlivComponent;
  let fixture: ComponentFixture<NavbarlivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarlivComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarlivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
