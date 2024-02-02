import React from 'react';

function NavBar() {
  return (
    <div className='bg-gray-900 p-1 text-center flex items-center'>
        <h1 className='mx-10 uppercase justify-start'>newApp</h1>
        <div className='bg-slate-700 h-px mt-2 mb-2'></div>
        <ul className='flex flex-row justify-end items-center w-[200rem]'>
            <li className='capitalize border p-[2px] px-[20px] rounded-[5px] border-slate-700'>home</li>
            <li className='capitalize mx-5 border p-[2px] px-[20px] rounded-[5px] border-slate-700'>about</li>
            <li className='capitalize   border p-[2px] px-[20px] rounded-[5px] border-slate-700 mr-[50px]'>Builders</li>
        </ul>
    </div>
  )
}
export default NavBar