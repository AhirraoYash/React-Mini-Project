import { createSlice,nanoid} from "@reduxjs/toolkit";
// nanoid use to create unique id 

const initialState={
    todos:[{id:1,text:"hello world"}]
}

//slice is greater version of reduceser
 
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text: action.payload 
            }
            state.todos.push(todo)
        },//action is use to take a value(data),current state (state)
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
    }
})

export const{addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer