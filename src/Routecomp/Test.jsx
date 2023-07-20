import React from 'react'
import { useState } from 'react'

function Test() {
    const [count,seCount]=useState(0);
  return (
    <div>
      <h1>{count}</h1>
        <button onClick={()=>(seCount(count+1))}>+</button>
        <button onClick={()=>(seCount(count-1))}>-</button>


    </div>
  )
}

export default Test