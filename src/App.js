import './App.css';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Resturent from './components/Meals/Resturent/Resturent';

function App() {
  return (
    <div className='App'>
     <Header></Header>
     <Resturent></Resturent>
    </div>
  );
}

export default App;
