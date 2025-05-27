export function Tabs(props) {
    const { todos } = props
    const tabs = ['All', 'Open', 'Completed']
    return (
        <nav className="tab-container">

            {/* 

            I will be using the map function, which essentially iterates through 
            every element of the array and returns the modified element based on the 
            function I define.

            This is essentially saying to create a button for every single tab category 
            in the array. I use tabIndex to create a unique key for each button to differentiate
            the multiple buttons generated

            */}

            {tabs.map((tab, tabIndex) => {
                const numOfTasks = ((tab === 'All') ? (todos.length):
                ((tab === 'Open') ?
                    (todos.filter(val => !val.complete).length) : 
                    (todos.filter(val => val.complete).length)))

                return (
                    <button key={tabIndex}
                    className="tab-button"> 
                        <h4>{tab} <span>({numOfTasks})</span></h4>
                    </button>
                )
            })}

        </nav>
    )

}