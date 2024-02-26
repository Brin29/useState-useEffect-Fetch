import { useState } from 'react';

export default function Form() {
  const object = {
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "jhonalexander@gmail.com"
  }

  const [form, setForm] = useState(object)

  return (
    <>
      <label>
        Primer Nombre:
        <input 
          type="text" 
          placeholder={form.firstName}
          // Actualizacion 
          onChange={e => {
            setForm({
              // Con el esparcimiento se garantiza que sea remplazado 
              ...form,
              firstName: e.target.value
            })
          }}
        />
      </label>
      <br/>
      <label>
        Segundo Nombre:
        <input type="text" placeholder={form.lastName} onChange={e => {
          setForm({
            ...form,
            lastName: e.target.value
          })
        }}/>
      </label>
        <br/>
      <label>
        Correo:
        <input type="email" placeholder={form.email} onChange={e => {
          setForm({
            ...form,
            email: e.target.value
          })
        }}/>
      </label>
      <p>Primer Nombre:{form.firstName}</p>
      <p>Segundo Nombre:{form.lastName}</p>
      <p>Correo:{form.email}</p>
    </>
  )
}
