import './App.css'
import { Header } from './components/header'
import { ListPerson } from './components/list'
import { PEOPLE } from './constants/people'

function App() {

  return (
    <>
        <Header/>
        <ListPerson people={PEOPLE} />
    </>
  )
}

export default App
