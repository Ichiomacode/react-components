import React from 'react'
import Language from './Language'
const Languages = () => {
  return (
      <div className='languages'> 
          <p style={{color: "#bdc1c6", fontSize: "13px"}}>Google offered in:
              <span><Language title={ "Hausa"}/></span>
              <span><Language title={ "Igbo"}/></span>
              <span><Language title={ "Èdè Yorùbá"}/></span>
              <span><Language title={ "Nigerian Pidgin"}/></span>
          </p>
    </div>
  )
}

export default Languages