import { useMemo } from "react"
import { Order } from "../types"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"

type OrdertotalsProps = {
    order: Order[],
    tip: number,
    dispatch: React.Dispatch<OrderActions>
}

export const OrderTotals = ({ order, tip , dispatch}: OrdertotalsProps) => {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order])

    return (
        <>
            <div className="space-y-3 items-center">
                <h2 className="font-black text-2xl">Totales y Propinas</h2>
                <p className="">subtotal:
                    <span className="font-bold pl-1">{formatCurrency(subtotalAmount)}</span>
                </p>
                <p className="">Propina:
                    <span className="font-bold pl-1">{formatCurrency(tipAmount)}</span>
                </p>
                <p className="">Total a pagar:
                    <span className="font-bold pl-1">{formatCurrency(totalAmount)}</span>
                </p>
            </div>

            <button className="w-full bg-black p-3 uppercase font-bold mt-10 text-white disabled:opacity-10"
                    disabled={totalAmount=== 0}
                    onClick={() => dispatch({type : 'place-order'})}
            >
                Guardar orden

            </button>
        </>
    )
}
