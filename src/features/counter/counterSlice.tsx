import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  checked: boolean,
  name: string,
}

const initialState: CounterState[] = []

export const counterSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    addTask: (state, body) => {
      return [...state, body.payload]
    },
    removeTask: (state, body) => {
      return state.filter(task => body.payload !== task.name)
    },
    finishTask: (state, body) => {
      return state.map(task => {
        if (task.name == body.payload) {
          return { ...task, checked: !task.checked }
        } else
          return task
      })
    }
  },
})

export const { addTask, removeTask, finishTask } = counterSlice.actions

export default counterSlice.reducer