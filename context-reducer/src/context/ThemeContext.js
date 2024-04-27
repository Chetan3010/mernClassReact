import { createContext, useReducer, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = (props) => {
    // const [theme, setTheme] = useState('light')

    // Managing state using reducer
    const reducerFunction = (state, action) => {
        switch (action.type) {
            case "CHANGE_THEME":
                return { ...state, theme:action.payload}
        
            default:
                return state
        }
    }

    const [ state, dispatch ] = useReducer(reducerFunction, {theme: 'light'})
    const updateTheme = (theme) => {
        dispatch({ type: 'CHANGE_THEME' , payload: theme})
    }

    return (
        <ThemeContext.Provider value={{ ...state , updateTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}