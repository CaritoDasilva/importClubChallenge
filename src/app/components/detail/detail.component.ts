import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() value: number = 50;
  url: string = ""
  constructor(public api: ApiService, private route: ActivatedRoute) { }
  detailProduct = []
  ngOnInit() {
    this.route.params.subscribe((url: any) => {
      this.url = url
      console.log(url);
      return url
    })
    this.showProductDetail()
  }

  showProductDetail() {
    this.api.getProduct(Object.values(this.url)[0]).subscribe((product: any) => {
      this.detailProduct.push(product)
      this.value = (product.campaign.LIST_ORDER * 100) / product.campaign.STOCK
      console.log(this.value)
      console.log(this.detailProduct);
    })
  }



}
//o * 100 / s