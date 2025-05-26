export function Tabs() {
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
                return (
                    <button key={tabIndex}
                    className="tab-button"> 
                        <h4>{tab} <span>(0)</span></h4>
                    </button>
                )
            })}

        </nav>
    )

}