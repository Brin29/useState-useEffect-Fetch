// Es un hook de React permite aregar variables de estado a los componentes
import { useState } from "react"

// const [state, setState] = useState(initialState)

export default function UseState(){
  // No se puede llamar dentro de condiciones o bucles
  // En el modo estricto React llamara la funcion dos veces
  const [age, setAge] = useState(0)
  
  function handleClick (){
    // No actualizar el estado dos veces (sigue aumentando en uno)
    setAge(age + 1)

    // Pasar una funcion para que si lo actualize
    // age es el estado pendiente o prevAge
    setAge(prevAge => prevAge + 1) // recibira 1 y devolvera 2
    setAge(prevAge => prevAge + 1) // recibira 2 y devolvera 3
    setAge(prevAge => prevAge + 1) // recibira 3 y devolvera 4
  }

  return (
    <>
      <h1>Use State</h1>
      <h2>Use State basico</h2>
      <p><span>Edad: </span>{age}</p>
      <button onClick={() => {
        handleClick();
        handleClick();
        handleClick();
      }}>
        Aumentar muchas veces
      </button>
    </>
  )
}