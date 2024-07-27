import './App.css'
import Thing from './components/Thing';
function App() {
const words:string[]=["wow","cry of fear","cry of hunger"];
  return (
    <><h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  <Thing heading='list?' items={words} onSelectItem={(idk)=>{console.log(idk)}}>

    </Thing>
  
  </>
  )
}

export default App
