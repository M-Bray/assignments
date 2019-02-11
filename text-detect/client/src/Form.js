import React from 'react'
import FileUploader from './FileUploader'

function Form(props) {
  return (
    <FileUploader>
      {({ setInputRef, getFileInput }) => (
        <form className="image-form" >
          <input className="input-class" onChange={e => {
            const input = getFileInput()
            const file = input.files[0];
            props.sendFile(file)
          }} name="file" type="file" ref={setInputRef} />
        </form>
      )}
    </FileUploader>
  )
}

export default Form