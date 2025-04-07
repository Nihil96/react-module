import { useEffect, useState } from "react"

function ArrowKeyDisplay() {
  const [pressedKey, setPressedKey] = useState(null)

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowUp":
          setPressedKey("up")
          break
        case "ArrowDown":
          setPressedKey("down")
          break
        case "ArrowLeft":
          setPressedKey("left")
          break
        case "ArrowRight":
          setPressedKey("right")
          break
        default:
          setPressedKey(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const getKeyDisplay = () => {
    switch (pressedKey) {
      case "up":
        return (
          <div
            style={{
              position: "absolute",
              top: "15px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            Arrow Up
          </div>
        )
      case "down":
        return (
          <div
            style={{
              position: "absolute",
              bottom: "15px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            Arrow Down
          </div>
        )
      case "left":
        return (
          <div
            style={{
              position: "absolute",
              left: "15px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            Arrow Left
          </div>
        )
      case "right":
        return (
          <div
            style={{
              position: "absolute",
              right: "15px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            Arrow Right
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        postion: "relative",
      }}
    >
      {getKeyDisplay()}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Try pressing the arrow key
      </div>
    </div>
  )
}

export default ArrowKeyDisplay
