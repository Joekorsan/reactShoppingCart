import React from 'react'

const cartItems = (props) =>{
  return (
    <div class="container">
      <h1>Current Item: {props.item}</h1>
      <p>{props.children}</p>
    </div>
  );
}

export default cartItems
