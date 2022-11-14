import React, { useEffect, useRef, useState } from 'react'
import Item from './Item'

type Props = {}

const TodoList = (props: Props) => {
  const [items, setItems] = useState<string[]>([])
  const inputEl = useRef<HTMLInputElement>(null)

  function handleClick() {
    let newItems = [...items, inputEl.current?.value || '']
    setItems(newItems)
    console.log(newItems)
    localStorage.setItem('items', JSON.stringify(newItems))
  }

  useEffect(() => {
    if (localStorage.getItem('items'))
      setItems(JSON.parse(localStorage.getItem('items') || ''))
  }, [])
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-slate-50 text-4xl">TODO LIST</h1>
      <div className="flex justify-center mt-8">
        <input
          ref={inputEl}
          className="bg-slate-800 py-2 pl-2 rounded-l w-full max-w-xl text-slate-50 focus:outline-none"
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
      <div className="text-slate-50 flex flex-col items-center mt-8">
        {items.map((item, i) => (
          <Item key={i} index={i} task={item} setItems={setItems} />
        ))}
      </div>
    </div>
  )
}

export default TodoList
