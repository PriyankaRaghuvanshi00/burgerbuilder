import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import BurgerBuilder from '../container/burgerBuilder/burgerBuilder'
import Menu from '../container/menu/menu'
import styles from '../styles/Home.module.css'
import { MyContext } from '../container/context'
import PopUp from '../container/popup/popup'

export default function Home({ priceIg }) {
  const [order, setorder] = useState(false)
  return (
    <MyContext.Consumer>{
      (ctx) => <div className={styles.container}>
        <BurgerBuilder setorder={setorder}></BurgerBuilder>
        {order ? <PopUp ingred={ctx.ingred} setorder={setorder}></PopUp> : null}
        <Menu priceIg={priceIg} ></Menu>
      </div>}
    </MyContext.Consumer>
  )

}
