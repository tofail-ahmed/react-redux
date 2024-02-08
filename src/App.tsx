
import { decrement, increment, incrementByValue, reset } from "./redux/features/CounterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";



function App() {
  const {count}=useAppSelector((state)=>state.counter)
  const dispatch=useAppDispatch();
// console.log(count)
// console.log(dispatch)
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" flex bg-slate-500/50 p-4 rounded-md">
        <button onClick={()=>dispatch(increment())} className="text-3xl text-white bg-green-500 p-2 rounded-md">Increment</button>
        <button onClick={()=>dispatch(incrementByValue(5))} className="text-3xl text-white bg-green-500 p-2 rounded-md">Increment By Value</button>
        <h1 className="text-3xl m-2">{count}</h1>
        <button onClick={()=>dispatch(decrement())} className="text-3xl text-white bg-red-500 p-2 rounded-md">Decrement</button>
        <button onClick={()=>dispatch(reset())} className="text-3xl text-white bg-blue-500 p-2 rounded-md">Reset</button>
      </div>
    </div>
  )
}

export default App
