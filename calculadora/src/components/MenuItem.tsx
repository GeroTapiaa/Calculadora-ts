
import { OrderActions } from "../reducers/order-reducer"
import { MenuItems } from "../types"

type MenuItemProps = {
    item : MenuItems
    dispatch: React.Dispatch<OrderActions>
}

export const MenuItem = ({item, dispatch}: MenuItemProps) => {
  return (
    <button className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-300"
    onClick={() => dispatch({type : 'add-item', payload : {item}})}
    >
        <p>{item.name}</p>
        <p className="font-black px-4">${item.price}</p>

    </button>
  )
}
