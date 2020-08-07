import storage from '../Storage/storage';
export default{
    //添加数据
    addTodo({commit},content){
     commit('addtodo',content)
    },
    //删除选中数据
    deleteNum({commit}){
        commit('deletenum')
    },
    //删除某一项数据
    deleteItem({commit},index){
        commit('deleteitem',index)
    },
    //全选或者全不选
    setallvalue({commit},val){
        commit('setallvalue',val)
    },
    //读取缓存中的数据
    getStorge({commit}){
        let todolist=storage.getStorage()
        commit('recevedata',todolist)
    }
}