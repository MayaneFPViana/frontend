import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../../products/product.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product = {} as Product
  
  constructor( 
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute ) {}

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id') ?? 0)
    this.productService.readById(id).subscribe(  product => {
      this.product = product;
    })
  }

  deleteProduct(): void {
    if( !this.product.id ) {
      this.productService.showMessage('O id não foi informado!');
      return;
    } 
    this.productService.delete( this.product.id ).subscribe(() =>{
      this.productService.showMessage('Produto excluido com sucesso');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
