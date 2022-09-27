import { type } from '@testing-library/user-event/dist/type';
import React from 'react';

const Input = ({onChange , value , error , placeholder , type , name}) => {
    return ( 
        <div>
<input 
onChange={onchage} 
value={value}
placeholder={placeholder}
type={type}
name={name}
   />
<span>{error}</span>
</div>
     );
};
 
export default Input;
