import { ProductService } from '../../product/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Product } from '../product.model';
import { Validator } from 'src/app/utils/validator';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit  {

  product = {} as Product

  constructor(public productService: ProductService, private router:Router)  {}

  ngOnInit(): void {

  }

  createProduct(): void {

    if( this.validarProduto() ){

      this.productService.create(this.product).subscribe(() => {
        this.productService.showMessage( 'Produto criado' );
        this.router.navigate(['/products']);
      });

    }

  }

  private validarProduto(): boolean {
    if( Validator.isNullOrEmpty(this.product.price)){
      this.productService.showMessage( 'Produto com preço inválido' );
      return false;
    }

    if( Validator.isNullOrEmpty(this.product.name)) {
      this.productService.showMessage( 'Produto sem nome!' );
      return false;
    }

    return true;
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
