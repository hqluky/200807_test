
export default{
    //todolist的length
    todolistnum(state){
      return state.todolist.length;
    },
    //已完成个数的统计
    completenum(state){
        return state.todolist.reduce((prev,item)=>prev+(item.check ? 1 : 0),0)  
    },
    //全部选中
    getcheck(state,getters){
        return getters.completenum==getters.todolistnum && getters.todolistnum>0
    }
}