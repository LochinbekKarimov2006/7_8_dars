import React, { useEffect, useState } from "react";
import datas from "../json/data.json";

function Inputlar() {
  const [data, setData] = useState(datas);
  const [showDropdownFrom, setShowDropdownFrom] = useState(false);
  const [selectedCurrencyFrom, setSelectedCurrencyFrom] = useState(null);
  const [searchTermFrom, setSearchTermFrom] = useState("");
  const [qiymat,setQiymat]=useState(0)
  const [showDropdownTo, setShowDropdownTo] = useState(false);
  const [selectedCurrencyTo, setSelectedCurrencyTo] = useState(null);
  const [searchTermTo, setSearchTermTo] = useState("");
  const [narhi,setNarhi]=useState("narh")
  const [qiymatLar,setQiymatLar]=useState()
  

  function filter(name) {
    const filteredData = datas.filter(e =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );
    setData(filteredData);
  }

  const handleSearchChangeFrom = (event) => {
    const value = event.target.value;
    setSearchTermFrom(value);
    filter(value); 
  };

  const handleSearchChangeTo = (event) => {
    const value = event.target.value;
    setSearchTermTo(value);
    filter(value); 
  };

  const handleCurrencySelectFrom = (currency) => {
    setSelectedCurrencyFrom(currency);
    setShowDropdownFrom(false);
    setSearchTermFrom("")
    filter("")
  };

  const handleCurrencySelectTo = (currency) => {
    setSelectedCurrencyTo(currency);
    setShowDropdownTo(false);
  };

function tayor(e){
  setNarhi(qiymatLar)
console.log(narhi);
}
  const currencies = data.flatMap(e => {
    if (e.currencies) {
      return Object.entries(e.currencies).map(([code, info]) => ({
        name: info.name,
        code,
        flag: e.flag,
        country: e.name,
        rateToUSD: info.rateToUSD, 
        symbol: info.symbol,      
      }));
    }
    return [];
  });
  return (
    <div className="w-[100%] bg-slate-400 h-[100vh] flex flex-col justify-center">
    <div className="w-[1122px] mx-auto bg-[#f7f7f7] rounded-[10px] drop-shadow-md">
      <div className="flex justify-between p-4">
        <button className="btn w-[25%]">Button 1</button>
        <button className="btn w-[25%]">Button 2</button>
        <button className="btn w-[25%]">Button 3</button>
        <button className="btn w-[25%]">Button 4</button>
      </div>
      <div className="p-[48px]">
        <div className="flex justify-between">
          <div className="flex flex-col w-[32%]">
            <label className="text-[16px] font-[600] text-[#141e37] mb-[5px]">
              Amount
            </label>
            <input value={qiymat} onChange={(e)=>{setQiymat(e.target.value)}} className="border-[1px] text-[18px] font-[600] rounded-[7px] pl-[10px] border-[#aba8a8] h-[52px] w-[100%]" type="text" />
          </div>
          <div className="flex flex-col w-[32%]">
            <label className="text-[16px] font-[600] text-[#141e37] mb-[5px]">
              From
            </label>
            <div className="border-[1px] div-2 rounded-[7px] pl-[10px] border-[#aba8a8] h-[52px] w-[100%] relative">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowDropdownFrom(!showDropdownFrom)}>
                <div className="flex w-[100%] h-[52px] z-50">
                  {selectedCurrencyFrom && !showDropdownFrom && (
                    <div className="flex items-center">
                      <img className="w-[40px] mr-2" src={selectedCurrencyFrom.flag} alt="" />
                      <h1 className="font-[600] text-[16px] w-[100%] flex">
                        {selectedCurrencyFrom.code} - {selectedCurrencyFrom.name}
                      </h1>
                    </div>
                  )}
                  {!selectedCurrencyFrom && !showDropdownFrom&&<h1 className="font-[600] text-[16px] mt-3">Select a currency</h1>}
                </div>
              </div>
              {showDropdownFrom && (
                <div>
                  <div className="z-50 mt-[-54px]">
                    <input 
                      className="w-[90%] h-[52px] outline-none bg-[#0000] text-[16px] font-[600] pl-2"
                      type="text"
                      placeholder="Search..."
                      value={searchTermFrom}
                      onChange={handleSearchChangeFrom}
                    />
                  </div>
                  <div className="absolute top-full left-0 right-0 z-50 bg-white border border-[#aba8a8] rounded-[7px] max-h-[350px] overflow-auto mt-3">
                    {currencies.map((currency, id) => (
                      <div
                        key={id}
                        className="flex items-center p-2 cursor-pointer hover:bg-[#f0f0f0]"
                        onClick={() => {handleCurrencySelectFrom(currency),setQiymatLar(currency)}}
                      >
                        <img className="w-6 mr-2" src={currency.flag} alt={`${currency.country} flag`} />
                        <p className="text-[16px] font-[600]">{currency.code} - {currency.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col w-[32%]">
            <label className="text-[16px] font-[600] text-[#141e37] mb-[5px]">
              To
            </label>
            <div className="border-[1px] z-20 rounded-[7px] pl-[10px] border-[#aba8a8] h-[52px] w-[100%] relative">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowDropdownTo(!showDropdownTo)}>
               {!showDropdownTo&& <div className="flex w-[100%] h-[52px]">
                  
                    <div className="flex items-center">
                      <img className="w-[40px] mr-2" src="https://flagcdn.com/w320/us.png" alt="" />
                      <h1 className="font-[600] text-[16px] w-[100%] flex">
                        USD-United States Dollar
                      </h1>
                    </div>
                </div>}
              </div>
              {showDropdownTo && (
                <div>
                  <div className="z-50">
                    <input 
                      className="w-[90%] h-[52px] outline-none bg-[#0000] text-[16px] font-[600] pl-2"
                      type="text"
                      placeholder="Search..."
                      value={searchTermTo}
                      onChange={handleSearchChangeTo}
                    />
                  </div>
                  <div className=" absolute top-full left-0 right-0 bg-white border border-[#aba8a8] rounded-[7px] max-h-[350px] overflow-auto mt-3">
                    {currencies.map((currency, id) => (
                      <div
                        key={id}
                        className="flex items-center p-2 cursor-pointer hover:bg-[#f0f0f0]"
                        onClick={() => handleCurrencySelectTo(currency)}
                        >
                        <img className="w-6 mr-2" src={currency.flag} alt={`${currency.country} flag`} />
                        <p className="text-[16px] font-[600]">{currency.code} - {currency.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-end">

        <div className="mt-[40px]">
          <p className="text-[16px] text-[#5c667b] font-[700]">4.55 Canadian Dollars =</p>
          <h2 className="text-[30px] my-[4px] font-[600]">{narhi?narhi.rateToUSD*qiymat:"00.000"} {narhi.name}</h2>
          <p className="text-[14px] text-[#5c667b] font-[400]">1 CAD = 13,015.9 TMM</p>
          <p className="text-[14px] text-[#5c667b] font-[400]">1 TMM = 0.0000768293 CAD</p>
        </div>
        <div>
          <button onClick={(e)=>{tayor()}} className="btn bg-[#10f] text-white">button 2</button>
        </div>
        </div>
      </div>
    </div>
      {showDropdownTo&&<div onClick={()=>{setShowDropdownTo(false)}} className="div-1">salom</div>}
    </div>
  );
}

export default Inputlar;
