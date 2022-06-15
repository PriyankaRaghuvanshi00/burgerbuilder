import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import styles from "../styles/details.module.css"
export default function Details() {
   const router = useRouter();
   const [goodbyewid, setgoodbyewid] = useState(false)
   const [userdata, setuserdata] = useState([])
   const elements = ['salad', 'meat', 'cheese', 'bacon', 'mayonnaise', 'egg', 'mushroom']
   useEffect(() => {
      if (!localStorage.getItem('address') || !localStorage.getItem('number'))
         router.push('/')
      fetch('http://localhost:1337/api/orders')
         .then(response => response.json())
         .then(data => {
            const elem = data.data;
            let temp = []
            elem.forEach(user => {
               console.log(user);
               const address = localStorage.getItem('address'), phone = localStorage.getItem('number')
               const add = user.attributes.Address, phn = user.attributes.PhoneNumber;
               if (address == add && phone == phn) {
                  temp.push({ ingredients: user.attributes.ingredients, totalPrice: user.attributes.totalPrice, date: new Date(Date.parse(user.attributes.publishedAt)).toUTCString().split('G')[0] });
               }
            });
            setuserdata(temp);
         });
   }, [userdata.length, goodbyewid])
   return (
      <div className={styles.container}>
         <h1 className={styles.h1}>Previous orders</h1>
         <div className={styles.orders}>
            {
               userdata.map((el, i) => <div key={i} className={styles.oldorder}>
                  <div className={styles.ingred}>
                     <p className={styles.p}>bread x 1</p>
                     {elements.map((j, k) => el.ingredients[j] > 0 ? <p key={k} className={styles.p}>{j + ' x ' + el.ingredients[j]}</p> : null)}
                  </div>
                  <div className={styles.totalprice}>&#x20b9; {el.totalPrice}</div>
                  <div className={styles.date}>{'~ ' + el.date}</div>
               </div>
               )
            }
         </div>
         <div className={styles.button} onClick={() => {
            setgoodbyewid(true);
            setTimeout(() => {
               localStorage.removeItem('address')
               localStorage.removeItem('number')
               router.push('/')
            }, 1000);
         }}> ⏪  Back </div>
         {
            goodbyewid ? <div className={styles.backcontainer}><div className={styles.contain}>Thanks 😇 for ordering! </div> </div> : null
         }
      </div >
   )
}
