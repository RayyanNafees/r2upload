import axios from "axios";
import type React from "react";

type SetState<T> = React.Dispatch<React.SetStateAction<T>>

export const uploadFile = async(file: File, setProgress: SetState<number>) => {
  const {data: url} = await axios.get(`https://aws4fetch.deno.dev?filename=${file.name}`)
  await fetch(url, {method: 'PUT', body: file}).then(r=>{
    r.bytes().then(b => setProgress(b.byteLength))
  })

 

  // await axios.put(url, file, {
  //   onUploadProgress: (e) =>{
  //     console.log(e)
  //     setProgress(e.progress as number)
  //   }
  // })
}