import React, { useState, useEffect } from 'react'
import styles from '../../styles/Menu.module.css'
import Item from './item'
import { MyContext } from '../context'


export default function Menu({ priceIg }) {
   const elements = ['salad', 'meat', 'cheese', 'bacon', 'mayonnaise', 'egg', 'mushroom']
   return (
      <MyContext.Consumer>
         {(ctx) => <div className={styles.container}>
            <div className={styles.title}>select ingredients</div>
            <div className={styles.menu}>
               {
                  elements.map((el, i) => <Item ingred={ctx.ingred} increment={ctx.increment} decrement={ctx.decrement} price={priceIg[el]} elem={el} key={i} ></Item>)
               }
            </div>
            <div className={styles.totalprice}>TotalPrice:  &#x20b9; {ctx.totalPrice}</div>
         </div>}
      </MyContext.Consumer >
   )
}
