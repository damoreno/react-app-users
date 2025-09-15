import { useState } from 'react'
import reactLogo from '../commons/assets/react.svg'
import viteLogo from '/vite.svg'

function App(props) {
  const [count, setCount] = useState(0)
  console.log({ props });
  console.log({ count });
  return (
    <>
      APP
    </>
  )
}

export default App
