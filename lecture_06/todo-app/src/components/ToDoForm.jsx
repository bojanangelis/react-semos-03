import React, { useState } from 'react'
import { PlusCircleIcon } from '@heroicons/react/24/solid'

const ToDoForm = ({ handleAddTodo, edit }) => {
  const [inputText, setInputText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault() // prevents page from reloading
    handleAddTodo({ id: Math.random(Math.floor * 1000), title: inputText, completed: false })
    setInputText('') // reset na input filed
  }

  return (
    <form>
      {/* {edit ? (
        <>
          <h2>Edit this</h2>

          <div className='flex items-center border bg-white border-white p-2 rounded-md'>
            <input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className='outline-none'
              type='text'
            />
            <button
              className='bg-blue-400 hover:bg-sky-700 text-white 
            font-bold p-2 rounded transition-all 
            duration-300 transform hover:scale-105'
              type='submit'
              onClick={(e) => handleSubmit(e)}
            >
              <PlusCircleIcon className='h-6 w-6 text-white' />
            </button>
          </div>
        </>
      ) : ( */}
      <div className='flex mt-4 items-center border bg-white border-white p-2 rounded-md'>
        {/* controlled input -- interview question */}
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className='outline-none'
          type='text'
        />
        <button
          className='bg-blue-400 hover:bg-sky-700 text-white 
            font-bold p-2 rounded transition-all 
            duration-300 transform hover:scale-105'
          type='submit'
          onClick={(e) => handleSubmit(e)}
        >
          <PlusCircleIcon className='h-6 w-6 text-white' />
        </button>
      </div>
      {/* )} */}
    </form>
  )
}

export default ToDoForm
