import { useState } from "react"

const useInputState = (defaultValue=null) =>{
    // ---first declare useState()
    const [value, setValue] = useState(defaultValue);

    // --- on change method to manage state
    const handleChange = e =>{
        setValue(e.target.value);
    }

    // --- return the value and handle
    return [value, handleChange];

}

export default useInputState;