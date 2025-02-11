import { useState, useEffect } from 'react'
import { TodoProvider } from './context'
import './App.css'
import { TodoForm } from './components'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo} , ...prev] )
  }

  const updatedTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    //Map can be simplified as
    // prev.map((eachVal) => {
    //   if (eachVal.id === id){
    //     todo
    //   }else{
    //     prevTodo
    //   }
    // })
  }

  const deleteTodo = (id) => {
    //Map is not a good technique when we are deleting, instead we use '.filter'
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id ===id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0 ){
      setTodos(todos)
    }
  }, [])

  // useEffect(() => {
  //   try {
  //     const storedTodos = localStorage.getItem("todos");
  //     if (storedTodos) {
  //       const parsedTodos = JSON.parse(storedTodos);
  //       if (Array.isArray(parsedTodos)) {
  //         setTodos(parsedTodos);
  //       } else {
  //         console.error("Invalid data format in localStorage");
  //         localStorage.removeItem("todos"); // Clear invalid data
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Error parsing todos from localStorage:", error);
  //     localStorage.removeItem("todos"); // Remove corrupted data
  //   }
  // }, []);
  

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])



  return (
    <TodoProvider value={{todos, addTodo, updatedTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          > 
                            <TodoForm todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
