import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { HttpService } from "../../http.service"

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts;
  cartsDetail;
  constructor(private http:HttpService) { }

  getItemsInCart(): void{
    this.http.getCartItems().subscribe((data:any) => {
      this.carts = data.data;
      console.log(this.carts)
    })
  }

  _increamentQTY(id, quantity): void {
    const payload = {
      productId:id,
      quantity
    }
    this.http.addToCart(payload).subscribe(() =>{
      this.getItemsInCart();
      alert("Product added")
    })
  }

    _emptyCart(): void{
      this.http.emptyCart().subscribe(() => {
        this.getItemsInCart();
        alert("Cart Emptied")
      })
    }


  ngOnInit(): void {
    this.getItemsInCart();
  }

}
