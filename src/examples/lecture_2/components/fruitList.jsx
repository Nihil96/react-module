import React from "react"

function FruitList() {
    const fruits = ["Orange", "Lemon", "Mango", "Pear", "Dragon fruit"]

    // One way of doing the same thing
    // let showListOfFruits = fruits.map((fruit, index) => {
    //     return (
    //         <div key={index}>
    //             <span>{fruit}</span>
    //             <br />
    //         </div>
    //     )
    // })

    return (
        <>
            {/* This is the same as React.Fragment */}
            <h3>List of fruits:</h3>
            {fruits.map((fruit, index) => {
                return (
                    <React.Fragment key={index}>
                        <span>{fruit}</span>
                        <br />
                    </React.Fragment>
                )
            })}
            {/* {showListOfFruits} */}
        </>
    )
}

export default FruitList
