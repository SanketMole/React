### Concepts
1. Custom Hooks
2. Creating components
3. useId


Note: Remember to use the Key in Loops of React.

---

#### `useId()` : useId is a React Hook for generating unique IDs that can be passed to accessibility attributes. 
```javascript
const id = useId()
```
Do not call useId to generate keys in a list. Keys should be generated from your data.  
In our code as we have many attributes, we should use `useId()` in that case. 


