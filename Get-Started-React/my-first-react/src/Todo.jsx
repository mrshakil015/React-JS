// export default function Todo({task, isDone}){
//     return(
//         <li>Task: {task}</li>
//     )
// }

// Conditional rendering option:1
export default function Todo({task, isDone}){
    if(isDone === true){
        return <li>Finished: {task}</li>
    }
    else{
        return <li>Work On: {task}</li>
    }
}