import React from 'react'
import FileUploader from "./FileUploader"
function Form() {
  return(
    <FileUploader>
      {({setFileRef}) => (
        <form>
          <input name="file" type="text" ref={setFileRef}/>
        </form>
      )}
    </FileUploader>
  )
}

export default Form