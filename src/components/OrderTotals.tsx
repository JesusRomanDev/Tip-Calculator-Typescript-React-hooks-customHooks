import { useMemo } from "react";
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
    order: OrderItem[];
    tip: number;
    placeOrder: () => void
}
const OrderTotals = ({order, tip, placeOrder} : OrderTotalsProps) => {
    const subtotalAmount = useMemo(() => order.reduce((total, item) => total += item.price*item.quantity, 0),[order])
    const tipAmount = useMemo(() => subtotalAmount * tip, [subtotalAmount, tip])
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tipAmount, subtotalAmount])

  return (
    <>
        <div className="space-y-2">
            <h2 className="font-black">Totales y Propinas:</h2>
            <p>Subtotal a Pagar:
                <span id="subtotal" className="font-bold">{formatCurrency(subtotalAmount)}</span>
            </p>
            <p>Propina:
                <span className="font-bold">{formatCurrency(tipAmount)}</span>
            </p>
            <p>Total a Pagar:
                <span className="font-bold">{formatCurrency(totalAmount)}</span>
            </p>
        </div>

        <button onClick={placeOrder} className="disabled:opacity-10 w-full bg-black p-3 uppercase text-white font-bold mt-10" disabled={totalAmount === 0}>
            Guardar Orden
        </button>
    </>
  )
}

export default OrderTotals