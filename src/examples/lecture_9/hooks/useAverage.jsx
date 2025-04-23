import { useEffect, useState } from "react"

export function useAverage(arrayOfNumbers) {
  const [average, setAverage] = useState(0)

  useEffect(() => {
    if (arrayOfNumbers.length > 0) {
      const sum = arrayOfNumbers.reduce((acc, curr) => acc + curr, 0)
      const average = sum / arrayOfNumbers.length
      setAverage(average)
    }
  }, [arrayOfNumbers])

  return average
}
