import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const OnChangeInput = (event) => setTodo(event.target.value)
  const OnSubmitForm = (event)=> {
    event.preventDefault();
    if(todo === ""){
      return;
    } 
    setTodos((current)=> [todo, ...current])
    setTodo("");
  }
  console.log(todos);
  return (
    <div className="App">
      <h1>MY TO-DO LIST ({todos.length})</h1>
      <form onSubmit={OnSubmitForm}>
        <input type='text' value={todo} placeholder='Write your to do!' onChange={OnChangeInput}></input>
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default App;
