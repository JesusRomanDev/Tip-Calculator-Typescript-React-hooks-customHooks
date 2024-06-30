const tipOptions = [
    {id: 'tip-10', value: .10, label: '10%'},
    {id: 'tip-20', value: .20, label: '20%'},
    {id: 'tip-50', value: .50, label: '50%'},
]

type TipPercentageFormProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>
    tip: number
}
const TipPercentageForm = ({setTip, tip} : TipPercentageFormProps) => {
  return (
    <div>
        <h3 className="font-black text-2xl">Propina:</h3>
        <form>
            {tipOptions.map((el) => (
                <div key={el.id} className="flex gap-2">
                    <label htmlFor={el.id}>{el.label}</label>
                    <input type="radio" id={el.id} name="tip" checked={el.value === tip} value={el.value} onChange={e => setTip(parseFloat(e.target.value))} />
                </div>
            ))}
        </form>
    </div>
  )
}

export default TipPercentageForm