import { useState } from "react"

export default () => {
  const [count, setCount] = useState(0)

  return {
    count,
    add: () => setCount(count + 1),
    decrement: () => setCount(count - 1)
  }
}
