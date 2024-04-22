import React, { useState } from 'react'
import styles from './Signin.module.css'
export default function Signin() {
    const [data,setdata]=useState({
        name:"",
        pass:"",
        phone:"",
        email:""
    })
    const Changedata=(e)=>{
      
        setdata({...data,[e.target.name]:e.target.value})
    }
    function handlesubmit(e){
        e.preventDefault()
       

      
        let arr=[];
        for(let i in data){
            arr.push(data[i])

        }
        console.log(arr)
        alert("Welcome "+data.name)
    }
  return (
   
    <>
    <div className={styles.body}>
        <div className={styles.bod}>
        <h1>Sign Up Form</h1>
        <form className={styles.form}>
            <label id='name'>Name:</label>
            <input type="text" name='name'onChange={Changedata} value={data.name} /><br/>
        <label >Password:</label>
        <input type="text" name='pass' onChange={Changedata} value={data.pass}/><br/>
        <label id='phone'>Phone No:</label>
        <input type="number" name='phone' onChange={Changedata} value={data.phone}/><br/>
        <label id='email'>Email id:</label>
        <input type="email"name='email' onChange={Changedata} value={data.email}/><br/>
        <button type='submit' onClick={handlesubmit}>Submit</button>
        </form>
    </div>
    </div>
    </>
  )
}
