import React from 'react';
import { BarLoader } from 'react-spinners';

const override = {
    display: 'block',
    margin: '0 auto 50px auto'
}

const Spinner = ({ color='blue', size='150'}) => {
  return (
    <div className="">
        <BarLoader 
            color={color}
            size={size}
            cssOverride={override}
            aria-label='Loading...'
        />
    </div>
  )
}

export default Spinner