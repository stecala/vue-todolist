const app = new Vue({
    el: '#app',
    data : {
        todos: [
        ],
        newToDo : '',
    },
    methods : {
        deleteElement (indexToDelete){
            if(this.todos[indexToDelete].done === false){
                alert('non risulta spuntata, sei sicuro di aver svolto questa attività')
            }
            else{
                this.todos.splice( indexToDelete, 1 );
            }
        },
        changeStatusOnClick(indexToChange){
            this.todos[indexToChange].done = !this.todos[indexToChange].done;
        },
        addingToDo(toDoToAdd){
            if(this.newToDo == ''){
                alert('Non hai aggiunto niente!!');
            }
            else{
            this.todos.push({text : toDoToAdd, done : false});
            }
            this.newToDo = '';
        },
        reset(){
            this.todos = [];
        }
    },

})