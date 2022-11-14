import React, { useEffect, useRef, useState } from 'react'
import Item from './Item'

type Props = {}

const TodoList = (props: Props) => {
  const [input, setInput] = useState('')
  const [items, setItems] = useState<string[]>([])

  function handleClick() {
    if (input === '') {
      alert('Add a todo task!')
      return
    }
    let newItems = [...items, input]
    setItems(newItems)
    console.log(newItems)
    localStorage.setItem('items', JSON.stringify(newItems))
    setInput('')
  }

  function handleInputKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') handleClick()
  }

  useEffect(() => {
    if (localStorage.getItem('items'))
      setItems(JSON.parse(localStorage.getItem('items') || ''))
  }, [])
  return (
    <div className="container mx-auto px-4 flex flex-col items-center mt-8">
      <h1 className="text-slate-50 text-5xl">TODO LIST &#128221;</h1>
      <div className="flex justify-center mt-8 w-full max-w-xl">
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
          onKeyDown={handleInputKeyPress}
          className="bg-slate-800 py-2 pl-2 rounded-l w-full text-slate-50 focus:outline-none"
          type="text"
        />
        <button
          onClick={handleClick}
          type="submit"
          className="text-slate-50 bg-slate-700 py-2 rounded-r px-4"
        >
          Add
        </button>
      </div>
      <div className="text-slate-50 flex flex-col items-start mt-4 max-w-xl w-full">
        {items.map((item, i) => (
          <Item key={i} index={i} task={item} setItems={setItems} />
        ))}
      </div>
    </div>
  )
}

export default TodoList
