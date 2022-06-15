import React, { useContext, useState } from 'react'
import styles from "../styles/order.module.css"
import { useRouter } from 'next/router'
import { MyContext } from "../container/context"

export default function Order() {
   const router = useRouter();
   const x = useContext(MyContext);

   function Order() {
      const name = document.getElementById('name').value;
      const address = document.getElementById('address').value;
      const number = document.getElementById('number').value;
      if (!name || !address || !number) return;
      localStorage.setItem('address', address);
      localStorage.setItem('number', number);
      const data_elem = {
         PhoneNumber: number,
         UserName: name,
         Address: address,
         ingredients: { bread: 1, ...x.ingred },
         totalPrice: x.totalPrice,
      }
      fetch('http://localhost:1337/api/orders', {
         method: 'POST',
         mode: 'cors',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ data: data_elem }),
      })
         .then(response => response.json())
         .then(data => {
            console.log('Success:', data);
            router.push('/details')
         })
         .catch((error) => {
            console.error('Error:', error);
            router.push('/')
         });

   }
   return (<div className={styles.container}>
      <div className={styles.detailh}>Details </div>
      <div className={styles.inputs}>
         <div className={styles.title}>Name: </div>
         <input id="name" className={styles.input} type='text'></input>
      </div>
      <div className={styles.inputs}>
         <div className={styles.title}>Address: </div>
         <input id="address" className={styles.input} type='address'></input>
      </div>
      <div className={styles.inputs}>
         <div className={styles.title}>Phone No: </div>
         <input id="number" className={styles.input} type='number'></input>
      </div>
      <div className={styles.buttons}>
         <div className={styles.order} onClick={() => Order()}>Order</div>
         <div className={styles.order} onClick={() => router.push('/')}>Cancel</div>
      </div>
   </div>

   )
}

