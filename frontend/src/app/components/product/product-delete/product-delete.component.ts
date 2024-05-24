import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common'

import { MatButtonModule } from '@angular/material/button';
import { Product } from '../product.model';
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-delete',
  standalone: true,
  imports: [MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, MatCardModule, CommonModule],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent implements OnInit{

  product: Product = {
    name: '',
    price: undefined
  };

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    const idProduct = this.route.snapshot.paramMap.get('id')
    this.productService.readById(idProduct).subscribe( prod =>{
      this.product = prod;
    })
    };

    
  deleteProduct(): void{
    const idProduct = this.route.snapshot.paramMap.get('id')
      this.productService.delete(idProduct).subscribe( () => {
      this.router.navigate(['/products']);
      this.productService.showMessage('Product Deleted!') 
    } ) 
  }
  
  cancel(): void{
    this.router.navigate(['/products'])
  }


  }


