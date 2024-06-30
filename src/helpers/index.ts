// import { OrderItem } from "../types";

export function formatCurrency(quantity: number){
    return new Intl.NumberFormat('en-US', {
        style: 'currency', currency: 'USD'
    }).format(quantity);
}

// export function subtotal(item: OrderItem[]) : number{
//     return item.reduce((total, acc) => {
//         return total+=acc.price*acc.quantity
//     },0)

// }

// export function propina(){
//     const propinaDOM = document.querySelector("input[type=checkbox]:checked").value;
//     const subtotal = document.querySelector('#subtotal').value;
//     console.log(propinaDOM);
//     console.log(subtotal);
//     const propina = subtotal * propinaDOM;
//     return propina;
// }