import React from 'react'

function Ternery() {
    let no=1;
  return (
    <div>
      {no > 0 ?(<h1>Positive</h1>
      ): no < 0 ?(<h1>Negative</h1>
      ):(<h1>Zero</h1>)

      }
    </div>
  )
}

export default Ternery