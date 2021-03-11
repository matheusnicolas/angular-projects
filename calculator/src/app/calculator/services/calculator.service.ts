/** 
 * @author Matheus N.<matheuspb8@gmail.com>
 * @since 1.0.0
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  static readonly SUM: string = '+';
  static readonly SUBTRACTION: string = '-';
  static readonly DIVISION: string = '/';
  static readonly MULTIPLICATION: string = '*';

  constructor() { }

  /**
   * @param num1 number 
   * @param num2 number 
   * @param operation the operation to be executed
   * @returns number: operation result 
   */
  calculate(num1: number, num2: number, operation: string): number {
    let result: number;

    switch(operation) {
      case CalculatorService.SUM:
        result = num1 + num2;
      break;

      case CalculatorService.SUBTRACTION:
        result = num1 - num2;
      break;

      case CalculatorService.DIVISION:
        result = num1 / num2;
      break;

      case CalculatorService.MULTIPLICATION:
        result = num1 * num2;
      break;
    }

    return result;
  }
}
