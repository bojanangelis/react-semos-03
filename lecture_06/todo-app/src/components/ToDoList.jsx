import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import TodoTasks from './TodoTasks'

const ToDoList = () => {
  const [showForm, setShowForm] = useState(true)
  // root od komponentata fakticki parent sakam da gi zacuvam site todos
  const [todos, setTodos] = useState([
    {
      id: 1, // unique id
      title: 'Learn React', // naslov na todo. kupi mleko ...
      completed: false, // dali e zaavrshen taskot ili ne e
    },
    {
      id: 2,
      title: 'Learn Redux',
      completed: false,
    },
  ])

  const addTodo = (value) => {
    // validations needed
    // ako e prazna formata da ne go zacuvuvam.
    setTodos([value, ...todos])
  }

  const updateTodo = (todoId, newValue) => {
    // validations needed
    setTodos(todos.map((todo) => (todo.id === todoId ? newValue : todo)))
  }

  // za doma.
  const deleteTodo = () => {
    // setTodos(todos.map((todo) => (todo.id === todoId ? newValue : todo)))
  }

  return (
    <div>
      {showForm && <ToDoForm handleAddTodo={addTodo} />}
      <TodoTasks setShowForm={setShowForm} todos={todos} updateTodo={updateTodo} />
    </div>
  )
}

export default ToDoList
