import { useState, useEffect } from 'react';
import { getMaticPrice } from "../contract/roi.contract";

const useMaticPrice = () => {
  const [price, setPrice] = useState<number | null>(null);

  const getPrice = async () => {
    const price = await getMaticPrice();
    if (price)
      setPrice(price);
  }

  useEffect(() => {
    getPrice()
  })

  return { price }
}

export default useMaticPrice;