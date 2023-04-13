import { HeaderService } from './../../components/template/header/header.service';
import { HeaderData } from './../../components/template/header/header-data-model';
import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})

export class ProductCrudComponent {

  constructor( private route: Router, private headerService: HeaderService ) {
    headerService.headerData = {
      title: 'Cadastro de produto',
      icon: 'storefront', 
      routerUrl: '/products'
    }
  }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.route.navigate(['/products/create']);
  }
}
