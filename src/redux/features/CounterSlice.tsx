import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState{
      count:number
}
const initialState:IInitialState = { count: 0 };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
      increment:(state)=>{
            state.count=state.count+1
      },
      incrementByValue:(state,action:PayloadAction<number>)=>{
            state.count=state.count+action.payload;
      },
      decrement:(state)=>{
            state.count=state.count-1
      },
      reset:(state)=>{
            state.count=0
      }
  },
});
export const  {decrement,increment,incrementByValue,reset}=counterSlice.actions;
export default counterSlice.reducer;