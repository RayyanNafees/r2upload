import  {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function MyDropzone() {

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles)
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive, open} = useDropzone({onDrop, noClick: true})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
      <button type="button" onClick={open}>
        Open
      </button>
    </div>
  )
}

export default MyDropzone
