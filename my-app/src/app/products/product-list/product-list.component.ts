import { AfterViewInit,Component,OnDestroy,OnInit, ViewChild } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsService]
})
export class ProductListComponent implements OnInit {
  selectedProduct: Product | undefined;
  products: Product[] = [];
  constructor(private productService: ProductsService) {}
  ngOnInit(): void {
    this.getProducts();
  }
  onBuy() {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }

  onAdd(product: Product) {
    this.products.push(product);
  }

  onDelete() {
    this.products = this.products.filter(product => product !== this.selectedProduct);
    this.selectedProduct = undefined;
  }
  
  
  private getProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
}

  
  



