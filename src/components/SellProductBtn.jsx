import React from 'react'

const SellProductBtn = ({ children, className = "", ...props }) => {
 
  return (
    // mt-3 was added to the button in case of any spacing issues
    // between the button and other elements
    <button {...props} className={`${className} bg-[#D87D4A] mt-3 text-sm tracking-[1px] cursor-pointer font-bold  text-white px-6 py-3 uppercase hover:bg-[#FBAF85] `}>
        {children}
    </button>
  )
}

export default SellProductBtn