1. In Header.jsx Link is imported which is a replacement of 'a' tag. 
Because in 'a' tag, page gets refreshed, which is not the case in React so we use 'Link' in React instead of anchor tag. 
2. As we are using 'Link' which is from 'react-router-dom', we can't just simply add Header, footer and Home file directly inside App.jsx file. We have to use 
```javascript
<RouterProvider router={router}/>
```
in our main.jsx file inside createroot. 
3. How to create a router? --> 
```javascript
const router = createBrowserRouter([
    {
        path: '/',
    }
])
```

4. We want Header and Footer static on our website(i.e. it should remain even if page changes), 
we use 'Outlet' in new file 'layout.jsx', position of outlet is very important. In our case we 
use in between Header and Footer. 
```javascript
import {Outlet} from 'react-router-dom'
function layout(){
    return(
        <Header/>
        <Outlet/>
        <Footer/>
    )
}
```
In main.jsx: 
```javascript
import Layout from './Layout'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import User from './Component/User/User'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      
    </Route>
  )
)
```
You can Add all your Pages in one index.jsx and then just simply put just < index/> in main.jsx

5. Ever wondered how you can see only your insta accout when you login to you account?
That is because of the use of Routers.
In User.jsx
```javascript
import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
    return (
        <div className='bg-gray-600 text-white text-3xl p-4 flex justify-center items-center'>
            User: {userid}
        </div>
    )
}

export default User

```
when you type 'http://localhost:5173/user/100' you will see only user with userid: 100. 
##### `useParams()`: React JS useParams Hook helps to access the parameters of the current route to manage the dynamic routes in the URL. The react-router-dom package has useParams hooks that let you access and use the parameters of the current route as required.

6. In Route there one more concept called 'loader', loader is an optional method used for optimization. 
Loader is used when API calls are created (Eg: In our Github Route). 
As soon as you Hover on Github option of your Navbar, API fetching starts and data will get stored in cache. 
When you click then it will be visible. 
