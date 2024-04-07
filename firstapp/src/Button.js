import React from 'react'

function Button(props) {
    const call_updateCounter = () => {props.function_call(props.buttonValue)}
  return (
    <button style={{margin: "5px"}} onClick={call_updateCounter}>{props.buttonValue}</button>
  )
}

export default Button