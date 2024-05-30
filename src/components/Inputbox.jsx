import React from 'react'
import {useId} from 'react';
/*Use id is a hook that is used to create unique id everytime the jsx file is called. Helps in code distinction and maintainibility*/

function InputBox({
    /*arguments required for this InputBox function*/
    label,
    amount,
    onamountchange,
    oncurrencychange,
    currencyoptions=[],
    selectcurrency="usd",
    amountdisable=false,
    currencydisable=false,
    className = "",
}) {
   const currencyid=useId();
    /*The css syntax given below is a bit different as compared to other css we are taking css as input from the user thus we need to define it in form of js*/
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={currencyid} className="text-black mr-80">
                    {label}
                </label>
                <input                    
                    className="outline-none w-full bg-transparent py-1.5 text-left"
                    type="number"
                    placeholder="Amount"
                    disabled={amountdisable}
                    value={amount}
                    //check to run onamountchange function if it is actually available
                    onChange={(e)=>onamountchange && onamountchange(Number(e.target.value))}
                    //takes input as string so we have to convert it into number
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectcurrency}
                    onChange={(e)=>oncurrencychange && oncurrencychange(e.target.value)}
                    disabled={currencydisable}                   
                >
                    {currencyoptions.map(currency=>(
                        /*For performance related issues in react we need to provide the key for a loop inside the react while using maps for looping*/
                        <option value={currency} key={currency}>
                            {currency}
                        </option>
                    ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;