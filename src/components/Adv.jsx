import React from 'react'
import './Adv.css'
import { Link } from 'react-router-dom'

const Adv = () => {

  // onClick={()=>{
  //   <Link to={"https://leetcode.com/problemset/all/"}/>
    
  // }}

  return (
    <div>
      <div className="container">
    <div className="box box1"
    >JEE MAINS PYQ
    <button >
      <Link to={"https://leetcode.com/problemset/all/"}/>
      Click here 
      </button></div>
    <div className="box box2">JEE ADVANCE PYQ</div>
  </div>
    </div>
  )
}

export default Adv
