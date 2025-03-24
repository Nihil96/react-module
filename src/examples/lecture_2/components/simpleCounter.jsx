import { Component } from "react"

class SimpleCounter extends Component {
    constructor() {
        super()

        this.state = {
            counter: 0,
        }
    }

    componentDidMount() {
        console.log("Component has mounted")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update!")
        console.log("Previous State", prevState)
        console.log("Current State", this.state)
    }

    componentWillUnmount() {
        console.log("Component is unmounted!")
    }

    handleIncrement = () => {
        this.setState({ counter: this.state.counter + 2 })
    }

    render() {
        console.log("render method") // 1
        return (
            <div>
                <h1>Simple Counter - Class Component</h1>
                <button onClick={this.handleIncrement}>Increment</button>
                <br />
                <br />
                <h2>{this.state.counter}</h2>
            </div>
        )
    }
}

export default SimpleCounter
