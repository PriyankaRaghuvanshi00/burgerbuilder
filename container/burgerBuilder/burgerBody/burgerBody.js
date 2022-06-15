import React, { useState, useEffect } from 'react'
import styles from "../../../styles/BurgerBody.module.css"
// import Bu/rgerIndgredient from '../burgerBody/burgerIngd/burgerIngd';
import styles2 from "../../../styles/burgerIngred.module.css"

export default function BurgerBody({ ingred }) {
   const [Element, setElement] = useState([])
   const elementClass = {
      mushroom: styles2.mushroom,
      salad: styles2.salad,
      bacon: styles2.bacon,
      meat: styles2.meat,
      cheese: styles2.cheese,
      mayonnaise: styles2.mayo,
      egg: styles2.egg,
   }
   useEffect(() => {
      const elements = [];
      for (const key in ingred) {
         if (Object.hasOwnProperty.call(ingred, key)) {
            const element = ingred[key];
            if (element > 0)
               for (let i = 0; i < element; i++)
                  elements.push(key)
         }
      }
      setElement(elements)
   }, [ingred])

   return (
      <div className={styles.container} id="container">
         <div className={styles2.bread_top}>
            < div className={styles2.Seeds1} ></div >
            <div className={styles2.Seeds2}></div>
         </div >{
            Element.map((elem, i) => {
               return <div key={i} className={elementClass[elem] + ' ' + styles2.default}></div>
            })
         }
         <div className={styles2.bread_bottom}></div>
      </div >
   )
}
