import React, { useState } from "react";
import data from "../json/data.json"; // JSON faylingizdan ma'lumotlar import qilinmoqda

function Inputlar() {
  const [showDropdown, setShowDropdown] = useState(true);
  const [selectedCurrency, setSelectedCurrency] = useState(data[0]);
  const [malumod, setMalumod] = useState(null);
console.log(selectedCurrency)
  // countries ni data.json dan olinadi
  const currencies = data.flatMap(e => {
    if (e.currencies) {
      return Object.entries(e.currencies).map(([code, info]) => ({
        name: info.name,
        code,
        flag: e.flag,
        country: e.name,
      }));
    }
    return []; // Agar currencies mavjud bo'lmasa, bo'sh massiv qaytarish
  });

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    setMalumod(currency); // Tanlangan valyuta ma'lumotini saqlash
    setShowDropdown(true);
  };

  return (
    <div className="max-w-[1122px] mx-auto bg-[#f7f7f7] rounded-[10px] drop-shadow-md">
      <div className="flex justify-between p-4">
        <button className="btn w-[25%]">Button 1</button>
        <button className="btn w-[25%]">Button 2</button>
        <button className="btn w-[25%]">Button 3</button>
        <button className="btn w-[25%]">Button 4</button>
      </div>
      <div className="p-[48px]">
        <div className="flex justify-between">
          <div className="flex flex-col w-[32%]">
            <label className="text-[16px] font-[600] text-[#141e37] mb-[5px]" htmlFor="">
              Amount
            </label>
            <input className="border-[1px] rounded-[7px] pl-[10px] border-[#aba8a8] h-[52px] w-[100%]" type="text" />
          </div>
          <div className="flex flex-col w-[32%]">
            <label className="text-[16px] font-[600] text-[#141e37] mb-[5px]" htmlFor="">
              From
            </label>
            <div className="border-[1px] rounded-[7px] pl-[10px] border-[#aba8a8] h-[52px] w-[100%] relative">
              {/* <div className="flex items-center justify-between cursor-pointer">
                <button className="w-[10%] flex items-center justify-center">
                  <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                  </svg>
                </button>
              </div> */}
              {showDropdown && (
                <div>
                  <div className="flex items-center w-[200px] h-[52px]">
                    <img className="w-[40px] mr-2" src={selectedCurrency.flag} alt="" />
                    <h1 className="font-[600] text-[16px]"> {selectedCurrency.code} - {selectedCurrency.name}</h1>
                  </div>
                <div className="absolute top-full left-0 right-0 bg-white border border-[#aba8a8] rounded-[7px] max-h-[200px] overflow-auto">
                  {currencies.map((currency,id) => (
                    <div 
                      key={id} 
                      className="flex items-center p-2 cursor-pointer hover:bg-[#f0f0f0]"
                      onClick={() => handleCurrencySelect(currency)}
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
            <label className="text-[16px] font-[600] text-[#141e37] mb-[5px]" htmlFor="">
              To
            </label>
            <div className="border-[1px] rounded-[7px] pl-[10px] border-[#aba8a8] h-[52px] w-[100%]">
              {/* Similar logic as 'From' dropdown can be applied here */}
            </div>
          </div>
        </div>
        <div className="mt-[40px]">
          <p className="text-[16px] text-[#5c667b] font-[700]">4.55 Canadian Dollars =</p>
          <h2 className="text-[30px] my-[4px] font-[600]">59,163.019 Turkmenistani Manats</h2>
          <p className="text-[14px] text-[#5c667b] font-[400]">1 CAD = 13,015.9 TMM</p>
          <p className="text-[14px] text-[#5c667b] font-[400]">1 TMM = 0.0000768293 CAD</p>
        </div>
      </div>
    </div>
  );
}

export default Inputlar;
