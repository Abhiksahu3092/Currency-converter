import { useState } from 'react'
import  InputBox  from './components/Inputbox'
import Usecurrencyinfo  from './Currencyinfo/Usecurrencyinfo'
import './App.css'

function App() {
  const [initialamount, setinitialamount] = useState();
  const [from, setfrom] = useState('inr');

  const [finalamount, setfinalamount] = useState();
  const [to, setto] = useState('usd');

  const curr_info = Usecurrencyinfo(from);
  const currencyoptions = Object.keys(curr_info)

  const swap = () => {
    setfrom(to);
    setto(from);
    setfinalamount(initialamount);
    setinitialamount(finalamount);
  }

  const convert = () => {
    setfinalamount(initialamount * curr_info[to])
  }

  /*We would study about custom hooks in this project and learn to use it efficiently*/
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center"
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label={'From'}
                amount={initialamount}
                currencyoptions={currencyoptions}
                oncurrencychange={(currency)=>setfrom(currency)}
                selectcurrency={from}
                onamountchange={(initialamount)=>setinitialamount(initialamount)}
              />
            </div>


            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>


            <div className="w-full mt-1 mb-4">
              <InputBox
                label='To'
                amount={finalamount}
                currencyoptions={currencyoptions}
                oncurrencychange={(currency)=>setto(currency)}
                selectcurrency={to}
                amountdisable={true}
              />
            </div>


            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>


          </form>
        </div>
      </div>
    </div>
  )
}

export default App
