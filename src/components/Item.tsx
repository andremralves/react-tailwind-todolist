import React from 'react'

type Props = {
  index: number
  task: string
  setItems: React.Dispatch<React.SetStateAction<string[]>>
}

const Item = (props: Props) => {
  function handleClick() {
    let items = JSON.parse(localStorage.getItem('items') || '')
    items.splice(props.index, 1)
    localStorage.setItem('items', JSON.stringify(items))
    props.setItems(items)
  }

  return (
    <div className="flex justify-between items-center p-2 mt-4 rounded bg-slate-800">
      <p>{props.task}</p>
      <button className="bg-red-700 px-2 ml-4 rounded" onClick={handleClick}>
        Delete
      </button>
    </div>
  )
}

export default Item
