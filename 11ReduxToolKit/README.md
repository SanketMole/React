<!-- //Notes -->
**Redux** is an independent state management library. 
Bridge to implement Redux in React is **react-redux**. 
**redux-toolkit** is a better version of Redux, making more optimized for user. 




`React-Redux`: 
**Connecting Redux with React** : 
React-Redux is the official binding library that connects React with Redux. It provides hooks like useSelector, useDispatch, and Provider that allow React components to interact with the Redux store.

**Key Features of React-Redux:**

- useSelector: Allows React components to read specific slices of the Redux state.
- useDispatch: Provides a way for components to dispatch actions to update the Redux state.
- Provider: Connects the React component tree to the Redux store, ensuring that all components can access the store.
- React-Redux focuses on providing a seamless way to integrate React and Redux together, handling optimizations like preventing unnecessary re-renders of components when state changes.



1. *Create Store* - single source of truth.
It has configureStore.
Introduce reducer.

2. Create Slice(functions).  
method(createSlice).   
Slice has name, initialState, reducers :{key: function}.  
Access of two things (State, action)
state = state value in the store
action = action.payload.  
export individual functionality.   
export main source export.  

3. *Add Todo* - Give values to State i.e Dispatch Courier  = use method useDispatch().  
 dispatch(addTodo()). 

4. *Take Values* - useSelector((state) =>state.todos).   Take state access once, after that it's JS concept. 


In *todoslice.js*:  
The action parameter represents the action object that is dispatched to trigger the reducer. Actions are plain JavaScript objects that typically have a type field to indicate the action type and may include other data relevant to the action.   
You use the `action.type` to determine what kind of action is being performed, and you can also access the *payload* or other properties of the action object to make decisions on how to update the state.