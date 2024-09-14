// export default function Todo({task, isDone}){
//     return(
//         <li>Task: {task}</li>
//     )
// }

// -----Conditional rendering option:1
// export default function Todo({task, isDone}){
//     if(isDone === true){
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return <li>Work On: {task}</li>
//     }
// }

// ------Conditional rendering option: 2
// export default function Todo({task, isDone}){
//     if(isDone === true){
//         return <li>Finished: {task}</li>
//     }
//     return <li>Work On: {task}</li>
    
// }

// ------Conditional rendering option: 3 -ternary operator
// export default function Todo({task, isDone}){
//     return (
//         <li> {isDone ? 'Finished': 'Work on'}: {task} </li>   
//     )
// }

// ------Conditional rendering option: 4 && (behive like true)
// export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone && ': Done'}</li>
//     )
// }
// ------Conditional rendering option: 5 || (behive like false)
export default function Todo({task, isDone}){
    return(
        <li>{task} {isDone || ': Do it'}</li>
    )
}
