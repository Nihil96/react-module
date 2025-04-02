import { useEffect } from "react"

const EffectUnmount = ({ toggleBool }) => {
  useEffect(() => {
    console.log("first useEffect")
  }, [toggleBool])

  // similar as componentWillunmount method
  useEffect(() => {
    console.log("Component mounted!")

    // cleanup function
    return () => console.log("Component will unmount!")
  }, [])

  console.log("EffectUnmount component rendered!")

  return <h2>Example of useEffect with cleanup function</h2>
}

export default EffectUnmount
