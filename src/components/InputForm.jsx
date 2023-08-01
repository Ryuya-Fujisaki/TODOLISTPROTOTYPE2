import React, { useState } from 'react';
import '../App.css';

const InputForm = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: '姉に誕生日プレゼントを買う' },
        { id: 2, title: '論文提出' },
        { id: 3, title: '市役所に住民票の写しをもらいに行く' }
    ])
    const [todoTitle, setTodoTitle] = useState('')
    const [todoId, setTodoId] = useState(todos.length + 1)

    const handleAddFormChanges = (e) => { setTodoTitle(e.target.value)}

    const handleAddTodo = () => {
        setTodos([...todos, {id: todoId, title: todoTitle}])
        setTodoId(todoId + 1)
        setTodoTitle('')
    }
  return (
    <div>
      <input 
        type="text"
        label="タイトル"
        value={todoTitle}
        onChange={handleAddFormChanges}
        className='input'
        placeholder="ここにTODOを入力し作成ボタンを押す"
      />
      <button onClick={handleAddTodo}>作成</button>
    </div>
  )
}

export default InputForm;