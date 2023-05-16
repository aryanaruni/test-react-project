import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import Card from './Card'
const data = [
  {
    id: 1,
    title: 'John1',
  },
  {
    id: 2,
    title: 'John2',
  },
  {
    id: 3,
    title: 'John3',
  },
  {
    id: 4,
    title: 'John4',
  },
  {
    id: 5,
    title: 'John4',
  },
  {
    id: 6,
    title: 'John4',
  }
]


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='row'>
        {
          data.map(datum=>{
            return (
              <Card datum = {datum}/>
            )
          })
        }
        
      </div>
    </div>
  );
}

export default App;
