import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInClientComponent } from './LogInClientComponent';

describe('LogInClientComponent', () => {
  let component: LogInClientComponent;
  let fixture: ComponentFixture<LogInClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogInClientComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogInClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
