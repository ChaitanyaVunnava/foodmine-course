import { Food } from "./Food";

export class CartItem{
    //food!: Food;  // instead of this line we can use the below line with constructor
    constructor(public food:Food){}
    quantity: number = 1;
    price: number = this.food.price;
}