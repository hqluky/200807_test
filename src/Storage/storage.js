export default{
    setStorage(value){
     localStorage.setItem('todolist',JSON.stringify(value));
    },
    getStorage(){
       return JSON.parse(localStorage.getItem('todolist'))  
    },
    removeStorage(){
        localStorage.remove('todolist')
    }
    
} 