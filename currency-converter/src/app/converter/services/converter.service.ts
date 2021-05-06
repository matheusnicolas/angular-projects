import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Conversion, ConversionResponse } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3";
  
  constructor(private http: HttpClient) {}

  toConvert(conversion: Conversion): Observable<any> {
    let params = `&base=${conversion.currrencyOf}&symbols=${conversion.currencyFor}`;

    return this.http.get(this.BASE_URL + params);
  }


  quoteFor(conversionResponse: ConversionResponse, conversion: Conversion): number {
    if (conversionResponse === undefined) {
      return 0;
    }

    return conversionResponse.rates[conversion.currencyFor];
  }

  quoteOf(conversionResponse: ConversionResponse, conversion: Conversion): string {
    if (conversionResponse === undefined) {
      return '0';
    }
    return (1 / conversionResponse.rates[conversion.currencyFor]).toFixed(4);
  }
}
