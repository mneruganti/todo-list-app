 export function Header(props) {

    const { todos } = props
    const todosLength = todos.length
    const isTasksPlural = todosLength != 1
    const taskOrTaks = isTasksPlural ? 'tasks' : 'task'

    return (
       <header>
        <h1 className="text-gradient"> You have {todosLength} open {taskOrTaks}. </h1>
       </header>
    )
 }