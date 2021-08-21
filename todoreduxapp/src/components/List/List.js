import React from 'react'
import { deleteTodo } from '../../actions'
import { connect } from 'react-redux'
 const List = (props) => {
    return (
        <>
      <ul>
        {props.todos.map((todo,index)=>(
            <li key={index}> 
             {todo.message}
             <button onClick={()=>props.dispatch(deleteTodo(todo.id))} >Delete</button>
            </li>
        )  
        )}  
      </ul>
      </>
    )
}
const mapStateToProps = (state) =>({
    todos:state.todos.data,

})
export default connect(mapStateToProps)(List)
