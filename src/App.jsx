import './App.css'
import InputBox from './components/InputBox';
import { useState } from 'react';
import UseCurrencyInfo from './hooks/UseCurrencyInfo';

function App() {

  const [fromCurrency, setFromCurrency] = useState('usd') // For converting from
  const [toCurrency, setToCurrency] = useState('inr') // For converting to
  const [amount, setAmount] = useState(0) // Amount to be converted
  const [convertedAmount, setConvertedAmount] = useState(0) // Converted amount
  const [label, setLabel] = useState('') // Label for the input box


  const currencyInfo = UseCurrencyInfo(fromCurrency)
  const currencyOptions = Object.keys(currencyInfo) // This will get the list of currencies from the API


  // Let us now do the setup for the currency options and the conversions.
  // 1. Converting from A to B:-
  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[toCurrency]) // This will convert the amount from A to B
  }  

  // 2. The swap button will swap the currencies and the amounts.
  const swapVals = ()=>{
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
    // Converts the currency and the amount perfectly.
  }

  
  return (
      <div className='w-full h-screen flex flex-wrap flex-col justify-center items-center bg-cover bg-no-repeat' 
      style={{ backgroundImage: "url('https://images.pexels.com/photos/259191/pexels-photo-259191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
         <InputBox/> 
          <button className='m-2 p-3 bg-blue-500'>Swap</button>
         <InputBox/>
      </div>
  )
}

export default App
