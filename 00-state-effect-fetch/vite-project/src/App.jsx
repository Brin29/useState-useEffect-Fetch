//Los componentes no se pueden llamar igual que una palabra reservada de React
import UseState from './components/UseState/UseStatePractice'
import UseStateObjectArrays from './components/UseState/UseStateObjectArrays'
import UseEffectReact from './components/UseEffect/UseEffectPractice'
import Fetch from './components/FetchPractice'
import './App.css'

function App() {

  return (
    <>
      <UseState/>
      <hr/>
      <UseStateObjectArrays/>
      <hr/>
      <UseEffectReact/>
      <hr/>
      <Fetch/>
    </>
  )
}

export default App
