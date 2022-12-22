import { useState, useEffect } from 'react'
import { useAccountContext } from '../contexts/accountContext'
import { getCodeFromAddr } from '../contract/roi.contract'

const useCode = () => {
  const [code, setCode] = useState<number>(0);
  const { account } = useAccountContext()

  const getCode = async () => {
    const referCode = await getCodeFromAddr(account || '');
    setCode(referCode || 0)
  }

  useEffect(()=> {
    getCode()
  })

  return { code }
}

export default useCode