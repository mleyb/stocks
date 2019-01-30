import { Component, OnInit } from "@angular/core";
import { StocksService, Stock } from "../../services/stocks.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  stocks: Array<Stock>;
  symbols: Array<string>;

  constructor(private service: StocksService) {
    this.symbols = service.getStocks();
  }

  ngOnInit() {
    this.service.load(this.symbols).subscribe(stocks => (this.stocks = stocks));
  }
}
