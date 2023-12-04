import { TestBed } from '@angular/core/testing';

import { AuthLivGuard } from './auth-liv.guard';

describe('AuthLivGuard', () => {
  let guard: AuthLivGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthLivGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
