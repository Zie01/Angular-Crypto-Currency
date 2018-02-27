import { Injectable } from '@angular/core';
import { HttpClient } form '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

	result:any;

  constructor(private_http: HttpClient) { }

  getPrices(){
  	return this._http.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD")
  	.map(result => this.result = result);
  }

}
