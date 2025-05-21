import './App.css'
import InputBox from './components/InputBox';
import { useState } from 'react';
import UseCurrencyInfo from './hooks/UseCurrencyInfo';

function App() {

  const [fromCurrency, setFromCurrency] = useState('usd') // For converting from
  const [toCurrency, setToCurrency] = useState('inr') // For converting to
  const [amount, setAmount] = useState(0) // Amount to be converted
  const [convertedAmount, setConvertedAmount] = useState(0) // Converted amount
  const [currencyOptions,setCurrencyOptions] = useState([]) // Currency options for the dropdown
  const [label, setLabel] = useState('') // Label for the input box


  UseCurrencyInfo(fromCurrency)
  return (
      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' 
      style={{ backgroundImage: "url('https://images.pexels.com/photos/259191/pexels-photo-259191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
         <InputBox/> 
         <button className='bg-black text-white py-2 px-4 cursor-pointer'>Just Tap Me</button>
      </div>
  )
}

export default App
