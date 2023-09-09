import React from 'react'

function Alert(props) {
    const capitalFirst = (word) =>{
      const strs = word.toLowerCase();
      return strs.charAt(0).toUpperCase() + strs.slice(1);
    }

  return (
   props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <strong>{capitalFirst(props.alert.type)}</strong>: {props.alert.msg}
    </div>
  )
}

export default Alert