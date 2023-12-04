import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFourComponent } from './login-four.component';

describe('LoginFourComponent', () => {
  let component: LoginFourComponent;
  let fixture: ComponentFixture<LoginFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
