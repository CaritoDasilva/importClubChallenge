import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from 'src/app/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  // @Output() onClickDetail = new EventEmitter();
  listProducts: Product[] = []
  detailProduct = {}
  response = false;

  constructor(public api: ApiService, private route: Router) {
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
    this.api.getProduct(url).subscribe((product: any) => {
      this.detailProduct = product
      console.log(product);
    })
    this.route.navigate([`detail/${url}`])
  }




}

// url = url.slice(0);
// let urldetails = `https://www.importclub.cl/${url}`
// location.replace(urldetails);