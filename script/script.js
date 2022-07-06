const app = new Vue({
    el: '#app',
    data : {
        todos: [
            {
                text: 'Fare i compiti',
                done: false
            },
            {
                text: 'Fare la spesa',
                done: true
            },
            {
                text: 'Fare il bucato',
                done: false
            },
            {
                text: 'Fare jogging',
                done: true
            }
        ],

    },
    methods : {
        deleteElement (indexToDelete){
            this.todos.splice( indexToDelete, 1 );
        },
        changeStatusOnClick(indexToChange){
            this.todos[indexToChange].done = !this.todos[indexToChange].done;
        }
    },

})