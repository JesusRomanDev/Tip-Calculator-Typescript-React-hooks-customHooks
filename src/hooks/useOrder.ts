import { useState } from "react"
import { MenuItems, OrderItem } from "../types";

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);
    const addItem = (item : MenuItems) => {
        // console.log(item);
        const itemExists = order.find(orderItem => orderItem.id === item.id)
        if(itemExists){
            // console.log('Ya existe we');
            //IMPORTANTE
            //CUALQUIERA DE LOS 2 METODOS DE ABAJO FUNCIONA, EN ESTE CASO ME FUI POR USAR EL OPERADOR TERNARIO
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem);
            // const updatedOrder = order.map(orderItem => {
            //     if(orderItem.id === item.id){
            //         orderItem.quantity++
            //         return orderItem
            //     }else{
            //         return orderItem
            //     }
            // });
            setOrder(updatedOrder);
        }else{
            const newItem : OrderItem = {...item, quantity:1}; //<----------tambien se pudo hacer de esta manera en vez de la
            //de abajo como segundo argumento de setOrder
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id: MenuItems['id']) => {
        // const itemExists = order.find(orderItem => orderItem.id === id)
        // if(itemExists){
        //     console.log('Si existe');
        //     const updatedOrder = order.map(item =>{
        //         if(item.id === id){
        //             item.quantity--
        //             return item
        //         }else{
        //             return item
        //         }
        //     })
        //     setOrder(updatedOrder);
        // }else{
            // }
        const updatedOrder = order.filter(item => item.id !== id)
        setOrder(updatedOrder);

    }

    const placeOrder = () => {
        setOrder([]);
        setTip(0);
    }
    console.log(order);
    return{
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}