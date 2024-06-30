import type { MenuItems } from "../types/index"

type MenuItemsProps = {
    item: MenuItems;
    addItem: (item: MenuItems) => void
}
const MenuItems = ({item, addItem} : MenuItemsProps) => {
  return (
    <button onClick={() => addItem(item)} className="border-2 rounded border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200">
        <p>{item.name}</p>
        <p className="font-black">{item.price}</p>

    </button>
  )
}

export default MenuItems