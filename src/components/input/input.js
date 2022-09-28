import React from 'react';

const Input = ({onChange , value ,error , type , placeholder , name}) => {
    return ( 
        <div>
            <input 
         onChange={onChange}
         value={value}
         placeholder={placeholder}
         type={type}
         name={name}
         autoComplete= 'off'
         />
<span>{error}</span>
</div>
     );
};
 
export default Input;
