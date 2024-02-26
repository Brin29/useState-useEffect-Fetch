import { useState } from "react"

export default function Text (){
  const [text, setText] = useState("Hello World")

  function handleChange (e){
    setText(e.target.value)
  }

  return (
    <>
      <input type="text"  value={text} onChange={handleChange}/>
      <p>{text}</p>
    </>
  )
}