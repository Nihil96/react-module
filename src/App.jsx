import { useState } from "react"
import "./App.css"
import EffectOnce from "./examples/lecture_4/components/effectOnce"
import EffectUnmount from "./examples/lecture_4/components/effectUnmount"
import EffectWithDeps from "./examples/lecture_4/components/effectWithDeps"
import SimpleEffect from "./examples/lecture_4/components/simpleEffect"
import InfiniteLoop from "./examples/lecture_4/components/infiniteLoop"
import Users from "./examples/lecture_4/components/users"
import TextInput from "./examples/lecture_4/components/textInput"

function App() {
  //   const [toggleBool, setToggleBool] = useState(true)

  return (
    <>
      {/* <SimpleEffect /> */}
      {/* <EffectOnce /> */}
      {/* <EffectWithDeps /> */}
      {/* <InfiniteLoop /> */}
      {/* {toggleBool ? <EffectUnmount toggleBool={toggleBool} /> : null}
      <button onClick={() => setToggleBool(!toggleBool)}>Toogle Bool</button> */}
      {/* <Users /> */}
      <TextInput />
    </>
  )
}

export default App
