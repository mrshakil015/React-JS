import { useEffect, useState } from "react"

export default function Test(){
    const [test, setTest] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setTest(data))
    },[])
    return (
        <div className="box">
            <h3>Test:{test.length}</h3>
        </div>
    )
}