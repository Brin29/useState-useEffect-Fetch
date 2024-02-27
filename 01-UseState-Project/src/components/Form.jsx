import { useState } from "react"

const objeto = {
  firstName: "",
  lastName: "",
  url: ""
}

export const Form = () => {
const [form, setForm] = useState(objeto)  

  return (
    <>
      <h1>Formulario</h1>

      <form>
        <label>
          Nombre:
          <input type="text" value={form.firstName} onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value
            })
          }}/>
        </label>

        <label>
          Apellido:
          <input type="text" value={form.lastName} onChange={(e) => {
            setForm({
              ...form,
              lastName: e.target.value
            })
          }} />
        </label>

        <label>
          Url:
          <input type="text" value={form.url} onChange={(e) => {
            setForm({
              ...form,
              url: e.target.value
            })
          }}/>
        </label>

        <input type="submit"/>
      </form>

      <p>{form.firstName}</p>
      <p>{form.lastName}</p>
      <img src={form.url} alt={form.firstName} />
    </>
  )  
}