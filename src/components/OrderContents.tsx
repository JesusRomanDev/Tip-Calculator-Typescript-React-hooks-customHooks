import { formatCurrency } from "../helpers";
import { MenuItems, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[];
    removeItem: (id: MenuItems['id']) => void
}
const OrderContents = ({order, removeItem}: OrderContentsProps) => {
  return (
    <div>
        <h2 className="font-black text-4xl">Consumo</h2>

        <div className="space-y-3 mt-5">
            {order.length === 0 ?
                <p>La orden esta vacia</p>
            : (order.map((item) => (
                <div key={item.id} className="flex justify-between border-t border-gray-500 last-of-type:border-b">
                    <div>
                        <p className="text-lg">{item.name} - {formatCurrency(item.price)}</p>
                        <p className="font-black">Cantidad: {formatCurrency(item.quantity * item.price)}</p>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="bg-red-600 h-8 w-8 rounded-full text-white">X</button>
                </div>
            ))) }

        </div>
    </div>
  )
}

export default OrderContents