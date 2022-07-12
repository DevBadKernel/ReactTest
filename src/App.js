import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
    <header className="App-header">
    <ToDoList name='Antoñito'/>    
    </header>
    </div>
  );
}

export default App;
