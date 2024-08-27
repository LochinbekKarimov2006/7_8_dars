import React from 'react'

function Inputlar() {
  return (
    <div className='max-w-[1122px] mx-auto bg-[#f7f7f7] rounded-[10px] drop-shadow-md'>
        <div className='flex justify-between'>
            <button className='btn w-[25%]'></button>
            <button className='btn  w-[25%] '></button>
            <button className='btn  w-[25%]'> </button>
            <button className='btn  w-[25%]'></button>
        </div>
        <div className=' p-[48px]'>

        <div className='flex justify-between'>
            <div className='flex flex-col w-[31%]'>
                <label className='text-[16px] font-[600] text-[#141e37] mb-[5px]' htmlFor="">Amount</label>
                <input className='border-[1px] rounded-[7px] pl-[10px] border-[#aba8a8] h-[52px] w-[100%px]' type="text" />
            </div>
            <div className='flex flex-col w-[31%]'>
                <label className='text-[16px] font-[600] text-[#141e37] mb-[5px]' htmlFor="">From</label>
                <input className='border-[1px] rounded-[7px] pl-[10px] border-[#aba8a8] h-[52px] w-[100%]' type="text" />
            </div> 
            <div className='flex flex-col w-[31%]'>
                <label className='text-[16px] font-[600] text-[#141e37] mb-[5px]' htmlFor="">To</label>
                <div>
                <input className='border-[1px] rounded-[7px] pl-[10px] border-[#aba8a8] h-[52px] w-[100%]' type="text" />

                </div>
            </div>
        </div>
        <div className='mt-[40px]'>
            <p className='text-[16px] text-[#5c667b] font-[700]'>4.55 Canadian Dollars =</p>
            <h2  className='text-[30px] my-[4px] font-[600]'>59,163.019 Turkmenistani Manats</h2>
            <p  className='text-[14px] text-[#5c667b] font-[400]'>1 CAD = 13,015.9 TMM</p>
            <p  className='text-[14px] text-[#5c667b] font-[400]'>1 TMM = 0.0000768293 CAD</p>
        </div>
        </div>
    </div>
  )
}

export default Inputlar