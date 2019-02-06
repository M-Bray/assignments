import React from 'react'
import FileUploader from './FileUploader'

function Form(props) {
  return (
    <FileUploader>
      {({ setInputRef, getFileInput }) => (
        <form className="image-form" >
          <input onChange={e => {
            const input = getFileInput()
            const file = input.files[0];
            props.sendFile(file)
          }} name="file" type="file" ref={setInputRef} />
        </form>
      )}
    </FileUploader>
  )
}

{/* <input id="pic-input" type="file" name="pic" accept="image/*"></input>
        <button onClick={props.photoClick} type="button"></button>
      </form> */}

export default Form