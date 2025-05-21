import './App.css'
import InputBox from './components/InputBox';
import { useState } from 'react';
import UseCurrencyInfo from './hooks/UseCurrencyInfo';

function App() {

  const [fromCurrency, setFromCurrency] = useState('usd') // For converting from
  const [toCurrency, setToCurrency] = useState('inr') // For converting to
  const [amount, setAmount] = useState(0) // Amount to be converted
  const [convertedAmount, setConvertedAmount] = useState(0) // Converted amount


  const currencyInfo = UseCurrencyInfo(fromCurrency)
  const currencyOptions = Object.keys(currencyInfo) // This will get the list of currencies from the API


  // Let us now do the setup for the currency options and the conversions.
  // 1. Converting from A to B:-
  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[toCurrency]) // This will convert the amount from A to B
  }  

  // 2. The swap button will swap the currencies and the amounts.


  const swapVals = () => {
  setFromCurrency(toCurrency);
  setToCurrency(fromCurrency);
  setAmount(convertedAmount);
  setConvertedAmount(amount);
};


  
  return (
      <div className='w-full h-screen flex flex-wrap flex-col justify-center items-center bg-cover bg-no-repeat' 
      style={{
         backgroundImage: "url('https://images.pexels.com/photos/259191/pexels-photo-259191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
          }}>
            <div className='w-full'>
              <div className='w-full max-w-md mx-auto border border-gray-80 rounder-lg p-5 backdrop-blur-sm bg-white/30'>
                 <form onSubmit={(e)=>{
                  e.preventDefault()
                  convert()
                 }}>
                  <div className='w-full mb-1 '>
                    <InputBox
                      label='from'
                      amount={Number(amount.toFixed(2))} // Since in the Input box that we've designed, the value of the input field is set to amount, a prop which we're passing on here.
                      currencyOptions={currencyOptions}
                      onCurrencyChange={(currency)=>{setFromCurrency(currency)}}
                      onAmountChange={(amount)=>setAmount(amount)}
                      selectedCurrency={fromCurrency}
                      amountDisabled={false}
                      currencyDisabled={false} 
                    />
                  </div>

                  <div className='relative w-full h-0.7'>
                    <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-500 px-2 py-0.5 cursor-pointer '
                    onClick={(e)=>{
                      e.preventDefault(); // To ensure the form doesn't get submitted when we click on the swap button.
                      swapVals(); }
                    }
                    >Swap</button>
                  </div>

                  <div className='w-full mb-1 '>
                    <InputBox
                      label='to'
                      amount={Number(convertedAmount.toFixed(2))} // Since in the Input box that we've designed, the value of the input field is set to amount, a prop which we're passing on here.
                      currencyOptions={currencyOptions}
                      onCurrencyChange={(currency)=>{setToCurrency(currency)}}
                      onAmountChange={(convertedAmount)=>setConvertedAmount(convertedAmount)}
                      selectedCurrency={toCurrency}
                      amountDisabled={true} 
                      currencyDisabled={false}
                    />
                  </div>

                  <button className='w-full bg-blue-500 text-white rounded-md py-2 mt-2 cursor-pointer hover:bg-blue-600 transition-all duration-200 ease-in-out' onSubmit={convert}>
                    Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}</button>
                 </form>
              </div>
            </div>
      </div>
  )
}

export default App
