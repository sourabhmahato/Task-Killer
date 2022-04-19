import React, {useState} from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import {Todo} from "./modal"
const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
e.preventDefault();
if(todo){
  setTodos([...todos,{id: Date.now(), todo:todo, isDone: false }])
  setTodo("")
}
  }

  return (
    <div className="App">
      <span className="heading">
        TASK | KILLER
      </span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>
      {/* {todos.map((item)=>(

        <li>{item.todo}</li>
      ))} */}
    </div>
  );
}

export default App;
