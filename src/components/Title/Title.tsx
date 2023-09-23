

import React, { useContext } from "react";
import { CardContext } from "../Card/Card";


interface TitleProps{
    title?: string;
    style?: {};
    className?: string;
}

export const Title:React.FC<TitleProps> = ({ title, style, className = '' }) => {

    const { product } = useContext(CardContext);

    let productTitle;
    if(title){
        productTitle = title;
    }else if(product?.name){
        productTitle = product.name;
    }else{
        productTitle = '';
    }

  return (
    <>
        <h3 style={style} className={`title ${className}`} >{ productTitle }</h3>
    </>
  )
}

