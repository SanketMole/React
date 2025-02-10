In this project we are making a simple Theme Switcher (light to dark or vice versa). 
We are using Context API as we did in previous project but in more simple way. 

1. Create a *Context* folder in which we need a *theme.js* file. It is similar to the UserContext.js file of previous project. 
```javascript
import {createContext, useContext} from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}
```
2. Unlike previous project here we will provide a default value for createContext(). We gave *themeMode: "light"* as a default value. 
3. Create a *darkTheme* function and also a *lightTheme* function. *LightTheme* is optional but we will introduce.
Whenever we call context, we will get these two methods. 
4. Provider which we used in App.jsx file in earlier project. In this project we will export from *theme.js* file itself so that we save our time to again import everything again and again. 
5. We will create a Custom Hook (*useTheme*), so that we can access all the themes which is defined in 'ThemeContext'. 
6. Create an *App.jsx* file;
```javascript
import { ThemeProvider } from './contexts/theme'

function App(){
    const [themeMode, useThemeMode] = useState("light")

    const lightTheme = () => {
        setThemeMode("light")
    }
    const darkTheme = () => {
        setThemeMode("dark")
    }

    useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark")
        document.querySelector('html').classList.add(themeMode)
    }, [themeMode])

    return(
        <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
        // All the HTML-CSS of App
        </ThemeProvider>
    )
}
```
7. As you can notice in theme.js we have created empty methods 'darkTheme' and 'lightTheme'. 
We can give them functionality in App.jsx file itself.
8. As we have created functions. But to use those functions we will use 'useEffect' Hook.
As we know theme of any website is stored in 'classList' of HTML tag. Thus we will render that 'HTML' tag. 
9. Create two components *Card.jsx* and *ThemeBtn.jsx*. 
```javascript
// ThemeBtn.jsx
import useTheme from '../context/theme';
export default function ThemeBtn() {
    const {themeMode, lightTheme, darkTheme} = useTheme()

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if(darkModeStatus){
            darkTheme()
        } else{
            lightTheme()
        }
    }
    return(
        <input
        type="checkbox"
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode==="dark"}
        />
    )
}
```
10. In tailwind to enable this themeSwitcher function of HTML we have to add in 'tailwind.config.js' 
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",  //Add this 
  theme: {
    extend: {},
  },
  plugins: [],
}
```
