import React from "react";
import { useEffect,useState, useId} from "react";


function Usecurrencyinfo(currency) {
    /*api url-> https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json*/
    const [data , setdata]=useState({})
    useEffect(()=>{
        /*bydefault the fetch operation fetches data from api in terms of string so we have to convert it into json file*/
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((response)=>response.json())
        .then((response)=>setdata(response[currency]))
        console.log(data)
    },[currency])


    return data
    /*this return an object which contains the conversion rates of every currency corresponding to the given currency*/
}

export default Usecurrencyinfo