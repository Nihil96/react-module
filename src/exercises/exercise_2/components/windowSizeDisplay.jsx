import useWindowSize from "../hooks/useWindowSize"

function WindowSizeDisplay() {
  const { width, height } = useWindowSize()
  let layoutMessage = ""

  let layoutStyle = {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "12px",
    textAlign: "center",
  }

  if (width < 600) {
    layoutMessage = "Mobile Layout"
    layoutStyle.backgroundColor = "lightblue"
  } else if (width >= 600 && width <= 1024) {
    layoutMessage = "Table Layout"
    layoutStyle.backgroundColor = "lightgreen"
  } else {
    layoutMessage = "Desktop Layout"
    layoutStyle.backgroundColor = "purple"
  }

  return (
    <div style={layoutStyle}>
      <h2>Window Size Display</h2>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
      <h3>{layoutMessage}</h3>
    </div>
  )
}

export default WindowSizeDisplay
