import { useReducer, useState } from "react"

const types = {
  add: 'add',
  update: 'update',
  delete: 'delete',
}

const initialTodos = [
  {
    id: 1, title: 'Todo #1'
  },
  {
    id: 2, title: 'Todo #2'
  },
  {
    id: 3, title: 'Todo #3'
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case types.delete:
      return state.filter(todo => todo.id !== action.payload);
    case types.add:
      return [...state, action.payload]
    case types.update: {
      const todoEdit = action.payload;
      return state.map(todo => todo.id === todoEdit.id ? todoEdit : todo)
    } 
    default:
      return state;
  }
}

const TodoApp = () => {

  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), title: text}
    dispatch({ type: types.add, payload: newTodo });
  }
  
  return (
    <div>
      <h2>TodoApp</h2>
      <form action="" onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder='todo'
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </form>
      <ul>
        {
          todos.map( todo => (
            <li key={todo.id}>
              {todo.title}
              <button onClick={() => dispatch({ 
                type: types.delete,
                payload: todo.id, 
                })}>
                Delete
              </button>
              <button onClick={() => dispatch({ 
                type: types.update,
                payload: {...todo, title: text}, 
                })}>
                Update
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default TodoApp
