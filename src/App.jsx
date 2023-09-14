
import './App.css'
import Counter from './counter'
import Friends from './friends'
import Team from './team'
import Users from './users'

function App() {

  function handleClick(){
    alert('button clicked')
  }
  const handleClick2 = () =>{
    alert('button 2 clicked')
  }
  const addFive = (num) =>{
    alert (num + 5);
  }

  return (
    <>
      <h2>React core concept 2</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click2</button>
      <button onClick={()=> {alert('hird clicked')}}>third</button>
      <button onClick={() => addFive(3)}>Four</button>
    </>
  )
}

export default App
