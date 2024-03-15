import { useState } from "react"

const initialState = (key, initialValue) => {   
    try {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
    } catch (error) {
        console.log(error)
        return initialValue
    }
}
const useLocalStorage = (key, initialValue) => {    
    const [storedValue, setStoredValue] = useState(initialState(key, initialValue))
    const setValue = value => {
        try {
            const valueToStore = value
            setStoredValue(valueToStore)
            window.localStorage.setItem(key, JSON.stringify(valueToStore))
        } catch (error) {
            console.log(error)
        }
    }
    return [storedValue, setValue]
}
export default useLocalStorage