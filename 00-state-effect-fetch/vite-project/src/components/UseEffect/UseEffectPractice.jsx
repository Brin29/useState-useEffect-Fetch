import { useEffect } from "react"

export default function useEffectReact () {
  useEffect(() => {
    // codigo de configuracion
    return () => {
      // codigo de limpieza
    }
  }, [/*Lista de dependencias*/])


  return (
    <>
      <h2>Use Effect</h2>
    </>
  )
} 