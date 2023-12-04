import { TestBed } from '@angular/core/testing';

import { AuthFourGuard } from './auth-four.guard';

describe('AuthFourGuard', () => {
  let guard: AuthFourGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthFourGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
