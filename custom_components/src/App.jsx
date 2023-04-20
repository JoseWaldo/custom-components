import styleApp from './App.module.css';
import Button from './components/button/Button'
import ButtonTwo from './components/buttonborder/ButtonTwo'
import Input from './components/input/Input'

function App() {
  return (
    <main className={styleApp.appContainer}>
      <Button />
      <ButtonTwo />
      <Input className={styleApp.input}/>
    </main>
  )
}

export default App
