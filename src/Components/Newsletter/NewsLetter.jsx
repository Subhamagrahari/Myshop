import React from 'react'
import './NewsLetter.css'
const NewsLetter=()=>{
    return(
        <div className='newsletter'>
            <h1>Get Exclusive Offer On Your Email</h1>
            <p>Subscribe To Our Newsletter and stay updated</p>
            <div><input type="text" placeholder='Your Email id'/>
            <button>Subscribe</button></div>
        </div>
    )
}
export default NewsLetter