import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen flex flex-col justify-between">
        <TodoList />
        <footer className="text-slate-50 pt-8 pb-4 flex justify-center items-center">
          <p>
            by André Alves |{' '}
            <a
              className="hover:text-blue-300"
              href="https://github.com/andremralves/react-tailwind-todolist"
            >
              Source code
            </a>{' '}
          </p>
        </footer>
      </div>
    </>
  )
}

export default App
