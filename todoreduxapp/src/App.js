import React from 'react'
import './App.css'
import AddTodo  from './components/AddTodo/AddTodo';
import List from './components/List/List';
function App() {
  return (
    <div className='App'>
     <div className='App-header'>
TODO APP

<AddTodo/><br/>
<List/>
     </div>
    </div>
  )
}

export default App
