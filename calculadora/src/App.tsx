import { MenuItem } from "./components/MenuItem"
import { OrderContent } from "./components/OrderContent"
import { OrderTotals } from "./components/OrderTotals"
import { Propina } from "./components/Propina"
import { menuItems } from "./data/db"
import { useOrder } from "./hooks/useOrder"


function App() {

  const { order ,addItem , deleteItem,tip,setTip, placeOrder} = useOrder()
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto mt-20 grid md:grid-cols-2 ">
        <div className="p-5">
          <h2 className="text-4xl font-bold text-center pb-4">Menú</h2>
          <div className="space-y-3">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 rounded-lg p-5 space-y-10">
          {order.length > 0 ?  (
            <>
            <OrderContent
            order={order}
            deleteItem={deleteItem}
          />

          <Propina
            setTip={setTip}
            tip={tip}
          />
          <OrderTotals
            order={order}
            tip={tip}
            placeOrder={placeOrder}
          />
            
            </>
          ) : (
            <p className="text-center"> la orden esta vacia</p>
          )}
          

        </div>
      </main>


    </>
  )
}

export default App
