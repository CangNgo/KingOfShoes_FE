import React from "react";
import Image from "./Image";
import useFormatCurrency from "../../hooks/useFormatCurrency";
interface ProdcutPtops {
  id: string;
  title: string;
  description?: string;
  image: string;
  classes?: string;
  classesImg?: string;
  classesTitle?: string;
  classesDescription?: string;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  price?: number
  onclick: (id: string) => void;
}
function ShoesItem({
  id,
  title,
  description,
  image,
  small,
  medium,
  large,
  classes = "text-md ",
  classesImg,
  classesTitle = " text-md w-full text-center",
  classesDescription = "  text-md w-full text-center",
  price = 0, 
  onclick
}: ProdcutPtops) {
  //điều chỉnh props
const priceItem = useFormatCurrency(price)
  //size small
  if (small) {
    classes += " w-16 text-small mr-4";
    classesImg += " w-3/5 rounded-2xl pt-2";
    classesTitle += " text-lg whitespace-normal break-words line-clamp-1";
    classesDescription += " text-sm whitespace-normal break-words line-clamp-2";
  }

  //size medium
  if (medium) {
    classes += " w-32 text-small mr-4";
    classesImg += " w-4/5 rounded-2xl pt-2";
    classesTitle += " text-lg whitespace-normal break-words line-clamp-1";
    classesDescription += " text-sm whitespace-normal break-words line-clamp-2";
  }

  if (large) {
    classes += " w-44 text-small mr-4";
    classesImg += " w-full rounded-2xl pt-2";
    classesTitle += " text-base whitespace-normal break-words line-clamp-1";
    classesDescription += " text-sm whitespace-normal break-words line-clamp-2";
  }

  return (
    <div className={classes + " w-full flex flex-col items-center cursor-pointer "} onClick={() => {onclick(id)}}>
      <Image src={image} className={classesImg} />
      <div className={classesTitle}>{title}</div>
      <div className={classesDescription}>{description}</div>
      {large && (<div className="text-red-400 font-bold">{priceItem}</div>)}
    </div>
  );
}

export default ShoesItem;
