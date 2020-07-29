import { TestBed } from '@angular/core/testing';

import { GettingExpensesService } from './getting-expenses.service';

describe('GettingExpensesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GettingExpensesService = TestBed.get(GettingExpensesService);
    expect(service).toBeTruthy();
  });
});
