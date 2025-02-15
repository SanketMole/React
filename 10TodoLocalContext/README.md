
Steps used in this project:
1. Create a 'context' folder in which *TodoContext.js* 
2. In *TodoContext.js* import *{createContext, useContext}*.  
Export TodoContext(*const TodoContext = createContext({})*), useTodo(*const useTodo = () => {}*).   
```javascript
import {createContext, useContext} from 'react';

export const TodoContext = createContext({})

export const useTodo = () => {
    return useContext(TodoContext)
}
```
In last project, we defined 'useContext' in App.jsx but here we are exporting in context file itself.   
Remember: Whenever using *useContext* always give a context to it.  

3. Also export Provider in this file itself (*TodoContext.Provider*).   
4. In our project, the new todo list which it generates is basically *arrays* with a title, unique ID, 'completed' attribute.  
Fuctionalities: addTodo, editTodo, Toggle, delete, we can also read all todos(listing)(stored in local storage of browser).
5. In *TodoContext.js*;
```javascript
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo:  (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
})
```
As we created 'theme' in last project similarly we have created 'todos' here which have arrays.   
*todos have properties* and now below them will be functionalities.   
Use of functionalities will be decided in main.jsx.   
`Note`: Context API is not used for big projects there we use Redux, zustand.    
In functionalities: in add we just need new todo, update - we need id+todo, delete - id, toggle - id.   
6. Create *index.js* to get all exports of TodoContext.js and just export one index.js.   
'export {TodoContext, TodoProvider, useTodo} from "./TodoContext"'.
7. Get UI in App.jsx.   
store todos in *const [todos, setTodos] = useState([])*.   
Wrap everything in < TodoProvider value={{todos, addTodo, .....}}> </ TodoProvider>
8. Write functions one by one.   
Eg: 
```javascript
const addTodo = (todo) => {
    setTodos( (prev) => [{id: Date.now(), ...todo}, ...prev ] )
}
```
id:Date.now() is to get unique ids. 
Remember: If we write *setTodos(todo)* directly then all previous values get deleted, thus we have written a callback() func.   

`Local Storage` : Allows you to store data in key:value pair in browser in *String* format. (Necessary to convert JSON to String and vice versa). The localStorage object stores data with no expiration date. The data is not deleted when the browser is closed, and are available for future sessions.You can use the 'sessionStorage' Object which stores data for one session.    
Save data to local storage -> localStorage.setItem(key, value);    
Read data from local storage -> let lastname = localStorage.getItem(key);    
Remove data from local storage -> localStorage.removeItem(key);    
Remove all -> localStorage.clear();    

9. In *App.jsx*; 
```javascript
useEffect(() => {
    const todos =  JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
        setTodos(todos)
    }
}, [])
useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])
```

10. Create components, *TodoForm.jsx*, *TodoItem.jsx* and *index.js*.   
Add UI in TodoForm and TodoItem, index is used to export both at once. 

11. In *TodoForm.jsx*;
```javascript
const [todo, setTodo] = useState("")
const {addTodo} = useTodo()

const add = (e) => {
    e.preventDefault()
    if(!todo) return 
    addTodo({id: Date.now(), todo: todo, completed: false})
    setTodo("")
}
```
11. In *TodoItem.jsx* we will use rest of the functionalities, similar to TodoForm give them functions (editTodo, deleteTodo, toggleComplete). 

12. In App.jsx; inside < TodoProvider> in place of Todoitem add below code; 
```javascript
{todos.map((todo) => (
    <div key={todo.id}
    className='w-full'
    > 
    <TodoItem todo={todo} />
    </div>
))}

```
in place of TodoForm we simply add < TodoForm>. 

13. This merges all functions together and creates a Todo List.   


