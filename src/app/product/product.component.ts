import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private myalertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,) { }
  title = "Ürün Listesi"
  filterText = ""

  products: Product[];

  addToChart(p: Product) {
    this.myalertifyService.success(p.name + " eklendiii")
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(parameters => {
      this.productService.getProducts(parameters["catID"]).subscribe(data => {
        this.products = data;
      })
    })

  }

}
