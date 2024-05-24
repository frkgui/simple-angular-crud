import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTable } from '@angular/material/table';
import { RouterModule } from '@angular/router';

import localePt from "@angular/common/locales/pt"
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt);

@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatTable,RouterModule],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-Br'
  }],
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css'
})
export class ProductReadComponent implements OnInit{

  products: Product[] = []
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private productService: ProductService){}

  ngOnInit(): void{
    this.productService.read().subscribe( products => {
      this.products = products
      console.log(products)
    })
  }
}
