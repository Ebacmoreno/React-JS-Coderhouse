import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'

function App() {
 
 const greeting = "Bienvenido a nuestra tienda";
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={greeting}/>
      <ItemCount/>
    </div>
  )
}

export default App
