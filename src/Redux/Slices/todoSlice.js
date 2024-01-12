import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        tasks: [],
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload)
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.name != action.payload)
        },
        updateCheck: (state,action) =>{
            const currenttask =state.tasks.find(task=>task.name == action.payload)
            currenttask.check == "true" ? currenttask.check = "false" : currenttask.check = "true"
        },
        emptyList:(state)=>{
            state.tasks=[]
        }
    }
})

export const { addTask, deleteTask,updateCheck,emptyList } = todoSlice.actions
export default todoSlice.reducer