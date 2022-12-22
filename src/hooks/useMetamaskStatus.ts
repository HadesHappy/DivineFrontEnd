import { useState, useEffect } from 'react'

export const useMetamaskStatus = () => {
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState<boolean>(false);
  
  useEffect(() => {
    if ((window as any).ethereum) {
      // check if Metamask wallet is installed
      setIsMetamaskInstalled(true);
    }
  }, []);

  return { isMetamaskInstalled };
}