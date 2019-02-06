import React from 'react'
import FileUploader from './FileUploader'

function Form(props) {
  return (
    <FileUploader>
      {({ setInputRef, getFileInput }) => (
        <form className="image-form" onSubmit={e => {
          e.preventDefault()
          const input = getFileInput()
          const file = input.files[0]
          props.send(file)
          {/* send file to server from here */}
        }}>
          <input onChange={props.send} name="file" type="file" ref={setInputRef} />
        </form>
      )}
    </FileUploader>
  )
}
     
        {/* <input id="pic-input" type="file" name="pic" accept="image/*"></input>
        <button onClick={props.photoClick} type="button"></button>
      </form> */}

export default Form