import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { ProductReadComponent } from '../../components/product/product-read/product-read.component';
import { ProductReadListComponent } from '../../components/product/product-read-list/product-read-list.component';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [MatButtonModule, RouterModule, ProductReadComponent, ProductReadListComponent],
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})
export class ProductCrudComponent {

  constructor(private router: Router, private headerService : HeaderService){
    headerService.headerData = {
      title: 'Product Management',
      icon: 'storefront',
      routeUrl: '/products'
  }
   }

  navigateToProductCreate() : void{
    this.router.navigate(['/products/create'])
  }
}
