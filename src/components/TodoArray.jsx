import React, { useState } from 'react';

const TodoArray = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: '姉に誕生日プレゼントを買う' },
        { id: 2, title: '論文提出' },
        { id: 3, title: '市役所に住民票の写しをもらいに行く' }
    ])

  return (
    <div className="array">
      <ul>
        {todos.map((todo) => (
            <li key={todo.id}>
                <span>{todo.title}</span>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoArray;
