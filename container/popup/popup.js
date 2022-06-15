import React, { useEffect, useState } from 'react'
import styles from "../../styles/PopUp.module.css"
import { useRouter } from 'next/router'
import { MyContext } from '../context'
export default function PopUp({ ingred, setorder }) {
   const [Ingred, setIngred] = useState([])
   const router = useRouter();
   const priceIg = {
      mushroom: 10,
      salad: 5,
      meat: 20,
      cheese: 12,
      bacon: 15,
      mayonnaise: 10,
      egg: 20,
   };
   useEffect(() => {
      let elem = [];
      for (const i in ingred) {
         const element = ingred[i];
         const temp = {};
         if (element > 0) {
            temp['name'] = i;
            temp['quanty'] = element
            elem.push(temp)
         }
      }
      setIngred(elem);
      console.log(Ingred);
   }, [Ingred.length])

   return (
      <MyContext.Consumer>
         {(ctx) => <div className={styles.backcontainer}>
            <div className={styles.container}>
               <p className={styles.p2}>Thanks! </p>
               <p className={styles.p2}>your burger have </p>
               <div className={styles.ingredDiv}>
                  <div className={styles.ingred}><p className={styles.p}>🍞  bread</p><p className={styles.p}>x 1</p> <p className={styles.p}> &#x20b9; 20</p></div>
                  {Ingred.map((el, i) => <div key={i} className={styles.ingred}><p className={styles.p}>◀  {el.name}</p><p className={styles.p}>x {el.quanty}</p> <p className={styles.p}> &#x20b9; {priceIg[el.name]}</p></div>)}
                  <div className={styles.ingred}><p className={styles.p + ' ' + styles.x}>Total Price: </p> <p className={styles.p + ' ' + styles.x}> &#x20b9; {ctx.totalPrice}</p></div>
               </div>
               <div className={styles.buttons}>
                  <div className={styles.confirm} onClick={() => { router.push('/order') }}>Confirm</div>
                  <div className={styles.confirm} onClick={() => { setorder(false) }}>Cancel</div>
               </div>
            </div>
         </div >
         }
      </MyContext.Consumer>
   )
}
