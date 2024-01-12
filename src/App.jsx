import { useEffect, useState } from 'react'
import './App.css'
import TodoItem from './Components/TodoItem'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, emptyList } from './Redux/Slices/todoSlice'


function App() {
  const [todo, setTodo] = useState()
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.todoSlice.tasks)
  const [completedTask, setCompletedTask] = useState()
  useEffect(() => {
    const count = tasks.filter(task => task.check == 'true').length
    setCompletedTask(count)
  }, [tasks])
  const handleAddTodo = (e) => {
    e.preventDefault()
    const task = {}
    Object.assign(task, { name: `${todo}` })
    Object.assign(task, { check: 'false' })
    dispatch(addTask(task))
    setTodo('')
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className='w-50 border rounded shadow p-3'>
          <h1 className="text-center mb-5" style={{ height: '50px' }}>My Todo List</h1>
          <form className='d-flex flex-column align-items-center' onSubmit={handleAddTodo}>
            <input type="text" placeholder='Task Name' className='form-control w-50 mb-3 text-center' onChange={e => setTodo(e.target.value)} value={todo} />
            <div className="btn btn-primary" style={{ width: '100px' }}>Add</div>
          </form>
          <TodoItem />
          {tasks.length > 0 ?
           <div className='d-flex justify-content-between mt-3'>
            <p>Total Complete Items: {completedTask}</p>
            <button className="btn btn-danger" style={{ color: 'white' }} onClick={()=>dispatch(emptyList())}>Empty List</button>
            </div> 
           : 
           <div></div>}
        </div>
      </div>
    </>
  )
}

export default App
