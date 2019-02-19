import { TestBed, async, inject } from '@angular/core/testing';

import { IsUserRegisteredGuard } from './is-user-registered.guard';

describe('IsUserRegisteredGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsUserRegisteredGuard]
    });
  });

  it('should ...', inject([IsUserRegisteredGuard], (guard: IsUserRegisteredGuard) => {
    expect(guard).toBeTruthy();
  }));
});
