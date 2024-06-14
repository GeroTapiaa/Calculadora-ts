import { Dispatch, SetStateAction } from "react"


const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]
  type PropinaProps = {
    setTip: Dispatch<SetStateAction<number>>
    tip:number
  }
export const Propina = ({setTip, tip} :  PropinaProps) => {
  return (
    <div>
        <h3 className="font-black text-3xl">Propina:</h3>

        <form>
            {tipOptions.map(tipOptions => (
                <div key={tipOptions.id} className=" gap-2 flex  ">
                        <label htmlFor={tipOptions.id}>{tipOptions.label}</label>
                        <input type="" 
                            id={tipOptions.id}
                            type="radio"
                            name="tip"
                            value={tipOptions.value}
                            onChange={e => setTip(+e.target.value)}
                            checked={tipOptions.value === tip}
                        />
                </div>
            ))}
            
            
        </form>
    </div>
  )
}
