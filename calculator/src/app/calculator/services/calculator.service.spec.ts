import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('must grant that 1 + 4 = 5',
    inject([CalculatorService], (service: CalculatorService) => {
      let sum = service.calculate(1, 4, CalculatorService.SUM);
      expect(sum).toEqual(5);
    }));

  it('must grant that 20 - 5 = 15',
    inject([CalculatorService], (service: CalculatorService) => {
      let sub = service.calculate(20, 5, CalculatorService.SUBTRACTION);
      expect(sub).toEqual(15);
    }))

  it('must grant that 2 * 5 = 10',
    inject([CalculatorService], (service: CalculatorService) => {
      let mult = service.calculate(2, 5, CalculatorService.MULTIPLICATION);
      expect(mult).toEqual(10);
    }))

    it('must grant that 10 / 5 = 2',
    inject([CalculatorService], (service: CalculatorService) => {
      let division = service.calculate(10, 5, CalculatorService.DIVISION);
      expect(division).toEqual(2);
    }))

});
