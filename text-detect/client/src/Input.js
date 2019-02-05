import React from 'react'

function Input() {
  return (
    <form>
      <input id="pic-input" type="file" name="pic" accept="image/*"></input>
      <input type="submit"></input>
    </form>
  )
}

export default Input