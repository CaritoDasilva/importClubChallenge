import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() value: number = 50;
  url: string = ""
  constructor(public api: ApiService, private route: ActivatedRoute, private routes: Router) { }
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
      console.log(product)
      this.detailProduct.push(product)
      this.value = (product.campaign.LIST_ORDER * 100) / product.campaign.STOCK
      console.log(this.value)
      console.log(this.detailProduct);
    },    
      (error: any) => {
        this.routes.navigate([`product-not-found`])
        return console.log('oops', error.status);
      }
    )    
    
  }



}
