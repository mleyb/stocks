import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { syntaxError } from '@angular/compiler';

const stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];

export interface Stock {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  private serviceBaseAddress = 'https://angular2-in-action-api.herokuapp.com';

  constructor(private http: HttpClient) { }

  public add(stock) {
    stocks.push(stock);
    return this.getStocks();
  }

  public remove(stock) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.getStocks();
  }

  public load(symbols) {
    if (symbols) {
      return this.http.get<Array<Stock>>(this.serviceBaseAddress + '/stocks/snapshot?symbols=' + symbols.join());
    }
  }

  private getStocks() {
    return stocks.slice();
  }
}
