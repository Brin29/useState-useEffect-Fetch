import { useState } from "react"

// Object to useState
const objeto = {
  firstName: "",
  lastName: "",
  url: ""
}

export const Form = () => {
  // for to form
  const [form, setForm] = useState(objeto)  
  // for to content
  const [content, setContent] = useState(objeto)  

function handleSubmit(e){
  e.preventDefault()
  // destruction
  const {name, value} = e.target

  // render content in submit
  setContent({
    // spreed cause generate a new form and no muta
    ...form,
    [name]: value
  })
}

function handleChange(e){
  const {name, value} = e.target

  setForm({
    // spreed cause generate a new form and no muta
    ...form,
    [name]: value
  })
}

  return (
    <>
      <h1>Formulario</h1>
    
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
          <input required id="name" name="firstName" type="text" value={form.firstName} onChange={handleChange}/>

        <label htmlFor="lastName">Apellido:</label>
          <input required id="lastName" name="lastName" type="text" value={form.lastName} onChange={handleChange}/>

        <label htmlFor="url">Url:</label>
          <input required id="url" type="text" name="url" value={form.url} onChange={handleChange}/>

        <button type="submit">Sign Up</button>
      </form>

      <p>{content.firstName}</p>
      <p>{content.lastName}</p>
      <img src={content.url} alt={content.firstName}/>
    </>
  )  
}