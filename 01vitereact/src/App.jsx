import Ssm from "./ssm"

function App() {
  const username = "SSM"
  return (
    <>
    <Ssm/>
    <h2>Using an Evaluated Expression : {username}</h2>
    {/* <p>Wrapping inside Fregmented tags</p>
    <p>Bcz, In React we can return only one tag thus wrap inside one Fregmented tag</p> */}
    </>
    
  )
}

export default App
