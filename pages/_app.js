import { useState } from 'react'
import { MyContext } from '../container/context';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const initialIg = {
    mushroom: 0,
    salad: 0,
    cheese: 0,
    meat: 0,
    mayonnaise: 0,
    bacon: 0,
    egg: 0,
  }
  const priceIg = {
    mushroom: 10,
    salad: 5,
    meat: 20,
    cheese: 12,
    bacon: 15,
    mayonnaise: 10,
    egg: 20,
  };
  const [indg, setindg] = useState(initialIg)
  const [totalprice, settotalprice] = useState(20)
  const [address, setaddress] = useState(null)
  const [phonenumber, setphonenumber] = useState(null)
  const val = {
    ingred: indg,
    totalPrice: totalprice,
    increment: (elem) => {
      const init = { ...indg }
      const count = init[elem] + 1;
      init[elem] = count;
      setindg(init)
      totalprice += priceIg[elem]
      settotalprice(totalprice)
    },
    decrement: (elem) => {
      const init = { ...indg }
      if (init[elem] == 0) return;
      const count = init[elem] - 1;
      if (count < 0) count = 0;
      init[elem] = count;
      setindg(init)
      totalprice -= priceIg[elem]
      if (totalprice < 0)
        totalprice = 0
      settotalprice(totalprice)
    },
    reset: () => {
      setindg(initialIg)
    },
  }

  return <MyContext.Provider value={val}>
    <Component {...pageProps} priceIg={priceIg} ingred={indg} />
  </MyContext.Provider >
}

export default MyApp
