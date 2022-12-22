const displayBalance = (amount: number) => {
  return Math.floor(amount*1000)/1000
}

const displayAddress = (address: string) => {
  return `${address.substring(0, 5)}...${address.substring(address.length - 5)}`
}

export {
  displayBalance,
  displayAddress
};