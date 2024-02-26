//Los componentes no se pueden llamar igual que una palabra reservada de React
import UseState from './components/UseStatePractice'
import UseStateObjectArrays from './components/UseStateObjectArrays'
import Form from './components/Formulario'
import UseEffect from './components/UseEffectPractice'
import Fetch from './components/FetchPractice'
import './App.css'

function App() {

  return (
    <>
      <UseState/>
      <UseStateObjectArrays/>
      <Form/>
      <UseEffect/>
      <Fetch/>
    </>
  )
}

export default App
