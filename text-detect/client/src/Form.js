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
        }}>
          <input name="file" type="file" ref={setInputRef} />
          <button>Upload</button>
        </form>
      )}
    </FileUploader>
  )
}
     
        {/* <input id="pic-input" type="file" name="pic" accept="image/*"></input>
        <button onClick={props.photoClick} type="button"></button>
      </form> */}

export default Form