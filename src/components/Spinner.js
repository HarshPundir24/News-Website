import React from 'react'
import loading from './rainbow-spinner.gif'

const Spinner=()=>{
      return(
        <div className='text-center'>
            <img src={loading} alt='loading' height={40} width={50}/>
        </div>
      )
}

export default Spinner;