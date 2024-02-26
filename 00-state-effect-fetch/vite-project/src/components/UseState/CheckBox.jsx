import { useState } from "react"

export default function CheckBox (){
  const [liked, setLiked] = useState(true);

  function handleChange (e){
    setLiked(e.target.checked)
  }

  return (
    <>
      <label>
        <input type="checkbox" checked={liked} onChange={handleChange}/>
        {liked ? "Me gusta" :  "No me gusta"}
      </label>
    </>
  )
}