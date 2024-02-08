const Logger=(state)=>(next)=>(action)=>{
   console.log("current state",state)   
      
   console.log("action",action)   
   next(action)
   console.log("current state",state)   
}

export default Logger;