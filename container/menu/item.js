import React, { useState, useEffect } from 'react'
import styles from '../../styles/Menu.module.css'
import Image from "next/image"

export default function Item({ ingred, increment, decrement, quantity, price, elem }) {
   const [image, setimage] = useState('salad.png')
   useEffect(() => {
      switch (elem) {
         case 'salad':
            setimage('salad.png')
            break;
         case 'meat':
            setimage('meat.png')
            break;
         case 'cheese':
            setimage('cheese.png')

            break;
         case 'bacon':
            setimage('bacon.png')

            break;
         case 'mayonnaise':
            setimage('mayonnaise.png')

            break;
         case 'egg':
            setimage('fried-egg.png')

            break;
         case 'mushroom':
            setimage('mushroom.png')
            break;
         default:
            break;
      }
   }, [])



   return (
      <div className={styles.itemDiv}>
         <div className={styles.price} >  &#x20b9; {price}</div>
         <div className={styles.price} > x  {ingred[elem]}</div>
         <div className={styles.item}>
            <div className={styles.inc} onClick={() => increment(elem)}>+</div>
            <Image
               className={styles.item_image}
               src={`/${image}`}
               width='40px'
               height='40px'
               alt={elem}
            ></Image>
            <div className={styles.dec} onClick={() => decrement(elem)}>-</div>
         </div>
      </div >
   )
}
