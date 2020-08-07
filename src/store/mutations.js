export default{
    addtodo(state,content){
        state.todolist.push({check:false,'content':content})
    },
    deletenum(state){
        state.todolist= state.todolist.filter(todo =>!todo.check)
    },
    deleteitem(state,index){
        state.todolist.splice(index,1)
    },
    setallvalue(state,val){
        for(var i=0;i<state.todolist.length;i++){
            if(val==true){
                state.todolist[i].check=true
            }else{
                state.todolist[i].check=false
            }
             
     }  
    },
    //接受从缓存中读取的数据并将其复制给todolist
    recevedata(state,todolist){
        if(todolist != null){
            state.todolist=todolist
        }
       
    }
}