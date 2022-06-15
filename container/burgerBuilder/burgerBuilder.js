import React from 'react'
import styles from '../../styles/BurgerBuilder.module.css'
import { MyContext } from '../context'
import BurgerBody from './burgerBody/burgerBody'

export default function BurgerBuilder({ setorder }) {
   return (
      <MyContext.Consumer>
         {(ctx) => <div className={styles.container}>
            <div className={styles.bbody}>
               <BurgerBody ingred={ctx.ingred}></BurgerBody>
            </div>
            <div className={styles.buttons}>
               <div className={styles.order} onClick={() => { setorder(true) }}>Order</div>
               <div className={styles.order} onClick={() => ctx.reset()}>Reset</div>
            </div>
         </div>
         }
      </MyContext.Consumer>
   )
}
