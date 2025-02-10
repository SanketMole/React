In case we have a Card and have to pass a value in *< Card/>* from *< App/>*. 
We will simply pass *< App username='SSM'>* which will be accepted through props in Cards. 

Another Scenario,
If we are creating a Admin Dashboard, and you are supposed to pass value to card which is inside many components. 
Let's say Dashboard is divided in Left-Right components, in Right component there are Top-Bottom, in Top there is card. 
So in this case we will pass value from Dashboard (*< Dashboard title='SSM'>*) to Right component(*< Right title="SSM">*) and then similarly Top of right where card is present (*< Card titile='SSM'>*). 
Thus, here we have to make so many passes which can be unoptimized. 
But this technique was used in initial days of React. 

So If we have a global object, 
```javascript
{
    title: "SSM";
}
```
We can pass this object to any component and access it.
We can associate Card with global object. 
No need to pass values to Dashboard-Right-Top-Card, we make that optimization. 
Even if we have to take data from Database, still *App* will pass component to global object and not pass prop which it did earlier. 
This is called Prop Drilling but it's hard to understand it. 

For this case, 
We have *Context API*, but it is not the only library who does this. 
*Context API* is only for React. 
There are many other libraries like *Redux* which can be used for this purpose.
*Redux* does the State Management in organised way. 
For React there is *react-redux* and *Redux-Tool-Kit(RTK)*. 


[`Context API`](https://react.dev/reference/react/useContext) : 


Our obvious Approach is; 
We will make a Global Variable and all data will be passed to that variable. 
But in react state doesn't update so easily, and thus we will stuck in that same problem of State mismatch or not synchronized. Any variable will update the global variable and we will encounter error. 

Best Approach;
Steps: 
1. Create a *UserContext.js* file (we can create loginContext, productContext as well).
2. Create a *React.createcontext()* method. 
3. Every context is a provider becz it's main fuctionality is to provide variable. 
When we wrap any component inside *< UserContext>* we make it a provider. That is, now all components inside the provider will get access to the global variable. 
Create a *UserContextProvider.jsx* file. 
Create a simple method *const UserContextProvider = () => {}*. 

```javascript
import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children} => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
})

export default UserContextProvider
```
4. use *children* to keep all props as it is. Children is a generic name to pass all values as it is. 
5. Wrap the {children} inside Provider.
6. Create a state to access the data (user, setUser).
7. To provide the prop we use *value*. We have created object in value. 
8. We can get access of Context direct in main.jsx or App.jsx. 
In *App.jsx*;
Import *userContextProvider* and inside UserContextProvider wrapper we can insert components.
9. Create components by first creating a seperate file for the same. 
10. Create *Login.jsx* and *Profile.jsx* files. Import *{useState, useContext}* hooks. 
11. Create a basic Login page;
```javascript
import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {serUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

    return(
        <div>
            <h2>Login</h2>
            <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder= 'username'
            >
            {" "}
            <input type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
            >
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
```
12. Create a *setUser* context using useContext hook and UerContext file. 
13. In *handleSubmit* create a method, *e.preventDefault()* is use to avoid losing URL which is a Default behaviour. This is how to send data in DB. 
14. To get Data from DB we create a *Profile.jsx* file.
```javascript
function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <div>please login</div>
    return <div>Welcome {user.username}</div>
}
```
15. Unlike in login here we use *const {user} = useContext(UserContext)* becz we just want *user* data and not setUser method. Also we have used *Conditional return()*. 
16. Wrap these two components in App.jsx.
```javascript   
// App.jsx
<UserContextProvider>
    <h1>India</h1>
    <Login/>
    <Profile/>
</UserContextProvider>
```
Note: Don't forget to import Login and Profile in App.jsx.

