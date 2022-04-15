import React from 'react'
import "./styles.css"

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent)=> void;
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  return (
      <form className="input" onSubmit={handleAdd}>
          <input
          value={todo}
          onChange={
              (e)=> setTodo(e.target.value)
          }
          type="input" placeholder="Enter task to kill.." className='input-box'/>
          <button className='input-submit' type='submit'>GO</button>
      </form>
  )
}

export default InputField