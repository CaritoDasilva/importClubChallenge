import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  listProducts: Product[] = []
  response = false;

  constructor(public api: ApiService) {
  }

  ngOnInit() {
    this.showProducts();
  }

  showProducts() {
    this.api.getProducts().subscribe((products: any) => {
      this.response = true;
      this.listProducts = products.productos;
    });
  }

  goToDetails(url) {
    url = url.slice(0);
    let urldetails = `https://www.importclub.cl/${url}`
    location.replace(urldetails);
  }

}
