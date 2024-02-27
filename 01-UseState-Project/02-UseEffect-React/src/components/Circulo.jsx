import {  useEffect, useState } from "react"
import "./Circulo.css"

export const Circle = () => {
  const [position, setPosition] = useState({x: 0, y:0})

  useEffect(() => {
    function handleMove (e){
      setPosition({x: e.clientX, y: e.clientY})
    }

    window.addEventListener("pointermove", handleMove)

    return () => {
      window.removeEventListener("pointermove", handleMove)
    }
  }, [])

  return (
      <div style={{
        "width": "30px", 
        "height": "30px", 
        "backgroundColor": "red",
        "borderRadius": "50%",
        "position": "absolute",
        "top": "-20px",
        "left": "-20px",
        "transform": `translate(${position.x}px, ${position.y}px)`,
      }}/>
  )
}