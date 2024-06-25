import { MenuItems, Order } from "../types";



//1ro crear el type de acciones
export type OrderActions = 
    {type : 'add-item' , payload : { item : MenuItems}} |
    {type : 'delete-item', payload : { id : MenuItems['id']}} | 
    {type : 'place-order', } | 
    {type : 'add-tip', payload : {value : number}}


//2do el tipo 
export type OrderState = {
    order : Order[],
    tip : number
}   


//3ro el estado incial
export const initialState : OrderState = {
    order : [],
    tip : 0
}    


//4to el reducer
export const orderReducer = (
    state :  OrderState = initialState,
    actions : OrderActions
) => {
    if(actions.type === 'add-item'){
        const itemExist = state.order.find(orderItem => orderItem.id === actions.payload.item.id)
        let updateOrder : Order[] = []
        if(itemExist){
             updateOrder = state.order.map(orderItem => orderItem.id === actions.payload.item.id ? 
                {...orderItem, quantity : orderItem.quantity + 1}  : orderItem)
                
        } else{
            const newItem : Order = {...actions.payload.item, quantity : 1 }
            updateOrder= [...state.order, newItem]
        };
        return {
            ...state,
            order : updateOrder 
        }
    };

    if(actions.type === 'delete-item'){
        const order = (state.order.filter(item => item.id !== actions.payload.id)) 
        return {
            ...state,
            order
        }
    };

    if(actions.type === 'add-tip'){
        const tip = actions.payload.value
        return {
            ...state,
            tip
        }
    };

    if(actions.type === 'place-order'){
        
        return {
            ...state,
            order : [],
            tip : 0
        }
    }

    return state 
}
