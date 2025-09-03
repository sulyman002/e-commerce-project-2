import React, { Children } from "react";

const CategoriesHeader = ({className="", children, ...props}) => {
  return <div {...props} className={` ${className} bg-black text-white text-center py-12 uppercase tracking-[2px] font-bold text-[28px]`}>
    {children}
  </div>;
};

export default CategoriesHeader;
