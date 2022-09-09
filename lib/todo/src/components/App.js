import '../styles/App.css';
import {useEffect, useState} from 'react'
import Nav from './Nav'
import Todos from './Todos'

function App() {
  const [todos, setTodos] = useState([])

  function addTodos (data){
    const newTodo = {
      title: data,
      complete: false
    }
    setTodos([...todos,newTodo])
  }

  function markComplete (idx){
    const todoToComplete = todos[idx] // access the current todo based on argument
    

    if(todoToComplete){ // if original todo is found...
      todoToComplete.complete = !todoToComplete.complete // toggle boolean from false to true or vice versa
      const newState = [...todos] // create a copy of the current todos
      newState[idx] = todoToComplete // reassign the todo as position idx to the new value
      setTodos(newState) // update state
    }
  }

  return (
    <div className="App">
      <Nav onSubmit={addTodos}/>
      <Todos  todos={todos} markComplete = {markComplete}/>
    </div>
  );
}

export default App;
