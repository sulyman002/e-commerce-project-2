import React from 'react'

const SellProductBtn = ({ children, className = "", ...props }) => {
 
  return (
    <button {...props} className={`${className} bg-[#D87D4A] text-sm tracking-[1px] cursor-pointer font-bold mt-3 text-white px-6 py-3 uppercase hover:bg-[#FBAF85] `}>
        {children}
    </button>
  )
}

export default SellProductBtn