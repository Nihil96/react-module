import PropTypes from "prop-types"

function Greeting({ name, age }) {
    return (
        <div>
            <h4>Hello {name}</h4>
            <p>Age: {age}</p>
        </div>
    )
}

Greeting.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
}

export default Greeting
