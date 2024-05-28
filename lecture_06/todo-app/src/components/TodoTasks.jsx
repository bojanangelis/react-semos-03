import { CheckIcon, PencilIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import ToDoForm from './ToDoForm'

const TodoTasks = ({ todos, updateTodo, setShowForm }) => {
  const [editInput, setEditInput] = useState({
    id: null,
    text: '',
  })

  const submitUpdate = (value) => {
    console.log(value)
    updateTodo(editInput.id, value)
    setEditInput({ id: null, text: '' })
    setShowForm(true)
  }

  if (editInput.id !== null) return <ToDoForm edit={editInput} handleAddTodo={submitUpdate} />

  return todos.map((todo) => (
    <div className='mt-4 flex items-center border bg-white p-2 rounded-md' key={todo.id}>
      <input className='outline-none flex-1 bg-transparent' value={todo.title} />
      <div className='space-x-2'>
        <button className='bg-green-400 p-1 rounded-sm'>
          <CheckIcon className='h-6 w-6 text-white' />
        </button>
        <button
          onClick={() => {
            setEditInput({ id: todo.id, text: todo.title })
            setShowForm(false)
          }}
          className='bg-orange-400 p-1 rounded-sm'
        >
          <PencilIcon className='h-6 w-6 text-white p-1' />
        </button>
      </div>
    </div>
  ))
}

export default TodoTasks
