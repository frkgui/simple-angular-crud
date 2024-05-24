import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'

import { MatButtonModule } from '@angular/material/button';
import { Product } from '../product.model';
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card';




@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, MatCardModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {

  product : Product = {
    name: '',
    price: 0.99
  }

  constructor(private productService: ProductService, private router: Router){}

  ngOnInit(): void{
  }

  createProduct(): void{
    this.productService.create(this.product).subscribe( () => {
      this.router.navigate(['/products']);
      this.productService.showMessage('Product created!') 
} ) 
  }
  cancel(): void{
    this.router.navigate(['/products'])
  }

}
