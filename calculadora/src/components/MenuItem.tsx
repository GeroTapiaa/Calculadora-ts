import { MenuItems } from "../types"

type MenuItemProps = {
    item : MenuItems
    addItem : (item : MenuItems) => void
}

export const MenuItem = ({item, addItem}: MenuItemProps) => {
  return (
    <button className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-300"
    onClick={() => addItem(item)}
    >
        <p>{item.name}</p>
        <p className="font-black px-4">${item.price}</p>

    </button>
  )
}
