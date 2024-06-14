import { useState } from "react"
import type { MenuItems, Order } from "../types"

export const useOrder = () => {

    const [order, setOrder] = useState<Order[]>([])
    const [tip, setTip] = useState(0)
 
    const addItem = (item : MenuItems) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if(itemExist){
            const updateOrder = order.map(orderItem => orderItem.id === item.id ? 
                {...orderItem, quantity : orderItem.quantity + 1}  : orderItem)
                setOrder(updateOrder)
        } else{
            const newItem : Order = {...item, quantity : 1 }
        setOrder([...order, newItem])
        };
        

    };
    const deleteItem = (id : MenuItems['id']) => {
        setOrder(order.filter(item => item.id !== id)) 
    }


    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }
  return {
    order,
    tip,
    setTip,
    addItem,
    deleteItem,
    placeOrder
  }
     
  
}
