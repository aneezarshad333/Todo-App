import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, updateCheck } from '../Redux/Slices/todoSlice'

function TodoItem() {
    const { tasks } = useSelector(state => state.todoSlice)
    const dispatch = useDispatch()
    return (
        <> {tasks.length > 0 ?
            <div className='border mt-3'>
                {tasks &&
                    tasks.map((task, index) => (
                        task.check == 'true' ?
                            <div key={index} className='d-flex justify-content-between align-items-center p-2' style={{ backgroundColor: '#90EE90' }}>
                                <div className='align-items-center'>
                                    <input type="checkbox" onClick={() => dispatch(updateCheck(task.name))} />
                                    <span className='ms-2'>{task.name}</span>
                                </div>
                                <button className="btn btn-danger" onClick={() => dispatch(deleteTask(task.name))}>Delete</button>
                            </div>
                            :
                            <div key= {index}className='d-flex justify-content-between align-items-center p-2'>
                                <div className='align-items-center'>
                                    <input type="checkbox" onClick={() => dispatch(updateCheck(task.name))} />
                                    <span className='ms-2'>{task.name}</span>
                                </div>
                                <button className="btn btn-danger" onClick={() => dispatch(deleteTask(task.name))}>Delete</button>
                            </div>
                    ))
                }
            </div>
            :
            <div></div>}

        </>
    )
}

export default TodoItem
