import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  listProducts = []

  constructor(public api: ApiService) { }


  ngOnInit() {
    console.log("método oninit");
    this.api.getProducts().subscribe((products: any) => {
      this.listProducts = products;
      console.log(this.listProducts);
    });
  };


}
