import "./App.css"
import SimpleCounter from "./examples/lecture_2/components/simpleCounter"
import { Component } from "react"
import UserCard from "./examples/lecture_2/components/userCard"
import Greeting from "./examples/lecture_2/components/greeting"
import FruitList from "./examples/lecture_2/components/fruitList"

class App extends Component {
    constructor() {
        super()

        this.state = {
            showCounter: true,
        }
    }

    toggleCounter = () => {
        this.setState((prevState) => ({
            showCounter: !prevState.showCounter,
        }))
    }

    render() {
        console.log(this.state, "App State")

        return (
            <div>
                {/* ======== Example 1: Lifecycle methods ======== */}
                {/* <button onClick={this.toggleCounter}>Toggle Counter</button>
                <br />
                <br />
                {this.state.showCounter ? <SimpleCounter /> : null} */}

                {/* ======== Example 2: Passing Props ======== */}
                {/* <UserCard
                    img="https://ntvb.tmsimg.com/assets/assets/487578_v9_bb.jpg?w=360&h=480"
                    name="John"
                    address="St. 303, num. 4"
                />
                <UserCard
                    img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/800px-Brad_Pitt_2019_by_Glenn_Francis.jpg"
                    name="Brad"
                    address="Brad's address"
                />
                <UserCard
                    img="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1155287765.jpg?crop=1xw:1.0xh;center,top&resize=640:*"
                    name="Jennifer"
                    address="Jennifer's address"
                /> */}

                {/* ======== Example 3: Prop Types ======== */}
                {/* <Greeting name="Joe" age={20} /> */}

                {/* Example 4: Iterating Over Lists */}
                <FruitList />
            </div>
        )
    }
}

export default App
