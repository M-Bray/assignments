import React from 'react'

function Input(props) {
  return (
    <form className="image-form">
      <input id="pic-input" type="file" name="pic" accept="image/*"></input>
      <button  onClick={props.photoClick} type="button"></button>
    </form>
  )
}

export default Input